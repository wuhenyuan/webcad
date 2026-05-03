#pragma once
#include <vector>
#include <cstdint>
#include <emscripten/val.h>

// ============================================================
// OCCT-backed geometry — Phase 3
// ============================================================
// Each function:
//   1. Creates a TopoDS_Shape via BRepPrimAPI_Make*
//   2. Tessellates via BRepMesh_IncrementalMesh
//   3. Extracts Poly_Triangulation nodes + triangles
//   4. Computes per-vertex normals
//   5. Returns flat arrays ready for Three.js BufferGeometry

struct OccMesh {
    std::vector<float> positions;  // [x0,y0,z0, x1,y1,z1, ...]
    std::vector<float> normals;    // [nx0,ny0,nz0, ...] — per-vertex, smoothed
    std::vector<unsigned int> indices; // triangle indices, 0-based
};

// deflection = max chord height for mesh (smaller = finer, typical 0.05-0.5)
OccMesh occMakeBox(double dx, double dy, double dz, double deflection = 0.1);
OccMesh occMakeSphere(double radius, double deflection = 0.1);
OccMesh occMakeCylinder(double radius, double height, double deflection = 0.1);

// ============================================================
// Topology exploration — Phase 4
// ============================================================
//
// CAD concepts used here:
//
//   Face (TopoDS_Face)
//     A bounded piece of a geometric surface.
//     Analogy: a rectangular sticker cut from an infinite roll of wrapping paper.
//     The paper is the "Surface", the sticker is the "Face".
//
//   Surface (Geom_Surface)
//     The underlying infinite mathematical shape.
//     An infinite cylinder, an infinite plane, a full sphere — all defined by
//     parametric equations. A Surface has no edges.
//
//   Trimmed Surface
//     Face = Surface + UV trimming bounds (uMin,uMax, vMin,vMax).
//     The surface says "what shape"; the UV bounds say "which piece".
//     This is why CAD is precise: you don't approximate edges, you trim.
//
//   UV domain
//     Every surface is parametrized by two numbers (u, v).
//       Cylinder: u = angle around axis [0, 2*PI], v = height along axis
//       Sphere:   u = longitude [0, 2*PI], v = latitude [-PI/2, PI/2]
//       Plane:    u,v = Cartesian coordinates on the plane
//     Geom_Surface::D1(u, v) → (3D point, dP/du, dP/dv)

struct OccFaceInfo {
    int surfaceType;  // GeomAbs_SurfaceType: 0=Plane, 1=Cylinder, 2=Cone, 3=Sphere, ...
    double uMin, uMax, vMin, vMax;
};

struct OccUVPoint {
    double x, y, z;    // 3D point at (u,v)
    double nx, ny, nz; // surface normal at (u,v) — cross(dP/du, dP/dv)
};

// Shape handle: stores TopoDS_Shape in a global registry, returns int key
int  occCreateBoxShape(double dx, double dy, double dz);
int  occCreateCylinderShape(double radius, double height);
int  occCreateSphereShape(double radius);
int  occCreateConeShape(double r1, double r2, double height);
void occReleaseShapeHandle(int handle);

// Face traversal
int          occShapeFaceCount(int handle);
OccFaceInfo  occGetFaceInfo(int handle, int faceIndex);

// Surface evaluation at UV coordinate
OccUVPoint   occEvalFaceUV(int handle, int faceIndex, double u, double v);

// Tessellate a single face (for per-face highlighting)
OccMesh      occTessellateFaceMesh(int handle, int faceIndex, double deflection);

// ============================================================
// Wire topology — Phase 5
// ============================================================
//
// A TopoDS_Wire is a connected sequence of TopoDS_Edge objects.
// Wires are the building blocks for trimmed surfaces:
//   Surface + outer Wire = Trimmed Face
//   Surface + outer Wire + inner Wires (holes) = Trimmed Face with holes
//
// Pipeline:
//   1. Sample glyph outline → 3D polyline on surface
//   2. Create TopoDS_Edge for each polyline segment
//   3. Connect edges into TopoDS_Wire (shared vertices)
//   4. Verify closure (first vertex ≈ last vertex)

struct OccWireInfo {
    int edgeCount;
    bool isClosed;
    double totalLength;
};

// Create a wire from 3D polyline points that lie on a surface.
// pts3D: JS Float64Array — flat [x0,y0,z0, x1,y1,z1, ...] (n*3 doubles)
// closeWire: if true, add closing edge from last point back to first
// Returns wire handle (int), or -1 on failure.
int  occMakeWireFromPoints(emscripten::val pts3D, bool closeWire);

// Inspect wire
OccWireInfo occGetWireInfo(int wireHandle);

// Sample wire edges at uniform intervals → flat [x,y,z,...] for Three.js
emscripten::val occSampleWire3D(int wireHandle, int samplesPerEdge);

