// Emscripten MODULARIZE=1 + EXPORT_NAME='GeometryModule'
declare global {
  const GeometryModule: () => Promise<any>;
}

let _m: any = null;

export async function init(): Promise<void> {
  _m = await GeometryModule();
}

// ---- Helpers ----

function vecToFloat32(v: { size(): number; get(i: number): number }): Float32Array {
  const n = v.size();
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = v.get(i);
  return out;
}

function vecToUint32(v: { size(): number; get(i: number): number }): Uint32Array {
  const n = v.size();
  const out = new Uint32Array(n);
  for (let i = 0; i < n; i++) out[i] = v.get(i);
  return out;
}

// ---- Data types ----

export interface Vec3Data {
  x: number; y: number; z: number;
}

export interface SurfaceData {
  type: number;
  params: Float32Array;
}

export interface FaceData {
  surfaceIndex: number;
  uMin: number; uMax: number;
  vMin: number; vMax: number;
  orientation: boolean;
  label: string;
}

export interface ShapeData {
  name: string;
  faces: FaceData[];
  surfaces: SurfaceData[];
  faceCount: number;
  /** Raw WASM handle for tessellation calls */
  _handle: any;
}

export interface FaceMeshData {
  positions: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  indices: Uint32Array;
}

// Legacy
export interface BoxData {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint32Array;
}

// ---- Legacy ----

export function createBox(w = 1, h = 1, d = 1): BoxData {
  if (!_m) throw new Error('Geometry not initialized. Call init() first.');
  const box = _m.createBox(w, h, d);
  return {
    positions: vecToFloat32(box.positions),
    normals:   vecToFloat32(box.normals),
    indices:   vecToUint32(box.indices),
  };
}

// ---- Phase 2: Shape creation ----

function wrapShape(raw: any): ShapeData {
  const faceVec = raw.faces;
  const surfVec = raw.surfaces;
  const fc = faceVec.size();
  const sc = surfVec.size();

  const faces: FaceData[] = [];
  for (let i = 0; i < fc; i++) {
    const f = faceVec.get(i);
    faces.push({
      surfaceIndex: f.surfaceIndex,
      uMin: f.uMin, uMax: f.uMax,
      vMin: f.vMin, vMax: f.vMax,
      orientation: f.orientation,
      label: f.label,
    });
  }

  const surfaces: SurfaceData[] = [];
  for (let i = 0; i < sc; i++) {
    const s = surfVec.get(i);
    surfaces.push({
      type: s.type,
      params: vecToFloat32(s.params),
    });
  }

  return {
    name: raw.name,
    faces,
    surfaces,
    faceCount: fc,
    _handle: raw,
  };
}

export function createSphere(radius: number): ShapeData {
  if (!_m) throw new Error('Not initialized.');
  return wrapShape(_m.createSphere(radius));
}

export function createCylinder(radius: number, height: number): ShapeData {
  if (!_m) throw new Error('Not initialized.');
  return wrapShape(_m.createCylinder(radius, height));
}

export function createCone(rBottom: number, rTop: number, height: number): ShapeData {
  if (!_m) throw new Error('Not initialized.');
  return wrapShape(_m.createCone(rBottom, rTop, height));
}

export function createBoxShape(w: number, h: number, d: number): ShapeData {
  if (!_m) throw new Error('Not initialized.');
  return wrapShape(_m.createBoxShape(w, h, d));
}

// ---- Phase 2: Topology / surface / tessellation ----

export function shapeFaceCount(shape: ShapeData): number {
  return _m.shapeFaceCount(shape._handle);
}

export function tessellateFace(shape: ShapeData, faceIndex: number, resolution: number): FaceMeshData {
  const raw = _m.tessellateFace(shape._handle, faceIndex, resolution);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    uvs:       vecToFloat32(raw.uvs),
    indices:   vecToUint32(raw.indices),
  };
}

// UV→XYZ and normal lookup via shape + faceIndex (avoids reconstructing Surface in JS)
export function faceUVToXYZ(shape: ShapeData, faceIndex: number, u: number, v: number): Vec3Data {
  const r = _m.faceUVToXYZ(shape._handle, faceIndex, u, v);
  return { x: r.x, y: r.y, z: r.z };
}

export function faceNormalAtUV(shape: ShapeData, faceIndex: number, u: number, v: number): Vec3Data {
  const r = _m.faceNormalAtUV(shape._handle, faceIndex, u, v);
  return { x: r.x, y: r.y, z: r.z };
}

// Get the Surface for a face (returns Surface by value from C++)
export function getFaceSurface(shape: ShapeData, faceIndex: number): SurfaceData {
  const raw = _m.shapeGetSurface(shape._handle, faceIndex);
  return {
    type: raw.type,
    params: vecToFloat32(raw.params),
  };
}

