// ============================================================
// OCCT geometry pipeline:
//   TopoDS_Shape → BRepMesh_IncrementalMesh → Poly_Triangulation
// ============================================================
//
// OCCT topology concepts used here:
//
//   TopoDS_Shape         — root topological entity (contains Faces)
//   TopExp_Explorer      — iterate sub-shapes by type (e.g. TopAbs_FACE)
//   TopoDS_Face          — bounded region of a geometric surface
//   BRepMesh_IncrementalMesh — discretize every Face of a Shape
//   BRep_Tool::Triangulation — retrieve Poly_Triangulation for a Face
//   Poly_Triangulation   — triangle mesh of a single Face
//     .NbNodes()         — vertex count
//     .Node(i)           — gp_Pnt (1-indexed!)
//     .NbTriangles()     — triangle count
//     .Triangle(j)       — Poly_Triangle (1-indexed!)
//     .Triangle(j).Get(n1,n2,n3) — vertex indices (1-indexed!)
//   TopLoc_Location      — per-Face transformation (gp_Trsf)

#include "occ_geometry.h"

#include <TopoDS_Shape.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS.hxx>
#include <TopExp_Explorer.hxx>
#include <TopAbs_ShapeEnum.hxx>
#include <BRepPrimAPI_MakeBox.hxx>
#include <BRepPrimAPI_MakeSphere.hxx>
#include <BRepPrimAPI_MakeCylinder.hxx>
#include <BRepPrimAPI_MakeCone.hxx>
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRep_Tool.hxx>
#include <Poly_Triangulation.hxx>
#include <Poly_Triangle.hxx>
#include <TopLoc_Location.hxx>
#include <gp_Pnt.hxx>
#include <gp_Trsf.hxx>
#include <gp_Vec.hxx>
#include <Geom_Surface.hxx>
#include <GeomAdaptor_Surface.hxx>
#include <BRepTools.hxx>
#include <BRepBuilderAPI_MakeEdge.hxx>
#include <BRepBuilderAPI_MakeWire.hxx>
#include <BRepBuilderAPI_MakeVertex.hxx>
#include <TopExp.hxx>
#include <TopoDS_Wire.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Vertex.hxx>
#include <BRepAdaptor_Curve.hxx>
#include <BRepBuilderAPI_MakeFace.hxx>
#include <BRepPrimAPI_MakePrism.hxx>
#include <BRepBuilderAPI_Sewing.hxx>
#include <BRepBuilderAPI_MakeSolid.hxx>
#include <TopoDS_Shell.hxx>
#include <TopoDS_Solid.hxx>
#include <gp_Pln.hxx>
#include <gp_Cylinder.hxx>
#include <Standard_Failure.hxx>
#include <BRepCheck_Analyzer.hxx>
#include <BRep_Builder.hxx>
#include <Geom2d_Line.hxx>
#include <Geom_CylindricalSurface.hxx>
#include <Geom_OffsetSurface.hxx>
#include <BRepTools_WireExplorer.hxx>
#include <BRepFeat_SplitShape.hxx>
#include <BRepTopAdaptor_FClass2d.hxx>
#include <Geom2d_BezierCurve.hxx>
#include <TColgp_Array1OfPnt2d.hxx>
#include <BRepLib.hxx>
#include <ShapeFix_Face.hxx>

#include <cmath>
#include <cstdio>
#include <algorithm>
#include <functional>

// ---- Internal: tessellate any TopoDS_Shape → OccMesh ----

static OccMesh tessellateShape(const TopoDS_Shape& shape, double deflection) {
    // Step 1: Run incremental mesher on the whole shape.
    // This fills each Face with a Poly_Triangulation.
    BRepMesh_IncrementalMesh mesher(shape, deflection);
    // Constructor performs meshing; explicit Perform() is optional but safe.
    mesher.Perform();

    OccMesh result;
    int totalNodes = 0;
    int totalTris = 0;

    // Step 2: Count nodes & triangles first (so we can allocate once)
    TopExp_Explorer fc0;
    for (fc0.Init(shape, TopAbs_FACE); fc0.More(); fc0.Next()) {
        const TopoDS_Face& face = TopoDS::Face(fc0.Current());
        TopLoc_Location loc;
        Handle(Poly_Triangulation) tri = BRep_Tool::Triangulation(face, loc);
        if (!tri.IsNull()) {
            totalNodes += tri->NbNodes();
            totalTris  += tri->NbTriangles();
        }
    }

    result.positions.reserve(totalNodes * 3);
    result.normals.reserve(totalNodes * 3);
    result.indices.reserve(totalTris * 3);

    // Step 3: Extract per-face mesh data
    TopExp_Explorer fc;
    for (fc.Init(shape, TopAbs_FACE); fc.More(); fc.Next()) {
        const TopoDS_Face& face = TopoDS::Face(fc.Current());
        TopLoc_Location loc;
        Handle(Poly_Triangulation) tri = BRep_Tool::Triangulation(face, loc);

        if (tri.IsNull()) continue;

        const gp_Trsf& trsf = loc.Transformation();
        int nbNodes    = tri->NbNodes();
        int nbTris     = tri->NbTriangles();

        // Base vertex index within the flat output (0-based)
        unsigned int baseIdx = static_cast<unsigned int>(result.positions.size() / 3);

        // Extract positions
        for (int i = 1; i <= nbNodes; i++) {
            gp_Pnt p = tri->Node(i).Transformed(trsf);
            result.positions.push_back(static_cast<float>(p.X()));
            result.positions.push_back(static_cast<float>(p.Y()));
            result.positions.push_back(static_cast<float>(p.Z()));
        }

        // Allocate normal accumulator (zero-filled)
        unsigned int vertCount = static_cast<unsigned int>(result.positions.size() / 3);
        result.normals.resize(vertCount * 3, 0.0f);

        // Extract triangle indices + accumulate face normals
        for (int j = 1; j <= nbTris; j++) {
            Poly_Triangle triObj = tri->Triangle(j);
            int n1, n2, n3;
            triObj.Get(n1, n2, n3);

            // Convert from 1-based to 0-based, offset by baseIdx
            unsigned int i1 = baseIdx + static_cast<unsigned int>(n1 - 1);
            unsigned int i2 = baseIdx + static_cast<unsigned int>(n2 - 1);
            unsigned int i3 = baseIdx + static_cast<unsigned int>(n3 - 1);

            result.indices.push_back(i1);
            result.indices.push_back(i2);
            result.indices.push_back(i3);

            // Compute face normal from triangle vertices (cross product)
            float ax = result.positions[i1 * 3 + 0];
            float ay = result.positions[i1 * 3 + 1];
            float az = result.positions[i1 * 3 + 2];
            float bx = result.positions[i2 * 3 + 0];
            float by = result.positions[i2 * 3 + 1];
            float bz = result.positions[i2 * 3 + 2];
            float cx = result.positions[i3 * 3 + 0];
            float cy = result.positions[i3 * 3 + 1];
            float cz = result.positions[i3 * 3 + 2];

            float e1x = bx - ax, e1y = by - ay, e1z = bz - az;
            float e2x = cx - ax, e2y = cy - ay, e2z = cz - az;

            float nx = e1y * e2z - e1z * e2y;
            float ny = e1z * e2x - e1x * e2z;
            float nz = e1x * e2y - e1y * e2x;
            float len = std::sqrt(nx * nx + ny * ny + nz * nz);
            if (len > 1e-10f) { nx /= len; ny /= len; nz /= len; }

            // Accumulate to each vertex (will normalize after all faces)
            result.normals[i1 * 3 + 0] += nx;
            result.normals[i1 * 3 + 1] += ny;
            result.normals[i1 * 3 + 2] += nz;

            result.normals[i2 * 3 + 0] += nx;
            result.normals[i2 * 3 + 1] += ny;
            result.normals[i2 * 3 + 2] += nz;

            result.normals[i3 * 3 + 0] += nx;
            result.normals[i3 * 3 + 1] += ny;
            result.normals[i3 * 3 + 2] += nz;
        }
    }

    // Step 4: Normalize accumulated normals
    unsigned int vc = static_cast<unsigned int>(result.positions.size() / 3);
    for (unsigned int i = 0; i < vc; i++) {
        float nx = result.normals[i * 3 + 0];
        float ny = result.normals[i * 3 + 1];
        float nz = result.normals[i * 3 + 2];
        float len = std::sqrt(nx * nx + ny * ny + nz * nz);
        if (len > 1e-10f) {
            result.normals[i * 3 + 0] = nx / len;
            result.normals[i * 3 + 1] = ny / len;
            result.normals[i * 3 + 2] = nz / len;
        } else {
            result.normals[i * 3 + 1] = 1.0f; // fallback: +Y
        }
    }

    printf("  tessellateShape: %d vertices, %d triangles\n", vc, (int)result.indices.size() / 3);
    return result;
}

// ---- Public API ----

OccMesh occMakeBox(double dx, double dy, double dz, double deflection) {
    // BRepPrimAPI_MakeBox: two opposite corners
    TopoDS_Shape shape = BRepPrimAPI_MakeBox(
        gp_Pnt(-dx / 2.0, -dy / 2.0, -dz / 2.0),
        gp_Pnt( dx / 2.0,  dy / 2.0,  dz / 2.0)
    ).Shape();
    return tessellateShape(shape, deflection);
}

OccMesh occMakeSphere(double radius, double deflection) {
    // BRepPrimAPI_MakeSphere(radius): center at origin
    TopoDS_Shape shape = BRepPrimAPI_MakeSphere(radius).Shape();
    return tessellateShape(shape, deflection);
}

OccMesh occMakeCylinder(double radius, double height, double deflection) {
    // BRepPrimAPI_MakeCylinder(radius, height): axis along Z
    // Keep Z-up for OCCT's default; demo can rotate if needed
    TopoDS_Shape shape = BRepPrimAPI_MakeCylinder(radius, height).Shape();
    return tessellateShape(shape, deflection);
}

// ============================================================
// Topology exploration — Phase 4
// ============================================================
//
// We store OCCT shapes in a global registry and return int handles.
// This avoids exposing TopoDS_Shape (a complex OCCT type) to JS,
// while keeping the C++/JS boundary thin.

static std::vector<TopoDS_Shape> g_shapeRegistry;

int occCreateCylinderShape(double radius, double height) {
    TopoDS_Shape shape = BRepPrimAPI_MakeCylinder(radius, height).Shape();
    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(shape);
    printf("  [occ] created Cylinder shape, handle=%d, radius=%.2f height=%.2f\n", handle, radius, height);
    return handle;
}

int occCreateBoxShape(double dx, double dy, double dz) {
    TopoDS_Shape shape = BRepPrimAPI_MakeBox(
        gp_Pnt(-dx / 2.0, -dy / 2.0, -dz / 2.0),
        gp_Pnt( dx / 2.0,  dy / 2.0,  dz / 2.0)
    ).Shape();
    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(shape);
    printf("  [occ] created Box shape, handle=%d, size=%.2f×%.2f×%.2f\n", handle, dx, dy, dz);
    return handle;
}

int occCreateSphereShape(double radius) {
    TopoDS_Shape shape = BRepPrimAPI_MakeSphere(radius).Shape();
    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(shape);
    printf("  [occ] created Sphere shape, handle=%d, radius=%.2f\n", handle, radius);
    return handle;
}

