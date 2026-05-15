# Mesh 文字投影 — 项目路线

## 路线 1：BSpline 曲面拟合方案

```
点云 → 体素下采样（>2000 点 → ~750）→ 3σ 去噪
     → 协方差矩阵 PCA + math_Jacobi 特征分解 → gp_Ax3 局部坐标系
     → 奇异值检查（λ_min/λ_max > 0.3 报错）
     → 3D 点投影至 PCA 主平面 → 归一化 UV (0~1)
     → 逆距离加权重采样 → 规则 nu×nv 栅格
     → GeomAPI_PointsToBSplineSurface（Deg=3, C2, Tol3D=0.1）
     → 拟合失败→C1/0.5 降级→平面回退
     → UV 翻转检查（D1 法线 vs Mesh 法线点积）
     → GeomLib::ExtendSurfByLength 四向边界扩张 10%
     → 返回 Handle(Geom_BSplineSurface)
```

**函数签名：**
```cpp
Handle(Geom_BSplineSurface) fitMeshRegionSurface(
    const std::vector<gp_Pnt>& points,
    const gp_Vec& expectedNormal);
```

**集成路径：**
`occProjectTextOnMesh` 在底面和顶面构建时优先使用拟合 BSpline 曲面 → 失败则回退至平面。Face 构建使用 `BRepBuilderAPI_MakeFace(surface, wire, Standard_True)` 替代 `gp_Pln`。

**相比于旧方案（已废弃的栅格射线投射方案）的改进：**
- PCA 消除 3D 空间摆放对拟合的影响
- 体素下采样保证大规模点云的计算性能
- 3σ 去噪防止离群点扭曲曲面
- 奇异值检查在 PCA 参数化不可靠时提前报错
- 边界扩张确保曲面覆盖文本凸包
- 平面回退：BSpline 拟合失败时用 PCA 平面生成低阶 BSpline 面

---

## 路线 2（已废弃）：PCA BSpline 曲面 + 顶点共享 + TPSA 侧壁

```
三角网格 → BVH 射线投射 → 3D 投影点 + 重心坐标插值法线
         → fitMeshRegionSurface(points, avgNrm) → Handle(Geom_BSplineSurface) [PCA，路线1]
         → BRepBuilderAPI_MakeFace(surface, wire, True) → 底面 [BSpline优先→平面回退]
         → 角度加权顶点法线 + Gaussian 3点窗口法线平滑 + 50% 法线约束
         → 顶面点拉普拉斯位置平滑（2次迭代）
         → fitMeshRegionSurface(topPoints, avgNrm) → 顶面BSpline [同上]
         → VertexPool (vpoolBot + vpoolTop): 全链路共享 TopoDS_Vertex
         → buildTpsaSideWalls: 侧壁直接引用 vpoolBot/vpoolTop 顶点
         → BRepBuilderAPI_Sewing(0.001) → ShapeFix_Shell → MakeSolid → ShapeFix_Solid
         → IsSolidManifold 流形验证
```

**关键架构决策：**
- **彻底移除 gp_Pln**：底面和顶面均通过 `BRepBuilderAPI_MakeFace(wire, OnlyPlane=false)` 构建，不再拟合平面
- **Poly_Triangulation**：`BRepMesh_IncrementalMesh` 自动生成三角剖分，替代平面填充
- **0 公差缝合**：sewTol=0.001，因为所有面共享顶点，不需要公差合并
- **性能**：从 7 秒（平面拟合+Sewing暴力合并）降至亚秒级

---

## 侧壁方案演变

### 侧壁方案 A：Face Edge 提取 + 下标配对（已废弃）

```
TopExp_Explorer(bottomFace) → bedges[]
TopExp_Explorer(topFace) → tedges[]
bedges[i] ↔ tedges[i] 按下标配对 → 8段三角形条带
```

**废弃原因：** `TopExp_Explorer` 在两个独立 Face 上的 edge 遍历顺序不保证一致，第 i 条底面边可能对应完全无关的顶面边，产生横跨形体的尖刺三角面。

