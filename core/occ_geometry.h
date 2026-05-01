#pragma once
#include <vector>
#include <cstdint>

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