// ---- Phase 3: OCCT-based mesh (BRepPrimAPI → BRepMesh → Poly_Triangulation) ----

export interface OccMeshData {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint32Array;
}

export function occMakeBox(dx: number, dy: number, dz: number, deflection = 0.1): OccMeshData {
  if (!_m) throw new Error('Not initialized.');
  const raw = _m.occMakeBox(dx, dy, dz, deflection);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    indices:   vecToUint32(raw.indices),
  };
}

export function occMakeSphere(radius: number, deflection = 0.1): OccMeshData {
  if (!_m) throw new Error('Not initialized.');
  const raw = _m.occMakeSphere(radius, deflection);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    indices:   vecToUint32(raw.indices),
  };
}

export function occMakeCylinder(radius: number, height: number, deflection = 0.1): OccMeshData {
  if (!_m) throw new Error('Not initialized.');
  const raw = _m.occMakeCylinder(radius, height, deflection);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    indices:   vecToUint32(raw.indices),
  };
}

// ---- Debug ----

export function shapeDebugPrint(shape: ShapeData): void {
  _m.shapeDebugPrint(shape._handle);
}

export function faceDebugPrint(shape: ShapeData, faceIndex: number): void {
  _m.faceDebugPrint(shape._handle, faceIndex);
}

// ============================================================
// Phase 4: OCCT Topology Exploration
// ============================================================
// These functions let you inspect the internal structure of an OCCT shape:
//   - List all Faces (bounded surface patches)
//   - Get the underlying Geom_Surface for each Face
//   - Get UV parameter bounds (the "trimmed surface" rectangle)
//   - Evaluate the surface at any (u,v) → 3D point + normal
//   - Tessellate a single Face independently

export interface OccFaceInfoData {
  surfaceType: number; // GeomAbs_SurfaceType enum
  uMin: number; uMax: number;
  vMin: number; vMax: number;
}

export interface OccUVPointData {
  x: number; y: number; z: number;
  nx: number; ny: number; nz: number;
}

// Shape handle system — create a shape, get back an int handle to use with other functions
export function occCreateBoxShape(dx: number, dy: number, dz: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occCreateBoxShape(dx, dy, dz);
}

export function createCylinderShape(radius: number, height: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occCreateCylinderShape(radius, height);
}

export function createSphereShape(radius: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occCreateSphereShape(radius);
}

export function createConeShape(r1: number, r2: number, height: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occCreateConeShape(r1, r2, height);
}

export function releaseShapeHandle(handle: number): void {
  if (!_m) throw new Error('Not initialized.');
  _m.occReleaseShapeHandle(handle);
}

// Topology traversal
export function occShapeFaceCount(handle: number): number {
  return _m.occShapeFaceCount(handle);
}

export function getFaceInfo(handle: number, faceIndex: number): OccFaceInfoData {
  const info = _m.occGetFaceInfo(handle, faceIndex);
  return {
    surfaceType: info.surfaceType,
    uMin: info.uMin, uMax: info.uMax,
    vMin: info.vMin, vMax: info.vMax,
  };
}

// Evaluate surface at UV coordinates
export function evalFaceUV(handle: number, faceIndex: number, u: number, v: number): OccUVPointData {
  const pt = _m.occEvalFaceUV(handle, faceIndex, u, v);
  return { x: pt.x, y: pt.y, z: pt.z, nx: pt.nx, ny: pt.ny, nz: pt.nz };
}

// Tessellate a single face (for per-face highlighting)
export function tessellateFaceMesh(handle: number, faceIndex: number, deflection: number): OccMeshData {
  const raw = _m.occTessellateFaceMesh(handle, faceIndex, deflection);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    indices:   vecToUint32(raw.indices),
  };
}

// ============================================================
// Phase 5: Wire topology
// ============================================================
export interface OccWireInfoData {
  edgeCount: number;
  isClosed: boolean;
  totalLength: number;
}

// Create a TopoDS_Wire from 3D polyline points.
// pts3D: Float64Array — flat [x0,y0,z0, x1,y1,z1, ...]
export function makeWireFromPoints(pts3D: Float64Array, closeWire: boolean): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occMakeWireFromPoints(pts3D, closeWire);
}

export function getWireInfo(handle: number): OccWireInfoData {
  return _m.occGetWireInfo(handle);
}

// Sample wire edges for 3D visualization → Float32Array
// occSampleWire3D returns a plain JS Array (not emscripten vector), so we convert directly
export function sampleWire3D(handle: number, samplesPerEdge: number): Float32Array {
  const arr = _m.occSampleWire3D(handle, samplesPerEdge);
  const n = arr.length;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = arr[i];
  return out;
}

