#pragma once

#include <emscripten/val.h>

// ============================================================
// Mesh Text Projection — Phase 11
// ============================================================
//
// Projects font glyph contours onto arbitrary triangle meshes
// and builds manifold solids (3D-printable).
//
// Pipeline:
//   1. Register a triangle mesh (Float32Array pos + Uint32Array idx)
//   2. BVH construction for accelerated ray-triangle intersection
//   3. Adaptive sampling of glyph Bezier contours
//   4. Ray-cast onto mesh via tangent-plane placement
//   5. Barycentric normal interpolation for smooth normals
//   6. Local BSpline surface fitting for OCCT topology
//   7. Build bottom/top faces from pcurves on fitted surfaces
//   8. TPSA side-wall triangle strips (8 segments per edge)
//   9. Sew + ShapeFix + BRepCheck validation → manifold solid

// Register a triangle mesh for text projection.
// positions: Float32Array of flat [x0,y0,z0, x1,y1,z1, ...]
// indices:   Uint32Array of flat [i0,i1,i2, i3,i4,i5, ...]
// Returns mesh handle, or -1 on failure.
int occRegisterTriangleMesh(emscripten::val positions, emscripten::val indices);

// Release a registered mesh and free resources.
void occReleaseMeshHandle(int meshHandle);

// Project text contours onto a registered mesh and build a manifold solid.
//
// meshHandle:   handle from occRegisterTriangleMesh.
// contourData:  JS array of Float64Array, same format as occMakeWireFromUVCurves:
//               [numSegments, type, npts, u0,v0, u1,v1, ...] per contour.
//               (u,v) are 2D text-space coordinates.
// ox,oy,oz:     origin point on the mesh surface (placement).
// nx,ny,nz:     unit surface normal at origin.
// ux,uy,uz:     unit text horizontal direction (perpendicular to N).
// vx,vy,vz:     unit text vertical direction (= N × U).
// textHeight:   capital letter height in 3D world units.
// embossDepth:  extrusion depth along interpolated normals.
// deflection:   max chord deviation for adaptive contour sampling.
//
// Returns shape handle (solid), or -1 on failure.
int occProjectTextOnMesh(
    int meshHandle,
    emscripten::val contourData,
    double ox, double oy, double oz,
    double nx, double ny, double nz,
    double ux, double uy, double uz,
    double vx, double vy, double vz,
    double textHeight,
    double embossDepth,
    double deflection);

// Retrieve handles for the bottom/top faces from the last projection.
int occGetMeshProjectionBottomFace();
int occGetMeshProjectionTopFace();

// Build face from pre-computed 3D contour points (JS-side raycasting).
// contourPoints: JS array of Float64Array, each is flat [x0,y0,z0, x1,y1,z1, ...]
// embossDepth:   extrusion depth (for future solid construction)
// deflection:    mesher deflection
// Returns shape handle, or -1 on failure.
int occBuildFaceFromPoints(emscripten::val contourPoints, double embossDepth, double deflection);

// Unified projection + preview: projects text contours onto mesh, builds face,
// and returns all intermediate data for JS preview rendering.
//
// Returns emscripten::val JS object:
//   projectedPoints: Float64Array[] — per-contour projected 3D points (flat xyz)
//   curvePoints:     Float64Array[] — per-wire edge samples (flat xyz)
//   meshPositions:   Float32Array   — face triangulation positions
//   meshNormals:     Float32Array   — face triangulation normals
//   meshIndices:     Uint32Array    — face triangulation indices
//   shapeHandle:     int            — face handle (-1 on failure)
emscripten::val occProjectTextOnMeshWithPreview(
    int meshHandle,
    emscripten::val contourData,
    double ox, double oy, double oz,
    double nx, double ny, double nz,
    double ux, double uy, double uz,
    double vx, double vy, double vz,
    double textHeight,
    double embossDepth,
    double deflection);
