// Mesh text projection — Phase 11
//
// Projects font glyph contours onto arbitrary triangle meshes
// and builds manifold solids via OCCT topology.
//
// Dependencies:
//   - OpenCASCADE 7.8 (BSpline fitting, topology, sewing, healing)
//   - madmann91/bvh v2 (ray-triangle intersection acceleration)
//
// No external dependency beyond OCCT and bvh.

// ============================================================
// 1. Includes
// ============================================================
#define _USE_MATH_DEFINES
#include <cmath>
#include <cstdio>
#include <vector>
#include <algorithm>
#include <limits>
#include <cstdlib>

// BVH
#include "bvh/v2/bvh.h"
#include "bvh/v2/tri.h"
#include "bvh/v2/default_builder.h"
#include "bvh/v2/stack.h"

// OCCT
#include <TopoDS_Shape.hxx>
#include <TopoDS_Face.hxx>
#include <TopoDS_Edge.hxx>
#include <TopoDS_Shell.hxx>
#include <TopoDS_Solid.hxx>
#include <TopoDS_Wire.hxx>
#include <TopoDS_Vertex.hxx>
#include <TopExp_Explorer.hxx>
#include <TopExp.hxx>
#include <BRep_Tool.hxx>
#include <BRep_Builder.hxx>
#include <BRepLib.hxx>
#include <BRepMesh_IncrementalMesh.hxx>
#include <BRepBuilderAPI_MakeEdge.hxx>
#include <BRepBuilderAPI_MakeWire.hxx>
#include <BRepBuilderAPI_MakeFace.hxx>
#include <BRepBuilderAPI_MakeVertex.hxx>
#include <BRepOffsetAPI_MakeThickSolid.hxx>
#include <BRepCheck_Analyzer.hxx>
#include <BRepAdaptor_Curve.hxx>
#include <BRepTools.hxx>
#include <BRepTools_WireExplorer.hxx>
#include <BRepGProp.hxx>
#include <GProp_GProps.hxx>
#include <TopAbs_ShapeEnum.hxx>
#include <TopExp_Explorer.hxx>
#include <TopTools_IndexedDataMapOfShapeListOfShape.hxx>
#include <TopLoc_Location.hxx>
#include <Standard_Failure.hxx>
#include <Geom_Surface.hxx>
#include <Geom_BSplineSurface.hxx>
#include <Geom2d_BSplineCurve.hxx>
#include <Geom2d_Line.hxx>
#include <Geom_BSplineCurve.hxx>
#include <GeomAdaptor_Surface.hxx>
#include <GeomAPI_PointsToBSplineSurface.hxx>
#include <GeomAPI_PointsToBSpline.hxx>
#include <GeomAPI_ProjectPointOnSurf.hxx>
#include <Geom_OffsetSurface.hxx>
#include <GeomProjLib.hxx>
#include <TColgp_Array1OfPnt.hxx>
#include <TColgp_Array2OfPnt.hxx>
#include <TColgp_Array1OfPnt2d.hxx>
#include <gp_Pnt.hxx>
#include <gp_Pnt2d.hxx>
#include <gp_Vec.hxx>
#include <gp_Dir.hxx>
#include <gp_Pln.hxx>
#include <gp_Trsf.hxx>
#include <Adaptor3d_Curve.hxx>
#include <Geom2dAdaptor_Curve.hxx>
#include <GCPnts_UniformDeflection.hxx>
#include <Geom2d_BezierCurve.hxx>
#include <ShapeFix_Solid.hxx>
#include <ShapeFix_Face.hxx>
#include <ShapeFix_Edge.hxx>
#include <math_Jacobi.hxx>
#include <math_Matrix.hxx>
#include <GeomLib.hxx>

#include <unordered_map>

#include "occ_geometry.h"
#include "occ_geometry_mesh.h"

// ============================================================
// 2. Type aliases for bvh v2
// ============================================================
using BvhNode   = bvh::v2::Node<float, 3>;
using BvhTree   = bvh::v2::Bvh<BvhNode>;
using BvhBBox   = bvh::v2::BBox<float, 3>;
using BvhVec3   = bvh::v2::Vec<float, 3>;
using BvhTri    = bvh::v2::PrecomputedTri<float>;
using BvhRay    = bvh::v2::Ray<float, 3>;
using BvhStack  = bvh::v2::SmallStack<BvhNode::Index, 64>;

// ============================================================
// 3. Internal data structures
// ============================================================

// Per-vertex data after smoothing
struct MeshVertex {
    gp_Pnt pos;
    gp_Vec normal;
};

// Triangle index triplet with precomputed face normal
struct MeshTriangle {
    int i0, i1, i2;
    gp_Vec faceNormal;
};

// Full mesh data including BVH
struct RegisteredMeshData {
    std::vector<MeshVertex>   vertices;
    std::vector<MeshTriangle> triangles;
    std::vector<BvhTri>       bvhTris;    // precomputed triangles
    BvhTree                   bvh;        // acceleration structure
};

// Global mesh registry (same pattern as g_shapeRegistry)
static std::vector<RegisteredMeshData> g_meshRegistry;

// Access the shape registry from occ_geometry.cpp
extern std::vector<TopoDS_Shape> g_shapeRegistry;

// Last projection result face handles
static int g_lastMeshBottomFace = -1;
static int g_lastMeshTopFace   = -1;

// ============================================================
// 4. Helper: gp_Pnt <-> BvhVec3 conversion
// ============================================================

static inline BvhVec3 toBvhVec(const gp_Pnt& p) {
    return BvhVec3(static_cast<float>(p.X()),
                   static_cast<float>(p.Y()),
                   static_cast<float>(p.Z()));
}

static inline BvhVec3 toBvhVec(const gp_Vec& v) {
    return BvhVec3(static_cast<float>(v.X()),
                   static_cast<float>(v.Y()),
                   static_cast<float>(v.Z()));
}

static inline gp_Pnt toGpPnt(const BvhVec3& v) {
    return gp_Pnt(v[0], v[1], v[2]);
}

// ============================================================
// 5. Mesh Registration & Vertex Normal Computation
// ============================================================