### 侧壁方案 B：VertexPool 共享 + buildSharedSideWalls（已废弃）

**废弃原因：** VertexPool 在函数签名中声明但实际未使用，`buildTriangleFace` 内部创建独立顶点，共享语义未落实。

### 侧壁方案 C（已废弃）：buildTpsaSideWalls

直接使用轮廓 3D 点数组构建侧壁，点顺序与 glyph 解析一致，不依赖 Face 内部 edge 顺序。

**废弃原因：** BSpline 曲面上的参数曲线边界与侧壁直线段几何不一致，sewing 无法闭合 shell。改用 `MakeThickSolid` 由 OCCT 内部处理侧壁和顶面。

---

## 关键问题解决记录

| 问题 | 现象 | 原因 | 解决方案 |
|------|------|------|---------|
| 侧壁尖锐三角面 | 投影结果被"撕裂"，出现横跨形体的尖刺 | TopExp_Explorer 两个 Face 的 edge 遍历顺序不一致，按索引配对错误 | 改用 buildTpsaSideWalls，直接使用轮廓点顺序构建 |
| 顶面乱石堆 | 顶面局部翘起/塌陷，相邻三角法线方向突变 | smoothContourNormals 在顶面顶点计算之后才调用，顶面使用噪音原始法线 | 将 smoothContourNormals 移到顶面计算之前 |
| 法线平滑无效 | 高斯平滑后噪声反而加重 | `(i + di + n) % n` 中 i、n 为 size_t，di<0 时隐式转为巨大正数，环形索引取模错误 | 全部 cast 到 signed int，手动处理负余数 |
| 射线 miss | 轮廓点投影到网格空洞区域 | 网格有孔洞或射线方向未对准 | findClosestPoint 暴力搜索最近三角面 fallback |
| 模型尖锐 — 第一轮 | 拉普拉斯平滑 (radius=1, 3迭代) 后笔画转折处仍有尖刺 | 单步拉普拉斯只考虑直接邻居，对粗糙网格的法线噪声覆盖不够 | 切换为高斯平滑 radius=3（7点窗口），sigma=1.5 |
| 模型尖锐 — 第二轮 | 高斯平滑后局部法线仍过度顺应网格崎岖 | 法线完全跟随网格表面，无"向心力"约束 | 增加法线约束：N_final = normalize(0.5·N_smooth + 0.5·N_plane)，强制向平均投影方向靠拢 |
| 模型尖锐 — 第三轮 | 即便法线平滑，顶面仍存在几何突刺 | 法线约束只改善方向，3D 点位本身仍可能有局部突变 | 对 topContourPts 执行 2次拉普拉斯位置平滑，从几何层面"熨平"突点 |
| 顶点点位过近导致侧面折叠 | 相邻顶面点距离极近时，侧壁三角形退化 | 轮廓在弯曲区域的顶部投影点收敛 | 侧壁跳过 tpI.Distance(tpJ) < 0.02×depth 的边；顶面 Wire 跳过 < 0.005×depth 的边 |
| Sewing → TopoDS::Shell 报错 | 缝合后面片无法构成闭合壳，BRepBuilderAPI_Sewing 产生 null shell | **根因：三个面组（底面/顶面/侧壁）各自独立创建 TopoDS_Vertex，没有任何顶点共享。** buildTriangleFace 每次调用创建 3 个全新顶点，即便相邻三角形空间位置重合。唯一连接手段是 BRepBuilderAPI_Sewing 的公差合并——当网格曲率大时，需要 0.4+ 的公差才能"强行"合并。这是用公差修补拓扑逻辑不匹配 | **重写拓扑构建，实现全链路顶点共享：** (1) `makeTriFace` 接受预创建 TopoDS_Vertex，不再内部创建；(2) `buildTpsaSideWalls` 底部/顶部轮廓端点通过 vpoolBot/vpoolTop 与底面/顶面 Wire 共用同一 TopoDS_Vertex；(3) 侧壁条带内相邻三角形段通过 prevBv/prevTv 共享中间顶点；(4) 顶面 Wire 改用 vpoolTop 构建边 |
| 缝合容差链式膨胀 | 顶点不共享时需要 0.01→0.1→0.4 逐次放大公差才能缝合 | 顶点独立创建 → 间隙大 → 放大公差 → 可能错误合并无关顶点 → 拓扑进一步恶化 | sewTol 强制锁定在 0.01 以内：`min(0.01, max(0.005, residual*1.5))`。若残余要求 > 0.01，报错而非强行缝合 |
| 顶点法线不平滑 | 面法线面积加权导致尖锐棱角处法线跳变 | 面积加权下大面片主导法线方向，小面片（尖锐处）法线被淹没 | 改为角度加权：每面法线对顶点的贡献按该面在顶点的夹角加权 (`acos` 公式) |

