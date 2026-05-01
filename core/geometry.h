#pragma once
#include <vector>

struct BoxGeometry {
    std::vector<float> positions;
    std::vector<float> normals;
    std::vector<unsigned int> indices;
};

// width=X, height=Y, depth=Z, centered at origin
BoxGeometry createBox(float width = 1.0f, float height = 1.0f, float depth = 1.0f);
