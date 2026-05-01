import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  init, createCylinderShape, releaseShapeHandle,
  getFaceInfo, evalFaceUV, occMakeCylinder,
  SURFACE_TYPE_NAMES,
  OccFaceInfoData, OccUVPointData,
} from 'webcad-sdk';

// ============================================================
// Scene
// ============================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 1.5, 6);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;

scene.add(new THREE.AmbientLight(0x555555));
const d1 = new THREE.DirectionalLight(0xffffff, 1.0); d1.position.set(5, 8, 5); scene.add(d1);
const d2 = new THREE.DirectionalLight(0x8888ff, 0.4); d2.position.set(-3, 2, -5); scene.add(d2);

// ============================================================
// UV rectangle state — the movable rectangle in parameter space
// ============================================================
// Cylinder lateral face: u ∈ [0, 2π], v ∈ [-h/2, h/2]
//   u = angle around axis (0 to 2π, ~6.283)
//   v = height along axis
// The rectangle [uMin,uMax] × [vMin,vMax] defines a curved patch
// on the cylinder surface.

interface UVRect {
  uMin: number; uMax: number;
  vMin: number; vMax: number;
}

const uvRect: UVRect = { uMin: 0.8, uMax: 3.0, vMin: -0.5, vMax: 0.7 };

// Sampling density
const EDGE_SAMPLES = 60;   // points per edge
const GRID_U = 10;         // interior grid divisions in u
const GRID_V = 6;          // interior grid divisions in v

// ============================================================
// Dynamic objects (updated when UV rect changes)
// ============================================================
const dynGroup = new THREE.Group();
scene.add(dynGroup);

// ============================================================
// Sample UV rectangle → 3D points + normals
// ============================================================
interface Sample3D {
  x: number; y: number; z: number;
  nx: number; ny: number; nz: number;
}

function sampleUV(handle: number, faceIndex: number, u: number, v: number): Sample3D {
  const p = evalFaceUV(handle, faceIndex, u, v);
  return { x: p.x, y: p.y, z: p.z, nx: p.nx, ny: p.ny, nz: p.nz };
}

// Sample the 4 edges of the UV rectangle
// Returns [bottomEdge, topEdge, leftEdge, rightEdge] as arrays of 3D samples
function sampleEdges(
  handle: number, faceIndex: number, r: UVRect, n: number,
): [Sample3D[], Sample3D[], Sample3D[], Sample3D[]] {
  const bottom: Sample3D[] = []; // v=vMin,  uMin→uMax
  const top:    Sample3D[] = []; // v=vMax,  uMin→uMax
  const left:   Sample3D[] = []; // u=uMin,  vMin→vMax
  const right:  Sample3D[] = []; // u=uMax,  vMin→vMax

  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const u = r.uMin + (r.uMax - r.uMin) * t;
    bottom.push(sampleUV(handle, faceIndex, u, r.vMin));
    top.push(sampleUV(handle, faceIndex, u, r.vMax));
    const v = r.vMin + (r.vMax - r.vMin) * t;
    left.push(sampleUV(handle, faceIndex, r.uMin, v));
    right.push(sampleUV(handle, faceIndex, r.uMax, v));
  }
  return [bottom, top, left, right];
}

// Sample interior grid
function sampleGrid(handle: number, faceIndex: number, r: UVRect, nu: number, nv: number): Sample3D[] {
  const pts: Sample3D[] = [];
  for (let j = 0; j <= nv; j++) {
    const v = r.vMin + (r.vMax - r.vMin) * (j / nv);
    for (let i = 0; i <= nu; i++) {
      const u = r.uMin + (r.uMax - r.uMin) * (i / nu);
      pts.push(sampleUV(handle, faceIndex, u, v));
    }
  }
  return pts;
}