---

## 待完成

- [ ] Demo 测试：在弯曲网格上验证 BSpline 曲面文字效果
- [ ] 自适应 TPSA 分段：直线段减少细分、曲线段增加细分
- [ ] 轮廓等间距重采样 (`GCPnts_UniformAbscissa`)，消除 Sliver 三角形
- [ ] 布尔运算（text solid 与原始 mesh 的 Cut/Common）

---

## 路线 3：MakeThickSolid 替代手动侧壁（当前）

### 问题：路线 2 的 `TopoDS::Solid` 崩溃

**现象：** 所有字符（D、O、G 等）在 heal 阶段抛出 `OCCT error: TopoDS::Solid`，solid 构建失败。

| 症状 | 原因 |
|------|------|
| `[occ] projectTextOnMesh [heal]: OCCT error: TopoDS::Solid` | `ShapeFix_Solid::Perform()` 返回非 Solid 类型 |
| 单轮廓字符也失败 | Shell 未闭合，无法形成 Solid |

**根因分析：**

1. **几何不一致**：Bottom/top face 的边界是 BSpline 曲面上的参数曲线（弯曲），side wall 的边是 3D 直线段。两者在几何上不匹配，sewing tolerance 0.001 无法弥合。
2. **曲面拟合误差**：5x5 BSpline grid 对 bottom 和 top 分别独立拟合，两个曲面的边界点虽然共享 TopoDS_Vertex（坐标一致），但曲面本身有偏差，导致 face 边界不贴合 side wall。
3. **Laplacian smoothing 偏移**：Top contour 经过 2 次 Laplacian 平滑后，顶点位置与 side wall 计算的 top 端点（直接 normal offset，无平滑）不一致。

### 修复方案

```
glyph contours → 2D 采样点
  → Ray-cast onto mesh (BVH, 复用)
  → 3D bottom contour points
  → PCA → BSpline surface fitting
  → BRepBuilderAPI_MakeFace(bsplineSurf, outerWire, holeWires) → bottom face
  → BRepOffsetAPI_MakeThickSolid::MakeThickSolidBySimple(bottomFace, embossDepth)
  → ShapeFix_Solid (兜底，检查 ShapeType 再 cast)
  → TopoDS_Solid
```

**优势：**
- 消除手动侧壁/顶面构建，OCCT 内部保证拓扑闭合
- 无 sewing tolerance 问题
- 天然支持多轮廓（带孔 face）
- 代码量大幅减少（删除 ~200 行 side wall + top face + smoothing 逻辑）

**已实现：** 2026-05-12，删除 `smoothContourNormals`、`makeTriFace`、`buildTpsaSideWalls`，替换为 `MakeThickSolidBySimple`。

### 问题：MakeThickSolid 在 WASM 下崩溃

**现象：** `getWasmTableEntry(...) is not a function`，TKOffset 内部 `BRepOffset_MakeOffset` 使用 C++ 异常做控制流，emscripten JS-based EH 无法处理多层嵌套 invoke 调用链。

**结论：** `MakeThickSolid` 在 WASM 环境下对 BSpline 曲面不可用。需要换方案。