int occRegisterTriangleMesh(emscripten::val positions, emscripten::val indices) {
    try {
        int nPos = positions["length"].as<int>();
        int nIdx = indices["length"].as<int>();

        if (nPos < 9 || nIdx < 3) {
            printf("  [occ] registerMesh: too few elements pos=%d idx=%d\n", nPos, nIdx);
            return -1;
        }

        int vertexCount = nPos / 3;
        int triCount    = nIdx / 3;

        RegisteredMeshData mesh;
        mesh.vertices.resize(vertexCount);
        mesh.triangles.resize(triCount);
        mesh.bvhTris.resize(triCount);

        // --- Extract vertices ---
        for (int i = 0; i < vertexCount; i++) {
            mesh.vertices[i].pos = gp_Pnt(
                positions[i * 3 + 0].as<double>(),
                positions[i * 3 + 1].as<double>(),
                positions[i * 3 + 2].as<double>()
            );
            mesh.vertices[i].normal = gp_Vec(0, 0, 0);
        }

        // --- Extract triangles ---
        for (int t = 0; t < triCount; t++) {
            int i0 = indices[t * 3 + 0].as<int>();
            int i1 = indices[t * 3 + 1].as<int>();
            int i2 = indices[t * 3 + 2].as<int>();

            if (i0 < 0 || i0 >= vertexCount ||
                i1 < 0 || i1 >= vertexCount ||
                i2 < 0 || i2 >= vertexCount) {
                printf("  [occ] registerMesh: bad index at tri[%d]\n", t);
                return -1;
            }

            MeshTriangle tri;
            tri.i0 = i0; tri.i1 = i1; tri.i2 = i2;

            // Angle-weighted vertex normal accumulation
            gp_Vec e01(mesh.vertices[i0].pos, mesh.vertices[i1].pos);
            gp_Vec e02(mesh.vertices[i0].pos, mesh.vertices[i2].pos);
            gp_Vec e12(mesh.vertices[i1].pos, mesh.vertices[i2].pos);
            gp_Vec fn = e01.Crossed(e02);
            double fnMag = fn.Magnitude();
            if (fnMag < 1e-20) {
                tri.faceNormal = gp_Vec(0, 0, 1);
                mesh.triangles[t] = tri;
                continue;
            }
            gp_Vec fnUnit = fn / fnMag;
            tri.faceNormal = fnUnit;

            double l01 = e01.Magnitude(), l02 = e02.Magnitude(), l12 = e12.Magnitude();
            if (l01 > 1e-20 && l02 > 1e-20 && l12 > 1e-20) {
                double a0 = acos(std::max(-1.0, std::min(1.0,  e01.Dot(e02) / (l01 * l02))));
                double a1 = acos(std::max(-1.0, std::min(1.0, (-e01).Dot(e12) / (l01 * l12))));
                double a2 = acos(std::max(-1.0, std::min(1.0, (-e02).Dot(-e12) / (l02 * l12))));
                mesh.vertices[i0].normal += fnUnit * a0;
                mesh.vertices[i1].normal += fnUnit * a1;
                mesh.vertices[i2].normal += fnUnit * a2;
            }

            mesh.triangles[t] = tri;
        }

        // --- Normalize vertex normals (area-weighted average) ---
        for (int v = 0; v < vertexCount; v++) {
            double mag = mesh.vertices[v].normal.Magnitude();
            if (mag > 1e-20) {
                mesh.vertices[v].normal = mesh.vertices[v].normal / mag;
            } else {
                mesh.vertices[v].normal = gp_Vec(0, 0, 1);
            }
        }

        // --- Normalize face normals (for fallback queries) ---
        for (auto& tri : mesh.triangles) {
            double mag = tri.faceNormal.Magnitude();
            if (mag > 1e-20) tri.faceNormal = tri.faceNormal / mag;
        }

        // --- Build PrecomputedTri for BVH ---
        std::vector<BvhBBox> bboxes;  bboxes.reserve(triCount);
        std::vector<BvhVec3> centers; centers.reserve(triCount);

        for (int t = 0; t < triCount; t++) {
            const auto& tri = mesh.triangles[t];
            auto& v0 = mesh.vertices[tri.i0].pos;
            auto& v1 = mesh.vertices[tri.i1].pos;
            auto& v2 = mesh.vertices[tri.i2].pos;

            auto bv0 = toBvhVec(v0);
            auto bv1 = toBvhVec(v1);
            auto bv2 = toBvhVec(v2);

            BvhTri pTri(bv0, bv1, bv2);
            mesh.bvhTris[t] = pTri;

            bboxes.push_back(pTri.get_bbox());
            centers.push_back(pTri.get_center());
        }

        // --- Build BVH (single-thread, High quality) ---
        {
            bvh::v2::DefaultBuilder<BvhNode>::Config cfg;
            cfg.quality = bvh::v2::DefaultBuilder<BvhNode>::Quality::High;
            mesh.bvh = bvh::v2::DefaultBuilder<BvhNode>::build(bboxes, centers, cfg);
        }

        int handle = static_cast<int>(g_meshRegistry.size());
        g_meshRegistry.push_back(std::move(mesh));

        printf("  [occ] registerMesh: %d verts %d tris → handle %d\n",
               vertexCount, triCount, handle);
        return handle;

    } catch (Standard_Failure& e) {
        printf("  [occ] registerMesh: OCCT error: %s\n", e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] registerMesh: unknown error\n");
        return -1;
    }
}

void occReleaseMeshHandle(int meshHandle) {
    if (meshHandle >= 0 && meshHandle < static_cast<int>(g_meshRegistry.size())) {
        g_meshRegistry[meshHandle].vertices.clear();
        g_meshRegistry[meshHandle].triangles.clear();
        g_meshRegistry[meshHandle].bvhTris.clear();
        printf("  [occ] releaseMesh: handle %d freed\n", meshHandle);
    }
}

// ============================================================
// 6. Ray Casting via BVH
// ============================================================

struct RayHit {
    float  t;           // parameter along ray
    float  u, v;        // barycentrics (beta, gamma); alpha = 1 - u - v
    int    triIndex;    // triangle index in mesh
    bool   valid;
};

// Cast a ray and find the closest intersection with the mesh.
// Cast a single-direction ray.
static RayHit castRayOneDir(const RegisteredMeshData& mesh,
                             const gp_Pnt& origin,
                             const gp_Vec& dirUnit,
                             float rayLen) {
    RayHit result;
    result.valid = false;
    result.t     = std::numeric_limits<float>::max();

    BvhRay ray(toBvhVec(origin), toBvhVec(dirUnit),
               0.001f, rayLen);

    BvhStack stack;
    const auto& bvh = mesh.bvh;
    const auto& tris = mesh.bvhTris;

    bvh.intersect<false, false>(ray, BvhNode::Index(0), stack,
        [&](size_t firstId, size_t lastId) {
            bool anyHit = false;
            for (size_t i = firstId; i < lastId; i++) {
                int triIdx = static_cast<int>(bvh.prim_ids[i]);
                auto hit = tris[triIdx].intersect(ray, -1e-6f);
                if (hit) {
                    auto [t, u, v] = *hit;
                    if (t < result.t) {
                        result.t        = t;
                        result.u        = u;
                        result.v        = v;
                        result.triIndex = triIdx;
                        result.valid    = true;
                        anyHit = true;
                    }
                }
            }
            return anyHit;
        });

    return result;
}

// Bidirectional ray cast: shoot in +dir then -dir, pick closest hit.
static RayHit castRayClosest(const RegisteredMeshData& mesh,
                              const gp_Pnt& origin,
                              const gp_Vec& direction) {
    double dirMag = direction.Magnitude();
    if (dirMag < 1e-20) return RayHit{};
    gp_Vec dirUnit = direction / dirMag;

    // Shoot in the given direction
    auto hit = castRayOneDir(mesh, origin, dirUnit, 500.0f);
    // Also shoot in the opposite direction
    auto hitRev = castRayOneDir(mesh, origin, -dirUnit, 500.0f);

    if (hitRev.valid && (!hit.valid || hitRev.t < hit.t)) {
        // For reverse hit, flip u,v barycentrics since we intersected from opposite side
        return hitRev;
    }
    return hit;
}

