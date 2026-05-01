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
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRep_Tool.hxx>
#include <Poly_Triangulation.hxx>
#include <Poly_Triangle.hxx>
#include <TopLoc_Location.hxx>
#include <gp_Pnt.hxx>
#include <gp_Trsf.hxx>

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
