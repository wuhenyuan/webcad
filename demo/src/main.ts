import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as opentype from 'opentype.js';
import {
  init,
  createCylinderShape, getFaceInfo, occMakeCylinder,
  getWireInfo, sampleWire3D, releaseWireHandle,
  makeWireFromUVCurves, buildFacesFromWires,
  tessellateShape, tessellateFaceMesh, getTopologyInfo,
  releaseShapeHandle,
  OccWireInfoData, OccTopologyInfoData, SURFACE_TYPE_NAMES,
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
  embossDepth: 0.12,
  letterSpacing: 0.0,
  deflection: 0.05,
};

// Cylinder params
const CYL_RADIUS = 1.0;
const CYL_HEIGHT = 2.2;

// ============================================================
// Glyph → UV analytic curves
// ============================================================
// Maps glyph bezier control points to UV space via affine transform:
//   u = uStart + (gx / 72) * uvScale
//   v = offsetV + (gy / 72) * uvScale
// Returns one Float64Array per contour:
//   [numSegments, type0, npts0, u0,v0, ..., type1, npts1, ...]
//   type=1 line(2pts)  type=2 quad(3pts)  type=3 cubic(4pts)
function glyphToUVCurves(
  glyph: opentype.Glyph, x: number, y: number, fontSize: number,
  uStart: number, uvScale: number, offsetV: number,
): Float64Array[] {
  const toUV = (gx: number, gy: number): [number, number] => [
    uStart + (gx / 72) * uvScale,
    offsetV + (gy / 72) * uvScale,
  ];

  const path = glyph.getPath(x, y, fontSize);
  const contours: number[][][] = []; // each contour = array of [type, npts, u0,v0,...]
  let current: number[][] = [];
  let cx = 0, cy = 0;
  let startU = 0, startV = 0;

  for (const cmd of path.commands) {
    switch (cmd.type) {
      case 'M':
        if (current.length > 0) contours.push(current);
        current = [];
        [startU, startV] = toUV(cmd.x, cmd.y);
        cx = cmd.x; cy = cmd.y;
        break;
      case 'L': {
        const [u0, v0] = toUV(cx, cy);
        const [u1, v1] = toUV(cmd.x, cmd.y);
        current.push([1, 2, u0, v0, u1, v1]);
        cx = cmd.x; cy = cmd.y;
        break;
      }
      case 'Q': {
        const [u0, v0] = toUV(cx, cy);
        const [u1, v1] = toUV(cmd.x1, cmd.y1);
        const [u2, v2] = toUV(cmd.x, cmd.y);
        current.push([2, 3, u0, v0, u1, v1, u2, v2]);
        cx = cmd.x; cy = cmd.y;
        break;
      }
      case 'C': {
        const [u0, v0] = toUV(cx, cy);
        const [u1, v1] = toUV(cmd.x1, cmd.y1);
        const [u2, v2] = toUV(cmd.x2, cmd.y2);
        const [u3, v3] = toUV(cmd.x, cmd.y);
        current.push([3, 4, u0, v0, u1, v1, u2, v2, u3, v3]);
        cx = cmd.x; cy = cmd.y;
        break;
      }
      case 'Z': {
        if (current.length > 0) {
          const [u0, v0] = toUV(cx, cy);
          // Avoid degenerate closing segment
          const du = u0 - startU, dv = v0 - startV;
          if (Math.hypot(du, dv) > 1e-9) {
            current.push([1, 2, u0, v0, startU, startV]);
          }
        }
        break;
      }
    }
  }
  if (current.length > 0) contours.push(current);

  // Filter out degenerate segments (chord ~0 in UV space)
  // and encode each contour: [numSegments, type0, npts0, u0,v0, ..., type1, npts1, ...]
  return contours
    .map(segs => {
      const valid = segs.filter(s => {
        const npts = s[1];
        const u0 = s[2], v0 = s[3], uE = s[2 + (npts - 1) * 2], vE = s[3 + (npts - 1) * 2];
        return Math.hypot(uE - u0, vE - v0) > 1e-9;
      });
      if (valid.length === 0) return null;
      const flat: number[] = [valid.length];
      for (const s of valid) flat.push(...s);
      return new Float64Array(flat);
    })
    .filter(a => a !== null) as Float64Array[];
}

// ============================================================
// Three.js helpers
// ============================================================
function createMesh(pos: Float32Array, nor: Float32Array, idx: Uint32Array, color: number, opacity: number, wireframe: boolean, polyOffset = false): THREE.Mesh {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.4, metalness: 0.05,
    side: THREE.DoubleSide,
    transparent: true, opacity,
    wireframe,
  });
  if (polyOffset) {
    mat.polygonOffset = true;
    mat.polygonOffsetFactor = -1;
    mat.polygonOffsetUnits = -1;
  }
  return new THREE.Mesh(geo, mat);
}

// ============================================================
// Pipeline: rebuild all geometry
// ============================================================
const dyn = new THREE.Group();
scene.add(dyn);