// Find closest point on mesh to a query point (fallback when ray misses).
static bool findClosestPoint(const RegisteredMeshData& mesh,
                              const gp_Pnt& query,
                              int& outTriIndex,
                              float& outU, float& outV) {
    // Brute-force search over all triangles for closest point.
    // For production, a kd-tree or BVH-based nearest search would be better,
    // but brute force over ~12K tris is fast enough for the fallback path.
    double bestDist = 1e30;
    int bestTri = 0;
    float bestU = 0.f, bestV = 0.f;
    bool found = false;

    BvhVec3 q(toBvhVec(query));

    for (int ti = 0; ti < static_cast<int>(mesh.triangles.size()); ti++) {
        const auto& tri = mesh.triangles[ti];
        const auto& v0 = mesh.vertices[tri.i0].pos;
        const auto& v1 = mesh.vertices[tri.i1].pos;
        const auto& v2 = mesh.vertices[tri.i2].pos;

        // Closest point on triangle using barycentric projection
        gp_Vec e0(v0, v1), e1(v0, v2);
        gp_Vec d(v0, query);
        double a = e0.Dot(e0), b = e0.Dot(e1), c = e1.Dot(e1);
        double det = a * c - b * b;
        if (std::abs(det) < 1e-20) continue;

        double d1 = e0.Dot(d), d2 = e1.Dot(d);
        double v = (c * d1 - b * d2) / det;
        double w = (a * d2 - b * d1) / det;
        double u = 1.0 - v - w;

        // Clamp to triangle
        if (v < 0) {
            double vv = std::max(0.0, std::min(1.0, d1 / a));
            w = 0; u = 1.0 - vv;
        } else if (w < 0) {
            double ww = std::max(0.0, std::min(1.0, d2 / c));
            v = 0; u = 1.0 - ww;
        } else if (u < 0) {
            v = std::max(0.0, std::min(1.0, v / (v + w)));
            w = 1.0 - v; u = 0;
        }

        gp_Pnt cp(v0.X() * u + v1.X() * v + v2.X() * w,
                  v0.Y() * u + v1.Y() * v + v2.Y() * w,
                  v0.Z() * u + v1.Z() * v + v2.Z() * w);
        double dist = query.Distance(cp);
        if (dist < bestDist) {
            bestDist = dist;
            bestTri = ti;
            bestU = static_cast<float>(v);
            bestV = static_cast<float>(w);
            found = true;
        }
    }

    if (found) {
        outTriIndex = bestTri;
        outU = bestU;
        outV = bestV;
    }
    return found;
}

// ============================================================
// 7. Barycentric Interpolation
// ============================================================

// Interpolate position and normal from triangle vertex data using
// barycentric coords (alpha, beta, gamma) where alpha = 1 - beta - gamma
static void interpolateBarycentric(const RegisteredMeshData& mesh,
                                    int triIndex,
                                    float beta, float gamma,
                                    gp_Pnt& outPos,
                                    gp_Vec& outNormal) {
    float alpha = 1.0f - beta - gamma;

    const auto& tri = mesh.triangles[triIndex];
    const auto& v0 = mesh.vertices[tri.i0];
    const auto& v1 = mesh.vertices[tri.i1];
    const auto& v2 = mesh.vertices[tri.i2];

    // Interpolate position
    outPos = gp_Pnt(
        alpha * v0.pos.X() + beta * v1.pos.X() + gamma * v2.pos.X(),
        alpha * v0.pos.Y() + beta * v1.pos.Y() + gamma * v2.pos.Y(),
        alpha * v0.pos.Z() + beta * v1.pos.Z() + gamma * v2.pos.Z()
    );

    // Interpolate smooth vertex normal
    outNormal = gp_Vec(
        alpha * v0.normal.X() + beta * v1.normal.X() + gamma * v2.normal.X(),
        alpha * v0.normal.Y() + beta * v1.normal.Y() + gamma * v2.normal.Y(),
        alpha * v0.normal.Z() + beta * v1.normal.Z() + gamma * v2.normal.Z()
    );
    double mag = outNormal.Magnitude();
    if (mag > 1e-20) outNormal = outNormal / mag;
    else outNormal = mesh.triangles[triIndex].faceNormal;
}

// ============================================================
// 8. Contour Sampling (Glyph → Dense 2D Points)
// ============================================================

// Sample a single Bezier curve segment.
// segType: 1=line, 2=quad, 3=cubic
static void sampleSegment2D(int segType,
                             const std::vector<gp_Pnt2d>& poles,
                             double deflection,
                             std::vector<gp_Pnt2d>& outPts) {
    if (poles.size() < 2) return;

    if (segType == 1) {
        // Line: subdivide if too long (max edge length in UV ~ deflection * 5)
        double maxLen = deflection * 5.0;
        gp_Pnt2d p0 = poles.front(), p1 = poles.back();
        double len = p0.Distance(p1);
        int nSeg = std::max(1, (int)std::ceil(len / maxLen));
        if (outPts.empty()) outPts.push_back(p0);
        for (int k = 1; k <= nSeg; k++) {
            double t = (double)k / nSeg;
            outPts.emplace_back(p0.X() * (1 - t) + p1.X() * t,
                                p0.Y() * (1 - t) + p1.Y() * t);
        }
        return;
    }

    // Build Geom2d_BezierCurve from poles
    TColgp_Array1OfPnt2d arr(1, static_cast<Standard_Integer>(poles.size()));
    for (size_t i = 0; i < poles.size(); i++) {
        arr(static_cast<Standard_Integer>(i + 1)) = poles[i];
    }
    Handle(Geom2d_BezierCurve) bezier = new Geom2d_BezierCurve(arr);

    // Adaptive sampling via OCCT deflection sampler
    Geom2dAdaptor_Curve adaptor(bezier);
    GCPnts_UniformDeflection sampler(adaptor, deflection);

    if (sampler.IsDone() && sampler.NbPoints() > 0) {
        if (outPts.empty()) {
            gp_Pnt p = sampler.Value(1);
            outPts.emplace_back(p.X(), p.Y());
        }
        for (int i = 2; i <= sampler.NbPoints(); i++) {
            gp_Pnt p = sampler.Value(i);
            outPts.emplace_back(p.X(), p.Y());
        }
    } else {
        // Fallback: uniform sampling (dense for smooth projection)
        int nUniform = 32;
        if (outPts.empty()) outPts.push_back(bezier->Value(0.0));
        for (int i = 1; i <= nUniform; i++) {
            double t = static_cast<double>(i) / nUniform;
            outPts.push_back(bezier->Value(t));
        }
    }
}