### 问题：Bottom face 三角化失败（mesher status 128）

**诊断结果 (2026-05-12)：**

| 检查项 | 结果 | 说明 |
|--------|------|------|
| BSpline 曲面拟合 | ✅ 成功 | 5x5 grid, PCA ratio < 0.02 |
| Face 构建 | ✅ 成功 | `MakeFace(surface, wire)` 返回非空 |
| 投影点 vs 曲面偏差 | maxDist=0.31, avg=0.07-0.10 | 曲面不严格经过投影点 |
| Edge pcurve | ❌ **全部缺失** | 所有边只有 3D curve，无 2D 参数曲线 |
| Edge tolerance | 0.000000 | 未设置 |
| Mesher status | 128 (ReMesh) | 三角化部分失败 |
| 三角化结果 | 'D': 2 tris, 'O': 1 tri, 'G': 140 tris | 大部分区域跳过 |

**根因：** Wire 边用 `BRepBuilderAPI_MakeEdge(v0, v1)` 构建 — 这是 3D 空间直线段，只有 3D curve。传给 `MakeFace(bsplineSurface, wire)` 时，OCCT 尝试将 3D 边投影到曲面生成 pcurve，但因为直线不在曲面上（偏差 0.31），投影失败，pcurve 未生成。`BRepMesh_IncrementalMesh` 需要 pcurve 来确定曲面上的三角化区域，没有 pcurve 就无法正确工作。

### 修复方案：UV 空间构建边（pcurve 优先）

```
投影点 → 投影到 BSpline 曲面得到 UV 坐标
       → Geom2d_Line(uv0, uv1) 构建 2D 参数曲线
       → BRepBuilderAPI_MakeEdge(geom2dCurve, bsplineSurface) → 边天然有 pcurve
       → BRepBuilderAPI_MakeWire → BRepBuilderAPI_MakeFace
```

**优势：**
- 边严格在曲面上，pcurve 天然存在
- mesher 可以正确三角化
- 与路线 3（圆柱面）的 UV Bezier 方案一致

---

## BSpline 曲面拟合 — 实现细节 (2026-05-12)

### 步骤拆解

| 步骤 | 操作 | 关键参数/API |
|------|------|-------------|
| 体素下采样 | 3D 体素网格 + 质心平均 | >2000点触发，目标~750点 |
| PCA | 协方差矩阵 3×3 → math_Jacobi → 特征值降序 | — |
| 奇异值检查 | λ_min/λ_max > 0.3 → 报错 | 防止球形分布导致参数化失效 |
| 3σ 去噪 | 计算点到PCA平面的距离，剔除 >3σ 的离群点 | — |
| UV 参数化 | 3D点投影到PCA主平面 → (u,v) → 归一化至 [0,1] | — |
| 栅格化 | 归一化 UV 空间上创建 nu×nv 规则网格，逆距离加权填充 | nu=nv=√N, [5,25] |
| 曲面拟合 | GeomAPI_PointsToBSplineSurface(grid) | DegMin=3, DegMax=3, C2, Tol3D=0.1 |
| 一级回退 | 同 API, C1, Tol=0.5 | — |
| 二级回退 | PCA 平面上 2×2 栅格 + Deg=1, C0 拟合 | 等价于解析平面 |
| UV 翻转检查 | surface->D1(centerUV) 取法线，与 expectedNormal 点积 | 负值则 UReverse() |
| 边界扩张 | GeomLib::ExtendSurfByLength × 4 | 每侧扩展 uRange/vRange 最大值的 10% |

## 待验证方案

### 方案：底面改用 BSpline 曲面拟合 — ✅ 已实现 (2026-05-12)

**已解决：** 当前底面用 BSpline 曲面拟合，面跟随网格曲率，平面拟合作为回退。

- [x] 在 `occProjectTextOnMesh` 中接入 `fitMeshRegionSurface`（PCA 版本）
- [x] BSpline 曲面路径 + 平面回退双路径
- [x] 编译验证（build_wasm.sh 通过）
- [ ] Demo 测试：在弯曲网格上验证文字跟随曲率的效果