int occCreateConeShape(double r1, double r2, double height) {
    TopoDS_Shape shape = BRepPrimAPI_MakeCone(r1, r2, height).Shape();
    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(shape);
    printf("  [occ] created Cone shape, handle=%d, r1=%.2f r2=%.2f h=%.2f\n", handle, r1, r2, height);
    return handle;
}

void occReleaseShapeHandle(int handle) {
    if (handle >= 0 && handle < static_cast<int>(g_shapeRegistry.size())) {
        g_shapeRegistry[handle].Nullify(); // free OCCT internal refs
        printf("  [occ] released shape handle=%d\n", handle);
    }
}

// ---- Face traversal ----

int occShapeFaceCount(int handle) {
    if (handle < 0 || handle >= static_cast<int>(g_shapeRegistry.size())) return 0;
    const TopoDS_Shape& shape = g_shapeRegistry[handle];
    int count = 0;
    TopExp_Explorer ex;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next()) count++;
    printf("  [occ] shapeFaceCount(handle=%d) = %d\n", handle, count);
    return count;
}

OccFaceInfo occGetFaceInfo(int handle, int faceIndex) {
    OccFaceInfo info = {};
    if (handle < 0 || handle >= static_cast<int>(g_shapeRegistry.size())) return info;

    const TopoDS_Shape& shape = g_shapeRegistry[handle];

    // Walk to the faceIndex-th face
    TopExp_Explorer ex;
    int idx = 0;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx != faceIndex) continue;

        const TopoDS_Face& face = TopoDS::Face(ex.Current());

        // --- Get Geom_Surface from the face ---
        // BRep_Tool::Surface extracts the underlying geometric surface.
        // This is where the "Face → Surface" link happens in OCCT.
        Handle(Geom_Surface) surf = BRep_Tool::Surface(face);

        // --- Determine surface type ---
        // GeomAdaptor_Surface wraps Geom_Surface and provides GetType().
        // Type is a GeomAbs_SurfaceType enum:
        //   0=Plane  1=Cylinder  2=Cone  3=Sphere  4=Torus  6=BSpline  ...
        GeomAdaptor_Surface adapt(surf);
        info.surfaceType = static_cast<int>(adapt.GetType());

        // --- Get UV bounds ---
        // These bounds define the "trimmed surface":
        //   Face = Surface(u,v) restricted to [uMin,uMax] × [vMin,vMax]
        BRepTools::UVBounds(face, info.uMin, info.uMax, info.vMin, info.vMax);

        const char* typeNames[] = {"Plane","Cylinder","Cone","Sphere","Torus","Bezier","BSpline","Revolution","Extrusion","Offset","Other"};
        const char* tname = (info.surfaceType >= 0 && info.surfaceType <= 10)
                            ? typeNames[info.surfaceType] : "?";
        printf("  [occ] getFaceInfo(handle=%d, face=%d): type=%d(%s) UV=[%.3g,%.3g]×[%.3g,%.3g]\n",
               handle, faceIndex, info.surfaceType, tname,
               info.uMin, info.uMax, info.vMin, info.vMax);
        return info;
    }
    return info;
}

// ---- Surface evaluation at UV ----

OccUVPoint occEvalFaceUV(int handle, int faceIndex, double u, double v) {
    OccUVPoint result = {};
    if (handle < 0 || handle >= static_cast<int>(g_shapeRegistry.size())) return result;

    const TopoDS_Shape& shape = g_shapeRegistry[handle];

    // Walk to the faceIndex-th face
    TopExp_Explorer ex;
    int idx = 0;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx != faceIndex) continue;

        const TopoDS_Face& face = TopoDS::Face(ex.Current());
        Handle(Geom_Surface) surf = BRep_Tool::Surface(face);

        // Geom_Surface::D1(u, v, P, D1U, D1V) computes:
        //   P   = the 3D point at parameter (u,v)
        //   D1U = partial derivative dP/du (tangent in u direction)
        //   D1V = partial derivative dP/dv (tangent in v direction)
        //
        // Surface normal = D1U × D1V (cross product of the two tangents).
        // This gives a vector perpendicular to the surface at (u,v).
        gp_Pnt p;
        gp_Vec d1u, d1v;
        surf->D1(u, v, p, d1u, d1v);

        result.x = p.X(); result.y = p.Y(); result.z = p.Z();

        // Normal = D1U × D1V, normalized
        gp_Vec n = d1u.Crossed(d1v);
        double len = n.Magnitude();
        if (len > 1e-12) {
            n.Normalize();
            result.nx = n.X(); result.ny = n.Y(); result.nz = n.Z();
        }
        return result;
    }
    return result;
}

// ---- Per-face tessellation (single face → OccMesh) ----

// Helper: extract triangulation from one specific face of an already-meshed shape
static OccMesh extractSingleFaceMesh(const TopoDS_Shape& shape, int targetFaceIndex) {
    OccMesh result;

    TopExp_Explorer fc;
    int idx = 0;
    for (fc.Init(shape, TopAbs_FACE); fc.More(); fc.Next(), idx++) {
        if (idx != targetFaceIndex) continue;

        const TopoDS_Face& face = TopoDS::Face(fc.Current());
        TopLoc_Location loc;
        Handle(Poly_Triangulation) tri = BRep_Tool::Triangulation(face, loc);

        if (tri.IsNull()) return result;

        const gp_Trsf& trsf = loc.Transformation();
        int nbNodes = tri->NbNodes();
        int nbTris  = tri->NbTriangles();

        // Extract positions
        for (int i = 1; i <= nbNodes; i++) {
            gp_Pnt p = tri->Node(i).Transformed(trsf);
            result.positions.push_back(static_cast<float>(p.X()));
            result.positions.push_back(static_cast<float>(p.Y()));
            result.positions.push_back(static_cast<float>(p.Z()));
        }

        // Extract indices (1-based → 0-based)
        for (int j = 1; j <= nbTris; j++) {
            int n1, n2, n3;
            tri->Triangle(j).Get(n1, n2, n3);
            result.indices.push_back(static_cast<unsigned int>(n1 - 1));
            result.indices.push_back(static_cast<unsigned int>(n2 - 1));
            result.indices.push_back(static_cast<unsigned int>(n3 - 1));
        }

        // Compute per-vertex normals (smoothed)
        int vc = nbNodes;
        result.normals.resize(vc * 3, 0.0f);
        for (int j = 1; j <= nbTris; j++) {
            int n1, n2, n3;
            tri->Triangle(j).Get(n1, n2, n3);
            int i1 = n1 - 1, i2 = n2 - 1, i3 = n3 - 1;

            float ax = result.positions[i1 * 3], ay = result.positions[i1 * 3 + 1], az = result.positions[i1 * 3 + 2];
            float bx = result.positions[i2 * 3], by = result.positions[i2 * 3 + 1], bz = result.positions[i2 * 3 + 2];
            float cx = result.positions[i3 * 3], cy = result.positions[i3 * 3 + 1], cz = result.positions[i3 * 3 + 2];

            float e1x = bx - ax, e1y = by - ay, e1z = bz - az;
            float e2x = cx - ax, e2y = cy - ay, e2z = cz - az;
            float nx = e1y * e2z - e1z * e2y;
            float ny = e1z * e2x - e1x * e2z;
            float nz = e1x * e2y - e1y * e2x;
            float len = std::sqrt(nx * nx + ny * ny + nz * nz);
            if (len > 1e-10f) { nx /= len; ny /= len; nz /= len; }

            result.normals[i1 * 3] += nx; result.normals[i1 * 3 + 1] += ny; result.normals[i1 * 3 + 2] += nz;
            result.normals[i2 * 3] += nx; result.normals[i2 * 3 + 1] += ny; result.normals[i2 * 3 + 2] += nz;
            result.normals[i3 * 3] += nx; result.normals[i3 * 3 + 1] += ny; result.normals[i3 * 3 + 2] += nz;
        }
        for (int i = 0; i < vc; i++) {
            float nx = result.normals[i * 3], ny = result.normals[i * 3 + 1], nz = result.normals[i * 3 + 2];
            float len = std::sqrt(nx * nx + ny * ny + nz * nz);
            if (len > 1e-10f) {
                result.normals[i * 3] = nx / len;
                result.normals[i * 3 + 1] = ny / len;
                result.normals[i * 3 + 2] = nz / len;
            }
        }
        return result;
    }
    return result;
}

OccMesh occTessellateFaceMesh(int handle, int faceIndex, double deflection) {
    OccMesh empty;
    if (handle < 0 || handle >= static_cast<int>(g_shapeRegistry.size())) return empty;

    const TopoDS_Shape& shape = g_shapeRegistry[handle];

    // Mesh the whole shape (BRepMesh_IncrementalMesh modifies the shape in-place,
    // attaching Poly_Triangulation to each face)
    BRepMesh_IncrementalMesh mesher(shape, deflection);
    mesher.Perform();

    printf("  [occ] tessellateFaceMesh(handle=%d, face=%d, defl=%.3g)\n", handle, faceIndex, deflection);
    return extractSingleFaceMesh(shape, faceIndex);
}

// ============================================================
// Wire topology — Phase 5
// ============================================================
//
// Global wire registry (same pattern as shape registry).
// Each wire is a TopoDS_Wire: a connected sequence of edges.
// For trimmed surfaces later, wires define the trimming boundary.

static std::vector<TopoDS_Wire> g_wireRegistry;
static std::vector<int> g_splitFaceHandles;  // Phase 8: sub-face handles from last split

int occMakeWireFromPoints(emscripten::val pts3D, bool closeWire) {
    int n = pts3D["length"].as<int>();
    if (n < 6) {
        printf("  [occ] makeWire: need at least 2 points (6 floats), got %d\n", n);
        return -1;
    }
    int nPts = n / 3;

    // Extract 3D points from JS array
    std::vector<gp_Pnt> points(nPts);
    for (int i = 0; i < nPts; i++) {
        points[i] = gp_Pnt(
            pts3D[i * 3 + 0].as<double>(),
            pts3D[i * 3 + 1].as<double>(),
            pts3D[i * 3 + 2].as<double>()
        );
    }

    // Skip duplicate consecutive points (can happen from bezier flattening)
    std::vector<gp_Pnt> clean;
    clean.push_back(points[0]);
    for (int i = 1; i < nPts; i++) {
        if (points[i].Distance(clean.back()) > 1e-9)
            clean.push_back(points[i]);
    }
    int nClean = static_cast<int>(clean.size());
    if (nClean < 2) {
        printf("  [occ] makeWire: after dedup, only %d points\n", nClean);
        return -1;
    }

    BRepBuilderAPI_MakeWire wireBuilder;
    TopoDS_Vertex lastV;

    // Build edges from deduplicated points
    for (int i = 0; i < nClean - 1; i++) {
        TopoDS_Vertex v1, v2;
        if (i == 0) {
            v1 = BRepBuilderAPI_MakeVertex(clean[i]);
        } else {
            v1 = lastV; // share vertex with previous edge
        }
        v2 = BRepBuilderAPI_MakeVertex(clean[i + 1]);
        TopoDS_Edge edge = BRepBuilderAPI_MakeEdge(v1, v2);
        wireBuilder.Add(edge);
        lastV = v2;
    }

    // Close if requested
    if (closeWire && nClean > 2) {
        double gap = clean.back().Distance(clean[0]);
        if (gap > 1e-7) {
            TopoDS_Vertex firstV = BRepBuilderAPI_MakeVertex(clean[0]);
            wireBuilder.Add(BRepBuilderAPI_MakeEdge(lastV, firstV));
            printf("  [occ] makeWire: added closing edge, gap=%.4g\n", gap);
        }
    }

    wireBuilder.Build();
    if (!wireBuilder.IsDone()) {
        printf("  [occ] makeWire: Build failed!\n");
        return -1;
    }

    TopoDS_Wire wire = wireBuilder.Wire();
    int handle = static_cast<int>(g_wireRegistry.size());
    g_wireRegistry.push_back(wire);

    // Verify closure by checking first/last vertex distance
    double gap = clean.back().Distance(clean[0]);
    printf("  [occ] makeWire: handle=%d pts=%d→%d closed=%s gap=%.4g\n",
           handle, nPts, nClean, gap < 1e-6 ? "yes" : "no", gap);
    return handle;
}

