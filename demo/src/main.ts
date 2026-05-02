import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as opentype from 'opentype.js';
import {
  init, createCylinderShape, getFaceInfo, evalFaceUV, occMakeCylinder,
  makeWireFromPoints, getWireInfo, sampleWire3D, releaseWireHandle,
  OccWireInfoData, SURFACE_TYPE_NAMES,
} from 'webcad-sdk';

// ============================================================
// Scene
// ============================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(4, 0.5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.08;

scene.add(new THREE.AmbientLight(0x666666));
const d1 = new THREE.DirectionalLight(0xffffff, 1.0); d1.position.set(5, 8, 5); scene.add(d1);
const d2 = new THREE.DirectionalLight(0x8888ff, 0.4); d2.position.set(-3, 2, -5); scene.add(d2);

// ============================================================
// State
// ============================================================
const state = {
  text: 'CAD',
  offsetU: 0.8,
  offsetV: 0.0,
  uvScale: 2.5,
  letterSpacing: 0.0,
};

// ============================================================
// Bezier flattening (same as before)
// ============================================================
function flattenCubic(
  x0: number, y0: number, x1: number, y1: number,
  x2: number, y2: number, x3: number, y3: number,
  tol: number, out: number[][],
) {
  const mcx = (x0 + x3) * 0.5, mcy = (y0 + y3) * 0.5;
  const bpx = (x0 + 3 * x1 + 3 * x2 + x3) * 0.125;
  const bpy = (y0 + 3 * y1 + 3 * y2 + y3) * 0.125;
  if (Math.hypot(bpx - mcx, bpy - mcy) < tol) { out.push([x3, y3]); return; }
  const x01 = (x0 + x1) * 0.5, y01 = (y0 + y1) * 0.5;
  const x12 = (x1 + x2) * 0.5, y12 = (y1 + y2) * 0.5;
  const x23 = (x2 + x3) * 0.5, y23 = (y2 + y3) * 0.5;
  const x012 = (x01 + x12) * 0.5, y012 = (y01 + y12) * 0.5;
  const x123 = (x12 + x23) * 0.5, y123 = (y12 + y23) * 0.5;
  const x0123 = (x012 + x123) * 0.5, y0123 = (y012 + y123) * 0.5;
  flattenCubic(x0, y0, x01, y01, x012, y012, x0123, y0123, tol, out);
  flattenCubic(x0123, y0123, x123, y123, x23, y23, x3, y3, tol, out);
}

function flattenQuad(
  x0: number, y0: number, x1: number, y1: number,
  x2: number, y2: number, tol: number, out: number[][],
) {
  const mcx = (x0 + x2) * 0.5, mcy = (y0 + y2) * 0.5;
  const bpx = (x0 + 2 * x1 + x2) * 0.25, bpy = (y0 + 2 * y1 + y2) * 0.25;
  if (Math.hypot(bpx - mcx, bpy - mcy) < tol) { out.push([x2, y2]); return; }
  const x01 = (x0 + x1) * 0.5, y01 = (y0 + y1) * 0.5;
  const x12 = (x1 + x2) * 0.5, y12 = (y1 + y2) * 0.5;
  const x012 = (x01 + x12) * 0.5, y012 = (y01 + y12) * 0.5;
  flattenQuad(x0, y0, x01, y01, x012, y012, tol, out);
  flattenQuad(x012, y012, x12, y12, x2, y2, tol, out);
}

