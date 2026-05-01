import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  init,
  occCreateBoxShape, createCylinderShape, createSphereShape, createConeShape,
  releaseShapeHandle,
  occShapeFaceCount, getFaceInfo, evalFaceUV, tessellateFaceMesh,
  SURFACE_TYPE_NAMES,
  OccFaceInfoData, OccMeshData,
} from 'webcad-sdk';

// ============================================================
// Scene setup
// ============================================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2.5, 9);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 0, 0);

// Lighting
scene.add(new THREE.AmbientLight(0x444444));
const light1 = new THREE.DirectionalLight(0xffffff, 1.5);
light1.position.set(5, 10, 5); scene.add(light1);
const light2 = new THREE.DirectionalLight(0x8888ff, 0.6);
light2.position.set(-5, 0, -5); scene.add(light2);
scene.add(new THREE.GridHelper(10, 20, 0x444444, 0x333333));

// ============================================================
// Build Three.js mesh from OccMeshData
// ============================================================
function buildMesh(data: OccMeshData, color: number, opacity = 1, transparent = false): THREE.Mesh {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
  geo.setIndex(new THREE.BufferAttribute(data.indices, 1));
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.35, metalness: 0.05,
    side: THREE.DoubleSide,
    transparent,
    opacity,
  });
  return new THREE.Mesh(geo, mat);
}

// ============================================================
// UV Grid builder
// ============================================================
// For a given face, samples the surface at UV coordinates and draws
// a wireframe grid. This visualizes the parametric (u,v) domain:
//   - U-lines: constant v, varying u (like "latitude" lines on a sphere)
//   - V-lines: constant u, varying v (like "longitude" lines on a sphere)
//
// On a cylinder: u = angle (0..2π), v = height
// On a sphere:   u = longitude (0..2π), v = latitude (-π/2..π/2)
//
function buildUVGrid(
  handle: number,
  faceIndex: number,
  info: OccFaceInfoData,
  uDiv: number,
  vDiv: number,
  color: number,
): THREE.LineSegments {
  const points: number[] = [];

  const uRange = info.uMax - info.uMin;
  const vRange = info.vMax - info.vMin;

  // U-direction lines (constant v, varying u) — draw one per v-step
  for (let j = 0; j <= vDiv; j++) {
    const v = info.vMin + vRange * (j / vDiv);
    for (let i = 0; i < uDiv; i++) {
      const u0 = info.uMin + uRange * (i / uDiv);
      const u1 = info.uMin + uRange * ((i + 1) / uDiv);
      const p0 = evalFaceUV(handle, faceIndex, u0, v);
      const p1 = evalFaceUV(handle, faceIndex, u1, v);
      points.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
    }
  }

  // V-direction lines (constant u, varying v) — draw one per u-step
  for (let i = 0; i <= uDiv; i++) {
    const u = info.uMin + uRange * (i / uDiv);
    for (let j = 0; j < vDiv; j++) {
      const v0 = info.vMin + vRange * (j / vDiv);
      const v1 = info.vMin + vRange * ((j + 1) / vDiv);
      const p0 = evalFaceUV(handle, faceIndex, u, v0);
      const p1 = evalFaceUV(handle, faceIndex, u, v1);
      points.push(p0.x, p0.y, p0.z, p1.x, p1.y, p1.z);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3));
  const mat = new THREE.LineBasicMaterial({ color, linewidth: 1, transparent: true, opacity: 0.7 });
  return new THREE.LineSegments(geo, mat);
}

// ============================================================
// Face highlighting via raycasting
// ============================================================
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Track all face meshes for picking
interface FaceEntry {
  mesh: THREE.Mesh;
  defaultMaterial: THREE.MeshStandardMaterial;
  highlightMaterial: THREE.MeshStandardMaterial;
  shapeName: string;
  faceIndex: number;
  info: OccFaceInfoData;
}
const allFaceEntries: FaceEntry[] = [];
let selectedEntry: FaceEntry | null = null;

