let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100000);
let renderer = new THREE.WebGLRenderer({ antialias: true });

camera.position.z += 4000;
camera.position.y -= 5000;
camera.position.x += 1000;

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

//.
//.
//.
// [Scene Background]
const bgSceneLoader = new THREE.TextureLoader();
const bgImage = bgSceneLoader.load("assets/pexels-jéshoots-4991.jpg");

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

// [Orbital Control]
var controls = new THREE.OrbitControls(camera, renderer.domElement);

//.
// Light
var keyLight = new THREE.DirectionalLight(new THREE.Color("hsl(30,100%,75%)"), 1.0);
keyLight.position.set(-100, 0, 100);
scene.add(keyLight);
scene.add(new THREE.DirectionalLightHelper(keyLight, 0.1, 0xff0000));

var fillLight = new THREE.DirectionalLight(new THREE.Color("hsl(240,100%,75%)"), 0.75);
fillLight.position.set(100, 0, 100);
scene.add(fillLight);
scene.add(new THREE.DirectionalLightHelper(fillLight, 0.1, 0x00ff00));

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();
scene.add(backLight);
scene.add(new THREE.DirectionalLightHelper(backLight, 0.1, 0x0000ff));

//.
//.
// MTL and Obje
var mtLoader = new THREE.MTLLoader();
//mtLoader.setTexturePath("/asset/Airplane_v1_L1.123c4a6fedec-1680-4a36-a228-b0d440a4f280/");

mtLoader.setPath("assets/");
mtLoader.load("11803_Airplane_v1_l1.mtl", function (materials) {
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.setPath("assets/");
  objLoader.load("11803_Airplane_v1_l1.obj", function (object) {
    object.position.y -= 60;
    scene.add(object);
  });
});

// [Update Scene]
function updateScene() {
  //planeObj.rotation.x += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(updateScene);
}

updateScene();