export function releaseWireHandle(handle: number): void {
  _m.occReleaseWireHandle(handle);
}

// Human-readable surface type names
export const SURFACE_TYPE_NAMES: Record<number, string> = {
  0: 'Plane',
  1: 'Cylinder',
  2: 'Cone',
  3: 'Sphere',
  4: 'Torus',
  5: 'Bezier',
  6: 'BSpline',
  7: 'Revolution',
  8: 'Extrusion',
  9: 'Offset',
  10: 'Other',
};

// ============================================================
// Phase 6: Face + Solid construction
// ============================================================
export interface OccTopologyInfoData {
  numSolids: number;
  numShells: number;
  numFaces: number;
  numWires: number;
  numEdges: number;
  numVertices: number;
}

// Create a planar face on XY plane from outer wire + optional hole wires
export function makeFace(outerWireHandle: number, innerWireHandles: number[]): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occMakeFace(outerWireHandle, innerWireHandles);
}

// Extrude a face/shape along a direction vector → solid
export function makePrism(shapeHandle: number, dx: number, dy: number, dz: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occMakePrism(shapeHandle, dx, dy, dz);
}

// Tessellate any shape in the registry
export function tessellateShape(handle: number, deflection: number): OccMeshData {
  const raw = _m.occTessellateShape(handle, deflection);
  return {
    positions: vecToFloat32(raw.positions),
    normals:   vecToFloat32(raw.normals),
    indices:   vecToUint32(raw.indices),
  };
}

// Get topology counts for debug
export function getTopologyInfo(handle: number): OccTopologyInfoData {
  const info = _m.occGetTopologyInfo(handle);
  return {
    numSolids: info.numSolids,
    numShells: info.numShells,
    numFaces: info.numFaces,
    numWires: info.numWires,
    numEdges: info.numEdges,
    numVertices: info.numVertices,
  };
}

// ============================================================
// Phase 7: Surface-aware emboss (manual boundary sampling)
// ============================================================

// Build emboss solid from a glyph wire on a Z-axis cylinder.
// wireHandle: glyph boundary wire (must lie on cylinder surface)
// radius: cylinder radius
// offset: emboss depth along surface normal (positive = outward)
// samplesPerEdge: number of sample points per wire edge
export function buildEmboss(wireHandle: number, radius: number, offset: number, samplesPerEdge: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occBuildEmboss(wireHandle, radius, offset, samplesPerEdge);
}

export function getLastBottomFace(): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occGetLastBottomFace();
}

export function getLastTopFace(): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occGetLastTopFace();
}

// ============================================================
// Phase 8: Face splitting via BRepFeat_SplitShape
// ============================================================

// Build a wire from analytic UV curve segments on a face's surface.
// uvData: Float64Array — [numSegments, type0, npts0, u0,v0, ..., type1, npts1, ...]
//   type=1 line(2pts)  type=2 quad(3pts)  type=3 cubic(4pts)
// shapeHandle: shape whose face surface to use
// faceIndex: which face to take the surface from
// closeWire: if true, ensure wire is closed
export function makeWireFromUVCurves(uvData: Float64Array, shapeHandle: number, faceIndex: number, closeWire: boolean): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occMakeWireFromUVCurves(uvData, shapeHandle, faceIndex, closeWire);
}

// Split a face of a shape using a wire that lies on that face.
// Returns new shape handle (the whole shape with the split), or -1.
export function splitFaceByWire(shapeHandle: number, faceIndex: number, wireHandle: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occSplitFaceByWire(shapeHandle, faceIndex, wireHandle);
}

// Get sub-face handles from the last splitFaceByWire call.
export function getSplitFaces(): number[] {
  if (!_m) throw new Error('Not initialized.');
  const arr = _m.occGetSplitFaces();
  const n = arr.length;
  const out: number[] = new Array(n);
  for (let i = 0; i < n; i++) out[i] = arr[i];
  return out;
}

// Create a trimmed face from surface + wire (no split, pure MakeFace).
// Uses the surface from shapeHandle/faceIndex and the wire from wireHandle.
// The face belongs to the original surface (same Geom_Surface).
export function makeFaceFromWire(shapeHandle: number, faceIndex: number, wireHandle: number, holeWireHandles: number[]): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occMakeFaceFromWire(shapeHandle, faceIndex, wireHandle, holeWireHandles);
}

// Build faces from all wires using nesting-depth classification.
// Returns array of face handles (each face already has its holes).
export function buildFacesFromWires(wireHandles: number[], shapeHandle: number, faceIndex: number): number[] {
  if (!_m) throw new Error('Not initialized.');
  const arr = _m.occBuildFacesFromWires(wireHandles, shapeHandle, faceIndex);
  const n = arr.length;
  const out: number[] = new Array(n);
  for (let i = 0; i < n; i++) out[i] = arr[i];
  return out;
}

