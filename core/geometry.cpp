#include "geometry.h"

BoxGeometry createBox(float width, float height, float depth) {
    float hw = width * 0.5f;
    float hh = height * 0.5f;
    float hd = depth * 0.5f;

    // 6 faces, each face has a normal and 4 corner positions
    struct Face {
        float nx, ny, nz;
        int i0, i1, i2, i3;
    };

    //  8 unique corners
    //   (indices are into corners array)
    //   4-------6       y
    //  /|      /|       |
    // 0-------2 |       +-- x
    // | 7-----|-5      /
    // |/      |/      z
    // 3-------1
    float corners[8][3] = {
        {-hw,  hh,  hd}, // 0: left  top    back
        { hw,  hh,  hd}, // 1: right top    back
        { hw, -hh,  hd}, // 2: right bottom back
        {-hw, -hh,  hd}, // 3: left  bottom back
        {-hw,  hh, -hd}, // 4: left  top    front
        { hw,  hh, -hd}, // 5: right top    front
        { hw, -hh, -hd}, // 6: right bottom front
        {-hw, -hh, -hd}, // 7: left  bottom front
    };

    Face faces[6] = {
        { 0, 0,-1,   4,5,6,7 }, // front  (+z)
        { 0, 0, 1,   0,1,2,3 }, // back   (-z)
        {-1, 0, 0,   3,7,4,0 }, // left   (-x)
        { 1, 0, 0,   1,5,6,2 }, // right  (+x)
        { 0, 1, 0,   0,4,5,1 }, // top    (+y)
        { 0,-1, 0,   3,2,6,7 }, // bottom (-y)
    };

    BoxGeometry geo;

    for (auto& f : faces) {
        unsigned int base = static_cast<unsigned int>(geo.positions.size() / 3);
        // 4 vertices per face
        for (int v = 0; v < 4; v++) {
            int ci = (&f.i0)[v];
            geo.positions.push_back(corners[ci][0]);
            geo.positions.push_back(corners[ci][1]);
            geo.positions.push_back(corners[ci][2]);
            geo.normals.push_back(f.nx);
            geo.normals.push_back(f.ny);
            geo.normals.push_back(f.nz);
        }
        // 2 triangles per face: (0,1,2) and (0,2,3)
        geo.indices.push_back(base);
        geo.indices.push_back(base + 1);
        geo.indices.push_back(base + 2);
        geo.indices.push_back(base);
        geo.indices.push_back(base + 2);
        geo.indices.push_back(base + 3);
    }

    return geo;
}
