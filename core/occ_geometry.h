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
