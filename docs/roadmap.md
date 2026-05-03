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

## 路线 4（当前）：Face → Solid 偏移挤出

```
TopoDS_Face (底面, 带孔洞)
  → 提取 Geom_Surface + wires
  → 创建偏移曲面 (Cylinder: 新建 R+h / 其他: Geom_OffsetSurface)
  → cloneWireOnSurface: 复用 pcurve → MakeEdge(pcurve, offsetSurf) → 顶面 Wire
  → BRepBuilderAPI_MakeFace(offsetSurf, clonedWires) → 顶面
  → ShapeFix_Face + BuildCurves3d + SameParameter (顶面加固)
  → 顶面 Orientation = 底面反向 (法线指向实体外部)
  → buildSideFaces: pcurve 均匀采样 → 两侧曲面求值 → 三角面侧壁
  → BRepBuilderAPI_Sewing (底面 + 顶面 + 三角侧壁)
  → BuildCurves3d + SameParameter (全局加固)
  → TopExp_Explorer 提取 Shell → BRepBuilderAPI_MakeSolid
  → TopoDS_Solid
```

**关键设计决策：**

| 决策 | 原因 |
|------|------|
| 顶面复用底面 pcurve | 偏移曲面与原曲面共享 UV 参数空间，直接复用保证点对点对齐 |
| 不使用 BRepAlgoAPI 布尔 | WASM 版 OCCT 布尔运算不稳定，全程 BRepBuilderAPI |
| 侧壁用三角面近似 | 四边直纹面的曲面构建依赖 GeomFill/TKOffset，超出当前链接库范围 |
| ShapeFix_Face 修复顶面 | clone 后的 edge 组成 wire 再 MakeFace，可能产生微小不一致，ShapeFix 修复 |
| 圆柱面用原生 Geom_CylindricalSurface | 避免 Geom_OffsetSurface 在 WASM mesher 中可能不产生三角形的问题 |

**当前限制：**
- 侧壁为三角面近似（每条边 8 段），非真正的直纹面
- 仅支持圆柱面的原生偏移；其他曲面用 Geom_OffsetSurface

---

## 路线 4a：流形验证 IsSolidManifold

```
TopoDS_Solid
  → BRepCheck_Analyzer           → 闭合性 (NotClosed → 报错)
  → GProp_GProps + BRepGProp     → 体积检查 (负值 → solid.Reverse())
  → TopExp::MapShapesAndAncestors → 边共享 (每条边 = 2 个 Face, 非流形检测)
  → BRep_Tool::Tolerance         → 最大容差 (>0.1mm → 警告)
  → 结果输出 (MANIFOLD / NON-MANIFOLD)
```

**检查项：**

| 检查 | 方法 | 失败处理 |
|------|------|---------|
| 闭合性 | `BRepCheck_Analyzer::IsValid()` | 标记 non-manifold |
| 体积 | `BRepGProp::VolumeProperties` | 负值 → `solid.Reverse()` |
| 边共享 | `TopExp::MapShapesAndAncestors(EDGE→FACE)` | 非 2 → 标记 non-manifold |
| 容差 | `BRep_Tool::Tolerance` 遍历所有边 | >0.1mm → 警告 |

---

## 待完成

- [x] Face offset/extrude（沿曲面法线偏移 face → 浮雕实体）
- [x] IsSolidManifold 流形验证
- [ ] 布尔运算（text face 与圆柱面 Cut/Common）
- [ ] 接缝处理（glyph 跨越圆柱 u=0/2π 时 wire 切割）
- [ ] 侧壁升级为真正直纹面（BRepFill 或 GeomFill）
- [ ] hole wire 的 pcurve 提取：`signedAreaUV` 的 `CurveOnSurface` 对 hole edge 可能返回 null