function glyphToPolylines(glyph: opentype.Glyph, x: number, y: number, fontSize: number): number[][][] {
  const path = glyph.getPath(x, y, fontSize);
  const contours: number[][][] = [];
  let current: number[][] = [];
  let cx = 0, cy = 0;
  for (const cmd of path.commands) {
    switch (cmd.type) {
      case 'M':
        if (current.length > 0) contours.push(current);
        current = [[cmd.x, cmd.y]];
        cx = cmd.x; cy = cmd.y;
        break;
      case 'L':
        current.push([cmd.x, cmd.y]);
        cx = cmd.x; cy = cmd.y;
        break;
      case 'Q':
        flattenQuad(cx, cy, cmd.x1, cmd.y1, cmd.x, cmd.y, 0.3, current);
        cx = cmd.x; cy = cmd.y;
        break;
      case 'C':
        flattenCubic(cx, cy, cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y, 0.3, current);
        cx = cmd.x; cy = cmd.y;
        break;
      case 'Z':
        if (current.length > 0) {
          const first = current[0];
          current.push([first[0], first[1]]);
        }
        break;
    }
  }
  if (current.length > 0) contours.push(current);
  return contours;
}

// ============================================================
// Glyph UV points → 3D → TopoDS_Wire → visual
// ============================================================
const dyn = new THREE.Group();
scene.add(dyn);

// Track wire handles for cleanup
let wireHandles: number[] = [];

function contourTo3D(handle: number, fi: number, contour: number[][], uStart: number): Float64Array {
  const n = contour.length;
  const pts = new Float64Array(n * 3);
  for (let i = 0; i < n; i++) {
    const [gx, gy] = contour[i];
    const u = uStart + (gx / 72) * state.uvScale;
    const v = state.offsetV + (gy / 72) * state.uvScale;
    const p = evalFaceUV(handle, fi, u, v);
    pts[i * 3] = p.x;
    pts[i * 3 + 1] = p.y;
    pts[i * 3 + 2] = p.z;
  }
  return pts;
}

function rebuildAll(handle: number, fi: number, font: opentype.Font) {
  // Cleanup previous wires
  for (const wh of wireHandles) releaseWireHandle(wh);
  wireHandles = [];
  while (dyn.children.length > 0) dyn.remove(dyn.children[0]);

  const fontSize = 72;
  let cursorX = 0;

  // Colors: outer loop = cyan, inner holes = magenta
  const OUTER_COLOR = 0x00e5ff;
  const HOLE_COLOR  = 0xff6e40;

  console.log(`\n=== Wire Topology: "${state.text}" ===`);
  console.log(`  offsetU=${state.offsetU.toFixed(2)} offsetV=${state.offsetV.toFixed(2)} uvScale=${state.uvScale.toFixed(2)}`);

  for (const ch of state.text) {
    const glyph = font.charToGlyph(ch);
    if (!glyph || !glyph.path) continue;

    const contours = glyphToPolylines(glyph, cursorX, 0, fontSize);
    const uStart = state.offsetU;

    // First contour = outer loop; rest = holes
    contours.forEach((contour, ci) => {
      if (contour.length < 3) return;

      // Convert UV→3D
      const pts3D = contourTo3D(handle, fi, contour, uStart);

      // Create TopoDS_Wire from 3D polyline
      const closeWire = true; // glyph contours should be closed
      const wireH = makeWireFromPoints(pts3D, closeWire);
      if (wireH < 0) return;
      wireHandles.push(wireH);

      const info = getWireInfo(wireH);
      const isOuter = ci === 0;
      const kind = isOuter ? 'outer' : 'hole';
      const color = isOuter ? OUTER_COLOR : HOLE_COLOR;

      console.log(`  Wire[${wireH}] '${ch}' contour[${ci}] ${kind}: edges=${info.edgeCount} closed=${info.isClosed} len=${info.totalLength.toFixed(3)}`);

      // Visualize: sample wire edges for smooth 3D polyline
      const wirePts = sampleWire3D(wireH, /*samplesPerEdge=*/ 2);
      const positions: number[] = [];
      for (let i = 0; i < wirePts.length; i++) positions.push(wirePts[i]);

      if (positions.length >= 6) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
        dyn.add(new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({ color, linewidth: 2 }),
        ));

        // Vertex dots at original sample points
        const dotPositions: number[] = [];
        for (let i = 0; i < pts3D.length; i++) dotPositions.push(pts3D[i]);
        const dotGeo = new THREE.BufferGeometry();
        dotGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(dotPositions), 3));
        dyn.add(new THREE.Points(
          dotGeo,
          new THREE.PointsMaterial({ color, size: 0.02 }),
        ));
      }
    });

    const adv = (glyph.advanceWidth ?? 0) / (font.unitsPerEm || 1000) * fontSize;
    cursorX += adv + state.letterSpacing;
  }
  console.log(`  total wires: ${wireHandles.length}\n`);
}