// ============================================================
// Solid from offset face — Phase 10
// ============================================================
// Build a closed solid by offsetting a face along its surface normal.
//   faceHandle: bottom face handle (must be a TopoDS_Face)
//   thickness:  offset distance along surface normal (>0)
// Returns solid handle, or -1 on failure.
export function buildSolidFromFace(faceHandle: number, thickness: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occBuildSolidFromFace(faceHandle, thickness);
}

// Manual sew method: clone pcurves → offset surface → side walls → sew → solid.
export function buildSolidFromFaceManual(faceHandle: number, thickness: number): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occBuildSolidFromFaceManual(faceHandle, thickness);
}

// Validate a solid: closure, volume sign, edge sharing, tolerance.
// Returns true if the solid is manifold.
export function isSolidManifold(solidHandle: number): boolean {
  if (!_m) throw new Error('Not initialized.');
  return _m.occIsSolidManifold(solidHandle);
}

// ============================================================
// Mesh text projection — Phase 11
// ============================================================
// Register a triangle mesh for text projection.
// positions: Float32Array [x,y,z, ...]
// indices: Uint32Array [i0,i1,i2, ...]
// Returns mesh handle, or -1 on failure.
export function registerTriangleMesh(positions: Float32Array, indices: Uint32Array): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occRegisterTriangleMesh(positions, indices);
}

// Release a registered mesh handle.
export function releaseMeshHandle(handle: number): void {
  if (!_m) throw new Error('Not initialized.');
  _m.occReleaseMeshHandle(handle);
}

// Project text onto a registered mesh and build a manifold solid.
// contourData: array of Float64Array in the same format as makeWireFromUVCurves.
// Returns solid handle, or -1 on failure.
export function projectTextOnMesh(
  meshHandle: number,
  contourData: Float64Array[],
  ox: number, oy: number, oz: number,
  nx: number, ny: number, nz: number,
  ux: number, uy: number, uz: number,
  vx: number, vy: number, vz: number,
  textHeight: number,
  embossDepth: number,
  deflection: number,
): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occProjectTextOnMesh(
    meshHandle, contourData,
    ox, oy, oz, nx, ny, nz,
    ux, uy, uz, vx, vy, vz,
    textHeight, embossDepth, deflection,
  );
}

// Get the bottom face handle from the last projection.
export function getMeshProjectionBottomFace(): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occGetMeshProjectionBottomFace();
}

// Get the top face handle from the last projection.
export function getMeshProjectionTopFace(): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occGetMeshProjectionTopFace();
}

// Build face from pre-computed 3D contour points (JS-side raycasting).
// contourPoints: array of Float64Array, each is flat [x0,y0,z0, x1,y1,z1, ...]
export function buildFaceFromPoints(
  contourPoints: Float64Array[],
  embossDepth: number,
  deflection: number,
): number {
  if (!_m) throw new Error('Not initialized.');
  return _m.occBuildFaceFromPoints(contourPoints, embossDepth, deflection);
}

export interface MeshTextProjectionResult {
  projectedPoints: Float64Array[];
  curvePoints: Float64Array[];
  meshPositions: Float32Array;
  meshNormals: Float32Array;
  meshIndices: Uint32Array;
  shapeHandle: number;
}

// Unified projection + preview: projects text contours onto mesh, builds face,
// and returns all intermediate data for JS preview rendering.
export function projectTextOnMeshWithPreview(
  meshHandle: number,
  contourData: Float64Array[],
  ox: number, oy: number, oz: number,
  nx: number, ny: number, nz: number,
  ux: number, uy: number, uz: number,
  vx: number, vy: number, vz: number,
  textHeight: number,
  embossDepth: number,
  deflection: number,
): MeshTextProjectionResult {
  if (!_m) throw new Error('Not initialized.');
  const raw = _m.occProjectTextOnMeshWithPreview(
    meshHandle, contourData,
    ox, oy, oz, nx, ny, nz,
    ux, uy, uz, vx, vy, vz,
    textHeight, embossDepth, deflection,
  );

  const projectedPoints: Float64Array[] = [];
  const ppArr = raw.projectedPoints;
  for (let i = 0; i < ppArr.length; i++) {
    projectedPoints.push(ppArr[i]);
  }

  const curvePoints: Float64Array[] = [];
  const cpArr = raw.curvePoints;
  for (let i = 0; i < cpArr.length; i++) {
    curvePoints.push(cpArr[i]);
  }

  return {
    projectedPoints,
    curvePoints,
    meshPositions: raw.meshPositions,
    meshNormals: raw.meshNormals,
    meshIndices: raw.meshIndices,
    shapeHandle: raw.shapeHandle,
  };
}
