# 技术参考 — 曲面文字 Face 管线

## 总览

```
字体 → opentype.js 解析
     → glyphToUVCurves (JS): bezier 控制点 → UV 空间 Float64Array
     → occMakeWireFromUVCurves (C++): Geom2d_BezierCurve + MakeEdge(curve2d, surface)
     → occBuildFacesFromWires (C++): 嵌套深度法 → outer/hole 分类 → MakeFace
     → 渲染 (Three.js): tessellateFaceMesh + polygonOffset
```

---

## 一、UV 空间解析曲线

### 1.1 坐标变换（仿射）

```
u = offsetU + (gx / 72) * uvScale
v = offsetV + (gy / 72) * uvScale
```

gx, gy 为字体坐标（fontSize=72 时的字体单位）。仿射变换保持贝塞尔曲线的度数与结构：二次(Q) → 3 个控制点，三次(C) → 4 个控制点，线段(L) → 2 个端点。

### 1.2 Geom2d_BezierCurve

```cpp
TColgp_Array1OfPnt2d poles(1, npts);
// 填入 UV 控制点 ...
Handle(Geom2d_BezierCurve) curve2d = new Geom2d_BezierCurve(poles);
```

参数范围 [0, 1]。Line(degree=1), Quad(degree=2), Cubic(degree=3) 都统一用此构造。

### 1.3 BRepBuilderAPI_MakeEdge(curve2d, surface)

```cpp
TopoDS_Edge edge = BRepBuilderAPI_MakeEdge(curve2d, surface);
```

Edge 的 3D 几何 = **surface(curve2D(t))** — 对曲面上 pcurve 的每一帧求值。Edge 数学上精确贴在曲面上，不存在 3D 弦线 vs pcurve 的矛盾。

### 1.4 数据格式（JS → C++）

每个 contour 一个 `Float64Array`：
```
[numSegments, type0, npts0, u0,v0, u1,v1, ..., type1, npts1, u0,v0, ...]
```
- type=1: line (2 pts)
- type=2: quad bezier (3 pts)
- type=3: cubic bezier (4 pts)

JS 侧过滤了端点距离 < 1e-9 的 degenerate 段。

---

## 二、嵌套深度法（Nesting Depth）

### 2.1 核心思想

不依赖字体原始 winding，通过几何包含关系构建层级树：
- **偶数层 (0,2,4...)**: Outer → 创建 Face
- **奇数层 (1,3,5...)**: Hole → 分配给 parent Outer

### 2.2 面积排序

按 bbox 面积从大到小排序。大 Wire 先处理 → 永不产生"互包含矛盾"。

### 2.3 内法线偏移采样

取第一条 edge 的 pcurve 中点：
1. 计算切线方向 `tangent = pcurve->DN(t_mid, 1)`
2. 两个候选法线：`n1=(-tangent.y, tangent.x)` 和 `n2=(tangent.y, -tangent.x)`
3. 沿两个方向偏移 ε（edge 参数范围的 1%，最小 1e-6）
4. 用 FClass2d 测试哪个候选点在自己 Face 内 → 该方向为内法线
5. `test_point = P_mid + 内法线 × ε`

**为什么不取 bbox center?** 带孔字形（A/B/D/O）的 bbox center 可能落在 hole 区域内，导致分类错误。

### 2.4 BRepTopAdaptor_FClass2d

射线投射法：从测试点向无穷远发射水平射线，统计与 Wire 交点数。奇数 = 在面内，偶数 = 在面外。

### 2.5 包含树构建

```
对每个 wire[i]（已按面积降序）:
  遍历 j < i（j 面积更大）:
    FClass2d 测试 testPt[i] 是否在 wire[j] 的 temp Face 内
    是 → wire[j] 是 wire[i] 的直接 parent → break
```

取首个包含者（最小面积、最近的容器）作为直接父节点。

### 2.6 递归深度计算

```
depth[i] = parent[i] < 0 ? 0 : depth[parent[i]] + 1
```

---

## 三、Face 构建与加固

### 3.1 方向校正

```cpp
double outerUV = signedAreaUV(outerWire, surf);
if (outerUV < 0) outerWire = TopoDS::Wire(outerWire.Reversed());
```

`signedAreaUV` 从 pcurve 提取 UV 端点，shoelace 公式计算 UV 空间有符号面积。正=CCW，负=CW。

Outer 必须 CCW → 面积 < 0 则翻转。Hole 必须 CW → 面积 > 0 则翻转。

### 3.2 参数一致性

```cpp
for (edge in face) {
    BRepLib::BuildCurves3d(edge);   // 从 pcurve+surface 重建 3D 曲线
    BRepLib::SameParameter(edge);   // 同步 3D 曲线与 pcurve 参数范围
}
```

布尔运算（Cut/Fuse/Common）的前提条件。

### 3.3 容差对齐

```cpp
ShapeFix_Face fixer(face);
fixer.Perform();
face = fixer.Face();
```

修复 Face 拓扑公差不一致。

---

## 四、核心名词

| 名词 | 含义 |
|------|------|
| **Wire** | 闭合的拓扑线框，由多条 Edge 首尾相连 |
| **Edge** | 一条拓扑边，有 3D 曲线 + pcurve（UV 曲线）两个几何描述 |
| **Pcurve** | 参数曲线，定义 Edge 在曲面 UV 空间的"足迹" |
| **Face** | 有界曲面 = 无限大数学曲面 + 一个 outer Wire 裁剪 + N 个 hole Wire 挖洞 |
| **Winding** | Wire 的环绕方向（CCW 逆时针 / CW 顺时针） |
| **FClass2d** | 点在面内判定器（射线投射法） |
| **BRep** | Boundary Representation, 边界表示法 — OCCT 的拓扑数据结构 |

---

## 五、渲染

- 背景圆柱面：`occMakeCylinder` + 半透明（opacity=0.25）
- Text region face：`tessellateFaceMesh` + `polygonOffset: true` 消除 z-fighting
- Wire 可视化：`sampleWire3D(samplesPerEdge=8)` 在曲面上采样曲线
- Cyan 线 = Outer wire，Orange 线 = Hole wire
