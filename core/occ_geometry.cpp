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

#include <cmath>
#include <cstdio>

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
