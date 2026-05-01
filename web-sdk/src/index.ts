// Emscripten MODULARIZE=1 + EXPORT_NAME='GeometryModule'
// The <script> tag in index.html loads geometry_module.js and exposes this global factory.
declare global {
  const GeometryModule: () => Promise<any>;
}

let _module: any = null;

export async function init(): Promise<void> {
  _module = await GeometryModule();
}

export interface BoxData {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint32Array;
}

function vecToArray<T extends Float32Array | Uint32Array>(
  vec: { size(): number; get(i: number): number },
  Ctor: new (n: number) => T,
): T {
  const n = vec.size();
  const out = new Ctor(n);
  for (let i = 0; i < n; i++) out[i] = vec.get(i);
  return out;
}

export function createBox(w = 1, h = 1, d = 1): BoxData {
  if (!_module) throw new Error('Geometry not initialized. Call init() first.');
  const box = _module.createBox(w, h, d);
  return {
    positions: vecToArray(box.positions, Float32Array),
    normals:   vecToArray(box.normals, Float32Array),
    indices:   vecToArray(box.indices, Uint32Array),
  };
}