// Parse contour data from JS format into 2D sample points per contour.
// Returns number of successfully parsed contours.
static int parseAndSampleContours(emscripten::val contourData,
                                   double deflection,
                                   std::vector<std::vector<gp_Pnt2d>>& outContours) {
    int numContours = contourData["length"].as<int>();
    if (numContours < 1) return 0;

    int ok = 0;
    for (int ci = 0; ci < numContours; ci++) {
        emscripten::val arr = contourData[ci];
        int n = arr["length"].as<int>();
        if (n < 3) continue;  // need at least [numSegments, type, npts, ...]

        int numSegments = static_cast<int>(arr[0].as<double>());
        if (numSegments < 1) continue;

        std::vector<gp_Pnt2d> contourPts;
        int off = 1;

        for (int si = 0; si < numSegments; si++) {
            if (off + 1 >= n) break;
            int segType = static_cast<int>(arr[off].as<double>());
            int npts    = static_cast<int>(arr[off + 1].as<double>());
            if (npts < 2 || npts > 25) break;
            if (off + 1 + npts * 2 > n) break;
            off += 2;

            std::vector<gp_Pnt2d> poles;
            for (int k = 0; k < npts; k++) {
                double u = arr[off + k * 2].as<double>();
                double v = arr[off + k * 2 + 1].as<double>();
                poles.emplace_back(u, v);
            }
            off += npts * 2;

            sampleSegment2D(segType, poles, deflection, contourPts);
        }

        // Filter degenerate adjacent points
        std::vector<gp_Pnt2d> filtered;
        filtered.push_back(contourPts.front());
        for (size_t i = 1; i < contourPts.size(); i++) {
            double du = contourPts[i].X() - filtered.back().X();
            double dv = contourPts[i].Y() - filtered.back().Y();
            if (du * du + dv * dv > 1e-18) {
                filtered.push_back(contourPts[i]);
            }
        }
        if (filtered.size() >= 3) {
            outContours.push_back(std::move(filtered));
            ok++;
        }
    }
    return ok;
}

// ============================================================
// 9. BSpline Surface Fitting from Mesh Region (PCA-based)
// ============================================================

static std::vector<gp_Pnt> voxelGridDownsample(
    const std::vector<gp_Pnt>& points, int targetCount)
{
    if ((int)points.size() <= targetCount) return points;

    double xMin = 1e30, yMin = 1e30, zMin = 1e30;
    double xMax = -1e30, yMax = -1e30, zMax = -1e30;
    for (auto& p : points) {
        if (p.X() < xMin) xMin = p.X(); if (p.X() > xMax) xMax = p.X();
        if (p.Y() < yMin) yMin = p.Y(); if (p.Y() > yMax) yMax = p.Y();
        if (p.Z() < zMin) zMin = p.Z(); if (p.Z() > zMax) zMax = p.Z();
    }

    double span = std::max({xMax - xMin, yMax - yMin, zMax - zMin});
    if (span < 1e-12) return points;

    double voxelSize = span / std::cbrt((double)targetCount * 1.5);

    struct VoxelKey {
        int ix, iy, iz;
        bool operator==(const VoxelKey& o) const { return ix == o.ix && iy == o.iy && iz == o.iz; }
    };
    struct VoxelHash {
        size_t operator()(const VoxelKey& k) const {
            return std::hash<int>()(k.ix) ^ (std::hash<int>()(k.iy) << 11) ^ (std::hash<int>()(k.iz) << 22);
        }
    };
    struct Accum { double sx = 0, sy = 0, sz = 0; int count = 0; };

    std::unordered_map<VoxelKey, Accum, VoxelHash> buckets;
    for (auto& p : points) {
        VoxelKey key{(int)std::floor((p.X() - xMin) / voxelSize),
                     (int)std::floor((p.Y() - yMin) / voxelSize),
                     (int)std::floor((p.Z() - zMin) / voxelSize)};
        auto& a = buckets[key];
        a.sx += p.X(); a.sy += p.Y(); a.sz += p.Z(); a.count++;
    }

    std::vector<gp_Pnt> result;
    result.reserve(buckets.size());
    for (auto& [k, a] : buckets) {
        result.emplace_back(a.sx / a.count, a.sy / a.count, a.sz / a.count);
    }
    printf("  [occ] voxelGridDownsample: %zu -> %zu points (voxel=%.4f)\n",
           points.size(), result.size(), voxelSize);
    return result;
}