OccWireInfo occGetWireInfo(int wireHandle) {
    OccWireInfo info = {};
    if (wireHandle < 0 || wireHandle >= static_cast<int>(g_wireRegistry.size()))
        return info;

    const TopoDS_Wire& wire = g_wireRegistry[wireHandle];

    // Count edges by exploring the wire
    int edgeCount = 0;
    TopExp_Explorer ex;
    for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) {
        edgeCount++;
    }
    info.edgeCount = edgeCount;

    // Closure check: explore edges and compare first/last point
    if (edgeCount > 0) {
        ex.Init(wire, TopAbs_EDGE);
        TopoDS_Vertex v0, vN;
        if (ex.More()) {
            const TopoDS_Edge& e0 = TopoDS::Edge(ex.Current());
            // Get two endpoints of first edge from BRepAdaptor
            BRepAdaptor_Curve c0(e0);
            gp_Pnt pFirst = c0.Value(c0.FirstParameter());
            v0 = BRepBuilderAPI_MakeVertex(pFirst);
        }
        // Walk to last edge
        TopoDS_Edge eLast;
        for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) {
            eLast = TopoDS::Edge(ex.Current());
        }
        BRepAdaptor_Curve cLast(eLast);
        gp_Pnt pLast = cLast.Value(cLast.LastParameter());
        vN = BRepBuilderAPI_MakeVertex(pLast);

        double gap = BRep_Tool::Pnt(v0).Distance(BRep_Tool::Pnt(vN));
        info.isClosed = (gap < 1e-6);

        // Compute total length: sum of edge point distances
        double totalLen = 0;
        for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) {
            const TopoDS_Edge& e = TopoDS::Edge(ex.Current());
            BRepAdaptor_Curve ac(e);
            gp_Pnt pa = ac.Value(ac.FirstParameter());
            gp_Pnt pb = ac.Value(ac.LastParameter());
            totalLen += pa.Distance(pb);
        }
        info.totalLength = totalLen;
    }

    printf("  [occ] getWireInfo(handle=%d): edges=%d closed=%s len=%.3g\n",
           wireHandle, info.edgeCount, info.isClosed ? "yes" : "no", info.totalLength);
    return info;
}

emscripten::val occSampleWire3D(int wireHandle, int samplesPerEdge) {
    using namespace emscripten;
    if (wireHandle < 0 || wireHandle >= static_cast<int>(g_wireRegistry.size()))
        return val::array();

    const TopoDS_Wire& wire = g_wireRegistry[wireHandle];
    if (samplesPerEdge < 2) samplesPerEdge = 2;

    std::vector<float> positions;

    TopExp_Explorer ex;
    for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) {
        const TopoDS_Edge& edge = TopoDS::Edge(ex.Current());
        BRepAdaptor_Curve curve(edge);
        double t0 = curve.FirstParameter();
        double t1 = curve.LastParameter();
        for (int i = 0; i < samplesPerEdge; i++) {
            double t = t0 + (t1 - t0) * i / (samplesPerEdge - 1);
            gp_Pnt p = curve.Value(t);
            positions.push_back(static_cast<float>(p.X()));
            positions.push_back(static_cast<float>(p.Y()));
            positions.push_back(static_cast<float>(p.Z()));
        }
    }

    val result = val::array();
    for (size_t i = 0; i < positions.size(); i++) {
        result.call<void>("push", positions[i]);
    }
    printf("  [occ] sampleWire3D(handle=%d, spp=%d): %d floats\n",
           wireHandle, samplesPerEdge, static_cast<int>(positions.size()));
    return result;
}

void occReleaseWireHandle(int wireHandle) {
    if (wireHandle >= 0 && wireHandle < static_cast<int>(g_wireRegistry.size())) {
        g_wireRegistry[wireHandle].Nullify();
        printf("  [occ] released wire handle=%d\n", wireHandle);
    }
}

// ============================================================
// Face + Solid construction — Phase 6
// ============================================================

// Extract ordered 3D vertices from a wire using ordered edge traversal.
static std::vector<gp_Pnt> extractWireVertices(const TopoDS_Wire& wire) {
    std::vector<gp_Pnt> pts;
    BRepTools_WireExplorer wex;
    for (wex.Init(wire); wex.More(); wex.Next()) {
        pts.push_back(BRep_Tool::Pnt(wex.CurrentVertex()));
    }
    return pts;
}

// Signed area of polygon projected to XY plane.
// Positive = CCW, Negative = CW (right-hand rule, +Z normal).
static double signedAreaXY(const std::vector<gp_Pnt>& pts) {
    double area = 0;
    int n = static_cast<int>(pts.size());
    if (n < 3) return 0;
    for (int i = 0; i < n; i++) {
        int j = (i + 1) % n;
        area += pts[i].X() * pts[j].Y() - pts[j].X() * pts[i].Y();
    }
    return area * 0.5;
}

// Signed area in UV parametric space using pcurve data.
// Uses BRepTools_WireExplorer for ordered traversal + pcurve evaluation.
// Positive = CCW in UV, Negative = CW.
static double signedAreaUV(const TopoDS_Wire& wire, const Handle(Geom_Surface)& surf) {
    std::vector<gp_Pnt2d> uvPts;
    BRepTools_WireExplorer wex;
    for (wex.Init(wire); wex.More(); wex.Next()) {
        const TopoDS_Edge& edge = wex.Current();
        Standard_Real first, last;
        Handle(Geom2d_Curve) pcurve = BRep_Tool::CurveOnSurface(edge, surf, TopLoc_Location(), first, last);
        if (!pcurve.IsNull()) {
            uvPts.push_back(pcurve->Value(first));
        }
    }
    if (uvPts.size() < 3) return 0;
    // Add last point of last edge for closure
    TopExp_Explorer ex;
    TopoDS_Edge lastEdge;
    for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) { lastEdge = TopoDS::Edge(ex.Current()); }
    if (!lastEdge.IsNull()) {
        Standard_Real first, last;
        Handle(Geom2d_Curve) pcurve = BRep_Tool::CurveOnSurface(lastEdge, surf, TopLoc_Location(), first, last);
        if (!pcurve.IsNull()) uvPts.push_back(pcurve->Value(last));
    }
    double area = 0;
    int n = static_cast<int>(uvPts.size());
    for (int i = 0; i < n; i++) {
        int j = (i + 1) % n;
        area += uvPts[i].X() * uvPts[j].Y() - uvPts[j].X() * uvPts[i].Y();
    }
    return area * 0.5;
}

int occMakeFace(int outerWireHandle, emscripten::val innerWireHandles) {
    if (outerWireHandle < 0 || outerWireHandle >= static_cast<int>(g_wireRegistry.size())) {
        printf("  [occ] makeFace: invalid outerWireHandle=%d\n", outerWireHandle);
        return -1;
    }

    const TopoDS_Wire& outerWire = g_wireRegistry[outerWireHandle];

    // ---- Normalize outer wire winding: OCCT requires CCW ----
    auto outerPts = extractWireVertices(outerWire);
    double outerArea = signedAreaXY(outerPts);
    const char* outerDir = (outerArea > 1e-12) ? "CCW" : ((outerArea < -1e-12) ? "CW" : "ZERO");
    printf("  [occ] makeFace: outer wire[%d] signed_area=%.4g (%s) pts=%d\n",
           outerWireHandle, outerArea, outerDir, (int)outerPts.size());

    TopoDS_Wire outerFixed = outerWire;
    if (outerArea < 0) {
        outerFixed = TopoDS::Wire(outerWire.Reversed());
        printf("  [occ] makeFace: reversed outer wire (CW→CCW)\n");
    }

    gp_Pln plane(gp::XOY());
    BRepBuilderAPI_MakeFace faceBuilder(plane, outerFixed);

    // ---- Add hole wires with winding check (holes must be CW) ----
    int numHoles = innerWireHandles["length"].as<int>();
    for (int i = 0; i < numHoles; i++) {
        int holeHandle = innerWireHandles[i].as<int>();
        if (holeHandle < 0 || holeHandle >= static_cast<int>(g_wireRegistry.size())) continue;

        const TopoDS_Wire& holeWire = g_wireRegistry[holeHandle];
        auto holePts = extractWireVertices(holeWire);
        double holeArea = signedAreaXY(holePts);
        const char* holeDir = (holeArea > 1e-12) ? "CCW" : ((holeArea < -1e-12) ? "CW" : "ZERO");
        printf("  [occ] makeFace: hole[%d] wire[%d] signed_area=%.4g (%s) pts=%d\n",
               i, holeHandle, holeArea, holeDir, (int)holePts.size());

        TopoDS_Wire holeFixed = holeWire;
        if (holeArea > 0) {
            holeFixed = TopoDS::Wire(holeWire.Reversed());
            printf("  [occ] makeFace: reversed hole[%d] (CCW→CW)\n", i);
        }

        faceBuilder.Add(holeFixed);
    }

    faceBuilder.Build();
    if (!faceBuilder.IsDone()) {
        printf("  [occ] makeFace: Build failed!\n");
        return -1;
    }

    TopoDS_Shape face = faceBuilder.Shape();

    // Verify face validity
    BRepCheck_Analyzer chk(face);
    printf("  [occ] makeFace: face valid=%d\n", (int)chk.IsValid());

    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(face);

    printf("  [occ] makeFace: handle=%d outerWire=%d holes=%d\n", handle, outerWireHandle, numHoles);
    return handle;
}

int occMakePrism(int shapeHandle, double dx, double dy, double dz) {
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] makePrism: invalid shapeHandle=%d\n", shapeHandle);
        return -1;
    }

    const TopoDS_Shape& shape = g_shapeRegistry[shapeHandle];
    gp_Vec dir(dx, dy, dz);

    BRepPrimAPI_MakePrism prism(shape, dir);
    prism.Build();
    if (!prism.IsDone()) {
        printf("  [occ] makePrism: Build failed!\n");
        return -1;
    }

    TopoDS_Shape solid = prism.Shape();
    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(solid);

    printf("  [occ] makePrism: handle=%d from=%d dir=(%.2f,%.2f,%.2f)\n",
           handle, shapeHandle, dx, dy, dz);
    return handle;
}

