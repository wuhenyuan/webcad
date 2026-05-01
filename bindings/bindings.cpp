#include <emscripten/bind.h>
#include "../core/geometry.h"
#include "../core/occ_geometry.h"

using namespace emscripten;

// Legacy overloads (embind does not support default arguments)
static BoxGeometry createBox_0() { return createBox(1.0f, 1.0f, 1.0f); }
static BoxGeometry createBox_1(float s) { return createBox(s, s, s); }
static BoxGeometry createBox_3(float w, float h, float d) { return createBox(w, h, d); }

EMSCRIPTEN_BINDINGS(GeometryBindings) {
    // ---- Vector registrations ----
    register_vector<float>("VectorFloat");
    register_vector<unsigned int>("VectorUint");
    register_vector<Face>("VectorFace");
    register_vector<Surface>("VectorSurface");

    // ---- Value objects ----
    value_object<Vec3>("Vec3")
        .field("x", &Vec3::x)
        .field("y", &Vec3::y)
        .field("z", &Vec3::z);

    value_object<Surface>("Surface")
        .field("type", &Surface::type)
        .field("params", &Surface::params);

    value_object<Face>("Face")
        .field("surfaceIndex", &Face::surfaceIndex)
        .field("uMin", &Face::uMin)
        .field("uMax", &Face::uMax)
        .field("vMin", &Face::vMin)
        .field("vMax", &Face::vMax)
        .field("orientation", &Face::orientation)
        .field("label", &Face::label);

    value_object<Shape>("Shape")
        .field("faces", &Shape::faces)
        .field("surfaces", &Shape::surfaces)
        .field("name", &Shape::name);

    value_object<FaceMesh>("FaceMesh")
        .field("positions", &FaceMesh::positions)
        .field("normals", &FaceMesh::normals)
        .field("uvs", &FaceMesh::uvs)
        .field("indices", &FaceMesh::indices);

    // Legacy
    value_object<BoxGeometry>("BoxGeometry")
        .field("positions", &BoxGeometry::positions)
        .field("normals",  &BoxGeometry::normals)
        .field("indices",  &BoxGeometry::indices);

    // ---- Functions ----
    // Legacy
    function("createBox", &createBox_0);
    function("createBox", &createBox_1);
    function("createBox", &createBox_3);

    // Phase 2: shape creation
    function("createSphere",   &createSphere);
    function("createCylinder", &createCylinder);
    function("createCone",     &createCone);
    function("createBoxShape", &createBoxShape);

    // Phase 2: topology / surface / tessellation
    function("shapeFaceCount",     &shapeFaceCount);
    function("tessellateFace",     &tessellateFace);
    function("surfaceUVToXYZ",     &surfaceUVToXYZ);
    function("surfaceNormalAtUV",  &surfaceNormalAtUV);
    function("faceUVToXYZ",        &faceUVToXYZ);
    function("faceNormalAtUV",     &faceNormalAtUV);
    function("shapeGetSurface",    &shapeGetSurface);

    // Phase 2: debug
    function("shapeDebugPrint", &shapeDebugPrint);
    function("faceDebugPrint",  &faceDebugPrint);
}

// ---- Phase 3: OCCT-based bindings ----
// Default-argument overloads for occMakeBox et al.
static OccMesh occMakeBox_3(double dx, double dy, double dz) {
    return occMakeBox(dx, dy, dz, 0.1);
}
static OccMesh occMakeBox_4(double dx, double dy, double dz, double defl) {
    return occMakeBox(dx, dy, dz, defl);
}
static OccMesh occMakeSphere_1(double r) {
    return occMakeSphere(r, 0.1);
}
static OccMesh occMakeSphere_2(double r, double defl) {
    return occMakeSphere(r, defl);
}
static OccMesh occMakeCylinder_2(double r, double h) {
    return occMakeCylinder(r, h, 0.1);
}
static OccMesh occMakeCylinder_3(double r, double h, double defl) {
    return occMakeCylinder(r, h, defl);
}

EMSCRIPTEN_BINDINGS(OccGeometryBindings) {
    value_object<OccMesh>("OccMesh")
        .field("positions", &OccMesh::positions)
        .field("normals",   &OccMesh::normals)
        .field("indices",   &OccMesh::indices);

    function("occMakeBox",      &occMakeBox_3);
    function("occMakeBox",      &occMakeBox_4);
    function("occMakeSphere",   &occMakeSphere_1);
    function("occMakeSphere",   &occMakeSphere_2);
    function("occMakeCylinder", &occMakeCylinder_2);
    function("occMakeCylinder", &occMakeCylinder_3);
}