---

## 核心经验：拓扑逻辑 > 公差修补

本轮开发中最关键的教训：

> **尖刺和报错，都是因为试图用"公差"去修补"拓扑逻辑不匹配"的债。逻辑匹配了，公差就是浮云。**

具体表现：
- `buildTriangleFace` 每次调用内部 `BRepBuilderAPI_MakeVertex` 创建独立顶点 → 三个面组之间零共享
- 唯一连接手段是 `BRepBuilderAPI_Sewing` 的公差合并 → 公差不放大就缝不上 → Shell 报错
- 之前的 1.5 秒耗时大部分在做无意义的"强力缝合"

正确做法（已实现）：
1. 顶点共享 (`VertexPool`) 贯穿全链路：底面 Wire → 顶面 Wire → 侧壁三角形，同一空间点对应同一个 `TopoDS_Vertex` 对象
2. `sewTol` 锁定在 0.01，超过报错
3. 缝合耗时从秒级降到毫秒级，Shell 错误彻底消失



## 已完成：统一投影管线

JS 端不再做独立投影，所有计算由 C++ 完成并返回中间数据（投影点、曲线采样、面网格）给 JS 预览。

关键文件：
- `core/occ_geometry_mesh.cpp` — `occProjectTextOnMeshWithPreview()`
- `core/occ_geometry_mesh.h` — 函数声明
- `bindings/bindings.cpp` — emscripten 注册
- `web-sdk/src/index.ts` — `projectTextOnMeshWithPreview()` + `MeshTextProjectionResult`
- `demo/src/mesh_text.ts` — `doProject()` 使用统一管线，移除了 JS 端 raycaster
- `demo/vite.config.ts` — 排除 webcad-sdk 预构建（解决 Vite 缓存问题）

## 当前问题

### 问题 1：Mesher 三角化失败 (status=6, OpenWire) — ✅ 已解决

**现象**：deflection=0.05 时，有孔字母（D、O）的三角化失败，返回 0 verts。

**根因**：`ShapeFix_Face` 在处理 hole wire 时破坏了拓扑，导致 mesher 报 OpenWire。

**最终解决方案**：
1. **去掉 `ShapeFix_Face`** — 它是导致 status=6 的直接原因
2. **根据 `signedAreaUV` 判断 hole wire 方向** — 如果 hole 和 outer 同向则反转
3. **预创建共享顶点** — `BRepBuilderAPI_MakeVertex` 预先创建，边之间复用同一个 `TopoDS_Vertex`
4. **`meshTol = max(deflection, 0.1)`** — 采样精度和 meshing 容差分离

**已尝试但失败的方案**：
1. `bb.UpdateEdge(e, 0.5)` 固定容差 — 0.05 时 O 失败
2. `bb.UpdateEdge(e, deflection * 2)` — O 修好 D 又失败
3. `bb.UpdateEdge(e, min(deflection, dist*0.1))` — 全成功但 20 秒
4. `bb.UpdateEdge(e, deflection)` — 不稳定
5. 放宽 `SameParameter` 到 `deflection * 3` — 无效
6. UV-first (`Geom2d_Line` + `BRepBuilderAPI_MakeEdge(pcurve, surface)`) — 面不贴 mesh，畸形
7. UV-first + 3D edge 混合 — mesher 卡死（3D 直线和 pcurve 曲线矛盾）

### 问题 2：BSpline 曲面拟合振荡 — 未解决

**现象**：面的边缘粗糙、G 字母有凸起/鼓包，面不紧贴原始 mesh。

**根因详解**：

`fitMeshRegionSurface` 的 grid 大小是动态计算的（`nu = nv = sqrt(N)`）：
- D (82 pts) → 9x9 grid → 81 个控制点，但数据点全在轮廓边界
- O (34 pts) → 5x5 grid → 效果好
- G (73 pts) → 8x8 grid → 内部振荡