static Handle(Geom_BSplineSurface) fitMeshRegionSurface(
    const std::vector<gp_Pnt>& inputPoints,
    const gp_Vec& expectedNormal)
{
    if (inputPoints.size() < 4) {
        printf("  [occ] fitMeshRegionSurface: too few points (%zu)\n", inputPoints.size());
        return nullptr;
    }

    // --- Step 1: Voxel downsampling if too many points ---
    std::vector<gp_Pnt> pts;
    if ((int)inputPoints.size() > 2000) {
        pts = voxelGridDownsample(inputPoints, 750);
    } else {
        pts = inputPoints;
    }

    // --- Step 2: Compute centroid ---
    gp_Pnt centroid(0, 0, 0);
    for (auto& p : pts) {
        centroid.ChangeCoord() += p.Coord();
    }
    centroid.ChangeCoord() /= (double)pts.size();

    // --- Step 3: PCA via covariance matrix + Jacobi eigendecomposition ---
    double cov[3][3] = {};
    for (auto& p : pts) {
        double dx = p.X() - centroid.X();
        double dy = p.Y() - centroid.Y();
        double dz = p.Z() - centroid.Z();
        cov[0][0] += dx * dx; cov[0][1] += dx * dy; cov[0][2] += dx * dz;
        cov[1][1] += dy * dy; cov[1][2] += dy * dz;
        cov[2][2] += dz * dz;
    }
    double n = (double)pts.size();
    cov[0][0] /= n; cov[0][1] /= n; cov[0][2] /= n;
    cov[1][1] /= n; cov[1][2] /= n;
    cov[2][2] /= n;
    cov[1][0] = cov[0][1]; cov[2][0] = cov[0][2]; cov[2][1] = cov[1][2];

    math_Matrix covMat(1, 3, 1, 3);
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            covMat(i + 1, j + 1) = cov[i][j];

    math_Jacobi jacobi(covMat);
    if (!jacobi.IsDone()) {
        printf("  [occ] fitMeshRegionSurface: Jacobi eigendecomposition failed\n");
        return nullptr;
    }

    math_Vector eigenvals = jacobi.Values();
    const math_Matrix& eigenvecs = jacobi.Vectors();

    // Sort eigenvalues descending: idx[0]=largest, idx[2]=smallest
    int idx[3] = {1, 2, 3};
    if (eigenvals(idx[0]) < eigenvals(idx[1])) std::swap(idx[0], idx[1]);
    if (eigenvals(idx[0]) < eigenvals(idx[2])) std::swap(idx[0], idx[2]);
    if (eigenvals(idx[1]) < eigenvals(idx[2])) std::swap(idx[1], idx[2]);

    double eval0 = eigenvals(idx[0]);  // largest (U direction spread)
    double eval1 = eigenvals(idx[1]);  // second  (V direction spread)
    double eval2 = eigenvals(idx[2]);  // smallest (normal direction)

    // --- Step 4: Singularity check ---
    if (eval0 < 1e-12) {
        printf("  [occ] fitMeshRegionSurface: degenerate point cloud (zero variance)\n");
        return nullptr;
    }
    double singularityRatio = eval2 / eval0;
    if (singularityRatio > 0.3) {
        printf("  [occ] fitMeshRegionSurface: point cloud too scattered "
"(eigenvalue ratio %.3f > 0.3, PCA parameterization unreliable)\n",
               singularityRatio);
        return nullptr;
    }

    gp_Vec pcaU(eigenvecs(1, idx[0]), eigenvecs(2, idx[0]), eigenvecs(3, idx[0]));
    gp_Vec pcaV(eigenvecs(1, idx[1]), eigenvecs(2, idx[1]), eigenvecs(3, idx[1]));
    gp_Vec pcaN(eigenvecs(1, idx[2]), eigenvecs(2, idx[2]), eigenvecs(3, idx[2]));

    pcaU.Normalize(); pcaV.Normalize(); pcaN.Normalize();

    // Ensure normal roughly aligns with expected normal
    if (pcaN.Dot(expectedNormal) < 0) pcaN.Reverse();
    // Ensure right-handed coordinate system
    gp_Vec cross = pcaU.Crossed(pcaV);
    if (cross.Dot(pcaN) < 0) pcaV.Reverse();

    printf("  [occ] PCA eigenvalues: %.6f, %.6f, %.6f (ratio=%.4f)\n",
           eval0, eval1, eval2, singularityRatio);

    // --- Step 5: Outlier removal (3σ from average plane) ---
    {
        std::vector<double> dists;
        dists.reserve(pts.size());
        for (auto& p : pts) {
            gp_Vec diff(centroid, p);
            dists.push_back(diff.Dot(pcaN));
        }
        double mean = 0;
        for (double d : dists) mean += d;
        mean /= dists.size();

        double var = 0;
        for (double d : dists) var += (d - mean) * (d - mean);
        var /= dists.size();
        double sigma = std::sqrt(var);

        if (sigma > 1e-12) {
            double threshold = 3.0 * sigma;
            std::vector<gp_Pnt> cleaned;
            cleaned.reserve(pts.size());
            int removed = 0;
            for (size_t i = 0; i < pts.size(); i++) {
                if (std::abs(dists[i] - mean) <= threshold) {
                    cleaned.push_back(pts[i]);
                } else {
                    removed++;
                }
            }
            if (removed > 0) {
                printf("  [occ] outlier removal: %d/%zu points removed (σ=%.6f)\n",
                       removed, pts.size(), sigma);
            }
            if (cleaned.size() >= 4) {
                pts = std::move(cleaned);
            }
        }
    }

    // --- Step 6: UV parameterization via projection onto PCA plane ---
    std::vector<double> uParams(pts.size()), vParams(pts.size());
    double uMin = 1e30, uMax = -1e30, vMin = 1e30, vMax = -1e30;

    for (size_t i = 0; i < pts.size(); i++) {
        gp_Vec diff(centroid, pts[i]);
        uParams[i] = diff.Dot(pcaU);
        vParams[i] = diff.Dot(pcaV);
        if (uParams[i] < uMin) uMin = uParams[i];
        if (uParams[i] > uMax) uMax = uParams[i];
        if (vParams[i] < vMin) vMin = vParams[i];
        if (vParams[i] > vMax) vMax = vParams[i];
    }

    double uRange = uMax - uMin;
    double vRange = vMax - vMin;
    if (uRange < 1e-12 || vRange < 1e-12) {
        printf("  [occ] fitMeshRegionSurface: degenerate UV range (%.6f x %.6f)\n", uRange, vRange);
        return nullptr;
    }

    // Normalize to [0, 1]
    for (size_t i = 0; i < pts.size(); i++) {
        uParams[i] = (uParams[i] - uMin) / uRange;
        vParams[i] = (vParams[i] - vMin) / vRange;
    }

    // --- Step 7: Build regular grid from scattered UV points ---
    int gridRes = std::max(5, std::min(25, (int)std::sqrt((double)pts.size())));
    int nu = gridRes, nv = gridRes;

    TColgp_Array2OfPnt grid(1, nu, 1, nv);
    double cellU = 1.0 / (nu - 1);
    double cellV = 1.0 / (nv - 1);

    for (int gi = 0; gi < nu; gi++) {
        for (int gj = 0; gj < nv; gj++) {
            double gu = (double)gi / (nu - 1);
            double gv = (double)gj / (nv - 1);

            double totalWeight = 0;
            double wx = 0, wy = 0, wz = 0;
            double searchRadius = 2.0 * std::max(cellU, cellV);

            for (size_t k = 0; k < pts.size(); k++) {
                double du = uParams[k] - gu;
                double dv = vParams[k] - gv;
                double dist2 = du * du + dv * dv;
                if (dist2 > searchRadius * searchRadius) continue;
                double w = 1.0 / (dist2 + 1e-8);
                wx += w * pts[k].X();
                wy += w * pts[k].Y();
                wz += w * pts[k].Z();
                totalWeight += w;
            }

            if (totalWeight > 1e-20) {
                grid(gi + 1, gj + 1) = gp_Pnt(wx / totalWeight, wy / totalWeight, wz / totalWeight);
            } else {
                // Fallback: reconstruct position from PCA plane
                double worldU = uMin + gu * uRange;
                double worldV = vMin + gv * vRange;
                grid(gi + 1, gj + 1) = gp_Pnt(
                    centroid.X() + worldU * pcaU.X() + worldV * pcaV.X(),
                    centroid.Y() + worldU * pcaU.Y() + worldV * pcaV.Y(),
                    centroid.Z() + worldU * pcaU.Z() + worldV * pcaV.Z());
            }
        }
    }

    // --- Step 8: BSpline surface fitting ---
    Handle(Geom_BSplineSurface) surface;
    try {
        GeomAPI_PointsToBSplineSurface fitter(grid, 3, 3, GeomAbs_C2, 0.1);
        if (fitter.IsDone()) {
            surface = fitter.Surface();
            printf("  [occ] BSpline surface fitted successfully (%dx%d grid)\n", nu, nv);
        } else {
            printf("  [occ] BSpline fitter IsDone()=false, trying relaxed tolerance\n");
            GeomAPI_PointsToBSplineSurface fitter2(grid, 3, 3, GeomAbs_C1, 0.5);
            if (fitter2.IsDone()) {
                surface = fitter2.Surface();
                printf("  [occ] BSpline surface fitted with relaxed params\n");
            }
        }
    } catch (Standard_Failure& e) {
        printf("  [occ] BSpline fitting exception: %s\n", e.GetMessageString());
    } catch (...) {
        printf("  [occ] BSpline fitting unknown exception\n");
    }

    // --- Step 8b: Fallback to flat BSpline surface from PCA plane ---
    if (surface.IsNull()) {
        printf("  [occ] falling back to flat BSpline surface from PCA plane\n");
        try {
            double pad = std::max(uRange, vRange) * 0.2;
            TColgp_Array2OfPnt flatGrid(1, 2, 1, 2);
            for (int fi = 0; fi < 2; fi++) {
                for (int fj = 0; fj < 2; fj++) {
                    double fu = (uMin - pad) + fi * (uRange + 2 * pad);
                    double fv = (vMin - pad) + fj * (vRange + 2 * pad);
                    flatGrid(fi + 1, fj + 1) = gp_Pnt(
                        centroid.X() + fu * pcaU.X() + fv * pcaV.X(),
                        centroid.Y() + fu * pcaU.Y() + fv * pcaV.Y(),
                        centroid.Z() + fu * pcaU.Z() + fv * pcaV.Z());
                }
            }
            GeomAPI_PointsToBSplineSurface flatFitter(flatGrid, 1, 1, GeomAbs_C0, 1e-6);
            if (flatFitter.IsDone()) {
                surface = flatFitter.Surface();
                printf("  [occ] flat BSpline surface created as fallback\n");
            }
        } catch (...) {
            printf("  [occ] flat BSpline fallback failed\n");
            return nullptr;
        }
    }

    // --- Step 9: UV flip check ---
    {
        double su1, su2, sv1, sv2;
        surface->Bounds(su1, su2, sv1, sv2);
        double uMid = (su1 + su2) * 0.5;
        double vMid = (sv1 + sv2) * 0.5;

        gp_Pnt centerPt;
        gp_Vec dU, dV;
        surface->D1(uMid, vMid, centerPt, dU, dV);
        gp_Vec surfNormal = dU.Crossed(dV);
        double mag = surfNormal.Magnitude();
        if (mag > 1e-12) {
            surfNormal /= mag;
            if (surfNormal.Dot(expectedNormal) < 0) {
                surface->UReverse();
                printf("  [occ] surface UV reversed (normal was flipped)\n");
            }
        }
    }

    // --- Step 10: Boundary extension to cover convex hull ---
    try {
        double extLen = std::max(uRange, vRange) * 0.1;
        Handle(Geom_BoundedSurface) bounded(surface);
        if (!bounded.IsNull()) {
            GeomLib::ExtendSurfByLength(bounded, extLen, 1, Standard_True, Standard_False);
            GeomLib::ExtendSurfByLength(bounded, extLen, 1, Standard_True, Standard_True);
            GeomLib::ExtendSurfByLength(bounded, extLen, 1, Standard_False, Standard_False);
            GeomLib::ExtendSurfByLength(bounded, extLen, 1, Standard_False, Standard_True);
            surface = Handle(Geom_BSplineSurface)::DownCast(bounded);
            printf("  [occ] surface boundaries extended by %.4f\n", extLen);
        }
    } catch (Standard_Failure& e) {
        printf("  [occ] boundary extension failed: %s (continuing)\n", e.GetMessageString());
    } catch (...) {
        printf("  [occ] boundary extension failed (continuing)\n");
    }

    return surface;
}

