#include "geometry.h"
#include <cmath>
#include <cstdio>

#ifndef M_PI
#define M_PI 3.14159265358979323846f
#endif

// ============================================================
// Helpers
// ============================================================
static inline Vec3 v3(float x, float y, float z) { return {x, y, z}; }
static inline Vec3 add(const Vec3& a, const Vec3& b) { return {a.x + b.x, a.y + b.y, a.z + b.z}; }
static inline Vec3 sub(const Vec3& a, const Vec3& b) { return {a.x - b.x, a.y - b.y, a.z - b.z}; }
static inline Vec3 mul(const Vec3& a, float s) { return {a.x * s, a.y * s, a.z * s}; }
static inline float dot(const Vec3& a, const Vec3& b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
static inline Vec3 cross(const Vec3& a, const Vec3& b) {
    return {a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x};
}
static inline float len(const Vec3& a) { return std::sqrt(dot(a, a)); }
static inline Vec3 normalize(const Vec3& a) {
    float l = len(a);
    if (l < 1e-10f) return {0, 0, 0};
    float s = 1.0f / l;
    return {a.x * s, a.y * s, a.z * s};
}

// Build two orthonormal vectors perpendicular to a given (normalized) axis.
// Result: (e1, axis, e2) is right-handed orthonormal.
static void buildBasis(const Vec3& axis, Vec3& e1, Vec3& e2) {
    Vec3 ref = (std::fabs(axis.x) < 0.9f) ? v3(1, 0, 0) : v3(0, 1, 0);
    e1 = normalize(cross(axis, ref));
    e2 = cross(e1, axis);
}

// ---- Surface param decoders ----
struct SP {
    const std::vector<float>& p;
    SP(const std::vector<float>& p_) : p(p_) {}
    Vec3 origin() const { return {p[0], p[1], p[2]}; }
    // For types that use Axis+X: Cylinder, Sphere, Cone
    Vec3 axis() const { return {p[3], p[4], p[5]}; }
    Vec3 xDir() const { return {p[6], p[7], p[8]}; }
    float radius() const { return p[9]; }
    // For Plane / Disc: the two directions
    Vec3 uDir() const { return {p[3], p[4], p[5]}; }
    Vec3 vDir() const { return {p[6], p[7], p[8]}; }
    // For Cone
    float tanHalfAngle() const { return p[10]; }
};

// ============================================================
// Surface evaluation
// ============================================================
Vec3 surfaceUVToXYZ(const Surface& s, float u, float v) {
    SP sp(s.params);
    switch (s.type) {
    case 0: { // Plane: O + u*U + v*V
        return add(add(sp.origin(), mul(sp.uDir(), u)), mul(sp.vDir(), v));
    }
    case 4: { // Disc (polar plane): O + u*cos(v)*X + u*sin(v)*Y
        return add(sp.origin(),
                   add(mul(sp.uDir(), u * std::cos(v)),
                       mul(sp.vDir(), u * std::sin(v))));
    }
    case 1: { // Cylinder: O + R*(cos(u)*e1 + sin(u)*e2) + v*Axis
        Vec3 e1 = sp.xDir();
        Vec3 e2 = cross(sp.axis(), e1);
        return add(add(sp.origin(),
                       add(mul(e1, sp.radius() * std::cos(u)),
                           mul(e2, sp.radius() * std::sin(u)))),
                   mul(sp.axis(), v));
    }
    case 2: { // Sphere: C + R*cos(v)*cos(u)*X + R*sin(v)*Axis + R*cos(v)*sin(u)*Y
        Vec3 e2 = cross(sp.axis(), sp.xDir());
        return add(sp.origin(),
                   add(add(mul(sp.xDir(), sp.radius() * std::cos(v) * std::cos(u)),
                           mul(sp.axis(), sp.radius() * std::sin(v))),
                       mul(e2, sp.radius() * std::cos(v) * std::sin(u))));
    }
    case 3: { // Cone: O + (R+v*tanA)*(cos(u)*X + sin(u)*Y) + v*Axis
        Vec3 e2 = cross(sp.axis(), sp.xDir());
        float rv = sp.radius() + v * sp.tanHalfAngle();
        return add(add(sp.origin(),
                       add(mul(sp.xDir(), rv * std::cos(u)),
                           mul(e2, rv * std::sin(u)))),
                   mul(sp.axis(), v));
    }
    default:
        return {0, 0, 0};
    }
}

Vec3 surfaceNormalAtUV(const Surface& s, float u, float v) {
    SP sp(s.params);
    switch (s.type) {
    case 0: // Plane: constant normal = normalize(U x V)
        return normalize(cross(sp.uDir(), sp.vDir()));
    case 4: // Disc: constant normal = normalize(X x Y)
        return normalize(cross(sp.uDir(), sp.vDir()));
    case 1: { // Cylinder: outward radial = cos(u)*e1 + sin(u)*e2
        Vec3 e2 = cross(sp.axis(), sp.xDir());
        return add(mul(sp.xDir(), std::cos(u)), mul(e2, std::sin(u)));
    }
    case 2: { // Sphere: outward = (value - center) / R
        Vec3 pt = surfaceUVToXYZ(s, u, v);
        return normalize(sub(pt, sp.origin()));
    }
    case 3: { // Cone: outward = (cos(u), -tanA, sin(u)) in local frame
        Vec3 e2 = cross(sp.axis(), sp.xDir());
        float tanA = sp.tanHalfAngle();
        return normalize(add(add(mul(sp.xDir(), std::cos(u)),
                                  mul(sp.axis(), -tanA)),
                              mul(e2, std::sin(u))));
    }
    default:
        return {0, 1, 0};
    }
}

// ============================================================
// Shape construction
// ============================================================
Shape createSphere(float radius) {
    Shape s;
    s.name = "Sphere";

    Surface surf;
    surf.type = 2;
    // center(0,0,0), axis(0,1,0), xDir(1,0,0), radius
    surf.params = {0, 0, 0, 0, 1, 0, 1, 0, 0, radius};
    s.surfaces.push_back(surf);

    Face f;
    f.surfaceIndex = 0;
    f.uMin = 0;
    f.uMax = 2.0f * M_PI;
    f.vMin = -M_PI / 2.0f;
    f.vMax = M_PI / 2.0f;
    f.orientation = true;
    f.label = "sphere face";
    s.faces.push_back(f);

    return s;
}

Shape createCylinder(float radius, float height) {
    Shape s;
    s.name = "Cylinder";
    float hh = height * 0.5f;

    // Surface 0: cylindrical lateral
    // origin at axis center, axis=+Y, xDir=(1,0,0)
    // value(u,v) = O + R*(cos(u)*X + sin(u)*Y_perp) + v*Axis
    // y = v, so v ranges [-hh, hh]
    Surface cyl;
    cyl.type = 1;
    cyl.params = {0, 0, 0, 0, 1, 0, 1, 0, 0, radius};
    s.surfaces.push_back(cyl);

    // Surface 1: top disc
    Surface topSurf;
    topSurf.type = 4;
    topSurf.params = {0, hh, 0, 1, 0, 0, 0, 0, 1};
    s.surfaces.push_back(topSurf);

    // Surface 2: bottom disc
    Surface botSurf;
    botSurf.type = 4;
    botSurf.params = {0, -hh, 0, 1, 0, 0, 0, 0, 1};
    s.surfaces.push_back(botSurf);

    // Face 0: lateral
    Face lat;
    lat.surfaceIndex = 0;
    lat.uMin = 0;
    lat.uMax = 2.0f * M_PI;
    lat.vMin = -hh;
    lat.vMax = hh;
    lat.orientation = true;
    lat.label = "lateral";
    s.faces.push_back(lat);

    // Face 1: top
    Face top;
    top.surfaceIndex = 1;
    top.uMin = 0;
    top.uMax = radius;
    top.vMin = 0;
    top.vMax = 2.0f * M_PI;
    top.orientation = true;
    top.label = "top";
    s.faces.push_back(top);

    // Face 2: bottom
    Face bot;
    bot.surfaceIndex = 2;
    bot.uMin = 0;
    bot.uMax = radius;
    bot.vMin = 0;
    bot.vMax = 2.0f * M_PI;
    bot.orientation = false; // outward normal = -Y
    bot.label = "bottom";
    s.faces.push_back(bot);

    return s;
}

Shape createCone(float radiusBottom, float radiusTop, float height) {
    Shape s;
    s.name = "Cone";
    float hh = height * 0.5f;
    float tanA = (radiusTop - radiusBottom) / height;

    // Surface 0: conical lateral
    // origin at bottom center, axis=+Y, xDir=(1,0,0)
    Surface cone;
    cone.type = 3;
    cone.params = {0, -hh, 0, 0, 1, 0, 1, 0, 0, radiusBottom, tanA};
    s.surfaces.push_back(cone);

    // Surface 1: bottom disc
    Surface botSurf;
    botSurf.type = 4;
    botSurf.params = {0, -hh, 0, 1, 0, 0, 0, 0, 1};
    s.surfaces.push_back(botSurf);

    // Face 0: lateral
    Face lat;
    lat.surfaceIndex = 0;
    lat.uMin = 0;
    lat.uMax = 2.0f * M_PI;
    lat.vMin = 0;
    lat.vMax = height;
    lat.orientation = true;
    lat.label = "lateral";
    s.faces.push_back(lat);

    // Face 1: bottom
    Face bot;
    bot.surfaceIndex = 1;
    bot.uMin = 0;
    bot.uMax = radiusBottom;
    bot.vMin = 0;
    bot.vMax = 2.0f * M_PI;
    bot.orientation = false;
    bot.label = "bottom";
    s.faces.push_back(bot);

    // Face 2: top (only if radiusTop > 0)
    if (radiusTop > 1e-6f) {
        Surface topSurf;
        topSurf.type = 4;
        topSurf.params = {0, hh, 0, 1, 0, 0, 0, 0, 1};
        int idx = (int)s.surfaces.size();
        s.surfaces.push_back(topSurf);

        Face top;
        top.surfaceIndex = idx;
        top.uMin = 0;
        top.uMax = radiusTop;
        top.vMin = 0;
        top.vMax = 2.0f * M_PI;
        top.orientation = true;
        top.label = "top";
        s.faces.push_back(top);
    }

    return s;
}

Shape createBoxShape(float width, float height, float depth) {
    Shape s;
    s.name = "Box";
    float hw = width * 0.5f, hh = height * 0.5f, hd = depth * 0.5f;

    // 6 planar surfaces, one per box face
    struct { Vec3 o, u, v; const char* label; } planes[6] = {
        {{ hw, 0, 0}, {0, 0,-1}, {0,-1, 0}, "+X"},
        {{-hw, 0, 0}, {0, 0, 1}, {0,-1, 0}, "-X"},
        {{0,  hh, 0}, {1, 0, 0}, {0, 0,-1}, "+Y"},
        {{0, -hh, 0}, {1, 0, 0}, {0, 0, 1}, "-Y"},
        {{0, 0,  hd}, {1, 0, 0}, {0,-1, 0}, "+Z"},
        {{0, 0, -hd}, {-1,0, 0}, {0,-1, 0}, "-Z"},
    };

    for (int i = 0; i < 6; i++) {
        Surface surf;
        surf.type = 0; // Plane
        auto& pl = planes[i];
        surf.params = {pl.o.x, pl.o.y, pl.o.z,
                       pl.u.x, pl.u.y, pl.u.z,
                       pl.v.x, pl.v.y, pl.v.z};
        s.surfaces.push_back(surf);

        // Face bounds: uv range that covers the rectangular face
        float uExtent = (i < 2) ? depth : width;  // depends on orientation
        float vExtent = (i < 2) ? height : ((i < 4) ? depth : height);

        Face f;
        f.surfaceIndex = i;
        f.uMin = -uExtent * 0.5f;
        f.uMax =  uExtent * 0.5f;
        f.vMin = -vExtent * 0.5f;
        f.vMax =  vExtent * 0.5f;
        f.orientation = true;
        f.label = pl.label;
        s.faces.push_back(f);
    }

    return s;
}

// ============================================================
// Topology queries
// ============================================================
int shapeFaceCount(const Shape& s) {
    return (int)s.faces.size();
}

// Convenience: evaluate from shape + faceIndex
Vec3 faceUVToXYZ(const Shape& s, int faceIndex, float u, float v) {
    if (faceIndex < 0 || faceIndex >= (int)s.faces.size()) return {0, 0, 0};
    const Face& f = s.faces[faceIndex];
    if (f.surfaceIndex < 0 || f.surfaceIndex >= (int)s.surfaces.size()) return {0, 0, 0};
    return surfaceUVToXYZ(s.surfaces[f.surfaceIndex], u, v);
}

Vec3 faceNormalAtUV(const Shape& s, int faceIndex, float u, float v) {
    if (faceIndex < 0 || faceIndex >= (int)s.faces.size()) return {0, 0, 1};
    const Face& f = s.faces[faceIndex];
    if (f.surfaceIndex < 0 || f.surfaceIndex >= (int)s.surfaces.size()) return {0, 0, 1};
    Vec3 n = surfaceNormalAtUV(s.surfaces[f.surfaceIndex], u, v);
    if (!f.orientation) n = mul(n, -1.0f);
    return n;
}

Surface shapeGetSurface(const Shape& s, int faceIndex) {
    if (faceIndex < 0 || faceIndex >= (int)s.faces.size()) return {};
    const Face& f = s.faces[faceIndex];
    if (f.surfaceIndex < 0 || f.surfaceIndex >= (int)s.surfaces.size()) return {};
    return s.surfaces[f.surfaceIndex];
}

// ============================================================
// Tessellation
// ============================================================
static void tessellateGrid(const Surface& surface, const Face& face,
                           int resU, int resV, FaceMesh& mesh) {
    int nu = resU + 1, nv = resV + 1;
    for (int j = 0; j < nv; j++) {
        float v = face.vMin + (face.vMax - face.vMin) * j / resV;
        for (int i = 0; i < nu; i++) {
            float u = face.uMin + (face.uMax - face.uMin) * i / resU;
            Vec3 pt = surfaceUVToXYZ(surface, u, v);
            Vec3 n = surfaceNormalAtUV(surface, u, v);
            if (!face.orientation) n = mul(n, -1.0f);
            mesh.positions.insert(mesh.positions.end(), {pt.x, pt.y, pt.z});
            mesh.normals.insert(mesh.normals.end(), {n.x, n.y, n.z});
            mesh.uvs.insert(mesh.uvs.end(), {u, v});
        }
    }
    for (int j = 0; j < resV; j++) {
        for (int i = 0; i < resU; i++) {
            unsigned int a = j * nu + i, b = a + 1, c = a + nu, d = c + 1;
            mesh.indices.insert(mesh.indices.end(), {a, c, b, b, c, d});
        }
    }
}

static void tessellateDisc(const Surface& surface, const Face& face,
                           int resolution, FaceMesh& mesh) {
    int nr = resolution + 1;
    int na = resolution * 2 + 1;

    // Center
    Vec3 ctr = surfaceUVToXYZ(surface, 0, 0);
    Vec3 cn = surfaceNormalAtUV(surface, 0, 0);
    if (!face.orientation) cn = mul(cn, -1.0f);
    mesh.positions.insert(mesh.positions.end(), {ctr.x, ctr.y, ctr.z});
    mesh.normals.insert(mesh.normals.end(), {cn.x, cn.y, cn.z});
    mesh.uvs.insert(mesh.uvs.end(), {0, 0});

    // Rings
    for (int j = 1; j < nr; j++) {
        float r = face.uMax * j / resolution;
        for (int i = 0; i < na; i++) {
            float a = face.vMin + (face.vMax - face.vMin) * i / (na - 1);
            Vec3 pt = surfaceUVToXYZ(surface, r, a);
            Vec3 n = surfaceNormalAtUV(surface, r, a);
            if (!face.orientation) n = mul(n, -1.0f);
            mesh.positions.insert(mesh.positions.end(), {pt.x, pt.y, pt.z});
            mesh.normals.insert(mesh.normals.end(), {n.x, n.y, n.z});
            mesh.uvs.insert(mesh.uvs.end(), {r, a});
        }
    }

    // Center fan
    for (int i = 0; i < na - 1; i++)
        mesh.indices.insert(mesh.indices.end(), {0u, 1u + (unsigned)i, 1u + (unsigned)i + 1u});

    // Ring quads
    for (int j = 1; j < nr - 1; j++) {
        unsigned int bc = 1 + (j - 1) * na;
        unsigned int bn = bc + na;
        for (int i = 0; i < na - 1; i++) {
            unsigned int a = bc + i, b = a + 1, c = bn + i, d = c + 1;
            mesh.indices.insert(mesh.indices.end(), {a, c, b, b, c, d});
        }
    }
}

FaceMesh tessellateFace(const Shape& s, int faceIndex, int resolution) {
    FaceMesh mesh;
    if (faceIndex < 0 || faceIndex >= (int)s.faces.size()) return mesh;

    const Face& face = s.faces[faceIndex];
    const Surface& surface = s.surfaces[face.surfaceIndex];

    if (surface.type == 4) // Disc
        tessellateDisc(surface, face, resolution, mesh);
    else
        tessellateGrid(surface, face, resolution, resolution, mesh);

    return mesh;
}

// ============================================================
// Debug
// ============================================================
void shapeDebugPrint(const Shape& s) {
    const char* typeNames[] = {"Plane", "Cylinder", "Sphere", "Cone", "Disc"};
    printf("Shape: %s\n", s.name.c_str());
    printf("  Faces: %d, Surfaces: %d\n", (int)s.faces.size(), (int)s.surfaces.size());
    for (int i = 0; i < (int)s.faces.size(); i++) {
        const auto& f = s.faces[i];
        printf("  Face[%d]: \"%s\" surfIdx=%d UV=[%.3g,%.3g]x[%.3g,%.3g] orient=%s\n",
               i, f.label.c_str(), f.surfaceIndex,
               f.uMin, f.uMax, f.vMin, f.vMax,
               f.orientation ? "fwd" : "rev");
    }
    for (int i = 0; i < (int)s.surfaces.size(); i++) {
        printf("  Surface[%d]: %s\n", i, typeNames[s.surfaces[i].type]);
    }
}

void faceDebugPrint(const Shape& s, int faceIndex) {
    if (faceIndex < 0 || faceIndex >= (int)s.faces.size()) return;
    const auto& f = s.faces[faceIndex];
    const auto& surf = s.surfaces[f.surfaceIndex];
    const char* typeNames[] = {"Plane", "Cylinder", "Sphere", "Cone", "Disc"};
    printf("Face[%d] \"%s\": surface=%d(%s) UV=[%.3g,%.3g]x[%.3g,%.3g] orient=%s\n",
           faceIndex, f.label.c_str(), f.surfaceIndex, typeNames[surf.type],
           f.uMin, f.uMax, f.vMin, f.vMax,
           f.orientation ? "fwd" : "rev");
    // Sample normals at face corners and center
    for (int j = 0; j <= 2; j++) {
        float v = f.vMin + (f.vMax - f.vMin) * j * 0.5f;
        for (int i = 0; i <= 2; i++) {
            float u = f.uMin + (f.uMax - f.uMin) * i * 0.5f;
            Vec3 pt = surfaceUVToXYZ(surf, u, v);
            Vec3 n = surfaceNormalAtUV(surf, u, v);
            if (!f.orientation) n = mul(n, -1.0f);
            printf("  uv=(%.2f,%.2f) → xyz=(%.3f,%.3f,%.3f) n=(%.3f,%.3f,%.3f)\n",
                   u, v, pt.x, pt.y, pt.z, n.x, n.y, n.z);
        }
    }
}

// ============================================================
// Phase 1 legacy: createBox (backward compat)
// ============================================================
BoxGeometry createBox(float width, float height, float depth) {
    float hw = width * 0.5f;
    float hh = height * 0.5f;
    float hd = depth * 0.5f;
    struct Face_ { float nx, ny, nz; int i0, i1, i2, i3; };
    float corners[8][3] = {
        {-hw,  hh,  hd}, { hw,  hh,  hd}, { hw, -hh,  hd}, {-hw, -hh,  hd},
        {-hw,  hh, -hd}, { hw,  hh, -hd}, { hw, -hh, -hd}, {-hw, -hh, -hd},
    };
    Face_ faces[6] = {
        { 0, 0,-1,  4,5,6,7 }, { 0, 0, 1,  0,1,2,3 },
        {-1, 0, 0,  3,7,4,0 }, { 1, 0, 0,  1,5,6,2 },
        { 0, 1, 0,  0,4,5,1 }, { 0,-1, 0,  3,2,6,7 },
    };
    BoxGeometry geo;
    for (auto& f : faces) {
        unsigned int base = static_cast<unsigned int>(geo.positions.size() / 3);
        for (int v = 0; v < 4; v++) {
            int ci = (&f.i0)[v];
            geo.positions.insert(geo.positions.end(), {corners[ci][0], corners[ci][1], corners[ci][2]});
            geo.normals.insert(geo.normals.end(), {f.nx, f.ny, f.nz});
        }
        geo.indices.insert(geo.indices.end(), {base, base+1, base+2, base, base+2, base+3});
    }
    return geo;
}
