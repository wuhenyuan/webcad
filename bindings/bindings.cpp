#include <emscripten/bind.h>
#include "../core/geometry.h"

using namespace emscripten;

// Embind does not support default arguments directly.
// Provide an overload set so JS can call createBox(), createBox(w), createBox(w,h,d).
static BoxGeometry createBox_0() { return createBox(1.0f, 1.0f, 1.0f); }
static BoxGeometry createBox_1(float s) { return createBox(s, s, s); }
static BoxGeometry createBox_3(float w, float h, float d) { return createBox(w, h, d); }

EMSCRIPTEN_BINDINGS(GeometryBindings) {
    register_vector<float>("VectorFloat");
    register_vector<unsigned int>("VectorUint");

    value_object<BoxGeometry>("BoxGeometry")
        .field("positions", &BoxGeometry::positions)
        .field("normals",  &BoxGeometry::normals)
        .field("indices",  &BoxGeometry::indices);

    function("createBox", &createBox_0);
    function("createBox", &createBox_1);
    function("createBox", &createBox_3);
}
