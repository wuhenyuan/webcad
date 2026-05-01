import * as THREE from 'three';
import { init, occMakeBox, occMakeSphere, occMakeCylinder, OccMeshData } from 'webcad-sdk';

// ---- Scene ----
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.5, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0x444444));
const light1 = new THREE.DirectionalLight(0xffffff, 1.2);
light1.position.set(5, 10, 5); scene.add(light1);
const light2 = new THREE.DirectionalLight(0x8888ff, 0.5);
light2.position.set(-5, 0, -5); scene.add(light2);
scene.add(new THREE.GridHelper(12, 24, 0x444444, 0x333333));

// ---- Build Three.js mesh from OccMeshData ----
function buildOccMesh(data: OccMeshData, color: number): THREE.Mesh {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
  geo.setIndex(new THREE.BufferAttribute(data.indices, 1));
  const mat = new THREE.MeshStandardMaterial({
    color, roughness: 0.35, metalness: 0.05,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geo, mat);
}

function addWireframe(mesh: THREE.Mesh): void {
  const wireGeo = new THREE.WireframeGeometry(mesh.geometry);
  const wire = new THREE.LineSegments(
    wireGeo,
    new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.12, transparent: true }),
  );
  mesh.add(wire);
}

function logMesh(label: string, d: OccMeshData): void {
  console.log(`${label}: ${d.positions.length / 3} vertices, ${d.indices.length / 3} triangles`);
}

// ---- Main ----
async function main() {
  console.time('WASM init');
  await init();
  console.timeEnd('WASM init');

  console.log('===========================================');
  console.log('  OCCT Geometry Pipeline Demo');
  console.log('  BRepPrimAPI → BRepMesh_IncrementalMesh');
  console.log('  → Poly_Triangulation → Three.js');
  console.log('===========================================');

  // Create shapes with different deflection values
  // deflection = chord height tolerance (smaller = finer mesh)
  console.time('OCCT shapes');
  const boxData    = occMakeBox(1.5, 1.0, 0.8, 0.05);
  const sphereData = occMakeSphere(0.9, 0.06);
  const cylData    = occMakeCylinder(0.55, 2.0, 0.06);
  console.timeEnd('OCCT shapes');

  logMesh('Box', boxData);
  logMesh('Sphere', sphereData);
  logMesh('Cylinder', cylData);

  // Build meshes
  const boxMesh    = buildOccMesh(boxData, 0x4fc3f7);
  const sphereMesh = buildOccMesh(sphereData, 0xff7043);
  const cylMesh    = buildOccMesh(cylData, 0x66bb6a);

  addWireframe(boxMesh);
  addWireframe(sphereMesh);
  addWireframe(cylMesh);

  // Position side by side
  const group = new THREE.Group();

  const boxGrp = new THREE.Group();
  boxGrp.add(boxMesh);
  boxGrp.position.x = -2.5;
  group.add(boxGrp);

  const sphereGrp = new THREE.Group();
  sphereGrp.add(sphereMesh);
  sphereGrp.position.x = 0;
  group.add(sphereGrp);

  const cylGrp = new THREE.Group();
  cylGrp.add(cylMesh);
  cylGrp.position.x = 2.5;
  group.add(cylGrp);

  scene.add(group);

  // Labels
  const labels = [
    { text: 'Box\nBRepPrimAPI_MakeBox', x: -2.5 },
    { text: 'Sphere\nBRepPrimAPI_MakeSphere', x: 0 },
    { text: 'Cylinder\nBRepPrimAPI_MakeCylinder', x: 2.5 },
  ];
  for (const lbl of labels) {
    const canvas = document.createElement('canvas');
    canvas.width = 320; canvas.height = 72;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px monospace';
    ctx.textAlign = 'center';
    const lines = lbl.text.split('\n');
    for (let li = 0; li < lines.length; li++) {
      ctx.fillText(lines[li], 160, 20 + li * 22);
    }
    const tex = new THREE.CanvasTexture(canvas);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
    sprite.position.set(lbl.x, 1.7, 0);
    sprite.scale.set(2.4, 0.54, 1);
    group.add(sprite);
  }

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.004;
    renderer.render(scene, camera);
  }
  animate();

  console.log('\nAll shapes created via OCCT tessellation pipeline.');
  console.log('deflection=0.05-0.06 → fine mesh, deflection=0.5 → coarse mesh');
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