// Cleanup
void occReleaseWireHandle(int wireHandle);

// ============================================================
// Face + Solid construction — Phase 6
// ============================================================
//
// Wire → Face → Solid pipeline:
//   1. Glyph outline → 3D polyline on plane
//   2. TopoDS_Wire (outer + inner holes)
//   3. TopoDS_Face (planar surface trimmed by wires)
//   4. BRepPrimAPI_MakePrism → extrusion solid
//   5. Tessellate → Three.js mesh
//
// This phase works on plane surfaces only.

struct OccTopologyInfo {
    int numSolids;
    int numShells;
    int numFaces;
    int numWires;
    int numEdges;
    int numVertices;
};

// Create a planar face on XY plane from outer wire + optional hole wires.
// innerWireHandles: JS array of int (can be empty array for no holes)
int  occMakeFace(int outerWireHandle, emscripten::val innerWireHandles);

// Extrude a face/shape along a direction vector → solid.
// shapeHandle: handle into g_shapeRegistry (must be a face or shell)
// Returns new shape handle for the resulting solid.
int  occMakePrism(int shapeHandle, double dx, double dy, double dz);

// Tessellate any shape in the registry (face, solid, etc.)
OccMesh occTessellateShape(int shapeHandle, double deflection);

// Debug: count sub-shapes of each type
OccTopologyInfo occGetTopologyInfo(int shapeHandle);

// ============================================================
// Surface-aware emboss — Phase 7
// ============================================================
//
// Builds a closed solid by offsetting a wire on a cylinder surface
// along surface normals. Uses boundary sampling + triangle side faces
// + sewing — no external offset library needed.
//
// Pipeline:
//   1. Sample bottom wire edges → 3D points on cylinder at radius
//   2. Offset each point along cylinder normal → top points (radius + offset)
//   3. Create top wire from offset points
//   4. Create bottom face: BRepBuilderAPI_MakeFace(gp_Cylinder(R), bottomWire)
//   5. Create top face:   BRepBuilderAPI_MakeFace(gp_Cylinder(R+offset), topWire)
//   6. Create side triangle faces (bottom[i]→bottom[i+1]→top[i] + ...)
//   7. BRepBuilderAPI_Sewing → shell
//   8. BRepBuilderAPI_MakeSolid → closed solid

// Build emboss solid from a glyph wire on a cylinder.
// wireHandle: glyph boundary wire (must lie on cylinder surface at radius)
// radius: cylinder radius
// offset: emboss depth along surface normal (positive = outward)
// samplesPerEdge: number of sample points per wire edge (>= 2)
int  occBuildEmboss(int wireHandle, double radius, double offset, int samplesPerEdge);

// Retrieve last-created emboss faces for separate rendering
int  occGetLastBottomFace();
int  occGetLastTopFace();

// ============================================================
// Face splitting via BRepFeat_SplitShape — Phase 8
// ============================================================
//
// Build a TopoDS_Wire from analytic UV curve segments on a face's surface.
// Each segment is a Geom2d_BezierCurve (degree 1/2/3 for line/quad/cubic).
// Edges are built via BRepBuilderAPI_MakeEdge(curve2d, surface) — the 3D
// geometry is computed by composing the 2D curve with the surface
// parameterization, so edges truly lie on the surface.
// uvData: Float64Array — [numSegments, type0, npts0, u0,v0, u1,v1, ..., type1, ...]
//   type=1 line(2pts)  type=2 quad(3pts)  type=3 cubic(4pts)
// shapeHandle: shape whose face surface to use
// faceIndex: which face to take the surface from
// closeWire: if true, ensure wire is closed (add closing edge if needed)
int  occMakeWireFromUVCurves(emscripten::val uvData, int shapeHandle, int faceIndex, bool closeWire);

// Split a face of an existing shape using a wire that lies on that face.
// shapeHandle: handle into g_shapeRegistry (the complete shape, e.g. cylinder solid)
// faceIndex: which face to split (0-based)
// wireHandle: handle into g_wireRegistry (must have pcurves on the same surface)
// Returns new shape handle for the result, or -1 on failure.
int  occSplitFaceByWire(int shapeHandle, int faceIndex, int wireHandle);

// Get the sub-face handles from the last occSplitFaceByWire call.
// Returns JS array of int handles.
emscripten::val occGetSplitFaces();

// Create a trimmed face from a surface + outer wire + optional hole wires.
int  occMakeFaceFromWire(int shapeHandle, int faceIndex, int wireHandle, emscripten::val holeWireHandles);

// Build faces from a set of wires using nesting-depth classification.
// All wires are on the surface from shapeHandle/faceIndex.
// Uses BRepTopAdaptor_FClass2d to determine wire containment (no winding assumptions).
// Returns JS array of int face handles (each already has its holes).
emscripten::val occBuildFacesFromWires(emscripten::val wireHandles, int shapeHandle, int faceIndex);