function onMouseDown(event: MouseEvent) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const meshes = allFaceEntries.map(e => e.mesh);
  const intersects = raycaster.intersectObjects(meshes, false);

  // Restore previous selection
  if (selectedEntry) {
    selectedEntry.mesh.material = selectedEntry.defaultMaterial;
    selectedEntry = null;
  }

  if (intersects.length > 0) {
    const obj = intersects[0].object as THREE.Mesh;
    const entry = allFaceEntries.find(e => e.mesh === obj);
    if (entry) {
      entry.mesh.material = entry.highlightMaterial;
      selectedEntry = entry;

      console.log(
        `\n=== HIGHLIGHTED: ${entry.shapeName} face[${entry.faceIndex}] ===`,
        `\n  Surface type: ${SURFACE_TYPE_NAMES[entry.info.surfaceType] || '?'} (${entry.info.surfaceType})`,
        `\n  UV bounds: u=[${entry.info.uMin.toFixed(3)}, ${entry.info.uMax.toFixed(3)}]`,
        `              v=[${entry.info.vMin.toFixed(3)}, ${entry.info.vMax.toFixed(3)}]`,
      );

      // Sample a few UV→XYZ points on the selected face
      console.log('  UV → XYZ samples:');
      for (let j = 0; j <= 2; j++) {
        const v = entry.info.vMin + (entry.info.vMax - entry.info.vMin) * j * 0.5;
        for (let i = 0; i <= 2; i++) {
          const u = entry.info.uMin + (entry.info.uMax - entry.info.uMin) * i * 0.5;
          const pt = evalFaceUV(handleMap.get(entry.shapeName)!, entry.faceIndex, u, v);
          console.log(
            `    uv=(${u.toFixed(2)},${v.toFixed(2)}) → ` +
            `xyz=(${pt.x.toFixed(3)},${pt.y.toFixed(3)},${pt.z.toFixed(3)}) ` +
            `n=(${pt.nx.toFixed(3)},${pt.ny.toFixed(3)},${pt.nz.toFixed(3)})`,
          );
        }
      }
    }
  }
}

window.addEventListener('mousedown', onMouseDown);

// ============================================================
// Face colors (one per face, cycling)
// ============================================================
const FACE_COLORS = [0x4fc3f7, 0xff7043, 0x66bb6a, 0xab47bc, 0xffca28, 0xef5350];

// ============================================================
// Build a shape (Cylinder or Sphere) into the scene
// ============================================================
const shapeGroup = new THREE.Group();
scene.add(shapeGroup);

// Map shape name → handle for UV eval lookup
const handleMap = new Map<string, number>();

function buildShape(handle: number, name: string, positionX: number) {
  handleMap.set(name, handle);
  const fc = occShapeFaceCount(handle);

  console.log(`\n========== ${name} ==========`);
  console.log(`  Faces: ${fc}`);

  for (let fi = 0; fi < fc; fi++) {
    const info = getFaceInfo(handle, fi);
    const typeName = SURFACE_TYPE_NAMES[info.surfaceType] || '?';

    console.log(
      `  Face[${fi}]: ${typeName}`,
      `  UV: u=[${info.uMin.toFixed(3)}, ${info.uMax.toFixed(3)}]`,
      `v=[${info.vMin.toFixed(3)}, ${info.vMax.toFixed(3)}]`,
    );

    // Per-face tessellation (separate mesh for highlighting)
    const faceMeshData = tessellateFaceMesh(handle, fi, 0.08);
    console.log(`    Tessellation: ${faceMeshData.positions.length / 3} vertices, ${faceMeshData.indices.length / 3} triangles`);

    const faceGroup = new THREE.Group();

    // Solid face mesh (semi-transparent to show UV lines behind)
    const color = FACE_COLORS[fi % FACE_COLORS.length];
    const mesh = buildMesh(faceMeshData, color, 0.55, true);
    faceGroup.add(mesh);

    // Wireframe outline
    const wireGeo = new THREE.WireframeGeometry(mesh.geometry);
    const wire = new THREE.LineSegments(
      wireGeo,
      new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.15, transparent: true }),
    );
    faceGroup.add(wire);

    // UV grid overlay — samples the parametric surface at regular intervals
    // U-divisions: 24 for cylinder lateral, 16 for discs/sphere
    // V-divisions: proportional to UV aspect ratio
    const uDiv = (info.surfaceType === 1) ? 32 : 20; // more for cylinder lateral
    const vDiv = 12;
    const uvGrid = buildUVGrid(handle, fi, info, uDiv, vDiv, 0x00ffff);
    faceGroup.add(uvGrid);

    // Highlight material (emissive glow, triggered on click)
    const highlightMat = new THREE.MeshStandardMaterial({
      color, roughness: 0.2, metalness: 0.1,
      emissive: 0xffffff, emissiveIntensity: 0.6,
      side: THREE.DoubleSide,
      transparent: true, opacity: 0.85,
    });

    // Track for picking
    allFaceEntries.push({
      mesh,
      defaultMaterial: mesh.material as THREE.MeshStandardMaterial,
      highlightMaterial: highlightMat,
      shapeName: name,
      faceIndex: fi,
      info,
    });

    faceGroup.position.x = positionX;
    shapeGroup.add(faceGroup);
  }

  // Sample UV→XYZ mapping at face corners for every face
  console.log(`\n  --- UV→XYZ corner samples for ${name} ---`);
  for (let fi = 0; fi < fc; fi++) {
    const info = getFaceInfo(handle, fi);
    console.log(`  Face[${fi}] (${SURFACE_TYPE_NAMES[info.surfaceType] || '?'}):`);
    const corners = [
      ['uMin,vMin', info.uMin, info.vMin],
      ['uMax,vMin', info.uMax, info.vMin],
      ['uMin,vMax', info.uMin, info.vMax],
      ['uMax,vMax', info.uMax, info.vMax],
    ];
    for (const [label, u, v] of corners) {
      const pt = evalFaceUV(handle, fi, u, v);
      console.log(
        `    ${label}: uv=(${u.toFixed(3)},${v.toFixed(3)}) → ` +
        `xyz=(${pt.x.toFixed(3)},${pt.y.toFixed(3)},${pt.z.toFixed(3)})`,
      );
    }
  }
}