let wireHandles: number[] = [];
let shapeHandles: number[] = [];

function cleanup() {
  for (const wh of wireHandles) releaseWireHandle(wh);
  for (const sh of shapeHandles) releaseShapeHandle(sh);
  wireHandles = [];
  shapeHandles = [];
  while (dyn.children.length > 0) dyn.remove(dyn.children[0]);
}

function rebuildAll(cylHandle: number, fi: number, font: opentype.Font) {
  cleanup();

  const fontSize = 72;
  let cursorX = 0;

  const OUTER_COLOR = 0x00e5ff;
  const HOLE_COLOR  = 0xff6e40;
  const FACE_COLOR  = 0x4488aa;
  const SOLID_COLOR = 0xeeaa44;

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Face Split: Wire(pcurve) → BRepFeat_SplitShape  "${state.text}"`);
  console.log(`${'═'.repeat(60)}`);

  for (const ch of state.text) {
    const glyph = font.charToGlyph(ch);
    if (!glyph || !glyph.path) continue;

    const uStart = state.offsetU;
    const uvCurves = glyphToUVCurves(glyph, cursorX, 0, fontSize, uStart, state.uvScale, state.offsetV);

    // Build wires for all contours
    const charWireHandles: number[] = [];
    uvCurves.forEach((uvData, ci) => {
      const segCount = uvData[0];
      if (segCount < 1) return;
      console.log(`  glyph '${ch}' contour[${ci}]: ${segCount} UV curve segments`);

      const wireH = makeWireFromUVCurves(uvData, cylHandle, 0, true);
      if (wireH < 0) return;
      wireHandles.push(wireH);
      charWireHandles.push(wireH);

      const info = getWireInfo(wireH);
      const color = (ci === 0) ? OUTER_COLOR : HOLE_COLOR;
      console.log(`  Wire[${wireH}] '${ch}' c${ci}: edges=${info.edgeCount} closed=${info.isClosed}`);
      drawWire(wireH, color, 8);
    });

    if (charWireHandles.length === 0) continue;

    // ---- Nesting-depth face builder: all wires → all faces ----
    const faceHandles = buildFacesFromWires(charWireHandles, cylHandle, 0);
    console.log(`  '${ch}': ${charWireHandles.length} wires → ${faceHandles.length} faces`);

    const FACE_COLORS = [0x00e5ff, 0x44ffaa, 0xffaa44, 0xff44aa, 0xaadd44];
    faceHandles.forEach((fh, fi) => {
      shapeHandles.push(fh);

      const faceInfo = getFaceInfo(fh, 0);
      const typeName = SURFACE_TYPE_NAMES[faceInfo.surfaceType] ?? '?';
      const onCyl = faceInfo.surfaceType === 1;
      console.log(`  Face[${fh}] '${ch}': ${typeName} UV=[${faceInfo.uMin.toFixed(3)},${faceInfo.uMax.toFixed(3)}]x[${faceInfo.vMin.toFixed(3)},${faceInfo.vMax.toFixed(3)}] ${onCyl ? 'OK' : 'WARN'}`);

      const fm = tessellateFaceMesh(fh, 0, state.deflection);
      if (fm.positions.length > 0) {
        const color = FACE_COLORS[fi % FACE_COLORS.length];
        dyn.add(createMesh(fm.positions, fm.normals, fm.indices, color, 0.8, false, true));
        dyn.add(createMesh(fm.positions, fm.normals, fm.indices, 0x003344, 0.15, true, true));
      }
    });

    const adv = (glyph.advanceWidth ?? 0) / (font.unitsPerEm || 1000) * fontSize;
    cursorX += adv + state.letterSpacing;
  }

  console.log(`\n  wires: ${wireHandles.length}  shapes: ${shapeHandles.length}\n`);
}

function drawWire(wireH: number, color: number, samplesPerEdge: number) {
  const wirePts = sampleWire3D(wireH, samplesPerEdge);
  const positions: number[] = [];
  for (let i = 0; i < wirePts.length; i++) positions.push(wirePts[i]);
  if (positions.length < 6) return;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
  dyn.add(new THREE.Line(geo, new THREE.LineBasicMaterial({ color })));
}

// ============================================================
// Control panel
// ============================================================
function createPanel(cylHandle: number, fi: number, font: opentype.Font, onChange: () => void) {
  const existing = document.getElementById('panel');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.id = 'panel';
  div.style.cssText = `
    position:fixed; top:16px; right:16px;
    background:rgba(10,10,20,0.88); color:#ccc;
    padding:16px 18px; border-radius:8px;
    font:13px monospace; z-index:100; min-width:250px;
  `;

  const title = document.createElement('div');
  title.textContent = 'Face Split (BRepFeat)';
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
    const val = document.createElement('span'); val.textContent = (state[key] as number).toFixed(3); val.style.cssText = 'color:#00e5ff;';
    hdr.appendChild(lbl); hdr.appendChild(val);
    row.appendChild(hdr);
    const inp = document.createElement('input');
    inp.type = 'range'; inp.min = String(min); inp.max = String(max); inp.step = String(step);
    inp.value = String(state[key]);
    inp.style.cssText = 'width:100%; margin-top:2px; cursor:pointer;';
    inp.addEventListener('input', () => {
      (state as any)[key] = parseFloat(inp.value);
      val.textContent = (state as any)[key].toFixed(3);
      onChange();
    });
    row.appendChild(inp); div.appendChild(row);
  }

  slider('offsetU',       'offsetU',       0.1,  6.18, 0.02);
  slider('offsetV',       'offsetV',      -0.9,  0.9,  0.02);
  slider('uvScale',       'uvScale',       0.5,  5.0,  0.05);
  slider('emboss depth',  'embossDepth',   0.02, 0.5,  0.005);
  slider('letterSpacing', 'letterSpacing',-10,   40,   0.5);
  slider('mesh deflection','deflection',   0.01, 0.3,  0.005);

  function btn(label: string, t: string, ou: number, ov: number, s: number, ed: number, ls: number) {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = 'padding:3px 8px; font:11px monospace; cursor:pointer; background:#333; color:#ccc; border:1px solid #555; border-radius:3px;';
    b.addEventListener('click', () => {
      state.text = t; state.offsetU = ou; state.offsetV = ov;
      state.uvScale = s; state.embossDepth = ed; state.letterSpacing = ls;
      textInp.value = t;
      createPanel(cylHandle, fi, font, onChange); onChange();
    });
    return b;
  }
  const presets = document.createElement('div');
  presets.style.cssText = 'margin-top:10px; display:flex; flex-wrap:wrap; gap:4px;';
  presets.appendChild(btn('"CAD"',  'CAD',   0.8,  0.0,  2.5,  0.12,  0));
  presets.appendChild(btn('"AB"',   'AB',    0.5,  0.0,  2.0,  0.10,  5));
  presets.appendChild(btn('"你好"', '你好',  1.5,  0.0,  2.0,  0.15,  5));
  presets.appendChild(btn('"Hi"',   'Hi',    0.6,  0.0,  2.5,  0.10,  0));
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
    <span style="color:#00e5ff">━━</span> cylinder wire (pcurve) &nbsp;
    <span style="color:#ff6e40">━━</span> hole wire<br>
    <span style="color:#44aaff">■</span> text region &nbsp;
    <span style="color:#ff8844">■</span> rest of cylinder<br>
    glyph → UV→3D → CylWire(pcurve) → BRepFeat_SplitShape → sub-faces
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
  console.log('║  Face Split: BRepFeat_SplitShape    ║');
  console.log('╚══════════════════════════════════════╝');
  console.log('');
  console.log('Pipeline:');
  console.log('  1. opentype.js → glyph bezier → UV analytic curves');
  console.log('  2. Geom2d_BezierCurve → BRepBuilderAPI_MakeEdge(curve2d, surface)');
  console.log('  3. BRepBuilderAPI_MakeWire → TopoDS_Wire (edges truly on surface)');
  console.log('  4. BRepFeat_SplitShape → split cylinder face');
  console.log('  5. Sub-faces retain original Geom_CylindricalSurface');
  console.log('  6. BRepMesh_IncrementalMesh → tessellation');
  console.log('  7. Three.js rendering');
  console.log('');

  // Load font
  console.time('font');
  const fontResp = await fetch('/simhei.ttf');
  const fontBuf = await fontResp.arrayBuffer();
  const font = opentype.parse(fontBuf);
  console.timeEnd('font');
  console.log(`Font: ${font.names?.fontFamily?.en ?? 'SimHei'}\n`);

  // Create cylinder for background + UV evaluation
  const cylHandle = createCylinderShape(CYL_RADIUS, CYL_HEIGHT);
  const fi = getFaceInfo(cylHandle, 0);
  console.log(`Cylinder face 0: ${SURFACE_TYPE_NAMES[fi.surfaceType]}  UV=[${fi.uMin.toFixed(3)},${fi.uMax.toFixed(3)}] x [${fi.vMin.toFixed(3)},${fi.vMax.toFixed(3)}]\n`);

  // Background cylinder mesh (semi-transparent, for visual context)
  const cylData = occMakeCylinder(CYL_RADIUS, CYL_HEIGHT, 0.06);
  const cylGeo = new THREE.BufferGeometry();
  cylGeo.setAttribute('position', new THREE.BufferAttribute(cylData.positions, 3));
  cylGeo.setAttribute('normal', new THREE.BufferAttribute(cylData.normals, 3));
  cylGeo.setIndex(new THREE.BufferAttribute(cylData.indices, 1));
  scene.add(new THREE.Mesh(cylGeo, new THREE.MeshStandardMaterial({
    color: 0x334455, roughness: 0.5, metalness: 0.1,
    side: THREE.DoubleSide, transparent: true, opacity: 0.25,
  })));

  const onChange = () => rebuildAll(cylHandle, 0, font);
  createPanel(cylHandle, 0, font, onChange);
  addHelp();
  onChange();

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