OccMesh occTessellateShape(int shapeHandle, double deflection) {
    OccMesh empty;
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] tessellateShape: invalid handle=%d\n", shapeHandle);
        return empty;
    }
    const TopoDS_Shape& shape = g_shapeRegistry[shapeHandle];
    printf("  [occ] tessellateShape(handle=%d, defl=%.3g)\n", shapeHandle, deflection);
    return tessellateShape(shape, deflection);
}

OccTopologyInfo occGetTopologyInfo(int shapeHandle) {
    OccTopologyInfo info = {};
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] getTopologyInfo: invalid handle=%d\n", shapeHandle);
        return info;
    }

    const TopoDS_Shape& shape = g_shapeRegistry[shapeHandle];

    TopExp_Explorer ex;
    for (ex.Init(shape, TopAbs_SOLID); ex.More(); ex.Next()) info.numSolids++;
    for (ex.Init(shape, TopAbs_SHELL, TopAbs_SOLID); ex.More(); ex.Next()) info.numShells++;
    for (ex.Init(shape, TopAbs_FACE, TopAbs_SHELL); ex.More(); ex.Next()) info.numFaces++;
    for (ex.Init(shape, TopAbs_WIRE, TopAbs_FACE); ex.More(); ex.Next()) info.numWires++;
    for (ex.Init(shape, TopAbs_EDGE, TopAbs_WIRE); ex.More(); ex.Next()) info.numEdges++;
    for (ex.Init(shape, TopAbs_VERTEX, TopAbs_EDGE); ex.More(); ex.Next()) info.numVertices++;

    printf("  [occ] getTopologyInfo(handle=%d): S=%d Sh=%d F=%d W=%d E=%d V=%d\n",
           shapeHandle, info.numSolids, info.numShells, info.numFaces,
           info.numWires, info.numEdges, info.numVertices);
    return info;
}

// ============================================================
// Surface-aware emboss — Phase 7 (manual, no TKOffset)
// ============================================================

// Sample a wire into 3D points (internal helper)
static void sampleWirePoints(const TopoDS_Wire& wire, int samplesPerEdge,
                              std::vector<gp_Pnt>& outPts) {
    TopExp_Explorer ex;
    for (ex.Init(wire, TopAbs_EDGE); ex.More(); ex.Next()) {
        const TopoDS_Edge& edge = TopoDS::Edge(ex.Current());
        BRepAdaptor_Curve curve(edge);
        double t0 = curve.FirstParameter();
        double t1 = curve.LastParameter();
        int n = (samplesPerEdge < 2) ? 2 : samplesPerEdge;
        for (int i = 0; i < n - 1; i++) {  // skip last point to avoid duplicate with next edge
            double t = t0 + (t1 - t0) * i / (n - 1);
            outPts.push_back(curve.Value(t));
        }
    }
    // Add the very last point (end of last edge)
    if (!outPts.empty()) {
        TopExp_Explorer ex2;
        TopoDS_Edge lastEdge;
        for (ex2.Init(wire, TopAbs_EDGE); ex2.More(); ex2.Next()) {
            lastEdge = TopoDS::Edge(ex2.Current());
        }
        BRepAdaptor_Curve curve(lastEdge);
        outPts.push_back(curve.Value(curve.LastParameter()));
    }
}

// Offset points along Z-axis cylinder normals
static std::vector<gp_Pnt> offsetAlongCylinderNormals(const std::vector<gp_Pnt>& pts,
                                                       double radius, double offset) {
    std::vector<gp_Pnt> result;
    result.reserve(pts.size());
    for (const auto& p : pts) {
        // Z-axis cylinder normal: radial direction in XY plane
        double r = std::sqrt(p.X() * p.X() + p.Y() * p.Y());
        if (r < 1e-12) { result.push_back(p); continue; }
        double nx = p.X() / r;
        double ny = p.Y() / r;
        result.push_back(gp_Pnt(p.X() + nx * offset, p.Y() + ny * offset, p.Z()));
    }
    return result;
}

// Track last created bottom/top face handles for separate rendering
static int g_lastBottomFaceH = -1;
static int g_lastTopFaceH = -1;

int occGetLastBottomFace() { return g_lastBottomFaceH; }
int occGetLastTopFace()   { return g_lastTopFaceH; }

// Create a triangular face from 3 points. Returns null face on failure.
// Logs diagnostic info on first failure.
static bool buildTriangleFace(const gp_Pnt& a, const gp_Pnt& b, const gp_Pnt& c,
                               TopoDS_Face& outFace, bool verbose) {
    // Pre-check: edge lengths
    double lenAB = a.Distance(b);
    double lenAC = a.Distance(c);
    double lenBC = b.Distance(c);
    if (lenAB < 1e-9 || lenAC < 1e-9 || lenBC < 1e-9) {
        if (verbose) printf("  [occ] tri fail: degenerate edge AB=%.3g AC=%.3g BC=%.3g\n", lenAB, lenAC, lenBC);
        return false;
    }

    // Pre-check: area via cross product
    gp_Vec ab(a, b);
    gp_Vec ac(a, c);
    gp_Vec n = ab.Crossed(ac);
    double area = n.Magnitude() * 0.5;
    if (area < 1e-13) {
        if (verbose) printf("  [occ] tri fail: near-zero area=%.3g\n", area);
        return false;
    }

    try {
        gp_Dir normal(n);  // may throw if mag < gp::Resolution()
        gp_Pln plane(a, normal);

        TopoDS_Vertex va = BRepBuilderAPI_MakeVertex(a);
        TopoDS_Vertex vb = BRepBuilderAPI_MakeVertex(b);
        TopoDS_Vertex vc = BRepBuilderAPI_MakeVertex(c);

        TopoDS_Edge eab, ebc, eca;
        try { eab = BRepBuilderAPI_MakeEdge(va, vb); } catch (...) {
            if (verbose) printf("  [occ] tri fail: MakeEdge ab threw\n"); return false;
        }
        try { ebc = BRepBuilderAPI_MakeEdge(vb, vc); } catch (...) {
            if (verbose) printf("  [occ] tri fail: MakeEdge bc threw\n"); return false;
        }
        try { eca = BRepBuilderAPI_MakeEdge(vc, va); } catch (...) {
            if (verbose) printf("  [occ] tri fail: MakeEdge ca threw\n"); return false;
        }

        BRepBuilderAPI_MakeWire wb;
        wb.Add(eab); wb.Add(ebc); wb.Add(eca);
        wb.Build();
        if (!wb.IsDone()) {
            if (verbose) printf("  [occ] tri fail: wire not done\n");
            return false;
        }

        BRepBuilderAPI_MakeFace fb(plane, wb.Wire());
        fb.Build();
        if (!fb.IsDone()) {
            if (verbose) printf("  [occ] tri fail: face not done\n");
            return false;
        }

        outFace = fb.Face();
        return true;
    } catch (const Standard_Failure& e) {
        if (verbose) printf("  [occ] tri fail: %s\n", e.GetMessageString());
        return false;
    } catch (...) {
        if (verbose) printf("  [occ] tri fail: unknown throw\n");
        return false;
    }
}

int occBuildEmboss(int wireHandle, double radius, double offset, int samplesPerEdge) {
    if (wireHandle < 0 || wireHandle >= static_cast<int>(g_wireRegistry.size())) {
        printf("  [occ] buildEmboss: invalid wireHandle=%d\n", wireHandle);
        return -1;
    }
    if (samplesPerEdge < 2) samplesPerEdge = 2;

    TopoDS_Face bottomFace, topFace;
    const char* step = "init";
    try {
    const TopoDS_Wire& bottomWire = g_wireRegistry[wireHandle];

    step = "1 sample";
    std::vector<gp_Pnt> bottomPts;
    sampleWirePoints(bottomWire, samplesPerEdge, bottomPts);
    int nPts = static_cast<int>(bottomPts.size());
    printf("  [occ] buildEmboss: sampled %d points (samplesPerEdge=%d)\n", nPts, samplesPerEdge);
    if (nPts < 3) { printf("  [occ] buildEmboss: too few points\n"); return -1; }

    // De-dup bottom points BEFORE offset (keeps bottom/top in sync)
    {
        std::vector<gp_Pnt> dedup;
        for (size_t i = 0; i < bottomPts.size(); i++) {
            if (dedup.empty() || bottomPts[i].Distance(dedup.back()) > 1e-9)
                dedup.push_back(bottomPts[i]);
        }
        if (dedup.size() >= 2 && dedup.back().Distance(dedup[0]) < 1e-7)
            dedup.pop_back();
        if (dedup.size() < 3) {
            printf("  [occ] buildEmboss: too few points after de-dup (%d)\n", (int)dedup.size());
            return -1;
        }
        bottomPts = std::move(dedup);
        nPts = static_cast<int>(bottomPts.size());
        printf("  [occ] buildEmboss: after de-dup: %d pts\n", nPts);
    }

    step = "2 offset";
    std::vector<gp_Pnt> topPts = offsetAlongCylinderNormals(bottomPts, radius, offset);

    // Build a wire from points using straight edges (for planar face creation)
    auto buildWire = [](const std::vector<gp_Pnt>& pts) -> TopoDS_Wire {
        BRepBuilderAPI_MakeWire wb;
        TopoDS_Vertex lastV;
        int n = static_cast<int>(pts.size());
        for (int i = 0; i < n - 1; i++) {
            TopoDS_Vertex v1 = (i == 0) ? BRepBuilderAPI_MakeVertex(pts[i]) : lastV;
            TopoDS_Vertex v2 = BRepBuilderAPI_MakeVertex(pts[i + 1]);
            wb.Add(BRepBuilderAPI_MakeEdge(v1, v2));
            lastV = v2;
        }
        wb.Add(BRepBuilderAPI_MakeEdge(lastV, BRepBuilderAPI_MakeVertex(pts[0])));
        wb.Build();
        return wb.Wire();
    };

    // Compute approximate signed area to diagnose wire winding
    auto windingSign = [](const std::vector<gp_Pnt>& pts) -> double {
        double area = 0.0;
        int n = static_cast<int>(pts.size());
        for (int i = 0; i < n; i++) {
            int j = (i + 1) % n;
            area += pts[i].X() * pts[j].Y() - pts[j].X() * pts[i].Y();
        }
        return area;
    };

    // Ensure CCW winding for face creation (wire reversed copy, originals kept for side tris)
    auto makeCCWCopy = [&](const std::vector<gp_Pnt>& pts) -> std::vector<gp_Pnt> {
        std::vector<gp_Pnt> c = pts;
        double ws = windingSign(pts);
        if (ws < 0) {
            std::reverse(c.begin(), c.end());
            printf("  [occ] buildEmboss: reversed wire (winding=%.3f → CCW)\n", ws);
        }
        return c;
    };

    step = "4 bottomFace";
    {
        auto ccwPts = makeCCWCopy(bottomPts);
        BRepBuilderAPI_MakeFace fb(buildWire(ccwPts), true);
        fb.Build();
        if (!fb.IsDone()) { printf("  [occ] buildEmboss: bottomFace Build failed\n"); return -1; }
        bottomFace = fb.Face();
        BRepCheck_Analyzer chk(bottomFace);
        printf("  [occ] buildEmboss: bottomFace valid=%d\n", (int)chk.IsValid());
        g_lastBottomFaceH = static_cast<int>(g_shapeRegistry.size());
        g_shapeRegistry.push_back(bottomFace);
    }

    step = "5 topFace";
    {
        auto ccwPts = makeCCWCopy(topPts);
        BRepBuilderAPI_MakeFace fb(buildWire(ccwPts), true);
        fb.Build();
        if (!fb.IsDone()) { printf("  [occ] buildEmboss: topFace Build failed\n"); return -1; }
        topFace = fb.Face();
        BRepCheck_Analyzer chk(topFace);
        printf("  [occ] buildEmboss: topFace valid=%d\n", (int)chk.IsValid());
        g_lastTopFaceH = static_cast<int>(g_shapeRegistry.size());
        g_shapeRegistry.push_back(topFace);
    }

    step = "6 sideFaces";
    BRepBuilderAPI_Sewing sewer(0.01);
    sewer.Add(bottomFace);
    sewer.Add(topFace);
    int sideOk = 0, sideFail = 0;
    int firstFailIdx = -1;
    for (int i = 0; i < nPts; i++) {
        int j = (i + 1) % nPts;
        TopoDS_Face tri;
        bool verbose = (sideFail == 0); // verbose only for first failure
        if (buildTriangleFace(bottomPts[i], bottomPts[j], topPts[i], tri, verbose)) { sewer.Add(tri); sideOk++; }
        else { if (firstFailIdx < 0) firstFailIdx = i; sideFail++; }
        if (buildTriangleFace(bottomPts[j], topPts[j], topPts[i], tri, verbose)) { sewer.Add(tri); sideOk++; }
        else { if (firstFailIdx < 0) firstFailIdx = i; sideFail++; }
    }
    if (firstFailIdx >= 0) {
        int j = (firstFailIdx + 1) % nPts;
        const auto& b0 = bottomPts[firstFailIdx], b1 = bottomPts[j];
        const auto& t0 = topPts[firstFailIdx], t1 = topPts[j];
        printf("  [occ] firstFail segment[%d]:\n", firstFailIdx);
        printf("    b0=(%.4f,%.4f,%.4f) t0=(%.4f,%.4f,%.4f)\n", b0.X(),b0.Y(),b0.Z(), t0.X(),t0.Y(),t0.Z());
        printf("    b1=(%.4f,%.4f,%.4f) t1=(%.4f,%.4f,%.4f)\n", b1.X(),b1.Y(),b1.Z(), t1.X(),t1.Y(),t1.Z());
        printf("    len b0-b1=%.4g  t0-t1=%.4g  b0-t0=%.4g  b1-t1=%.4g\n",
               b0.Distance(b1), t0.Distance(t1), b0.Distance(t0), b1.Distance(t1));
    }
    printf("  [occ] buildEmboss: side triangles ok=%d fail=%d, sewing %d faces...\n",
           sideOk, sideFail, 2 + sideOk);

    step = "7 sew";
    sewer.Perform();
    TopoDS_Shape sewed = sewer.SewedShape();
    if (sewed.IsNull()) { printf("  [occ] buildEmboss: sew null\n"); return -1; }
    TopoDS_Shell shell;
    TopExp_Explorer shEx;
    for (shEx.Init(sewed, TopAbs_SHELL); shEx.More(); shEx.Next()) { shell = TopoDS::Shell(shEx.Current()); break; }
    if (shell.IsNull()) { printf("  [occ] buildEmboss: no shell\n"); return -1; }
    printf("  [occ] buildEmboss: sew OK\n");

    step = "8 solid";
    BRepBuilderAPI_MakeSolid solidMaker(shell);
    solidMaker.Build();
    if (!solidMaker.IsDone()) { printf("  [occ] buildEmboss: solid failed\n"); return -1; }
    TopoDS_Shape solid = solidMaker.Solid();

    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(solid);
    printf("  [occ] buildEmboss: OK handle=%d R=%.2f offset=%.3f pts=%d\n", handle, radius, offset, nPts);
    return handle;

    } catch (const Standard_Failure& e) {
        printf("  [occ] buildEmboss: Standard_Failure at [%s]: %s\n", step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] buildEmboss: unknown exception at [%s]\n", step);
        return -1;
    }
}