// ============================================================
// Labels (sprites)
// ============================================================
function addLabel(text: string, x: number, y: number) {
  const canvas = document.createElement('canvas');
  canvas.width = 320; canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.font = '18px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(text, 160, 36);
  const tex = new THREE.CanvasTexture(canvas);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  sprite.position.set(x, y, 0);
  sprite.scale.set(2.4, 0.48, 1);
  shapeGroup.add(sprite);
}

// ============================================================
// Legend panel (HTML overlay)
// ============================================================
function addLegend() {
  const div = document.createElement('div');
  div.style.cssText = `
    position: fixed; top: 16px; left: 16px;
    background: rgba(0,0,0,0.75); color: #ccc;
    padding: 12px 16px; border-radius: 6px;
    font: 13px monospace; line-height: 1.6;
    pointer-events: none; z-index: 10;
  `;
  div.innerHTML = `
    <b style="color:#fff">OCCT Topology Explorer</b><br>
    <span style="color:#00ffff">■</span> UV grid lines (cyan)<br>
    <span style="color:#fff">🖱 click</span> face → highlight + debug
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
  console.log('║  OCCT Topology Exploration Demo     ║');
  console.log('║  Face · Surface · UV Domain         ║');
  console.log('╚══════════════════════════════════════╝');
  console.log('');
  console.log('Concepts:');
  console.log('  Surface  = infinite mathematical shape (e.g. infinite cylinder)');
  console.log('  Face     = Surface + UV bounds (e.g. a finite piece of cylinder)');
  console.log('  UV domain = 2D parameter space that maps to 3D');
  console.log('    Cyl: u=angle[0,2π], v=height');
  console.log('    Sphere: u=longitude[0,2π], v=latitude[-π/2,π/2]');
  console.log('  Geom_Surface::D1(u,v) → (3D point, tangent_u, tangent_v)');
  console.log('  Normal = cross(tangent_u, tangent_v)');
  console.log('');

  // Create shapes via topology API
  const boxHandle  = occCreateBoxShape(1.2, 1.0, 0.9);
  const cylHandle  = createCylinderShape(0.7, 2.2);
  const sphHandle  = createSphereShape(0.95);
  const coneHandle = createConeShape(0.7, 0.0, 1.8);

  buildShape(boxHandle,  'Box',      -3.8);
  buildShape(cylHandle,  'Cylinder', -1.5);
  buildShape(sphHandle,  'Sphere',    1.5);
  buildShape(coneHandle, 'Cone',      3.8);

  addLabel('Box  (6 faces)', -3.8, 2.2);
  addLabel('Cylinder  (3 faces)', -1.5, 2.2);
  addLabel('Sphere  (1 face)', 1.5, 2.2);
  addLabel('Cone  (2 faces)', 3.8, 2.2);
  addLegend();

  console.log('\n=== READY ===');
  console.log('Click on any face to highlight it and see UV→XYZ samples.');
  console.log('Orbit: drag to rotate, scroll to zoom, right-drag to pan.\n');

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
