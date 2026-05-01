import * as THREE from 'three';
import { init, createBox } from 'webcad-sdk';

// -- Scene setup --
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 2, 4);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Ambient + directional light so we can see the mesh
scene.add(new THREE.AmbientLight(0x444444));
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(5, 10, 5);
scene.add(light);

// -- Load WASM & build mesh --
async function main() {
  console.time('WASM init');
  await init();
  console.timeEnd('WASM init');

  console.time('createBox');
  const { positions, normals, indices } = createBox(1.8, 1.2, 0.8);
  console.timeEnd('createBox');
  console.log('vertices:', positions.length / 3, 'indices:', indices.length);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));

  const mat = new THREE.MeshStandardMaterial({
    color: 0x4fc3f7,
    roughness: 0.4,
    metalness: 0.1,
  });

  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // Wireframe overlay to show the triangulation
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.15, transparent: true }),
  );
  mesh.add(wire);

  // -- Render loop --
  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.y += 0.005;
    mesh.rotation.x += 0.002;
    renderer.render(scene, camera);
  }
  animate();
}

main().catch(err => {
  document.body.innerHTML = `<pre style="color:red;padding:2em">${err}</pre>`;
  console.error(err);
});

// -- Resize --
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