// ============================================================
// Face splitting via BRepFeat_SplitShape — Phase 8
// ============================================================
//
// Pipeline:
//   1. occMakeWireFromUVCurves → TopoDS_Wire with Geom2d_BezierCurve edges on surface
//   2. occSplitFaceByWire → BRepFeat_SplitShape splits cylinder face
//   3. occGetSplitFaces → individual sub-face handles for rendering
//
// Edges are built via BRepBuilderAPI_MakeEdge(curve2d, surface) — the 3D
// geometry equals surface(curve2D(t)), so edges truly lie on the surface.

int occMakeWireFromUVCurves(emscripten::val uvData, int shapeHandle, int faceIndex, bool closeWire) {
    const char* step = "init";
    try {
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] makeWireFromUVCurves: invalid shapeHandle=%d\n", shapeHandle);
        return -1;
    }

    step = "get shape";
    TopoDS_Shape shape = g_shapeRegistry[shapeHandle];

    // Find target face and extract its surface
    TopExp_Explorer ex;
    int idx = 0;
    TopoDS_Face targetFace;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx == faceIndex) {
            targetFace = TopoDS::Face(ex.Current());
            break;
        }
    }
    if (targetFace.IsNull()) {
        printf("  [occ] makeWireFromUVCurves: faceIndex=%d not found\n", faceIndex);
        return -1;
    }
    step = "get surface";
    Handle(Geom_Surface) surf = BRep_Tool::Surface(targetFace);
    if (surf.IsNull()) {
        printf("  [occ] makeWireFromUVCurves: surface is null\n");
        return -1;
    }

    // Parse the Flat64Array header
    int n = uvData["length"].as<int>();
    if (n < 3) {
        printf("  [occ] makeWireFromUVCurves: uvData too short (%d)\n", n);
        return -1;
    }
    int numSegments = static_cast<int>(uvData[0].as<double>());
    printf("  [occ] makeWireFromUVCurves: %d segments, surface type=%d\n",
           numSegments, static_cast<int>(GeomAdaptor_Surface(surf).GetType()));

    BRepBuilderAPI_MakeWire wireBuilder;
    int offset = 1;
    int segCount = 0;
    gp_Pnt firstP3d;      // first edge's start 3D point
    gp_Pnt prevEndP3d;    // previous edge's end 3D point
    bool hasFirst = false;

    for (int si = 0; si < numSegments; si++) {
        step = "parse header";
        if (offset + 1 >= n) break;
        int segType = static_cast<int>(uvData[offset].as<double>());
        int npts    = static_cast<int>(uvData[offset + 1].as<double>());
        if (npts < 2 || npts > 25) {
            printf("  [occ]   seg[%d] bad npts=%d\n", si, npts);
            break;
        }
        if (offset + 1 + npts * 2 > n) {
            printf("  [occ]   seg[%d] data overflow\n", si);
            break;
        }
        offset += 2;

        step = "read poles";
        TColgp_Array1OfPnt2d poles(1, npts);
        for (int k = 0; k < npts; k++) {
            double u = uvData[offset + k * 2].as<double>();
            double v = uvData[offset + k * 2 + 1].as<double>();
            poles(k + 1) = gp_Pnt2d(u, v);
        }
        offset += npts * 2;

        step = "create bezier";
        Handle(Geom2d_BezierCurve) curve2d = new Geom2d_BezierCurve(poles);

        step = "eval endpoints";
        gp_Pnt2d uvS = curve2d->Value(0.0);
        gp_Pnt2d uvE = curve2d->Value(1.0);
        gp_Pnt pS, pE;
        surf->D0(uvS.X(), uvS.Y(), pS);
        surf->D0(uvE.X(), uvE.Y(), pE);

        // Verify chord-line doesn't deviate too much from surface
        if (si == 0) { firstP3d = pS; hasFirst = true; }
        double chordLen = pS.Distance(pE);

        step = "make edge";
        TopoDS_Edge edge;
        if (chordLen < 1e-9) {
            printf("  [occ]   seg[%d] degenerate chord=%.3g, skipping\n", si, chordLen);
            prevEndP3d = pE;
            continue;
        }
        {
            BRepBuilderAPI_MakeEdge edgeMaker(curve2d, surf);
            if (edgeMaker.IsDone()) {
                edge = edgeMaker.Edge();
            } else {
                // Fallback: 3D chord edge + pcurve override (so SplitShape sees a pcurve)
                printf("  [occ]   seg[%d] curve-on-surface failed, fallback chord+pcurve\n", si);
                edge = BRepBuilderAPI_MakeEdge(pS, pE);
                Handle(Geom2d_Line) pcurve = new Geom2d_Line(
                    uvS, gp_Dir2d(uvE.X() - uvS.X(), uvE.Y() - uvS.Y()));
                BRep_Builder B;
                B.UpdateEdge(edge, pcurve, surf, TopLoc_Location(), 1e-7);
            }
        }
        prevEndP3d = pE;

        step = "add wire";
        wireBuilder.Add(edge);
        prevEndP3d = pE;

        segCount++;
        const char* typeStr = (segType == 1) ? "line" : ((segType == 2) ? "quad" : "cubic");
        printf("  [occ]   seg[%d] type=%s npts=%d u0=%.4f v0=%.4f uEnd=%.4f vEnd=%.4f p3d=(%.3f,%.3f,%.3f)→(%.3f,%.3f,%.3f)\n",
               si, typeStr, npts,
               poles(1).X(), poles(1).Y(), poles(npts).X(), poles(npts).Y(),
               pS.X(), pS.Y(), pS.Z(), pE.X(), pE.Y(), pE.Z());
    }

    step = "build wire";
    wireBuilder.Build();
    if (!wireBuilder.IsDone()) {
        printf("  [occ] makeWireFromUVCurves: Build wire FAILED after %d edges\n", segCount);
        return -1;
    }

    TopoDS_Wire wire = wireBuilder.Wire();

    // Verify closure using our own 3D endpoint data (avoids BRep_Tool::Pnt on vertices)
    double gap = hasFirst ? firstP3d.Distance(prevEndP3d) : 0;

    int handle = static_cast<int>(g_wireRegistry.size());
    g_wireRegistry.push_back(wire);

    printf("  [occ] makeWireFromUVCurves: handle=%d edges=%d closed=%s gap=%.4g\n",
           handle, segCount, gap < 1e-6 ? "yes" : "no", gap);
    return handle;

    } catch (const Standard_Failure& e) {
        printf("  [occ] makeWireFromUVCurves: Standard_Failure at [%s]: %s\n", step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] makeWireFromUVCurves: unknown exception at [%s]\n", step);
        return -1;
    }
}

