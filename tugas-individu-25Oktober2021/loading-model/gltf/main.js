var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });

camera.position.z += 4;
camera.position.y += 3;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

//.
//.
//.
// [Scene Background]
const bgSceneLoader = new THREE.TextureLoader();
const bgImage = bgSceneLoader.load("assets/pexels-ann-nekr-5849392.jpg");

//scene.background = new THREE.Color(0xfafafa);
scene.background = bgImage;

//.
//.
//.
// [ Screen Resize ]
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  camera.aspect = this.window.innerWidth / this.window.innerHeight;
  camera.updateProjectionMatrix();
});

//.
//.
//.
// [Orbital Control]
var controls = new THREE.OrbitControls(camera, renderer.domElement);

//.
//.
//.
// [Load gltf]
let pistol;
let loader = new THREE.GLTFLoader().load("assets/scene.gltf", function (result) {
  //console.log(result);
  pistol = result.scene.children[0];
  pistol.castShadow = true;
  scene.add(pistol);
});

//.
//.
//.
// [AmbientLight]
const hlight = new THREE.AmbientLight(0x404040, 25);
scene.add(hlight);

//.
//.
//.
// [Update Scene]
function updateScene() {
  if (pistol) {
    pistol.rotation.z += 0.01;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(updateScene);
}

updateScene();
