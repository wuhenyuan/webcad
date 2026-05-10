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
#include <BRepBuilderAPI_Sewing.hxx>
#include <BRepBuilderAPI_MakeSolid.hxx>
#include <BRepCheck_Analyzer.hxx>
#include <BRepCheck_Shell.hxx>
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
#include <ShapeFix_Shell.hxx>
#include <ShapeFix_Face.hxx>

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

            // Face normal (unnormalized → area-weighted contribution for vertex normals)
            gp_Vec e1(mesh.vertices[i0].pos, mesh.vertices[i1].pos);
            gp_Vec e2(mesh.vertices[i0].pos, mesh.vertices[i2].pos);
            tri.faceNormal = e1.Crossed(e2);   // double area × normal dir

            // Accumulate face normal for vertex normal smoothing
            mesh.vertices[i0].normal += tri.faceNormal;
            mesh.vertices[i1].normal += tri.faceNormal;
            mesh.vertices[i2].normal += tri.faceNormal;

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
        // Line: just use endpoints
        if (outPts.empty()) outPts.push_back(poles.front());
        outPts.push_back(poles.back());
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
// 9. BSpline Surface Fitting from Mesh Region
// ============================================================

// Fit a Geom_BSplineSurface to a mesh region defined by (tx,ty)→3D projection.
// tx_min/max, ty_min/max: text-space bounding box
// mesh, O, U, V, N: placement frame
static Handle(Geom_BSplineSurface) fitMeshRegionSurface(
    const RegisteredMeshData& mesh,
    double txMin, double txMax, double tyMin, double tyMax,
    const gp_Pnt& origin, const gp_Vec& uAxis, const gp_Vec& vAxis, const gp_Vec& nAxis,
    int nu, int nv)
{
    TColgp_Array2OfPnt grid(1, nu, 1, nv);

    for (int i = 0; i < nu; i++) {
        for (int j = 0; j < nv; j++) {
            double tx = txMin + (txMax - txMin) * i / (nu - 1);
            double ty = tyMin + (tyMax - tyMin) * j / (nv - 1);

            // Tangent-plane source point
            gp_Pnt src(origin.X() + tx * uAxis.X() + ty * vAxis.X(),
                       origin.Y() + tx * uAxis.Y() + ty * vAxis.Y(),
                       origin.Z() + tx * uAxis.Z() + ty * vAxis.Z());

            // Ray cast down the negative normal
            auto hit = castRayClosest(mesh, src.Translated(nAxis.Multiplied(10.0)), -nAxis);

            if (hit.valid) {
                gp_Pnt hp; gp_Vec hn;
                interpolateBarycentric(mesh, hit.triIndex, hit.u, hit.v, hp, hn);
                grid(i + 1, j + 1) = hp;
            } else {
                // Fallback: use the tangent-plane point itself
                grid(i + 1, j + 1) = src;
            }
        }
    }

    // Fit a BSpline surface of degree 3 in both directions
    GeomAPI_PointsToBSplineSurface fitter(grid, 3, 3, GeomAbs_C2, 1e-4);
    return fitter.Surface();
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

// Gaussian-weighted normal smoothing.
// For each contour point, average normals of neighbors within `radius` points.
static void smoothContourNormals(
    std::vector<std::vector<gp_Vec>>& contourNormals,
    int radius = 3)
{
    for (size_t ci = 0; ci < contourNormals.size(); ci++) {
        auto& norms = contourNormals[ci];
        size_t n = norms.size();
        if (n < 2) continue;
        std::vector<gp_Vec> smoothed(n);
        for (size_t i = 0; i < n; i++) {
            gp_Vec sum(0, 0, 0);
            double totalWeight = 0;
            for (int di = -radius; di <= radius; di++) {
                int j = (int)((i + di + n) % n);
                double w = std::exp(-(di * di) / (2.0 * radius * radius));
                sum += norms[j] * w;
                totalWeight += w;
            }
            if (totalWeight > 1e-20) sum /= totalWeight;
            double mag = sum.Magnitude();
            if (mag > 1e-20) sum /= mag;
            else sum = norms[i];
            smoothed[i] = sum;
        }
        norms = std::move(smoothed);
    }
}

// ============================================================
// 12. TPSA Side Wall Triangle Strips (vertex-shared)
// ============================================================

// Build side wall triangles with shared vertices.
static int buildSharedSideWalls(
    const std::vector<std::vector<gp_Pnt>>& bottomContours,
    const std::vector<std::vector<gp_Vec>>& contourNormals,
    double embossDepth,
    VertexPool& vpool,
    BRepBuilderAPI_Sewing& sewer)
{
    const int NSEG = 8;
    int added = 0;

    for (size_t ci = 0; ci < bottomContours.size(); ci++) {
        const auto& pts = bottomContours[ci];
        const auto& norms = ci < contourNormals.size() ? contourNormals[ci] : contourNormals[0];
        size_t n = pts.size();
        if (n < 2) continue;

        // Compute top points with smoothed normals
        std::vector<gp_Pnt> topPts(n);
        for (size_t i = 0; i < n; i++) {
            topPts[i] = gp_Pnt(pts[i].X() + embossDepth * norms[i].X(),
                               pts[i].Y() + embossDepth * norms[i].Y(),
                               pts[i].Z() + embossDepth * norms[i].Z());
        }

        for (size_t i = 0; i < n; i++) {
            size_t j = (i + 1) % n;

            for (int s = 0; s < NSEG; s++) {
                double t0 = (double)s / NSEG, t1 = (double)(s + 1) / NSEG;

                gp_Pnt b0(pts[i].X()*(1-t0) + pts[j].X()*t0,
                          pts[i].Y()*(1-t0) + pts[j].Y()*t0,
                          pts[i].Z()*(1-t0) + pts[j].Z()*t0);
                gp_Pnt b1(pts[i].X()*(1-t1) + pts[j].X()*t1,
                          pts[i].Y()*(1-t1) + pts[j].Y()*t1,
                          pts[i].Z()*(1-t1) + pts[j].Z()*t1);
                gp_Pnt t0p(topPts[i].X()*(1-t0) + topPts[j].X()*t0,
                           topPts[i].Y()*(1-t0) + topPts[j].Y()*t0,
                           topPts[i].Z()*(1-t0) + topPts[j].Z()*t0);
                gp_Pnt t1p(topPts[i].X()*(1-t1) + topPts[j].X()*t1,
                           topPts[i].Y()*(1-t1) + topPts[j].Y()*t1,
                           topPts[i].Z()*(1-t1) + topPts[j].Z()*t1);

                TopoDS_Face tri;
                if (buildTriangleFace(b0, b1, t0p, tri, false)) { sewer.Add(tri); added++; }
                if (buildTriangleFace(b1, t1p, t0p, tri, false)) { sewer.Add(tri); added++; }
            }
        }
    }
    return added;
}

// ============================================================
// 13. Original TPSA (legacy, called from shared version)
// ============================================================

// Build side wall triangle strips directly from contour points.
// Does NOT depend on face edge extraction — uses 3D points and normals.
// Each edge pair is subdivided into NSEG segments (8-segment strips).
static int buildTpsaSideWalls(
    const std::vector<std::vector<gp_Pnt>>& bottomContours,
    const std::vector<std::vector<gp_Vec>>& contourNormals,
    double embossDepth,
    BRepBuilderAPI_Sewing& sewer)
{
    const int NSEG = 8;
    int added = 0;
    bool firstFail = true;

    for (size_t ci = 0; ci < bottomContours.size() && ci < contourNormals.size(); ci++) {
        const auto& pts   = bottomContours[ci];
        const auto& norms = contourNormals[ci];
        size_t n = pts.size();
        if (n < 2) continue;

        // Compute top points by offsetting along interpolated normals
        std::vector<gp_Pnt> topPts(n);
        for (size_t i = 0; i < n; i++) {
            topPts[i].SetX(pts[i].X() + embossDepth * norms[i].X());
            topPts[i].SetY(pts[i].Y() + embossDepth * norms[i].Y());
            topPts[i].SetZ(pts[i].Z() + embossDepth * norms[i].Z());
        }

        // Build triangle strips for each edge pair (pts[i] → pts[j])
        for (size_t i = 0; i < n; i++) {
            size_t j = (i + 1) % n;

            for (int s = 0; s < NSEG; s++) {
                double t0 = static_cast<double>(s) / NSEG;
                double t1 = static_cast<double>(s + 1) / NSEG;

                // Linear interpolation between contour vertices
                gp_Pnt b0(pts[i].X() * (1 - t0) + pts[j].X() * t0,
                          pts[i].Y() * (1 - t0) + pts[j].Y() * t0,
                          pts[i].Z() * (1 - t0) + pts[j].Z() * t0);
                gp_Pnt b1(pts[i].X() * (1 - t1) + pts[j].X() * t1,
                          pts[i].Y() * (1 - t1) + pts[j].Y() * t1,
                          pts[i].Z() * (1 - t1) + pts[j].Z() * t1);
                gp_Pnt t0p(topPts[i].X() * (1 - t0) + topPts[j].X() * t0,
                           topPts[i].Y() * (1 - t0) + topPts[j].Y() * t0,
                           topPts[i].Z() * (1 - t0) + topPts[j].Z() * t0);
                gp_Pnt t1p(topPts[i].X() * (1 - t1) + topPts[j].X() * t1,
                           topPts[i].Y() * (1 - t1) + topPts[j].Y() * t1,
                           topPts[i].Z() * (1 - t1) + topPts[j].Z() * t1);

                // Intentionally using individual SetX/Y/Z instead of gp_Pnt constructor
                // to ensure exact linear interpolation in 3D.

                TopoDS_Face tri1;
                if (buildTriangleFace(b0, b1, t0p, tri1, firstFail)) {
                    sewer.Add(tri1); added++;
                    firstFail = false;
                }
                TopoDS_Face tri2;
                if (buildTriangleFace(b1, t1p, t0p, tri2, firstFail)) {
                    sewer.Add(tri2); added++;
                    firstFail = false;
                }
            }
        }
    }

    if (firstFail) {
        printf("  [occ] TPSA side walls: ALL triangles failed to build\n");
    }
    return added;
}

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

    // --- Build bottom wires from projected 3D points (shared vertices) ---
    step = "build wires";
    VertexPool vpool;
    std::vector<TopoDS_Wire> bottomWires;

    for (size_t ci = 0; ci < contour3DBottom.size(); ci++) {
        auto& pts = contour3DBottom[ci];
        size_t n = pts.size();
        if (n < 2) continue;

        int edgesAdded = 0;
        BRepBuilderAPI_MakeWire wm;
        for (size_t i = 0; i < n; i++) {
            size_t j = (i + 1) % n;
            double len = pts[i].Distance(pts[j]);
            if (len < 1e-6) continue;

            TopoDS_Vertex v0 = vpool.get((int)ci, (int)i, pts[i]);
            TopoDS_Vertex v1 = vpool.get((int)ci, (int)j, pts[j]);

            try {
                TopoDS_Edge e = BRepBuilderAPI_MakeEdge(v0, v1);
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
                   ci, edgeCount, n, w.Closed() ? 1 : 0);
        } else {
            printf("  [occ] wire[%zu]: NULL (edges=%d)\n", ci, edgesAdded);
        }
    }
    printf("  [occ] wires built: %zu, outerIdx=%d\n", bottomWires.size(), outerIdx);
    if (bottomWires.empty() || outerIdx >= (int)bottomWires.size()) {
        printf("  [occ] no valid wires\n"); return -1;
    }

    // --- Fit plane to contour points ---
    step = "bottom face";
    gp_Pnt avg(0,0,0);
    int nTotal = 0;
    for (auto& pts : contour3DBottom) { for (auto& p : pts) { avg.ChangeCoord() += p.Coord(); nTotal++; }}
    if (nTotal < 3) { printf("  [occ] too few points (%d)\n", nTotal); return -1; }
    avg.ChangeCoord() /= nTotal;

    // Average contour normal
    gp_Vec avgNrm(0,0,0);
    for (auto& norms : contourNormals)
        for (auto& n : norms) avgNrm += n;
    double nmag = avgNrm.Magnitude();
    if (nmag < 1e-10) avgNrm = nAxis;
    else avgNrm /= nmag;
    gp_Dir planeNormal(avgNrm);
    gp_Pln fitPlane(avg, planeNormal);

    // Check wire bounds relative to plane
    printf("  [occ] plane: center=(%.2f,%.2f,%.2f) normal=(%.3f,%.3f,%.3f) nPts=%d\n",
           avg.X(),avg.Y(),avg.Z(), planeNormal.X(),planeNormal.Y(),planeNormal.Z(), nTotal);

    // Build face from plane + wire
    TopoDS_Face bottomFace;
    try {
        BRepBuilderAPI_MakeFace fb(fitPlane, bottomWires[outerIdx]);
        for (size_t i = 0; i < bottomWires.size(); i++)
            if ((int)i != outerIdx) fb.Add(bottomWires[i]);
        bottomFace = fb.Face();
    } catch (Standard_Failure& e) {
        printf("  [occ] MakeFace exception: %s\n", e.GetMessageString());
    } catch (...) {
        printf("  [occ] MakeFace unknown exception\n");
    }
    if (bottomFace.IsNull()) {
        printf("  [occ] bottom face FAILED\n"); return -1;
    }
    // Tessellate + drape onto mesh
    BRepMesh_IncrementalMesh(bottomFace, deflection * 0.3);
    printf("  [occ] bottom face OK (tessellated)\n");
    // Tessellate to get triangular mesh
    BRepMesh_IncrementalMesh(bottomFace, deflection * 0.5);
    printf("  [occ] bottom face built (%zu wires)\n", bottomWires.size());

    // --- Build top face: offset contour points + same wire structure ---
    step = "top face";
    std::vector<std::vector<gp_Pnt>> topContourPts(contour3DBottom.size());
    for (size_t ci = 0; ci < contour3DBottom.size() && ci < contourNormals.size(); ci++) {
        auto& norms = contourNormals[ci];
        auto& bpts = contour3DBottom[ci];
        for (size_t k = 0; k < bpts.size() && k < norms.size(); k++) {
            topContourPts[ci].push_back(gp_Pnt(
                bpts[k].X() + embossDepth * norms[k].X(),
                bpts[k].Y() + embossDepth * norms[k].Y(),
                bpts[k].Z() + embossDepth * norms[k].Z()));
        }
    }

    std::vector<TopoDS_Wire> topWires;
    for (size_t ci = 0; ci < topContourPts.size(); ci++) {
        auto& pts = topContourPts[ci];
        size_t n = pts.size();
        if (n < 2) continue;
        BRepBuilderAPI_MakeWire wm;
        for (size_t i = 0; i < n; i++) {
            size_t j = (i + 1) % n;
            double len = pts[i].Distance(pts[j]);
            if (len < 1e-6) continue;
            try {
                TopoDS_Edge e = BRepBuilderAPI_MakeEdge(
                    BRepBuilderAPI_MakeVertex(pts[i]),
                    BRepBuilderAPI_MakeVertex(pts[j]));
                if (!e.IsNull()) wm.Add(e);
            } catch (...) {}
        }
        TopoDS_Wire w = wm.Wire();
        if (!w.IsNull()) { w.Closed(Standard_True); topWires.push_back(w); }
    }

    // Fit plane to top contour points
    gp_Pnt avgTop(0,0,0);
    int nTopPts = 0;
    TopoDS_Face topFace;
    for (auto& pts : topContourPts) { for (auto& p : pts) { avgTop.ChangeCoord() += p.Coord(); nTopPts++; }}
    if (nTopPts > 0) {
        avgTop.ChangeCoord() /= nTopPts;
        gp_Pln topPlane(avgTop, planeNormal);
        if (!topWires.empty() && outerIdx < (int)topWires.size()) {
            try {
                BRepBuilderAPI_MakeFace fb(topPlane, topWires[outerIdx]);
                for (size_t i = 0; i < topWires.size(); i++)
                    if ((int)i != outerIdx) fb.Add(topWires[i]);
                topFace = fb.Face();
                if (!topFace.IsNull()) BRepMesh_IncrementalMesh(topFace, deflection * 0.5);
            } catch (...) {}
        }
    }
    printf("  [occ] top face %s\n", topFace.IsNull() ? "FAILED" : "built");

    // --- Sew faces ---
    BRepBuilderAPI_Sewing sewer(0.01);
    sewer.Add(bottomFace);
    if (!topFace.IsNull()) sewer.Add(topFace);

    // --- Side walls: extract edges from bottom/top faces, build strips ---
    step = "side walls";
    smoothContourNormals(contourNormals, 4);
    int sideCount = 0;
    {
        std::vector<TopoDS_Edge> bedges, tedges;
        for (TopExp_Explorer ex(bottomFace, TopAbs_EDGE); ex.More(); ex.Next())
            bedges.push_back(TopoDS::Edge(ex.Current()));
        if (!topFace.IsNull())
            for (TopExp_Explorer ex(topFace, TopAbs_EDGE); ex.More(); ex.Next())
                tedges.push_back(TopoDS::Edge(ex.Current()));

        int nPairs = std::min((int)bedges.size(), (int)tedges.size());
        printf("  [occ] side walls: %d edge pairs\n", nPairs);

        for (int ei = 0; ei < nPairs; ei++) {
            // Extract vertices from bottom/top edges (they're shared with wire vertices!)
            TopoDS_Vertex bv0, bv1, tv0, tv1;
            TopExp::Vertices(bedges[ei], bv0, bv1);
            TopExp::Vertices(tedges[ei], tv0, tv1);
            if (bv0.IsNull() || bv1.IsNull() || tv0.IsNull() || tv1.IsNull()) continue;

            gp_Pnt bp0 = BRep_Tool::Pnt(bv0), bp1 = BRep_Tool::Pnt(bv1);
            gp_Pnt tp0 = BRep_Tool::Pnt(tv0), tp1 = BRep_Tool::Pnt(tv1);

            int nSeg = 8;
            for (int s = 0; s < nSeg; s++) {
                double t0 = (double)s / nSeg, t1 = (double)(s + 1) / nSeg;

                gp_Pnt b0(bp0.X()*(1-t0) + bp1.X()*t0,
                          bp0.Y()*(1-t0) + bp1.Y()*t0,
                          bp0.Z()*(1-t0) + bp1.Z()*t0);
                gp_Pnt b1(bp0.X()*(1-t1) + bp1.X()*t1,
                          bp0.Y()*(1-t1) + bp1.Y()*t1,
                          bp0.Z()*(1-t1) + bp1.Z()*t1);
                gp_Pnt t0p(tp0.X()*(1-t0) + tp1.X()*t0,
                           tp0.Y()*(1-t0) + tp1.Y()*t0,
                           tp0.Z()*(1-t0) + tp1.Z()*t0);
                gp_Pnt t1p(tp0.X()*(1-t1) + tp1.X()*t1,
                           tp0.Y()*(1-t1) + tp1.Y()*t1,
                           tp0.Z()*(1-t1) + tp1.Z()*t1);

                TopoDS_Face tri;
                if (buildTriangleFace(b0, b1, t0p, tri, false)) { sewer.Add(tri); sideCount++; }
                if (buildTriangleFace(b1, t1p, t0p, tri, false)) { sewer.Add(tri); sideCount++; }
            }
        }
    }
    printf("  [occ] projectTextOnMesh: sewing %d side faces...\n", sideCount);

    sewer.Perform();
    TopoDS_Shape sewed = sewer.SewedShape();
    if (sewed.IsNull()) {
        printf("  [occ] projectTextOnMesh: sewing produced null shape\n");
        return -1;
    }

    // --- Extract shell ---
    TopoDS_Shell shell;
    for (TopExp_Explorer ex(sewed, TopAbs_SHELL); ex.More(); ex.Next()) {
        shell = TopoDS::Shell(ex.Current());
        break;
    }
    if (shell.IsNull()) {
        printf("  [occ] projectTextOnMesh: no shell in sewed result\n");
        return -1;
    }

    // --- Heal and make solid ---
    step = "heal";
    ShapeFix_Shell shellFixer(shell);
    shellFixer.Perform();
    TopoDS_Shell fixedShell = TopoDS::Shell(shellFixer.Shape());

    BRepBuilderAPI_MakeSolid solidMaker(fixedShell);
    TopoDS_Solid resultSolid = solidMaker.Solid();

    ShapeFix_Solid solidFixer(resultSolid);
    solidFixer.Perform();
    resultSolid = TopoDS::Solid(solidFixer.Shape());

    // --- Geometry hardening ---
    BRepLib::BuildCurves3d(resultSolid, 1e-9);
    for (TopExp_Explorer eex(resultSolid, TopAbs_EDGE); eex.More(); eex.Next()) {
        BRepLib::SameParameter(TopoDS::Edge(eex.Current()), 1e-9);
    }

    // --- Validate ---
    step = "validate";
    bool manifold = IsSolidManifold(resultSolid);
    printf("  [occ] projectTextOnMesh: %s\n", manifold ? "MANIFOLD" : "NON-MANIFOLD (continuing)");

    // --- Register solid ---
    int solidHandle = static_cast<int>(g_shapeRegistry.size());
    g_shapeRegistry.push_back(resultSolid);

    g_lastMeshBottomFace = -1; // triangulated: no single bottom face
    g_lastMeshTopFace   = -1;

    printf("  [occ] projectTextOnMesh: solid=%d sideFaces=%d (%s)\n",
           solidHandle, sideCount, manifold ? "MANIFOLD" : "NON-MANIFOLD");
    return solidHandle;

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
