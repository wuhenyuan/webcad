import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import * as opentype from 'opentype.js';
import {
  init as sdkInit,
  registerTriangleMesh, releaseMeshHandle,
  projectTextOnMesh,
  getMeshProjectionBottomFace, getMeshProjectionTopFace,
  tessellateShape, releaseShapeHandle,
} from 'webcad-sdk';

// ============================================================
// Scene
// ============================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.set(30, 10, 40);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.08;

scene.add(new THREE.AmbientLight(0x666666, 0.6));
const d1 = new THREE.DirectionalLight(0xffffff, 1.0); d1.position.set(30, 50, 30); scene.add(d1);
const d2 = new THREE.DirectionalLight(0x8888ff, 0.4); d2.position.set(-20, 10, -30); scene.add(d2);

// ============================================================
// Glyph → contour data (same format as main.ts)
// ============================================================
function glyphToUVCurves(
  glyph: opentype.Glyph, fontSize: number,
  uStart: number, uvScale: number, offsetV: number,
  angleDeg: number, cursorU: number, cursorV: number,
): Float64Array[] {
  const rad = angleDeg * Math.PI / 180;
  const cosA = Math.cos(rad), sinA = Math.sin(rad);
  const toUV = (gx: number, gy: number): [number, number] => {
    const du = (gx / 72) * uvScale;
    const dv = (gy / 72) * uvScale;
    return [
      uStart + cursorU + du * cosA - dv * sinA,
      offsetV + cursorV + du * sinA + dv * cosA,
    ];
  };

  const path = glyph.getPath(0, 0, fontSize);
  const contours: number[][][] = [];
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
// State
// ============================================================
let meshHandle = -1;
let font: opentype.Font | null = null;
let dogMesh: THREE.Mesh | null = null;
let placementMarker: THREE.Group | null = null;
let resultGroup = new THREE.Group();
scene.add(resultGroup);
let resultShapeHandles: number[] = [];

// Stored for re-rotation
let rawPositions: Float32Array | null = null;
let rawIndices: Uint32Array | null = null;

function clearDogDisplay() {
  if (meshHandle >= 0) { releaseMeshHandle(meshHandle); meshHandle = -1; }
  // Remove existing dog/wireframe/bbox from scene
  if (dogMesh) { scene.remove(dogMesh); dogMesh = null; }
  // Remove wireframe children
  const toRemove: THREE.Object3D[] = [];
  scene.traverse(c => { if (c instanceof THREE.LineSegments || (c instanceof THREE.Mesh && c !== dogMesh)) toRemove.push(c); });
  toRemove.forEach(c => scene.remove(c));
  cleanupResults();
  placement = null; updatePlacementMarker(); createPanel();
}

function reapplyMesh() {
  if (!rawPositions || !rawIndices) return;
  clearDogDisplay();

  const rotDeg = state.xRot;
  const rotRad = rotDeg * Math.PI / 180;
  const cosR = Math.cos(rotRad), sinR = Math.sin(rotRad);
  const centeredPositions = new Float32Array(rawPositions.length);
  for (let i = 0; i < rawPositions.length / 3; i++) {
    const cx = rawPositions[i * 3 + 0];
    const cy = rawPositions[i * 3 + 1];
    const cz = rawPositions[i * 3 + 2];
    centeredPositions[i * 3 + 0] = cx;
    centeredPositions[i * 3 + 1] = cy * cosR - cz * sinR;
    centeredPositions[i * 3 + 2] = cy * sinR + cz * cosR;
  }

  meshHandle = registerTriangleMesh(centeredPositions, rawIndices);
  console.log(`Mesh re-registered: handle=${meshHandle}, xRot=${rotDeg}°`);

  const dogGeo = new THREE.BufferGeometry();
  dogGeo.setAttribute('position', new THREE.BufferAttribute(centeredPositions, 3));
  dogGeo.setIndex(new THREE.BufferAttribute(rawIndices, 1));
  dogGeo.computeVertexNormals();
  dogGeo.computeBoundingBox();

  const dogMat = new THREE.MeshStandardMaterial({
    color: 0x8899aa, roughness: 0.6, metalness: 0.1,
    side: THREE.DoubleSide, transparent: true, opacity: 0.85,
  });
  dogMesh = new THREE.Mesh(dogGeo, dogMat);
  scene.add(dogMesh);

  const wireGeo = new THREE.WireframeGeometry(dogGeo, 1);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x334455, wireframe: true, transparent: true, opacity: 0.15 });
  scene.add(new THREE.Mesh(wireGeo, wireMat));

  const cBbox = dogGeo.boundingBox!;
  const cCenter = new THREE.Vector3(); cBbox.getCenter(cCenter);
  const cSize = new THREE.Vector3(); cBbox.getSize(cSize);
  const maxDim = Math.max(cSize.x, cSize.y, cSize.z);
  (window as any).__dogBbox = { center: cCenter, size: cSize, maxDim };
  console.log(`Bbox: (${cSize.x.toFixed(0)},${cSize.y.toFixed(0)},${cSize.z.toFixed(0)}) max=${maxDim.toFixed(0)}`);
}