// ============================================================
// 10. Face from 3D Points + BSpline Surface
// ============================================================

// Build a TopoDS_Wire from projected contour points and a fitted surface.
// Projects each point to UV, builds 2D line pcurves, creates edges with
// automatic 3D curves = surface(pcurve(t)).
static TopoDS_Wire buildWireFrom3DPoints(
    const std::vector<gp_Pnt>& contourPts,
    const Handle(Geom_Surface)& surf)
{
    size_t nPts = contourPts.size();
    if (nPts < 2) return TopoDS_Wire();

    // Get surface UV bounds
    GeomAdaptor_Surface gs(surf);
    double uMin = gs.FirstUParameter(), uMax = gs.LastUParameter();
    double vMin = gs.FirstVParameter(), vMax = gs.LastVParameter();

    // Project all points to UV
    std::vector<gp_Pnt2d> uvPts(nPts);
    for (size_t i = 0; i < nPts; i++) {
        GeomAPI_ProjectPointOnSurf proj(contourPts[i], surf, uMin, uMax, vMin, vMax);
        if (proj.NbPoints() > 0) {
            double uu, vv;
            proj.LowerDistanceParameters(uu, vv);
            uvPts[i] = gp_Pnt2d(uu, vv);
        } else {
            // Use previous neighbor or surface midpoint as fallback
            if (i > 0) uvPts[i] = uvPts[i-1];
            else uvPts[i] = gp_Pnt2d((uMin+uMax)*0.5, (vMin+vMax)*0.5);
        }
    }

    // Build edges from 2D pcurves on surface (OCCT computes 3D curve automatically)
    BRepBuilderAPI_MakeWire wireBuilder;

    for (size_t i = 0; i < nPts; i++) {
        size_t j = (i + 1) % nPts;

        double du = uvPts[j].X() - uvPts[i].X();
        double dv = uvPts[j].Y() - uvPts[i].Y();
        double uvLen = std::sqrt(du*du + dv*dv);
        if (uvLen < 1e-12) continue;

        try {
            // Build 2D line pcurve from uvPts[i] to uvPts[j]
            Handle(Geom2d_Line) pcurve = new Geom2d_Line(
                uvPts[i], gp_Dir2d(du / uvLen, dv / uvLen));

            // Create edge: OCCT computes 3D curve = surface(pcurve(t))
            TopoDS_Edge edge = BRepBuilderAPI_MakeEdge(pcurve, surf);
            if (!edge.IsNull()) {
                wireBuilder.Add(edge);
            }
        } catch (...) {
            continue;
        }
    }

    TopoDS_Wire w = wireBuilder.Wire();
    if (!w.IsNull() && !w.Closed()) {
        w.Closed(Standard_True);
    }
    return w;
}

// Compute signed area of UV points to classify contour orientation.
static double signedAreaUV(const std::vector<gp_Pnt2d>& uvPts) {
    double area = 0;
    for (size_t i = 0; i < uvPts.size(); i++) {
        size_t j = (i + 1) % uvPts.size();
        area += (uvPts[i].X() * uvPts[j].Y() - uvPts[j].X() * uvPts[i].Y());
    }
    return area * 0.5;
}

// ============================================================
// 11. Vertex sharing infrastructure
// ============================================================

// Key: (contour_index, point_index) uniquely identifies a contour point
using VertexKey = std::pair<int, int>;
struct VertexKeyHash {
    size_t operator()(const VertexKey& k) const {
        return std::hash<int>()(k.first) ^ (std::hash<int>()(k.second) << 1);
    }
};

// Vertex pool: ensures all faces referencing the same contour point share
// the same TopoDS_Vertex, eliminating reliance on high sewing tolerance.
struct VertexPool {
    std::unordered_map<VertexKey, TopoDS_Vertex, VertexKeyHash> verts;
    std::unordered_map<VertexKey, gp_Vec, VertexKeyHash> smoothedNormals;

    TopoDS_Vertex get(int ci, int pi, const gp_Pnt& pt) {
        VertexKey key{ci, pi};
        auto it = verts.find(key);
        if (it != verts.end()) return it->second;
        TopoDS_Vertex v = BRepBuilderAPI_MakeVertex(pt);
        verts[key] = v;
        return v;
    }
};

// ============================================================
// 12. Main Projection Function
// ============================================================