// ============================================================
// Control panel
// ============================================================
function createPanel(font: opentype.Font, onChange: () => void) {
  const div = document.createElement('div');
  div.style.cssText = `
    position:fixed; top:16px; right:16px;
    background:rgba(10,10,20,0.88); color:#ccc;
    padding:16px 18px; border-radius:8px;
    font:13px monospace; z-index:100; min-width:250px;
  `;

  const title = document.createElement('div');
  title.textContent = 'Wire Topology';
  title.style.cssText = 'color:#fff; font-weight:bold; margin-bottom:12px; font-size:14px;';
  div.appendChild(title);

  // Text input
  const textRow = document.createElement('div');
  textRow.style.cssText = 'margin-bottom:12px;';
  const textLbl = document.createElement('span'); textLbl.textContent = 'text: '; textLbl.style.cssText = 'color:#aaa;';
  const textInp = document.createElement('input');
  textInp.type = 'text'; textInp.value = state.text;
  textInp.style.cssText = 'width:100%; margin-top:4px; padding:4px 8px; font:14px monospace; background:#222; color:#fff; border:1px solid #555; border-radius:3px; outline:none; box-sizing:border-box;';
  textInp.addEventListener('input', () => { state.text = textInp.value || 'CAD'; onChange(); });
  textRow.appendChild(textLbl); textRow.appendChild(textInp);
  div.appendChild(textRow);

  function slider(label: string, key: keyof typeof state, min: number, max: number, step: number) {
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom:10px;';
    const hdr = document.createElement('div');
    hdr.style.cssText = 'display:flex; justify-content:space-between;';
    const lbl = document.createElement('span'); lbl.textContent = label; lbl.style.cssText = 'color:#aaa;';
    const val = document.createElement('span'); val.textContent = (state[key] as number).toFixed(2); val.style.cssText = 'color:#00e5ff;';
    hdr.appendChild(lbl); hdr.appendChild(val);
    row.appendChild(hdr);
    const inp = document.createElement('input');
    inp.type = 'range'; inp.min = String(min); inp.max = String(max); inp.step = String(step);
    inp.value = String(state[key]);
    inp.style.cssText = 'width:100%; margin-top:2px; cursor:pointer;';
    inp.addEventListener('input', () => {
      (state as any)[key] = parseFloat(inp.value);
      val.textContent = (state as any)[key].toFixed(2);
      onChange();
    });
    row.appendChild(inp); div.appendChild(row);
  }

  slider('offsetU',       'offsetU',      0.1,  6.18, 0.02);
  slider('offsetV',       'offsetV',     -0.9,  0.9,  0.02);
  slider('uvScale',       'uvScale',      0.5,  5.0,  0.05);
  slider('letterSpacing', 'letterSpacing',-10,  40,   0.5);

  function btn(label: string, t: string, ou: number, ov: number, s: number, ls: number) {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = 'padding:3px 8px; font:11px monospace; cursor:pointer; background:#333; color:#ccc; border:1px solid #555; border-radius:3px;';
    b.addEventListener('click', () => {
      state.text = t; state.offsetU = ou; state.offsetV = ov;
      state.uvScale = s; state.letterSpacing = ls;
      textInp.value = t;
      div.remove(); createPanel(font, onChange); onChange();
    });
    return b;
  }
  const presets = document.createElement('div');
  presets.style.cssText = 'margin-top:10px; display:flex; flex-wrap:wrap; gap:4px;';
  presets.appendChild(btn('"CAD"',  'CAD',   0.8,  0.0,  2.5,  0));
  presets.appendChild(btn('"AB"',   'AB',    0.5,  0.0,  2.0,  5));
  presets.appendChild(btn('"你好"', '你好',  1.5,  0.0,  2.0,  5));
  presets.appendChild(btn('"曲线"', '曲线',  0.5, -0.2,  2.5,  8));
  div.appendChild(presets);

  document.body.appendChild(div);
}