// ============================================================
// Build/rebuild the UV rectangle visualization
// ============================================================
function rebuildVisuals(handle: number, faceIndex: number, r: UVRect) {
  // Clear previous
  while (dynGroup.children.length > 0) dynGroup.remove(dynGroup.children[0]);

  const [bottom, top, left, right] = sampleEdges(handle, faceIndex, r, EDGE_SAMPLES);
  const grid = sampleGrid(handle, faceIndex, r, GRID_U, GRID_V);

  // ---- Wireframe: 4 edges of the mapped rectangle ----
  function makeLine(pts: Sample3D[], color: number) {
    const positions: number[] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      positions.push(pts[i].x, pts[i].y, pts[i].z, pts[i + 1].x, pts[i + 1].y, pts[i + 1].z);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    return new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color, linewidth: 2 }));
  }
  dynGroup.add(makeLine(bottom, 0xffeb3b)); // yellow: bottom
  dynGroup.add(makeLine(top,    0xffeb3b)); // yellow: top
  dynGroup.add(makeLine(left,   0xff9800)); // orange: left
  dynGroup.add(makeLine(right,  0xff9800)); // orange: right

  // ---- Interior grid lines ----
  const allPts = [bottom, top, ...grid]; // use all for normals below

  // ---- Sample points: small spheres at grid intersections ----
  const sphereGeo = new THREE.SphereGeometry(0.025, 8, 6);
  for (const pt of grid) {
    const sphere = new THREE.Mesh(
      sphereGeo,
      new THREE.MeshBasicMaterial({ color: 0x00e5ff }),
    );
    sphere.position.set(pt.x, pt.y, pt.z);
    dynGroup.add(sphere);
  }

  // ---- Normals: short lines from each grid point in normal direction ----
  const normalLen = 0.15;
  const normalPositions: number[] = [];
  for (const pt of grid) {
    normalPositions.push(
      pt.x, pt.y, pt.z,
      pt.x + pt.nx * normalLen,
      pt.y + pt.ny * normalLen,
      pt.z + pt.nz * normalLen,
    );
  }
  const normalGeo = new THREE.BufferGeometry();
  normalGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(normalPositions), 3));
  dynGroup.add(new THREE.LineSegments(
    normalGeo,
    new THREE.LineBasicMaterial({ color: 0xff1744, linewidth: 1 }),
  ));

  // ---- Log UV→XYZ correspondence ----
  console.log(`\n=== UV Rect: u=[${r.uMin.toFixed(3)}, ${r.uMax.toFixed(3)}] v=[${r.vMin.toFixed(3)}, ${r.vMax.toFixed(3)}] ===`);
  const corners = [
    ['uMin,vMin', r.uMin, r.vMin],
    ['uMax,vMin', r.uMax, r.vMin],
    ['uMin,vMax', r.uMin, r.vMax],
    ['uMax,vMax', r.uMax, r.vMax],
  ];
  for (const [label, u, v] of corners) {
    const pt = sampleUV(handle, faceIndex, u, v);
    console.log(`  ${label}: uv=(${u.toFixed(3)},${v.toFixed(3)}) → xyz=(${pt.x.toFixed(3)},${pt.y.toFixed(3)},${pt.z.toFixed(3)})  n=(${pt.nx.toFixed(3)},${pt.ny.toFixed(3)},${pt.nz.toFixed(3)})`);
  }
}

// ============================================================
// Control panel
// ============================================================
function createPanel(r: UVRect, onChange: () => void) {
  const div = document.createElement('div');
  div.style.cssText = `
    position: fixed; top: 16px; right: 16px;
    background: rgba(10,10,20,0.88); color: #ccc;
    padding: 16px 18px; border-radius: 8px;
    font: 13px monospace; z-index: 100;
    min-width: 240px;
  `;

  const title = document.createElement('div');
  title.textContent = 'UV Rectangle Controls';
  title.style.cssText = 'color:#fff; font-weight:bold; margin-bottom:12px; font-size:14px;';
  div.appendChild(title);

  function addSlider(label: string, key: keyof UVRect, min: number, max: number, step: number) {
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom:10px;';

    const lbl = document.createElement('span');
    lbl.textContent = label + ': ';
    lbl.style.cssText = 'color:#aaa;';
    row.appendChild(lbl);

    const val = document.createElement('span');
    val.textContent = r[key].toFixed(3);
    val.style.cssText = 'color:#00e5ff; float:right;';
    row.appendChild(val);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = String(min);
    slider.max = String(max);
    slider.step = String(step);
    slider.value = String(r[key]);
    slider.style.cssText = 'width:100%; margin-top:4px; cursor:pointer;';
    slider.addEventListener('input', () => {
      (r as any)[key] = parseFloat(slider.value);
      val.textContent = (r as any)[key].toFixed(3);
      onChange();
    });
    row.appendChild(slider);
    div.appendChild(row);
  }

  addSlider('uMin', 'uMin', 0, 6.28, 0.05);
  addSlider('uMax', 'uMax', 0, 6.28, 0.05);
  addSlider('vMin', 'vMin', -1.1, 1.1, 0.05);
  addSlider('vMax', 'vMax', -1.1, 1.1, 0.05);

  // Presets
  const presets = document.createElement('div');
  presets.style.cssText = 'margin-top:10px; display:flex; flex-wrap:wrap; gap:4px;';

  function presetBtn(label: string, uMin: number, uMax: number, vMin: number, vMax: number) {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.style.cssText = 'padding:3px 8px; font:11px monospace; cursor:pointer; background:#333; color:#ccc; border:1px solid #555; border-radius:3px;';
    btn.addEventListener('click', () => {
      r.uMin = uMin; r.uMax = uMax; r.vMin = vMin; r.vMax = vMax;
      // Reset sliders — just rebuild the whole panel
      div.remove();
      createPanel(r, onChange);
      onChange();
    });
    return btn;
  }

  presets.appendChild(presetBtn('small patch', 1.5, 2.5, -0.3, 0.3));
  presets.appendChild(presetBtn('half wrap', 0, 3.14, -0.5, 0.5));
  presets.appendChild(presetBtn('full band', 0, 6.28, -0.3, 0.3));
  presets.appendChild(presetBtn('tall strip', 1.0, 2.0, -0.9, 0.9));
  div.appendChild(presets);

  document.body.appendChild(div);
  return div;
}