int occMakeFaceFromWire(int shapeHandle, int faceIndex, int wireHandle, emscripten::val holeWireHandles) {
    const char* step = "init";
    try {
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] makeFaceFromWire: invalid shapeHandle=%d\n", shapeHandle);
        return -1;
    }
    if (wireHandle < 0 || wireHandle >= static_cast<int>(g_wireRegistry.size())) {
        printf("  [occ] makeFaceFromWire: invalid wireHandle=%d\n", wireHandle);
        return -1;
    }

    step = "get surface";
    TopoDS_Shape shape = g_shapeRegistry[shapeHandle];
    TopExp_Explorer ex;
    int idx = 0;
    TopoDS_Face targetFace;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx == faceIndex) {
            targetFace = TopoDS::Face(ex.Current());
            break;
        }
    }
    if (targetFace.IsNull()) {
        printf("  [occ] makeFaceFromWire: faceIndex=%d not found\n", faceIndex);
        return -1;
    }
    Handle(Geom_Surface) surf = BRep_Tool::Surface(targetFace);
    TopoDS_Wire wire = g_wireRegistry[wireHandle];

    printf("  [occ] makeFaceFromWire: surface type=%d\n",
           static_cast<int>(GeomAdaptor_Surface(surf).GetType()));

    // ---- Normalize outer wire winding: UV signed area > 0 = CCW ----
    double outerArea = signedAreaUV(wire, surf);
    const char* outerDir = (outerArea > 1e-12) ? "CCW" : ((outerArea < -1e-12) ? "CW" : "ZERO");
    printf("  [occ] makeFaceFromWire: outer UV_signed_area=%.4g (%s)\n", outerArea, outerDir);

    TopoDS_Wire outerFixed = wire;
    if (outerArea < 0) {
        outerFixed = TopoDS::Wire(wire.Reversed());
        printf("  [occ] makeFaceFromWire: reversed outer wire (CW→CCW)\n");
    }

    step = "build face";
    BRepBuilderAPI_MakeFace faceBuilder(surf, outerFixed, true);

    // ---- Add hole wires (holes must be CW, i.e. UV signed area < 0) ----
    int numHoles = holeWireHandles["length"].as<int>();
    for (int i = 0; i < numHoles; i++) {
        int holeH = holeWireHandles[i].as<int>();
        if (holeH < 0 || holeH >= static_cast<int>(g_wireRegistry.size())) continue;

        const TopoDS_Wire& holeWire = g_wireRegistry[holeH];
        double holeArea = signedAreaUV(holeWire, surf);
        const char* holeDir = (holeArea > 1e-12) ? "CCW" : ((holeArea < -1e-12) ? "CW" : "ZERO");
        printf("  [occ]   hole[%d] UV_signed_area=%.4g (%s)\n", i, holeArea, holeDir);

        TopoDS_Wire holeFixed = holeWire;
        if (holeArea > 0) {
            holeFixed = TopoDS::Wire(holeWire.Reversed());
            printf("  [occ]   reversed hole[%d] (CCW→CW)\n", i);
        }
        faceBuilder.Add(holeFixed);
    }

    faceBuilder.Build();
    if (!faceBuilder.IsDone()) {
        printf("  [occ] makeFaceFromWire: Build FAILED\n");
        return -1;
    }

    TopoDS_Face face = faceBuilder.Face();
    BRepCheck_Analyzer chk(face);
    printf("  [occ] makeFaceFromWire: valid=%d\n", (int)chk.IsValid());

    int handle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(face);
    printf("  [occ] makeFaceFromWire: handle=%d\n", handle);
    return handle;

    } catch (const Standard_Failure& e) {
        printf("  [occ] makeFaceFromWire: Standard_Failure at [%s]: %s\n", step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] makeFaceFromWire: unknown exception at [%s]\n", step);
        return -1;
    }
}

int occSplitFaceByWire(int shapeHandle, int faceIndex, int wireHandle) {
    const char* step = "init";
    try {
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] splitFaceByWire: invalid shapeHandle=%d\n", shapeHandle);
        return -1;
    }
    if (wireHandle < 0 || wireHandle >= static_cast<int>(g_wireRegistry.size())) {
        printf("  [occ] splitFaceByWire: invalid wireHandle=%d\n", wireHandle);
        return -1;
    }

    TopoDS_Shape shape = g_shapeRegistry[shapeHandle];
    TopoDS_Wire   wire = g_wireRegistry[wireHandle];

    // Find target face by index
    TopExp_Explorer ex;
    int idx = 0;
    TopoDS_Face targetFace;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx == faceIndex) {
            targetFace = TopoDS::Face(ex.Current());
            break;
        }
    }
    if (targetFace.IsNull()) {
        printf("  [occ] splitFaceByWire: faceIndex=%d not found (faceCount=%d)\n", faceIndex, idx);
        return -1;
    }

    // Log target face info
    {
        Handle(Geom_Surface) surf = BRep_Tool::Surface(targetFace);
        GeomAdaptor_Surface adapt(surf);
        double uMin, uMax, vMin, vMax;
        BRepTools::UVBounds(targetFace, uMin, uMax, vMin, vMax);
        printf("  [occ] splitFaceByWire: target face[%d] type=%d UV=[%.3f,%.3f]x[%.3f,%.3f]\n",
               faceIndex, static_cast<int>(adapt.GetType()), uMin, uMax, vMin, vMax);
    }

    // Perform the split
    step = "splitter init";
    BRepFeat_SplitShape splitter(shape);
    step = "splitter add";
    splitter.Add(wire, targetFace);
    step = "splitter build";
    splitter.Build();

    if (!splitter.IsDone()) {
        printf("  [occ] splitFaceByWire: BRepFeat_SplitShape::Build() FAILED\n");
        return -1;
    }

    TopoDS_Shape result = splitter.Shape();
    if (result.IsNull()) {
        printf("  [occ] splitFaceByWire: result shape is null\n");
        return -1;
    }

    // Validate
    BRepCheck_Analyzer chk(result);
    printf("  [occ] splitFaceByWire: result valid=%d\n", (int)chk.IsValid());

    // Store result shape
    int resultHandle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(result);

    // Extract modified sub-faces
    const TopTools_ListOfShape& modified = splitter.Modified(targetFace);
    printf("  [occ] splitFaceByWire: Modified(targetFace) -> %d sub-faces\n", modified.Size());

    g_splitFaceHandles.clear();
    int subIdx = 0;
    for (TopTools_ListIteratorOfListOfShape it(modified); it.More(); it.Next(), subIdx++) {
        const TopoDS_Face& subFace = TopoDS::Face(it.Value());
        int h = static_cast<int>(g_shapeRegistry.size());
        g_shapeRegistry.push_back(subFace);
        g_splitFaceHandles.push_back(h);

        Handle(Geom_Surface) subSurf = BRep_Tool::Surface(subFace);
        GeomAdaptor_Surface subAdapt(subSurf);
        double uMin, uMax, vMin, vMax;
        BRepTools::UVBounds(subFace, uMin, uMax, vMin, vMax);
        printf("  [occ]   sub-face[%d] handle=%d type=%d UV=[%.3f,%.3f]x[%.3f,%.3f]\n",
               subIdx, h, static_cast<int>(subAdapt.GetType()),
               uMin, uMax, vMin, vMax);
    }

    // Log Left/Right classification
    const TopTools_ListOfShape& leftFaces  = splitter.Left();
    const TopTools_ListOfShape& rightFaces = splitter.Right();
    printf("  [occ] splitFaceByWire: Left()=%d faces, Right()=%d faces\n",
           leftFaces.Size(), rightFaces.Size());

    printf("  [occ] splitFaceByWire: OK resultHandle=%d subFaces=%d\n",
           resultHandle, static_cast<int>(g_splitFaceHandles.size()));
    return resultHandle;

    } catch (const Standard_Failure& e) {
        printf("  [occ] splitFaceByWire: Standard_Failure at [%s]: %s\n", step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] splitFaceByWire: unknown exception at [%s]\n", step);
        return -1;
    }
}

emscripten::val occGetSplitFaces() {
    emscripten::val arr = emscripten::val::array();
    for (int h : g_splitFaceHandles) {
        arr.call<void>("push", h);
    }
    printf("  [occ] getSplitFaces: %d handles\n", static_cast<int>(g_splitFaceHandles.size()));
    return arr;
}

// ============================================================
// Nesting-depth face builder — Phase 9
// ============================================================
//
// Uses BRepTopAdaptor_FClass2d to determine wire containment in UV space.
// No winding assumptions — pure topological nesting.
//
// Algorithm:
//   1. For each wire, compute UV bbox center as test point
//   2. For each wire pair (i,j): test if i's center ∈ j using FClass2d on a temp face
//   3. Build containment matrix → nesting depth
//   4. depth 0,2,4,... = outer boundary → creates a Face
//   5. depth 1,3,5,... = hole → assigned to its parent outer (depth-1)