function addHelp() {
  const div = document.createElement('div');
  div.style.cssText = `
    position:fixed; bottom:16px; left:16px;
    background:rgba(0,0,0,0.7); color:#888;
    padding:10px 14px; border-radius:6px;
    font:11px monospace; line-height:1.7; pointer-events:none; z-index:10;
  `;
  div.innerHTML = `
    <span style="color:#00e5ff">━━</span> outer wire &nbsp;
    <span style="color:#ff6e40">━━</span> hole wire<br>
    glyph → polyline → TopoDS_Wire → sample → render
  `;
  document.body.appendChild(div);
}

// ============================================================
// Main
// ============================================================
async function main() {
  console.time('init');
  await init();
  console.timeEnd('init');

  console.log('╔══════════════════════════════════════╗');
  console.log('║  Wire Topology: glyph → TopoDS_Wire  ║');
  console.log('╚══════════════════════════════════════╝');
  console.log('');
  console.log('Pipeline:');
  console.log('  1. opentype.js → glyph bezier curves');
  console.log('  2. de Casteljau flattening → UV polyline');
  console.log('  3. Geom_Surface::D1 → 3D points on cylinder');
  console.log('  4. BRepBuilderAPI_MakeVertex + MakeEdge → edges');
  console.log('  5. BRepBuilderAPI_MakeWire → TopoDS_Wire');
  console.log('  6. Verify closure (first vertex ≈ last vertex)');
  console.log('  7. Sample wire edges → Three.js visualization');
  console.log('');

  // Load font
  console.time('font');
  const fontResp = await fetch('/simhei.ttf');
  const fontBuf = await fontResp.arrayBuffer();
  const font = opentype.parse(fontBuf);
  console.timeEnd('font');
  console.log(`Font: ${font.names?.fontFamily?.en ?? 'SimHei'}, unitsPerEm=${font.unitsPerEm}\n`);

  // Cylinder
  const cylHandle = createCylinderShape(1.0, 2.2);
  const fi = getFaceInfo(cylHandle, 0);
  console.log(`Cylinder face: ${SURFACE_TYPE_NAMES[fi.surfaceType]}`);
  console.log(`  UV domain: u=[${fi.uMin.toFixed(3)},${fi.uMax.toFixed(3)}] v=[${fi.vMin.toFixed(3)},${fi.vMax.toFixed(3)}]\n`);

  // Background cylinder
  const cylData = occMakeCylinder(1.0, 2.2, 0.06);
  const cylGeo = new THREE.BufferGeometry();
  cylGeo.setAttribute('position', new THREE.BufferAttribute(cylData.positions, 3));
  cylGeo.setAttribute('normal', new THREE.BufferAttribute(cylData.normals, 3));
  cylGeo.setIndex(new THREE.BufferAttribute(cylData.indices, 1));
  scene.add(new THREE.Mesh(cylGeo, new THREE.MeshStandardMaterial({
    color: 0x334455, roughness: 0.5, metalness: 0.1,
    side: THREE.DoubleSide, transparent: true, opacity: 0.3,
  })));

  const onChange = () => rebuildAll(cylHandle, 0, font);
  createPanel(font, onChange);
  addHelp();
  onChange();

  console.log('Type text, drag sliders → wires appear on cylinder.\n');

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