const state = {
  text: 'DOG',
  textHeight: 10,
  embossDepth: 2,
  deflection: 0.15,
  xRot: -90,
};

// Placement data (set by mouse click on mesh)
let placement: { point: THREE.Vector3; normal: THREE.Vector3; u: THREE.Vector3; v: THREE.Vector3 } | null = null;

function cleanupResults() {
  for (const h of resultShapeHandles) releaseShapeHandle(h);
  resultShapeHandles = [];
  while (resultGroup.children.length > 0) resultGroup.remove(resultGroup.children[0]);
}

// Sample a Bezier segment into points (same logic as C++ GCPnts)
function sampleBezier(segType: number, poles: [number, number][], numSamples: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let si = 0; si <= numSamples; si++) {
    const t = si / numSamples;
    if (segType === 1) {
      // Line: linear interpolate
      pts.push([
        poles[0][0] * (1 - t) + poles[1][0] * t,
        poles[0][1] * (1 - t) + poles[1][1] * t,
      ]);
    } else if (segType === 2) {
      // Quadratic Bezier
      const u = 1 - t;
      pts.push([
        u * u * poles[0][0] + 2 * u * t * poles[1][0] + t * t * poles[2][0],
        u * u * poles[0][1] + 2 * u * t * poles[1][1] + t * t * poles[2][1],
      ]);
    } else {
      // Cubic Bezier
      const u = 1 - t;
      pts.push([
        u * u * u * poles[0][0] + 3 * u * u * t * poles[1][0] + 3 * u * t * t * poles[2][0] + t * t * t * poles[3][0],
        u * u * u * poles[0][1] + 3 * u * u * t * poles[1][1] + 3 * u * t * t * poles[2][1] + t * t * t * poles[3][1],
      ]);
    }
  }
  return pts;
}

// Draw projected text curves on the mesh surface (JS-side raycaster preview)
function drawProjectedPreview(contours: Float64Array[], O: THREE.Vector3, U: THREE.Vector3, V: THREE.Vector3, N: THREE.Vector3) {
  const group = new THREE.Group();
  if (!dogMesh) return group;

  const rc = new THREE.Raycaster();
  const dotGeo = new THREE.SphereGeometry(0.05, 4, 4);
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xff4444 });
  const curveMat = new THREE.LineBasicMaterial({ color: 0xff8844, linewidth: 1 });

  for (const arr of contours) {
    const nSeg = arr[0];
    let off = 1;
    const allProjPts: THREE.Vector3[] = [];

    for (let si = 0; si < nSeg; si++) {
      const segType = arr[off];
      const npts = arr[off + 1];
      const poles: [number, number][] = [];
      for (let k = 0; k < npts; k++) {
        poles.push([arr[off + 2 + k * 2], arr[off + 2 + k * 2 + 1]]);
      }
      off += 2 + npts * 2;

      const samples = sampleBezier(segType, poles, 16);
      const segPts: THREE.Vector3[] = [];
      for (const [u, v] of samples) {
        const src = O.clone().addScaledVector(U, u).addScaledVector(V, v);
        // Ray cast from both directions
        rc.set(src.clone().addScaledVector(N, 500), N.clone().negate());
        let hits = rc.intersectObject(dogMesh, true);
        if (hits.length === 0) {
          rc.set(src.clone().addScaledVector(N, -500), N.clone());
          hits = rc.intersectObject(dogMesh, true);
        }
        if (hits.length > 0) {
          segPts.push(hits[0].point.clone());
          // Draw dot
          const dot = new THREE.Mesh(dotGeo, dotMat);
          dot.position.copy(hits[0].point);
          group.add(dot);
        }
      }
      if (segPts.length >= 2) {
        const geo = new THREE.BufferGeometry().setFromPoints(segPts);
        group.add(new THREE.Line(geo, curveMat));
      }
      allProjPts.push(...segPts);
    }
    // Close contour if needed
    if (allProjPts.length >= 2) {
      const geo = new THREE.BufferGeometry().setFromPoints([allProjPts[allProjPts.length - 1], allProjPts[0]]);
      group.add(new THREE.Line(geo, curveMat));
    }
  }
  return group;
}