emscripten::val occBuildFacesFromWires(emscripten::val wireHandles, int shapeHandle, int faceIndex) {
    const char* step = "init";
    try {
    int nWires = wireHandles["length"].as<int>();
    if (nWires < 1) return emscripten::val::array();
    if (shapeHandle < 0 || shapeHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] buildFacesFromWires: invalid shapeHandle=%d\n", shapeHandle);
        return emscripten::val::array();
    }

    step = "get surface";
    TopoDS_Shape shape = g_shapeRegistry[shapeHandle];
    TopExp_Explorer ex;
    TopoDS_Face targetFace;
    int idx = 0;
    for (ex.Init(shape, TopAbs_FACE); ex.More(); ex.Next(), idx++) {
        if (idx == faceIndex) { targetFace = TopoDS::Face(ex.Current()); break; }
    }
    if (targetFace.IsNull()) {
        printf("  [occ] buildFacesFromWires: face not found\n");
        return emscripten::val::array();
    }
    Handle(Geom_Surface) surf = BRep_Tool::Surface(targetFace);

    // ---- 1. Collect wires, compute UV bbox + area, sort by area desc ----
    struct WireData { TopoDS_Wire wire; double area; double uMin,uMax,vMin,vMax; int origIdx; };
    std::vector<WireData> wdat;

    for (int i = 0; i < nWires; i++) {
        int wh = wireHandles[i].as<int>();
        if (wh < 0 || wh >= static_cast<int>(g_wireRegistry.size())) continue;
        double uMin=DBL_MAX, uMax=-DBL_MAX, vMin=DBL_MAX, vMax=-DBL_MAX;
        TopExp_Explorer edEx;
        for (edEx.Init(g_wireRegistry[wh], TopAbs_EDGE); edEx.More(); edEx.Next()) {
            const TopoDS_Edge& edge = TopoDS::Edge(edEx.Current());
            Standard_Real first, last;
            Handle(Geom2d_Curve) pc = BRep_Tool::CurveOnSurface(edge, surf, TopLoc_Location(), first, last);
            if (!pc.IsNull()) {
                gp_Pnt2d uv = pc->Value(first);
                if (uv.X()<uMin) uMin=uv.X(); if (uv.X()>uMax) uMax=uv.X();
                if (uv.Y()<vMin) vMin=uv.Y(); if (uv.Y()>vMax) vMax=uv.Y();
            }
        }
        double area = (uMax-uMin) * (vMax-vMin);
        wdat.push_back({g_wireRegistry[wh], area, uMin,uMax,vMin,vMax, i});
    }

    // Sort by bbox area descending (largest first)
    std::sort(wdat.begin(), wdat.end(),
        [](const WireData& a, const WireData& b) { return a.area > b.area; });

    int N = static_cast<int>(wdat.size());
    printf("  [occ] buildFacesFromWires: %d wires, sorted by bbox area\n", N);
    for (int i = 0; i < N; i++) {
        printf("  [occ]   wire[%d] origIdx=%d area=%.4g bbox=[%.3f,%.3f]x[%.3f,%.3f]\n",
               i, wdat[i].origIdx, wdat[i].area, wdat[i].uMin,wdat[i].uMax,wdat[i].vMin,wdat[i].vMax);
    }

    // ---- 2. Compute interior test points + build temp faces ----
    // Interior point = pcurve midpoint + inward normal offset (epsilon)
    std::vector<gp_Pnt2d> testPts(N);
    std::vector<TopoDS_Face> tempFaces(N);
    std::vector<bool> tempFaceValid(N, false);

    for (int i = 0; i < N; i++) {
        // Normalize winding for temp face
        TopoDS_Wire wNorm = wdat[i].wire;
        double uvArea = signedAreaUV(wNorm, surf);
        if (uvArea < 0) wNorm = TopoDS::Wire(wdat[i].wire.Reversed());

        step = "temp face";
        BRepBuilderAPI_MakeFace mf(surf, wNorm, true);
        if (mf.IsDone()) {
            tempFaces[i] = mf.Face();
            tempFaceValid[i] = true;
        }

        // Compute interior test point: first edge's pcurve midpoint + inward normal
        step = "test point";
        TopExp_Explorer edEx;
        for (edEx.Init(wdat[i].wire, TopAbs_EDGE); edEx.More(); edEx.Next()) {
            const TopoDS_Edge& edge = TopoDS::Edge(edEx.Current());
            Standard_Real t0, t1;
            Handle(Geom2d_Curve) pc = BRep_Tool::CurveOnSurface(edge, surf, TopLoc_Location(), t0, t1);
            if (pc.IsNull()) continue;
            double tMid = (t0 + t1) * 0.5;
            gp_Pnt2d uvMid = pc->Value(tMid);
            gp_Vec2d tangent = pc->DN(tMid, 1);
            double eps = (t1 - t0) * 0.01; // 1% of edge param range
            if (eps < 1e-6) eps = 1e-6;

            // Two candidate normal directions
            gp_Vec2d n1(-tangent.Y(), tangent.X());
            gp_Vec2d n2( tangent.Y(), -tangent.X());
            if (n1.Magnitude() < 1e-12) continue;
            n1.Normalize(); n2.Normalize();
            gp_Pnt2d cand1(uvMid.X() + n1.X() * eps, uvMid.Y() + n1.Y() * eps);
            gp_Pnt2d cand2(uvMid.X() + n2.X() * eps, uvMid.Y() + n2.Y() * eps);

            // Use FClass2d to pick the inward direction (IN = inside bounded region)
            testPts[i] = cand1; // default
            if (tempFaceValid[i]) {
                BRepTopAdaptor_FClass2d cls(tempFaces[i], 1e-7);
                if (cls.Perform(cand1) == TopAbs_IN) { testPts[i] = cand1; }
                else if (cls.Perform(cand2) == TopAbs_IN) { testPts[i] = cand2; }
                // If neither IN, fallback to cand1 (might be ON boundary or very small edge)
            }
            break; // first edge is enough
        }
        printf("  [occ]   wire[%d] testPt=(%.4f,%.4f) uvArea=%.4g\n",
               i, testPts[i].X(), testPts[i].Y(), uvArea);
    }

    // ---- 3. Build containment tree via area-sorted FClass2d ----
    // For each wire i, find its direct parent j (smallest j > i that contains it, i.e. smallest-area container)
    std::vector<int> parent(N, -1); // parent[j] = index of containing wire
    for (int i = 1; i < N; i++) { // start from index 1 (smaller wires)
        for (int j = 0; j < i; j++) { // only test against LARGER wires (j < i)
            if (!tempFaceValid[j]) continue;
            // Bbox pre-filter
            const auto& tp = testPts[i];
            if (tp.X() < wdat[j].uMin - 1e-6 || tp.X() > wdat[j].uMax + 1e-6 ||
                tp.Y() < wdat[j].vMin - 1e-6 || tp.Y() > wdat[j].vMax + 1e-6) continue;

            BRepTopAdaptor_FClass2d cls(tempFaces[j], 1e-7);
            if (cls.Perform(tp) == TopAbs_IN) {
                parent[i] = j; // first (smallest-area) container wins = direct parent
                break;
            }
        }
    }

    // ---- 4. Compute nesting depth from tree ----
    std::vector<int> depth(N, -1);
    std::function<int(int)> getDepth = [&](int i) -> int {
        if (depth[i] >= 0) return depth[i];
        if (parent[i] < 0) { depth[i] = 0; return 0; }
        depth[i] = getDepth(parent[i]) + 1;
        return depth[i];
    };
    for (int i = 0; i < N; i++) getDepth(i);

    for (int i = 0; i < N; i++) {
        printf("  [occ]   wire[%d] depth=%d %s parent=%d testPt=(%.4f,%.4f)\n",
               i, depth[i], (depth[i] % 2 == 0) ? "OUTER" : "HOLE",
               parent[i], testPts[i].X(), testPts[i].Y());
    }

    // ---- 5. Build faces: even depth = outer, odd depth holes → assigned to direct parent ----
    emscripten::val result = emscripten::val::array();
    for (int i = 0; i < N; i++) {
        if (depth[i] % 2 != 0) continue; // hole, skip

        // Normalize outer winding: outer must be CCW (UV area > 0)
        TopoDS_Wire outerFixed = wdat[i].wire;
        double outerUV = signedAreaUV(outerFixed, surf);
        printf("  [occ]   outer[%d] UV_area=%.4g (%s)\n",
               i, outerUV, (outerUV > 0) ? "CCW OK" : (outerUV < 0 ? "CW→FLIP" : "ZERO"));
        if (outerUV < 0) outerFixed = TopoDS::Wire(wdat[i].wire.Reversed());

        // Collect direct holes: depth = depth[i]+1 AND parent = i
        std::vector<int> holeIdx;
        for (int h = 0; h < N; h++) {
            if (depth[h] == depth[i] + 1 && parent[h] == i) {
                holeIdx.push_back(h);
            }
        }

        step = "build face";
        BRepBuilderAPI_MakeFace faceBuilder(surf, outerFixed, true);
        for (int hi : holeIdx) {
            TopoDS_Wire holeFixed = wdat[hi].wire;
            double holeUV = signedAreaUV(holeFixed, surf);
            printf("  [occ]     hole[%d] UV_area=%.4g (%s)\n",
                   hi, holeUV, (holeUV < 0) ? "CW OK" : (holeUV > 0 ? "CCW→FLIP" : "ZERO"));
            if (holeUV > 0) holeFixed = TopoDS::Wire(wdat[hi].wire.Reversed());
            faceBuilder.Add(holeFixed);
        }

        faceBuilder.Build();
        if (!faceBuilder.IsDone()) {
            printf("  [occ]   outer[%d] MakeFace FAILED\n", i);
            continue;
        }
        TopoDS_Face face = faceBuilder.Face();

        // ---- Hardening step 1: Seam proximity check ----
        if (surf->IsUPeriodic()) {
            double period = surf->UPeriod();
            double uMin, uMax, vMin, vMax;
            BRepTools::UVBounds(face, uMin, uMax, vMin, vMax);
            // Check if wire UV is near or crosses the seam
            double du = uMax - uMin;
            if (du > period * 0.8 || uMin < 0 || uMax > period) {
                printf("  [occ]   ⚠ face[%d] near/crosses seam: u=[%.3f,%.3f] period=%.3f\n",
                       (int)g_shapeRegistry.size(), uMin, uMax, period);
            }
        }

        // ---- Hardening step 2: Build 3D curves + sync parameters ----
        // Edges from MakeEdge(curve2d,surface) have pcurves but may lack
        // proper 3D curves. BuildCurves3d computes them from pcurve+surface.
        // SameParameter syncs 3D curve & pcurve parameter ranges (required for booleans).
        {
            TopExp_Explorer edgeEx;
            for (edgeEx.Init(face, TopAbs_EDGE); edgeEx.More(); edgeEx.Next()) {
                TopoDS_Edge& E = (TopoDS_Edge&)edgeEx.Current();
                BRepLib::BuildCurves3d(E);
                BRepLib::SameParameter(E);
            }
        }

        // ---- Hardening step 3: Tolerance alignment via ShapeFix_Face ----
        {
            ShapeFix_Face fixer(face);
            fixer.Perform();
            face = fixer.Face();
        }

        BRepCheck_Analyzer chk(face);

        int h = static_cast<int>(g_shapeRegistry.size());
        g_shapeRegistry.push_back(face);
        result.call<void>("push", h);
        printf("  [occ]   outer[%d] → face[%d] holes=%d valid=%d\n",
               i, h, (int)holeIdx.size(), (int)chk.IsValid());
    }

    printf("  [occ] buildFacesFromWires: %d faces\n", (int)result["length"].as<int>());
    return result;

    } catch (const Standard_Failure& e) {
        printf("  [occ] buildFacesFromWires: Standard_Failure at [%s]: %s\n", step, e.GetMessageString());
        return emscripten::val::array();
    } catch (...) {
        printf("  [occ] buildFacesFromWires: unknown exception at [%s]\n", step);
        return emscripten::val::array();
    }
}

// ============================================================
// Solid from offset face — Phase 10
// ============================================================
//
// Builds a closed TopoDS_Solid by offsetting a face along its surface normal.
// No BRepAlgoAPI booleans — uses BRepBuilderAPI + Geom_OffsetSurface + sewing.
//
// Pipeline:
//   1. Extract Geom_Surface + wires from bottom face
//   2. Create Geom_OffsetSurface(baseSurf, thickness)
//   3. Clone wire structure onto offset surface → build top face
//   4. Build side ruled faces between corresponding outer-wire edges
//      (triangle approximation via pcurve sampling on both surfaces)
//   5. BRepBuilderAPI_Sewing → closed shell
//   6. BRepLib::BuildCurves3d + BRepBuilderAPI_MakeSolid → solid
//
// Face with holes (e.g. 'O', 'A') is supported: all wires are cloned onto
// the offset surface, and side walls are built only for the outer wire.

// Clone every edge of srcWire onto dstSurf by reusing pcurves from srcFace.
static TopoDS_Wire cloneWireOnSurface(const TopoDS_Wire& srcWire,
                                       const TopoDS_Face& srcFace,
                                       const Handle(Geom_Surface)& dstSurf) {
    BRepBuilderAPI_MakeWire wb;
    BRepTools_WireExplorer wex;
    int nEdges = 0;
    for (wex.Init(srcWire); wex.More(); wex.Next(), nEdges++) {
        const TopoDS_Edge& edge = wex.Current();
        Standard_Real first, last;
        Handle(Geom2d_Curve) pcurve = BRep_Tool::CurveOnSurface(edge, srcFace, first, last);
        if (pcurve.IsNull()) {
            // Fallback: try with surface+location directly
            Handle(Geom_Surface) faceSurf = BRep_Tool::Surface(srcFace);
            pcurve = BRep_Tool::CurveOnSurface(edge, faceSurf, srcFace.Location(), first, last);
        }
        if (pcurve.IsNull()) {
            printf("  [occ] cloneWireOnSurface: null pcurve on edge %d\n", nEdges);
            return TopoDS_Wire();
        }
        TopoDS_Edge newEdge = BRepBuilderAPI_MakeEdge(pcurve, dstSurf, first, last);
        if (newEdge.IsNull()) {
            printf("  [occ] cloneWireOnSurface: MakeEdge failed on edge %d\n", nEdges);
            return TopoDS_Wire();
        }
        wb.Add(newEdge);
    }
    wb.Build();
    if (!wb.IsDone()) {
        printf("  [occ] cloneWireOnSurface: MakeWire failed (%d edges)\n", nEdges);
        return TopoDS_Wire();
    }
    // Check closure
    TopoDS_Wire result = wb.Wire();
    TopoDS_Vertex vFirst, vLast;
    TopExp::Vertices(result, vFirst, vLast);
    double gap = 0;
    if (!vFirst.IsNull() && !vLast.IsNull()) {
        gap = BRep_Tool::Pnt(vFirst).Distance(BRep_Tool::Pnt(vLast));
    }
    printf("  [occ] cloneWireOnSurface: %d edges closed=%s gap=%.4g\n",
           nEdges, (gap < 1e-6 ? "yes" : "NO"), gap);
    return result;
}

