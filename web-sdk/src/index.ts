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
