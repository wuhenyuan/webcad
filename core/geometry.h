#pragma once
#include <vector>
#include <string>

// ============================================================
// Phase 1: Legacy flat mesh (kept for backward compat)
// ============================================================
struct BoxGeometry {
    std::vector<float> positions;
    std::vector<float> normals;
    std::vector<unsigned int> indices;
};

BoxGeometry createBox(float width = 1.0f, float height = 1.0f, float depth = 1.0f);

// ============================================================
// Phase 2: OCCT-topology types
// ============================================================

// Surface kinds — mirrors OCCT Geom_Surface hierarchy
// 0=Plane:  O + u*U + v*V                          (9 params: O,U,V)
// 1=Cyl:    O + R*cos(u)*X + R*sin(u)*Y + v*Axis  (10 params: O,Axis,X,radius)
// 2=Sphere: C + R*cos(v)*cos(u)*X + R*sin(v)*A + R*cos(v)*sin(u)*Y
//                                                  (10 params: C,Axis,X,radius)
// 3=Cone:   O+(R+v*tanA)*(cos(u)*X+sin(u)*Y)+v*A  (11 params: O,Axis,X,R,tanA)
// 4=Disc:   O + u*cos(v)*X + u*sin(v)*Y            (9 params: O,X,Y)
//           (polar plane for caps: u=radius, v=angle)

struct Surface {
    int type;
    std::vector<float> params;
};

// A TopoDS_Face: a bounded region of a Surface
struct Face {
    int surfaceIndex;
    float uMin, uMax, vMin, vMax;
    bool orientation; // true=forward, false=reversed
    std::string label;
};

// A TopoDS_Shape: collection of faces + underlying surfaces
struct Shape {
    std::vector<Face> faces;
    std::vector<Surface> surfaces;
    std::string name;
};

// Per-face tessellation result
struct FaceMesh {
    std::vector<float> positions; // xyz interleaved
    std::vector<float> normals;   // xyz interleaved
    std::vector<float> uvs;       // uv interleaved
    std::vector<unsigned int> indices;
};

struct Vec3 { float x, y, z; };

// ---- Shape creation (primitives) ----
Shape createSphere(float radius);
Shape createCylinder(float radius, float height);
Shape createCone(float radiusBottom, float radiusTop, float height);
Shape createBoxShape(float width, float height, float depth);

// ---- Topology queries ----
int shapeFaceCount(const Shape& s);

// ---- Surface evaluation (UV → XYZ) ----
Vec3 surfaceUVToXYZ(const Surface& s, float u, float v);
Vec3 surfaceNormalAtUV(const Surface& s, float u, float v);
// Convenience: evaluate from shape + faceIndex directly
Vec3 faceUVToXYZ(const Shape& s, int faceIndex, float u, float v);
Vec3 faceNormalAtUV(const Shape& s, int faceIndex, float u, float v);
Surface shapeGetSurface(const Shape& s, int faceIndex);

// ---- Per-face tessellation ----
FaceMesh tessellateFace(const Shape& s, int faceIndex, int resolution);

// ---- Debug ----
void shapeDebugPrint(const Shape& s);
void faceDebugPrint(const Shape& s, int faceIndex);