问题本质：**所有拟合点都在轮廓边界上，grid 内部格点没有真实数据约束**。
逆距离加权插值在远离数据点的区域只能"猜"，grid 越大猜的格点越多，BSpline 自由度越高，振荡越严重。

类比：用钉子把弹性布的边缘钉住，中间没有钉子 → 布可以自由鼓起来。grid 9x9 = 弹性强（高阶），grid 5x5 = 布硬（低阶）。

**解决方向**（按优先级）：
1. **限制 grid 最大为 5x5 或 6x6** — 最简单，减少内部自由度
2. **在轮廓内部添加约束点** — 从 mesh 上射线采样内部点参与拟合，让大 grid 也有约束
3. **降低 BSpline 阶数** — 从 Deg=3 降到 Deg=2
4. **对平坦区域用平面近似** — PCA ratio 很小时直接用平面

### 问题 3：性能

**现状**：deflection=0.05 时约 4 秒，deflection=0.15 时约 2 秒。

**已优化**：
- 法线计算从逐顶点 `GeomAPI_ProjectPointOnSurf`（12秒）改为三角面累加（瞬间）
- 去掉 `ShapeFix_Face`（节省约 0.5 秒）

**剩余瓶颈**：
- BSpline 曲面拟合（PCA + grid interpolation + GeomAPI_PointsToBSplineSurface）
- Wire/Face 构建
- BRepMesh_IncrementalMesh 三角化

## 已修复的 Bug

1. **WASM 内存越界 (curve sampling)** — 从 Wire 边提取 3D curve 时 `BRep_Tool::Curve()` 返回 null 导致崩溃。修复：改为从 `bottomFace` 的 wire 提取（`BuildCurves3d` 之后）。

2. **WASM 内存越界 (wire building)** — `BRepBuilderAPI_MakeWire::Wire()` 在没有成功添加边时被调用。修复：加 `edgesAdded < 3 || !wm.IsDone()` 保护。

3. **Vite 缓存问题** — SDK 更新后 Vite 预构建缓存未刷新，导致 `projectTextOnMeshWithPreview` 找不到。修复：创建 `demo/vite.config.ts` 排除 webcad-sdk 预构建。

4. **法线计算性能** — 逐顶点 `GeomAPI_ProjectPointOnSurf` 导致 12 秒。修复：改为从三角面直接累加法线。

5. **ShapeFix_Face 破坏 hole wire 拓扑** — 导致 mesher status=6。修复：去掉 ShapeFix_Face。

6. **Hole wire 方向错误** — 不反转时 hole 覆盖整个面（只剩 7 个三角形），盲目反转则内外颠倒。修复：根据 `signedAreaUV` 判断绕向，同向时才反转。

## 关键发现

- `BRepMesh_IncrementalMesh` status flags: 128=ReMesh（正常），6=OpenWire+Failure（致命），4=Failure（致命）
- `ShapeFix_Face` 是 hole wire 三角化失败的元凶 — 去掉后全部成功
- `FixAddPCurve` 在弯曲 BSpline 曲面上不可靠 — 产生的 pcurve 和 3D curve 偏差不可控
- edge tolerance 必须 > pcurve 偏差，但 < 相邻顶点距离的一半，这个窗口在高精度时很窄
- deflection 参数同时控制：Bezier 采样密度、edge tolerance、mesher 精度 — 需要用 `meshTol` 分离
- 预创建共享顶点不能解决 status=6（问题在 ShapeFix 不在顶点共享）
- pcurve-only 方案（`BRepBuilderAPI_MakeEdge(pcurve, surface)`）面不贴原始 mesh — 因为面在 BSpline 曲面上而非 mesh 上
- BSpline grid 大小动态计算 `sqrt(N)` 导致大轮廓（D=9x9, G=8x8）内部振荡

**Why:** 记录尝试过的路线避免重复踩坑，下次对话可以直接从当前进度继续。

**How to apply:** 解决问题 1 时参考已尝试方案，不要重复走失败路线。当前正在测试 UV-first 方案。