// Build triangle side faces between two corresponding edges by sampling the
// shared pcurve at uniform UV parameters and evaluating both surfaces.
// Returns number of triangle faces successfully added to the sewer.
static int buildSideFaces(const TopoDS_Edge& bEdge,
                           const TopoDS_Face& bottomFace,
                           const Handle(Geom_Surface)& baseSurf,
                           const Handle(Geom_Surface)& offsetSurf,
                           BRepBuilderAPI_Sewing& sewer) {
    Standard_Real first, last;
    Handle(Geom2d_Curve) pcurve = BRep_Tool::CurveOnSurface(bEdge, bottomFace, first, last);
    if (pcurve.IsNull()) return 0;

    // Adaptive segment count: 1 for straight lines, 8 for curves
    int nSeg = 8;
    if (pcurve->DynamicType() == STANDARD_TYPE(Geom2d_Line)) nSeg = 1;

    int ok = 0;
    for (int i = 0; i < nSeg; i++) {
        double t0 = first + (last - first) * i / nSeg;
        double t1 = first + (last - first) * (i + 1) / nSeg;
        gp_Pnt2d uv0 = pcurve->Value(t0);
        gp_Pnt2d uv1 = pcurve->Value(t1);
        gp_Pnt b0 = baseSurf->Value(uv0.X(), uv0.Y());
        gp_Pnt b1 = baseSurf->Value(uv1.X(), uv1.Y());
        gp_Pnt p0 = offsetSurf->Value(uv0.X(), uv0.Y());
        gp_Pnt p1 = offsetSurf->Value(uv1.X(), uv1.Y());

        TopoDS_Face tri;
        if (buildTriangleFace(b0, b1, p0, tri, false)) { sewer.Add(tri); ok++; }
        if (buildTriangleFace(b1, p1, p0, tri, false)) { sewer.Add(tri); ok++; }
    }
    return ok;
}

int occBuildSolidFromFace(int faceHandle, double thickness) {
    if (faceHandle < 0 || faceHandle >= static_cast<int>(g_shapeRegistry.size())) {
        printf("  [occ] buildSolidFromFace: invalid faceHandle=%d\n", faceHandle);
        return -1;
    }
    if (thickness <= 0) {
        printf("  [occ] buildSolidFromFace: invalid thickness=%.3f\n", thickness);
        return -1;
    }

    const char* step = "init";
    try {
    // ---- Validate and extract bottom face ----
    TopoDS_Shape shape = g_shapeRegistry[faceHandle];
    if (shape.ShapeType() != TopAbs_FACE) {
        printf("  [occ] buildSolidFromFace: not a face (type=%d)\n",
               static_cast<int>(shape.ShapeType()));
        return -1;
    }
    TopoDS_Face bottomFace = TopoDS::Face(shape);

    step = "extract surface";
    Handle(Geom_Surface) baseSurf = BRep_Tool::Surface(bottomFace);
    printf("  [occ] buildSolidFromFace: surface type=%d thickness=%.3f\n",
           static_cast<int>(GeomAdaptor_Surface(baseSurf).GetType()), thickness);

    // ---- Collect wires from bottom face ----
    step = "collect wires";
    std::vector<TopoDS_Wire> bottomWires;
    for (TopExp_Explorer wex(bottomFace, TopAbs_WIRE); wex.More(); wex.Next())
        bottomWires.push_back(TopoDS::Wire(wex.Current()));

    if (bottomWires.empty()) {
        printf("  [occ] buildSolidFromFace: no wires in face\n");
        return -1;
    }
    int nWires = static_cast<int>(bottomWires.size());
    printf("  [occ] buildSolidFromFace: %d wire(s) on bottom face\n", nWires);

    // ---- Create offset surface ----
    // Prefer a native surface type over Geom_OffsetSurface to avoid
    // potential mesher issues in WASM builds.
    step = "offset surface";
    Handle(Geom_Surface) offsetSurf;
    {
        GeomAdaptor_Surface adapt(baseSurf);
        GeomAbs_SurfaceType st = adapt.GetType();
        if (st == GeomAbs_Cylinder) {
            Handle(Geom_CylindricalSurface) cyl =
                Handle(Geom_CylindricalSurface)::DownCast(baseSurf);
            offsetSurf = new Geom_CylindricalSurface(
                cyl->Position(), cyl->Radius() + thickness);
            printf("  [occ] buildSolidFromFace: cylinder offset R=%.3f→%.3f\n",
                   cyl->Radius(), cyl->Radius() + thickness);
        } else {
            offsetSurf = new Geom_OffsetSurface(baseSurf, thickness);
            printf("  [occ] buildSolidFromFace: Geom_OffsetSurface (type=%d)\n",
                   static_cast<int>(st));
        }
    }

    // ---- Build top face: clone wire edges onto the offset surface ----
    // Each edge's pcurve is extracted from the bottom face and reused on the
    // offset surface via BRepBuilderAPI_MakeEdge(pcurve, offsetSurf).
    // Both surfaces share UV parameterization, so pcurves are compatible.
    step = "clone wires";
    std::vector<TopoDS_Wire> topWires;
    for (int i = 0; i < nWires; i++) {
        TopoDS_Wire tw = cloneWireOnSurface(bottomWires[i], bottomFace, offsetSurf);
        if (tw.IsNull()) {
            printf("  [occ] buildSolidFromFace: clone wire[%d] failed\n", i);
            return -1;
        }
        topWires.push_back(tw);
    }

    // ---- Build top face ----
    step = "build top face";
    BRepBuilderAPI_MakeFace topFaceMaker(offsetSurf, topWires[0]);
    for (int i = 1; i < nWires; i++)
        topFaceMaker.Add(topWires[i]);
    topFaceMaker.Build();
    if (!topFaceMaker.IsDone()) {
        printf("  [occ] buildSolidFromFace: top face Build failed\n");
        return -1;
    }
    TopoDS_Face topFace = topFaceMaker.Face();

    // ---- Harden top face: BuildCurves3d + SameParameter + ShapeFix ----
    for (TopExp_Explorer eex(topFace, TopAbs_EDGE); eex.More(); eex.Next()) {
        TopoDS_Edge& E = (TopoDS_Edge&)eex.Current();
        BRepLib::BuildCurves3d(E);
        BRepLib::SameParameter(E);
    }
    {
        ShapeFix_Face fixer(topFace);
        fixer.Perform();
        topFace = fixer.Face();
    }

    // Orientation: for a closed solid, bottom face normal points inward
    // (into the solid) and top face normal points outward. If they match,
    // reverse the top face.
    if (topFace.Orientation() == bottomFace.Orientation()) {
        topFace.Reverse();
        printf("  [occ] buildSolidFromFace: reversed top face orientation\n");
    }
    {
        BRepCheck_Analyzer chk(topFace);
        printf("  [occ] buildSolidFromFace: topFace valid=%d orient=%d\n",
               (int)chk.IsValid(), (int)topFace.Orientation());
    }

    // ---- Build side walls from bottom wire edges ----
    // Side triangles sample the shared pcurves at uniform UV and evaluate
    // both surfaces — guaranteeing point-to-point alignment.
    step = "build side walls";
    BRepBuilderAPI_Sewing sewer(0.01);
    sewer.Add(bottomFace);
    sewer.Add(topFace);

    int sideOk = 0, sideFail = 0;
    {
        BRepTools_WireExplorer bwExp;
        for (bwExp.Init(bottomWires[0]); bwExp.More(); bwExp.Next()) {
            int n = buildSideFaces(bwExp.Current(), bottomFace,
                                   baseSurf, offsetSurf, sewer);
            if (n > 0) sideOk += n;
            else sideFail++;
        }
    }
    printf("  [occ] buildSolidFromFace: side triangles ok=%d fail=%d\n",
           sideOk, sideFail);
    if (sideFail > 0 && sideOk == 0) {
        printf("  [occ] buildSolidFromFace: all side faces failed\n");
        return -1;
    }

    // ---- Sew all faces into a closed shell ----
    step = "sew";
    sewer.Perform();
    TopoDS_Shape sewed = sewer.SewedShape();
    if (sewed.IsNull()) {
        printf("  [occ] buildSolidFromFace: sew produced null shape\n");
        return -1;
    }

    // ---- Geometric integrity: compute 3D curves from pcurves ----
    step = "build curves 3d";
    BRepLib::BuildCurves3d(sewed, 1e-9);

    // Also sync pcurve and 3D curve parameter ranges on every edge
    for (TopExp_Explorer eex(sewed, TopAbs_EDGE); eex.More(); eex.Next()) {
        TopoDS_Edge& E = (TopoDS_Edge&)eex.Current();
        BRepLib::SameParameter(E);
    }

    // ---- Extract shell → MakeSolid ----
    step = "extract shell";
    TopoDS_Shell shell;
    for (TopExp_Explorer shex(sewed, TopAbs_SHELL); shex.More(); shex.Next()) {
        shell = TopoDS::Shell(shex.Current());
        break;
    }
    if (shell.IsNull()) {
        printf("  [occ] buildSolidFromFace: no closed shell after sew\n");
        return -1;
    }

    step = "make solid";
    BRepBuilderAPI_MakeSolid solidMaker(shell);
    solidMaker.Build();
    if (!solidMaker.IsDone()) {
        printf("  [occ] buildSolidFromFace: MakeSolid failed\n");
        return -1;
    }

    TopoDS_Solid resultSolid = solidMaker.Solid();
    {
        BRepCheck_Analyzer chk(resultSolid);
        // Count faces
        int nFaces = 0;
        for (TopExp_Explorer fex(resultSolid, TopAbs_FACE); fex.More(); fex.Next()) nFaces++;
        printf("  [occ] buildSolidFromFace: solid valid=%d faces=%d\n",
               (int)chk.IsValid(), nFaces);
    }

    int resultHandle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(resultSolid);
    printf("  [occ] buildSolidFromFace: OK handle=%d thickness=%.3f\n",
           resultHandle, thickness);
    return resultHandle;

    } catch (const Standard_Failure& e) {
        printf("  [occ] buildSolidFromFace: Standard_Failure at [%s]: %s\n",
               step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] buildSolidFromFace: unknown exception at [%s]\n", step);
        return -1;
    }
}