int occProjectTextOnMesh(
    int meshHandle,
    emscripten::val contourData,
    double ox, double oy, double oz,
    double nx, double ny, double nz,
    double ux, double uy, double uz,
    double vx, double vy, double vz,
    double textHeight,
    double embossDepth,
    double deflection)
{
    const char* step = "init";
    g_lastMeshBottomFace = -1;
    g_lastMeshTopFace   = -1;

    try {
    // --- Validate mesh handle ---
    if (meshHandle < 0 || meshHandle >= static_cast<int>(g_meshRegistry.size())) {
        printf("  [occ] projectTextOnMesh: invalid meshHandle=%d\n", meshHandle);
        return -1;
    }
    RegisteredMeshData& mesh = g_meshRegistry[meshHandle];

    // --- Placement frame ---
    gp_Pnt origin(ox, oy, oz);
    gp_Vec nAxis(nx, ny, nz);
    gp_Vec uAxi(ux, uy, uz);
    gp_Vec vAxi(vx, vy, vz);

    // Normalize axes
    {
        double magN = nAxis.Magnitude();
        double magU = uAxi.Magnitude();
        double magV = vAxi.Magnitude();
        if (magN < 1e-20 || magU < 1e-20 || magV < 1e-20) {
            printf("  [occ] projectTextOnMesh: degenerate placement frame\n");
            return -1;
        }
        nAxis /= magN; uAxi /= magU; vAxi /= magV;
    }

    step = "parse contours";
    std::vector<std::vector<gp_Pnt2d>> sampledContours;
    int ok = parseAndSampleContours(contourData, deflection, sampledContours);
    if (ok < 1) {
        printf("  [occ] projectTextOnMesh: no valid contours\n");
        return -1;
    }
    printf("  [occ] projectTextOnMesh: %d contours sampled\n", ok);

    // --- Find text bounding box in 2D space ---
    step = "compute bounds";
    double txMin = 1e30, txMax = -1e30, tyMin = 1e30, tyMax = -1e30;
    for (auto& pts : sampledContours) {
        for (auto& p : pts) {
            if (p.X() < txMin) txMin = p.X();
            if (p.X() > txMax) txMax = p.X();
            if (p.Y() < tyMin) tyMin = p.Y();
            if (p.Y() > tyMax) tyMax = p.Y();
        }
    }
    // Add 15% padding for surface fitting margin
    double padX = (txMax - txMin) * 0.15;
    double padY = (tyMax - tyMin) * 0.15;
    if (padX < textHeight * 0.05) padX = textHeight * 0.05;
    if (padY < textHeight * 0.05) padY = textHeight * 0.05;
    txMin -= padX; txMax += padX;
    tyMin -= padY; tyMax += padY;

    // --- Project all contour points onto mesh ---
    step = "ray cast contours";
    std::vector<std::vector<gp_Pnt>> contour3DBottom;
    std::vector<std::vector<gp_Vec>> contourNormals;
    int totalPts = 0, missedPts = 0;

    for (auto& pts2D : sampledContours) {
        std::vector<gp_Pnt> pts3D;
        std::vector<gp_Vec> norms;
        for (auto& p2d : pts2D) {
            totalPts++;
            // Tangent-plane source
            gp_Pnt src(origin.X() + p2d.X() * uAxi.X() + p2d.Y() * vAxi.X(),
                       origin.Y() + p2d.X() * uAxi.Y() + p2d.Y() * vAxi.Y(),
                       origin.Z() + p2d.X() * uAxi.Z() + p2d.Y() * vAxi.Z());

            // Ray cast
            gp_Pnt rayOrigin = src.Translated(nAxis.Multiplied(100.0));  // start high above
            auto hit = castRayClosest(mesh, rayOrigin, -nAxis);

            if (hit.valid) {
                gp_Pnt hp; gp_Vec hn;
                interpolateBarycentric(mesh, hit.triIndex, hit.u, hit.v, hp, hn);
                pts3D.push_back(hp);
                norms.push_back(hn);
            } else {
                missedPts++;
                // Closest-point-on-triangle fallback
                int bestTri = 0;
                float bestU = 0, bestV = 0;
                if (findClosestPoint(mesh, src, bestTri, bestU, bestV)) {
                    gp_Pnt hp; gp_Vec hn;
                    interpolateBarycentric(mesh, bestTri, bestU, bestV, hp, hn);
                    pts3D.push_back(hp);
                    norms.push_back(hn);
                } else {
                    // Last resort: use tangent-plane point
                    pts3D.push_back(src);
                    norms.push_back(nAxis);
                }
            }
        }
        if (pts3D.size() >= 2) {
            contour3DBottom.push_back(pts3D);
            contourNormals.push_back(norms);
        }
    }

    if (totalPts > 0 && static_cast<double>(missedPts) / totalPts > 0.3) {
        printf("  [occ] projectTextOnMesh: too many missed rays (%d/%d)\n", missedPts, totalPts);
        // Continue anyway — points were filled with closest-vertex fallback
    }
    printf("  [occ] projectTextOnMesh: %d/%d rays hit, %d contours\n",
           totalPts - missedPts, totalPts, (int)contour3DBottom.size());

    // --- Classify outer vs hole contours ---
    int outerIdx = 0;
    double maxAbsArea = 0;
    for (size_t ci = 0; ci < sampledContours.size(); ci++) {
        double a = std::abs(signedAreaUV(sampledContours[ci]));
        if (a > maxAbsArea) { maxAbsArea = a; outerIdx = (int)ci; }
    }

    // --- Fit BSpline surface first, then build wires in UV space ---
    step = "fit surface";
    gp_Vec avgNrm(0,0,0);
    {
        int nTotal = 0;
        for (auto& pts : contour3DBottom) { for (auto& p : pts) { (void)p; nTotal++; }}
        if (nTotal < 3) { printf("  [occ] too few points (%d)\n", nTotal); return -1; }
        for (auto& norms : contourNormals)
            for (auto& n : norms) avgNrm += n;
        double nmag = avgNrm.Magnitude();
        if (nmag < 1e-10) avgNrm = nAxis;
        else avgNrm /= nmag;
    }

    Handle(Geom_BSplineSurface) fittedSurface;
    {
        std::vector<gp_Pnt> allBottomPts;
        for (auto& pts : contour3DBottom)
            allBottomPts.insert(allBottomPts.end(), pts.begin(), pts.end());
        fittedSurface = fitMeshRegionSurface(allBottomPts, avgNrm);
    }

    if (fittedSurface.IsNull()) {
        printf("  [occ] BSpline surface fitting failed\n");
        return -1;
    }
    printf("  [occ] using fitted BSpline surface for bottom face\n");

    // --- Build wires using UV-space edges (pcurve-first) ---
    step = "build wires";
    std::vector<TopoDS_Wire> bottomWires;

    for (size_t ci = 0; ci < contour3DBottom.size(); ci++) {
        auto& pts = contour3DBottom[ci];
        size_t n = pts.size();
        if (n < 2) continue;

        bool alreadyClosed = (n >= 3 && pts[0].Distance(pts[n - 1]) < 1e-6);
        size_t nLoop = alreadyClosed ? n - 1 : n;

        int edgesAdded = 0;
        BRepBuilderAPI_MakeWire wm;
        for (size_t i = 0; i < nLoop; i++) {
            size_t j = (i + 1) % nLoop;
            double len = pts[i].Distance(pts[j]);
            if (len < 1e-6) continue;

            try {
                TopoDS_Edge e = BRepBuilderAPI_MakeEdge(
                    BRepBuilderAPI_MakeVertex(pts[i]),
                    BRepBuilderAPI_MakeVertex(pts[j]));
                if (e.IsNull()) continue;

                // Add pcurve by projecting 3D edge onto BSpline surface
                ShapeFix_Edge edgeFixer;
                edgeFixer.FixAddPCurve(e, fittedSurface, TopLoc_Location(), Standard_False);

                // Set edge tolerance to accommodate 3D-vs-pcurve deviation
                BRep_Builder bb;
                bb.UpdateEdge(e, 0.5);

                if (!e.IsNull()) { wm.Add(e); edgesAdded++; }
            } catch (...) {}
        }
        TopoDS_Wire w = wm.Wire();
        if (!w.IsNull()) {
            w.Closed(Standard_True);
            bottomWires.push_back(w);
            int edgeCount = 0;
            for (TopExp_Explorer ex(w, TopAbs_EDGE); ex.More(); ex.Next()) edgeCount++;
            printf("  [occ] wire[%zu]: %d/%zu edges, closed=%d\n",
                   ci, edgeCount, nLoop, w.Closed() ? 1 : 0);
        } else {
            printf("  [occ] wire[%zu]: NULL (edges=%d)\n", ci, edgesAdded);
        }
    }
    printf("  [occ] wires built: %zu, outerIdx=%d\n", bottomWires.size(), outerIdx);
    if (bottomWires.empty() || outerIdx >= (int)bottomWires.size()) {
        printf("  [occ] no valid wires\n"); return -1;
    }

    // --- Build bottom face ---
    step = "bottom face";
    TopoDS_Face bottomFace;
    {
        try {
            BRepBuilderAPI_MakeFace fb(fittedSurface, bottomWires[outerIdx], Standard_True);
            if (fb.IsDone()) {
                for (size_t i = 0; i < bottomWires.size(); i++) {
                    if ((int)i == outerIdx) continue;
                    try { fb.Add(bottomWires[i]); }
                    catch (...) { printf("  [occ] hole wire[%zu] rejected\n", i); }
                }
                bottomFace = fb.Face();
                if (!bottomFace.IsNull()) {
                    printf("  [occ] bottom face built on BSpline surface (%zu wires)\n", bottomWires.size());
                }
            } else {
                printf("  [occ] MakeFace not done\n");
            }
        } catch (Standard_Failure& e) {
            printf("  [occ] MakeFace exception: %s\n", e.GetMessageString());
        } catch (...) {
            printf("  [occ] MakeFace unknown exception\n");
        }
    }

    if (bottomFace.IsNull()) {
        printf("  [occ] bottom face FAILED\n"); return -1;
    }


    // --- DEBUG: validate face vs original projected points ---
    step = "validate face";
    {
        Handle(Geom_Surface) faceSurf = BRep_Tool::Surface(bottomFace);
        double maxDist = 0, sumDist = 0;
        int nPts = 0;
        for (auto& pts : contour3DBottom) {
            for (auto& p : pts) {
                GeomAPI_ProjectPointOnSurf proj(p, faceSurf);
                if (proj.NbPoints() > 0) {
                    double d = proj.LowerDistance();
                    if (d > maxDist) maxDist = d;
                    sumDist += d;
                }
                nPts++;
            }
        }
        printf("  [occ] face validation: %d pts, maxDist=%.6f, avgDist=%.6f\n",
               nPts, maxDist, nPts > 0 ? sumDist / nPts : 0.0);

        // Check each edge: has pcurve? tolerance? 3D curve vs surface deviation?
        int edgeIdx = 0;
        for (TopExp_Explorer eex(bottomFace, TopAbs_EDGE); eex.More(); eex.Next(), edgeIdx++) {
            TopoDS_Edge edge = TopoDS::Edge(eex.Current());
            double eTol = BRep_Tool::Tolerance(edge);

            // Check if edge has pcurve on this face
            double f2d, l2d;
            Handle(Geom2d_Curve) pcurve = BRep_Tool::CurveOnSurface(edge, bottomFace, f2d, l2d);

            // Check 3D curve
            double f3d, l3d;
            Handle(Geom_Curve) curve3d = BRep_Tool::Curve(edge, f3d, l3d);

            // Sample midpoint: compare 3D curve point vs surface(pcurve) point
            double devMid = -1;
            if (!pcurve.IsNull() && !curve3d.IsNull() && !faceSurf.IsNull()) {
                double tMid3d = (f3d + l3d) / 2.0;
                double tMid2d = (f2d + l2d) / 2.0;
                gp_Pnt p3d = curve3d->Value(tMid3d);
                gp_Pnt2d uv = pcurve->Value(tMid2d);
                gp_Pnt pSurf = faceSurf->Value(uv.X(), uv.Y());
                devMid = p3d.Distance(pSurf);
            }

            if (edgeIdx < 5 || devMid > 0.01 || pcurve.IsNull() || curve3d.IsNull()) {
                printf("  [occ] edge[%d]: tol=%.6f, pcurve=%s, curve3d=%s, midDev=%.6f\n",
                       edgeIdx, eTol,
                       pcurve.IsNull() ? "NO" : "yes",
                       curve3d.IsNull() ? "NO" : "yes",
                       devMid);
            }
        }
        printf("  [occ] total edges: %d\n", edgeIdx);
    }

    // --- DEBUG: return bottom face directly for visualization ---
    step = "register face";
    {
        // Ensure edges have 3D curves and pcurves for mesher
        BRepLib::BuildCurves3d(bottomFace, 1e-5);
        for (TopExp_Explorer eex(bottomFace, TopAbs_EDGE); eex.More(); eex.Next()) {
            BRepLib::SameParameter(TopoDS::Edge(eex.Current()), 1e-5);
        }
        ShapeFix_Face fixer(bottomFace);
        fixer.Perform();
        bottomFace = TopoDS::Face(fixer.Face());

        // Force triangulation
        BRepMesh_IncrementalMesh mesher(bottomFace, deflection);
        mesher.Perform();
        printf("  [occ] mesher status: %d\n", mesher.GetStatusFlags());

        int faceHandle = static_cast<int>(g_shapeRegistry.size());
        g_shapeRegistry.push_back(bottomFace);
        printf("  [occ] projectTextOnMesh: returning bottom face handle=%d (debug)\n", faceHandle);
        return faceHandle;
    }

    } catch (Standard_Failure& e) {
        printf("  [occ] projectTextOnMesh [%s]: OCCT error: %s\n", step, e.GetMessageString());
        return -1;
    } catch (...) {
        printf("  [occ] projectTextOnMesh [%s]: unknown error\n", step);
        return -1;
    }
}

// ============================================================
// 13. Result helpers
// ============================================================

int occGetMeshProjectionBottomFace() { return g_lastMeshBottomFace; }
int occGetMeshProjectionTopFace()   { return g_lastMeshTopFace; }
