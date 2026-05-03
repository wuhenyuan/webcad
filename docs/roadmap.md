# 路线演进记录

## 路线 1：Polyline + Chord Edge（已废弃）

```
glyph → flatten bezier → polyline
      → evalFaceUV → 3D points
      → BRepBuilderAPI_MakeEdge(v1, v2) → 3D chord edges
      → B.UpdateEdge(edge, pcurve, surface) → pcurve override
      → BRepFeat_SplitShape → split cylinder face
```

**废弃原因：**
- Edge 的 3D 几何是直线弦（不贴合曲面），与 pcurve 矛盾
- `BRepFeat_SplitShape` 在 WASM legacy EH 下无法捕获异常
- 产生碎片 sub-faces

---

## 路线 2：UV Bezier + SplitShape（已废弃）

```
glyph → UV control points
      → Geom2d_BezierCurve → BRepBuilderAPI_MakeEdge(curve2d, surface)
      → BRepFeat_SplitShape
```

**废弃原因：**
- `BRepFeat_SplitShape` 在 emscripten JS-based EH (`-fexceptions`) 下崩溃
- `-fwasm-exceptions` 与 OCCT 库不兼容（OCCT 用 legacy EH 编译）
- `getWasmTableEntry(...) is not a function` — WASM EH 基础设施断裂

---

## 路线 3（当前）：UV Bezier + MakeFace + 嵌套深度

```
glyph → UV control points
      → Geom2d_BezierCurve → BRepBuilderAPI_MakeEdge(curve2d, surface)
      → BRepBuilderAPI_MakeWire
      → 嵌套深度法 (面积排序 + 内法线偏移 + FClass2d + 递归树)
      → BRepBuilderAPI_MakeFace(surface, outer, holes)
      → BuildCurves3d + SameParameter + ShapeFix_Face
      → 渲染
```

**优势：**
- Edge 精确贴合曲面（无 chord-line 矛盾）
- 避开 SplitShape 的 WASM EH 限制
- 嵌套深度法不依赖 font winding
- Text face 本身属于原始 Geom_CylindricalSurface

**Face = surface 的 trimmed 子集，不是独立几何体。** 后续可直接用于 offset/extrude/boolean。

---

## 关键问题解决记录

| 问题 | 原因 | 解决方案 |
|------|------|---------|
| SplitShape crash | WASM legacy EH 无法捕获 OCCT 异常 | 改用 MakeFace(surface, wire) |
| Seg[3] "BRep_API: not done" | gp_Pnt 重载 tolerance 不匹配 | 改用 auto-vertex `MakeEdge(curve2d, surf)` |
| "TopoDS_Vertex hasn't gp_Pnt" | auto-vertex edge 的 vertex 数据不完整 | fallback chord edge + pcurve override |
| Degenerate segment (chord=0) | 字体零长度曲线 | JS 侧过滤 + C++ 侧跳过 |
| Hole 不挖 / 面方向反 | bbox center 落在 hole 内 → 深度算错 | 内法线偏移采样 + 面积排序 |
| "只有圆柱面没有 text face" | 互包含 → depth 全为 1 → 无 outer | 面积排序消除互包含 |
| Text face 缺三角形 | z-fighting（与背景圆柱面同深度） | polygonOffset |

---

## 待完成

- [ ] Face offset/extrude（沿曲面法线偏移 face → 浮雕实体）
- [ ] 布尔运算（text face 与圆柱面 Cut/Common）
- [ ] 接缝处理（glyph 跨越圆柱 u=0/2π 时 wire 切割）
- [ ] hole wire 的 pcurve 提取：`signedAreaUV` 的 `CurveOnSurface` 对 hole edge 可能返回 null