// ============================================================
// Help panel
// ============================================================
function addHelp() {
  const div = document.createElement('div');
  div.style.cssText = `
    position: fixed; bottom: 16px; left: 16px;
    background: rgba(0,0,0,0.7); color: #999;
    padding: 10px 14px; border-radius: 6px;
    font: 11px monospace; line-height: 1.6;
    pointer-events: none; z-index: 10;
  `;
  div.innerHTML = `
    <span style="color:#ffeb3b">━━</span> u-edges (top/bottom)
    <span style="color:#ff9800">━━</span> v-edges (left/right)<br>
    <span style="color:#00e5ff">●</span> sample points
    <span style="color:#ff1744">╵</span> surface normals
  `;
  document.body.appendChild(div);
}

// ============================================================
// Main
// ============================================================
async function main() {
  console.time('WASM init');
  await init();
  console.timeEnd('WASM init');

  console.log('╔══════════════════════════════════════╗');
  console.log('║  Curve On Surface Verification      ║');
  console.log('║  UV Rectangle → Cylinder Surface    ║');
  console.log('╚══════════════════════════════════════╝');
  console.log('');
  console.log('A rectangle in UV space [uMin,uMax]×[vMin,vMax] is sampled');
  console.log('along its boundary and interior. Each (u,v) is converted to');
  console.log('a 3D point via Geom_Surface::D1(u,v).');
  console.log('');
  console.log('Cylinder parametrization:');
  console.log('  u = angle around Z axis  [0, 2π]');
  console.log('  v = position along Z axis [-h/2, h/2]');
  console.log('  P(u,v) = (R·cos(u), R·sin(u), v)');
  console.log('  Normal = (cos(u), sin(u), 0)');
  console.log('');

  // Create cylinder via topology API
  const cylHandle = createCylinderShape(1.0, 2.2);
  const faceInfo = getFaceInfo(cylHandle, 0);
  console.log(`Lateral face: type=${SURFACE_TYPE_NAMES[faceInfo.surfaceType]}(${faceInfo.surfaceType})`);
  console.log(`  UV bounds: u=[${faceInfo.uMin.toFixed(3)}, ${faceInfo.uMax.toFixed(3)}] v=[${faceInfo.vMin.toFixed(3)}, ${faceInfo.vMax.toFixed(3)}]`);

  // ---- Background: semi-transparent cylinder mesh ----
  const cylMeshData = occMakeCylinder(1.0, 2.2, 0.06);
  const cylGeo = new THREE.BufferGeometry();
  cylGeo.setAttribute('position', new THREE.BufferAttribute(cylMeshData.positions, 3));
  cylGeo.setAttribute('normal', new THREE.BufferAttribute(cylMeshData.normals, 3));
  cylGeo.setIndex(new THREE.BufferAttribute(cylMeshData.indices, 1));
  const cylMat = new THREE.MeshStandardMaterial({
    color: 0x4488aa, roughness: 0.4, metalness: 0.1,
    side: THREE.DoubleSide, transparent: true, opacity: 0.35,
  });
  const cylMesh = new THREE.Mesh(cylGeo, cylMat);
  scene.add(cylMesh);

  // Wireframe overlay on cylinder
  const wireGeo = new THREE.WireframeGeometry(cylGeo);
  scene.add(new THREE.LineSegments(
    wireGeo,
    new THREE.LineBasicMaterial({ color: 0x334455, opacity: 0.25, transparent: true }),
  ));

  // ---- UV Rectangle visualization ----
  const onChange = () => rebuildVisuals(cylHandle, 0, uvRect);
  createPanel(uvRect, onChange);
  addHelp();
  onChange(); // initial build

  console.log('\nUse the sliders (top-right) to move/resize the UV rectangle.');
  console.log('Watch the 3D wireframe update in real time.\n');

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

main().catch(err => {
  document.body.innerHTML = `<pre style="color:red;padding:2em">${err.stack || err}</pre>`;
  console.error(err);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