// Draw 2D contour curves on the tangent plane (visual debug)
function drawContourPreview(contours: Float64Array[], O: THREE.Vector3, U: THREE.Vector3, V: THREE.Vector3) {
  const group = new THREE.Group();
  const mat = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 1, transparent: true, opacity: 0.8 });

  for (const arr of contours) {
    const nSeg = arr[0];
    let off = 1;
    for (let si = 0; si < nSeg; si++) {
      const npts = arr[off + 1];
      const pts: THREE.Vector3[] = [];
      for (let k = 0; k < npts; k++) {
        const u = arr[off + 2 + k * 2];
        const v = arr[off + 2 + k * 2 + 1];
        pts.push(O.clone().addScaledVector(U, u).addScaledVector(V, v));
      }
      off += 2 + npts * 2;

      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      group.add(new THREE.Line(geo, mat));
    }
  }
  return group;
}

// ============================================================
// Project text onto mesh
// ============================================================
function doProject() {
  if (!font || meshHandle < 0 || !placement) return;
  cleanupResults();

  const fontSize = 72;
  const uvScale = state.textHeight;
  const rad = 0;
  const cosA = Math.cos(rad), sinA = Math.sin(rad);
  let cursorU = 0, cursorV = 0;

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Mesh Text Projection: "${state.text}"`);
  console.log(`${'═'.repeat(60)}`);
  console.time('project');

  // Draw preview of text outlines on tangent plane (yellow) and projected (red)
  const previewGroup = new THREE.Group();
  resultGroup.add(previewGroup);

  for (const ch of state.text) {
    const glyph = font.charToGlyph(ch);
    if (!glyph || !glyph.path) continue;

    const uvCurves = glyphToUVCurves(glyph, fontSize, 0, uvScale, 0, 0, cursorU, cursorV);
    if (uvCurves.length === 0) continue;

    // Yellow = tangent plane outline; Red = projected onto mesh
    previewGroup.add(drawContourPreview(uvCurves, placement.point, placement.u, placement.v));
    previewGroup.add(drawProjectedPreview(uvCurves, placement.point, placement.u, placement.v, placement.normal));

    console.log(`  '${ch}': ${uvCurves.length} contours`);

    const solidHandle = projectTextOnMesh(
      meshHandle, uvCurves,
      placement.point.x, placement.point.y, placement.point.z,
      placement.normal.x, placement.normal.y, placement.normal.z,
      placement.u.x, placement.u.y, placement.u.z,
      placement.v.x, placement.v.y, placement.v.z,
      state.textHeight, state.embossDepth, state.deflection,
    );

    if (solidHandle >= 0) {
      resultShapeHandles.push(solidHandle);
      console.log(`  Solid[${solidHandle}] '${ch}': OK`);

      const sm = tessellateShape(solidHandle, state.deflection * 2);
      console.log(`    mesh: ${sm.positions.length / 3} verts, ${sm.indices.length / 3} tris`);

      if (sm.positions.length > 0) {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(sm.positions, 3));
        geo.setAttribute('normal', new THREE.BufferAttribute(sm.normals, 3));
        geo.setIndex(new THREE.BufferAttribute(sm.indices, 1));
        const mat = new THREE.MeshBasicMaterial({
          color: 0xff8844,
          side: THREE.DoubleSide,
          depthTest: false,
          transparent: true,
          opacity: 0.8,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.renderOrder = 999;
        resultGroup.add(mesh);
        // Wireframe
        const wMat = new THREE.MeshBasicMaterial({ color: 0x221100, wireframe: true, depthTest: false });
        const wMesh = new THREE.Mesh(geo, wMat);
        wMesh.renderOrder = 1000;
        resultGroup.add(wMesh);
      }
    } else {
      console.log(`  Solid '${ch}': FAILED (${solidHandle})`);
    }

    const adv = (glyph.advanceWidth ?? 0) / (font.unitsPerEm || 1000) * fontSize;
    const step = (adv + 0) / 72 * uvScale;
    cursorU += step * cosA;
    cursorV += step * sinA;
  }

  console.timeEnd('project');
}

// ============================================================
// Placement marker
// ============================================================
function updatePlacementMarker() {
  if (placementMarker) scene.remove(placementMarker);
  if (!placement) return;

  placementMarker = new THREE.Group();

  // Small sphere at origin
  const sGeo = new THREE.SphereGeometry(0.5, 8, 8);
  const sMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  placementMarker.add(new THREE.Mesh(sGeo, sMat));

  // Normal line (blue)
  const nLen = 3;
  const nPts = [placement.point, placement.point.clone().addScaledVector(placement.normal, nLen)];
  const nGeo = new THREE.BufferGeometry().setFromPoints(nPts);
  placementMarker.add(new THREE.Line(nGeo, new THREE.LineBasicMaterial({ color: 0x4444ff })));

  // U direction (red)
  const uPts = [placement.point, placement.point.clone().addScaledVector(placement.u, 2)];
  const uGeo = new THREE.BufferGeometry().setFromPoints(uPts);
  placementMarker.add(new THREE.Line(uGeo, new THREE.LineBasicMaterial({ color: 0xff4444 })));

  // V direction (green)
  const vPts = [placement.point, placement.point.clone().addScaledVector(placement.v, 2)];
  const vGeo = new THREE.BufferGeometry().setFromPoints(vPts);
  placementMarker.add(new THREE.Line(vGeo, new THREE.LineBasicMaterial({ color: 0x44ff44 })));

  placementMarker.position.set(0, 0, 0);
  scene.add(placementMarker);
}

// ============================================================
// UI Panel
// ============================================================
function createPanel() {
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
  title.textContent = 'Mesh Text Projection';
  title.style.cssText = 'color:#fff; font-weight:bold; margin-bottom:8px; font-size:14px;';
  div.appendChild(title);

  const info = document.createElement('div');
  info.id = 'info';
  info.style.cssText = 'color:#888; font-size:11px; margin-bottom:12px;';
  const dogBbox = (window as any).__dogBbox;
  const bboxStr = dogBbox
    ? `Model: ${dogBbox.size.x.toFixed(0)}×${dogBbox.size.y.toFixed(0)}×${dogBbox.size.z.toFixed(0)} (max ${dogBbox.maxDim.toFixed(0)})`
    : '';
  info.textContent = placement
    ? `Placement: (${placement.point.x.toFixed(1)},${placement.point.y.toFixed(1)},${placement.point.z.toFixed(1)}) N=(${placement.normal.x.toFixed(2)},${placement.normal.y.toFixed(2)},${placement.normal.z.toFixed(2)}) ${bboxStr}`
    : `Click on the dog to place text. ${bboxStr}`;
  div.appendChild(info);

  // Text input
  const textRow = document.createElement('div');
  textRow.style.cssText = 'margin-bottom:10px;';
  const textLbl = document.createElement('span'); textLbl.textContent = 'text: '; textLbl.style.cssText = 'color:#aaa;';
  const textInp = document.createElement('input');
  textInp.type = 'text'; textInp.value = state.text;
  textInp.style.cssText = 'width:100%; margin-top:4px; padding:4px 8px; font:14px monospace; background:#222; color:#fff; border:1px solid #555; border-radius:3px; outline:none; box-sizing:border-box;';
  textInp.addEventListener('input', () => { state.text = textInp.value || 'DOG'; if (placement) doProject(); });
  textRow.appendChild(textLbl); textRow.appendChild(textInp);
  div.appendChild(textRow);

  function slider(label: string, key: keyof typeof state, min: number, max: number, step: number) {
    const row = document.createElement('div');
    row.style.cssText = 'margin-bottom:8px;';
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
      if (key === 'xRot') {
        clearTimeout((window as any).__rotTimeout);
        (window as any).__rotTimeout = setTimeout(reapplyMesh, 300);
      }
      if (placement) doProject();
    });
    row.appendChild(inp); div.appendChild(row);
  }

  slider('Z rotation', 'xRot', -180, 180, 1);
  slider('text height', 'textHeight', 1, 30, 0.5);
  slider('emboss depth', 'embossDepth', 0.3, 6, 0.1);
  slider('deflection', 'deflection', 0.05, 2, 0.05);

  // Presets
  function btn(label: string, t: string, th: number, ed: number) {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = 'padding:3px 8px; font:11px monospace; cursor:pointer; background:#333; color:#ccc; border:1px solid #555; border-radius:3px; margin-right:4px; margin-top:4px;';
    b.addEventListener('click', () => {
      state.text = t; state.textHeight = th; state.embossDepth = ed;
      textInp.value = t;
      createPanel();
      if (placement) doProject();
    });
    return b;
  }
  const presets = document.createElement('div');
  presets.style.cssText = 'margin-top:10px; display:flex; flex-wrap:wrap; gap:4px;';
  presets.appendChild(btn('DOG 10', 'DOG', 10, 2));
  presets.appendChild(btn('HELLO 6', 'HELLO', 6, 1.5));
  presets.appendChild(btn('你好 8', '你好', 8, 2));
  presets.appendChild(btn('WOOF 14', 'WOOF', 14, 2.5));
  div.appendChild(presets);

  document.body.appendChild(div);
}

// ============================================================
// Raycast for placement
// ============================================================
const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.01;
raycaster.params.Line = { threshold: 0.01 };

function onMouseClick(event: MouseEvent) {
  if (!dogMesh) return;

  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
  );

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(dogMesh, true);

  if (intersects.length > 0) {
    const hit = intersects[0];
    const point = hit.point.clone();

    // Get interpolated normal from face
    let normal: THREE.Vector3;
    if (hit.face) {
      normal = hit.face.normal.clone();
    } else {
      normal = new THREE.Vector3(0, 0, 1);
    }
    normal.normalize();

    // Build tangent frame
    const arb = Math.abs(normal.y) < 0.99 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
    const u = new THREE.Vector3().crossVectors(arb, normal).normalize();
    const v = new THREE.Vector3().crossVectors(normal, u).normalize();

    placement = { point, normal, u, v };
    console.log(`Placement: (${point.x.toFixed(3)}, ${point.y.toFixed(3)}, ${point.z.toFixed(3)})  N=(${normal.x.toFixed(2)}, ${normal.y.toFixed(2)}, ${normal.z.toFixed(2)})`);
    updatePlacementMarker();
    createPanel();
    doProject();
  }
}

// ============================================================
// Main
// ============================================================
async function main() {
  console.time('init');
  // Init WASM SDK
  await sdkInit();

  // Load font
  console.time('font');
  const fontResp = await fetch('/simhei.ttf');
  const fontBuf = await fontResp.arrayBuffer();
  font = opentype.parse(fontBuf);
  console.timeEnd('font');
  console.log(`Font: ${font.names?.fontFamily?.en ?? 'SimHei'}`);

  // Load 3dDog OBJ
  console.time('load obj');
  const loader = new OBJLoader();
  const objPath = '/Dog_v1_L2.123c6edcac29-19b6-4703-8b46-586ed912e634/12228_Dog_v1_L2.obj';
  const dogGroup = await loader.loadAsync(objPath);

  // Extract all mesh geometry — merge into single positions/indices
  const allPositions: number[] = [];
  const allIndices: number[] = [];
  let vertexOffset = 0;

  dogGroup.traverse((child) => {
    if (child instanceof THREE.Mesh && child.geometry) {
      const geo = child.geometry;
      const posAttr = geo.getAttribute('position');
      if (!posAttr) return;

      // Get positions
      for (let i = 0; i < posAttr.count; i++) {
        allPositions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
      }

      // Get indices (or generate if non-indexed)
      const index = geo.index;
      if (index) {
        for (let i = 0; i < index.count; i++) {
          allIndices.push(index.getX(i) + vertexOffset);
        }
      } else {
        for (let i = 0; i < posAttr.count; i++) {
          allIndices.push(i + vertexOffset);
        }
      }
      vertexOffset += posAttr.count;
    }
  });

  console.timeEnd('load obj');
  console.log(`Dog mesh: ${vertexOffset} verts, ${allIndices.length / 3} tris`);

  if (allPositions.length === 0) {
    console.error('No geometry found in OBJ');
    return;
  }

  // Compute bounding box and center
  const tmpGeo = new THREE.BufferGeometry();
  tmpGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(allPositions), 3));
  tmpGeo.computeBoundingBox();
  const bbox = tmpGeo.boundingBox!;
  const center = new THREE.Vector3();
  bbox.getCenter(center);
  const size = new THREE.Vector3();
  bbox.getSize(size);
  console.log(`Dog bbox: (${bbox.min.x.toFixed(2)},${bbox.min.y.toFixed(2)},${bbox.min.z.toFixed(2)}) → (${bbox.max.x.toFixed(2)},${bbox.max.y.toFixed(2)},${bbox.max.z.toFixed(2)})  size=(${size.x.toFixed(2)},${size.y.toFixed(2)},${size.z.toFixed(2)})`);

  // Center positions (store pre-rotation for live re-apply)
  const shiftX = -center.x;
  const shiftY = -center.y;
  const shiftZ = -center.z;
  const rawCentered = new Float32Array(allPositions.length);
  for (let i = 0; i < allPositions.length / 3; i++) {
    rawCentered[i * 3 + 0] = allPositions[i * 3 + 0] + shiftX;
    rawCentered[i * 3 + 1] = allPositions[i * 3 + 1] + shiftY;
    rawCentered[i * 3 + 2] = allPositions[i * 3 + 2] + shiftZ;
  }
  rawPositions = rawCentered;
  rawIndices = new Uint32Array(allIndices);

  // Apply rotation
  const rotDeg = state.xRot;
  const rotRad = rotDeg * Math.PI / 180;
  const cosR = Math.cos(rotRad), sinR = Math.sin(rotRad);
  const centeredPositions = new Float32Array(allPositions.length);
  for (let i = 0; i < allPositions.length / 3; i++) {
    const cx = rawCentered[i * 3 + 0];
    const cy = rawCentered[i * 3 + 1];
    const cz = rawCentered[i * 3 + 2];
    centeredPositions[i * 3 + 0] = cx;
    centeredPositions[i * 3 + 1] = cy * cosR - cz * sinR;
    centeredPositions[i * 3 + 2] = cy * sinR + cz * cosR;
  }

  // Register centered mesh with C++ backend
  console.time('register mesh');
  meshHandle = registerTriangleMesh(centeredPositions, new Uint32Array(allIndices));
  console.timeEnd('register mesh');
  console.log(`Mesh handle: ${meshHandle}`);

  // Display the dog (already centered positions, no transform needed)
  const dogGeo = new THREE.BufferGeometry();
  dogGeo.setAttribute('position', new THREE.BufferAttribute(centeredPositions, 3));
  dogGeo.setIndex(new THREE.BufferAttribute(new Uint32Array(allIndices), 1));
  dogGeo.computeVertexNormals();
  dogGeo.computeBoundingBox(); // recompute

  const dogMat = new THREE.MeshStandardMaterial({
    color: 0x8899aa, roughness: 0.6, metalness: 0.1,
    side: THREE.DoubleSide, transparent: true, opacity: 0.85,
  });
  dogMesh = new THREE.Mesh(dogGeo, dogMat);
  scene.add(dogMesh);
  console.log('Dog mesh centered and displayed');

  // Add wireframe outline
  const wireGeo = new THREE.WireframeGeometry(dogGeo, 1);
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x334455, wireframe: true, transparent: true, opacity: 0.15 });
  const wireframe = new THREE.Mesh(wireGeo, wireMat);
  scene.add(wireframe);

  // Get centered bbox info for UI
  const cBbox = dogGeo.boundingBox!;
  const cCenter = new THREE.Vector3(); cBbox.getCenter(cCenter);
  const cSize = new THREE.Vector3(); cBbox.getSize(cSize);
  const maxDim = Math.max(cSize.x, cSize.y, cSize.z);
  console.log(`Centered bbox: center=(${cCenter.x.toFixed(1)},${cCenter.y.toFixed(1)},${cCenter.z.toFixed(1)}) size=(${cSize.x.toFixed(1)},${cSize.y.toFixed(1)},${cSize.z.toFixed(1)}) maxDim=${maxDim.toFixed(1)}`);

  // Store for panel
  (window as any).__dogBbox = { center: cCenter, size: cSize, maxDim };

  // XYZ axes (length = max dimension)
  scene.add(new THREE.AxesHelper(maxDim));

  // Grid on XZ plane
  const grid = new THREE.GridHelper(maxDim * 2, 10);
  scene.add(grid);

  // Semi-transparent bounding box
  const bboxGeo = new THREE.BoxGeometry(cSize.x, cSize.y, cSize.z);
  const bboxEdges = new THREE.EdgesGeometry(bboxGeo);
  const bboxLine = new THREE.LineSegments(bboxEdges, new THREE.LineBasicMaterial({ color: 0x666666, transparent: true, opacity: 0.5 }));
  bboxLine.position.copy(cCenter);
  scene.add(bboxLine);

  // Mouse click handler
  renderer.domElement.addEventListener('click', onMouseClick);

  // UI panel
  createPanel();

  console.timeEnd('init');
  console.log('\nClick on the dog to place text');
  console.log(`${'═'.repeat(60)}\n`);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

main().catch(console.error);
animate();
