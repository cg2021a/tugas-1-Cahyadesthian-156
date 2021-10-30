// [ Basic Req ]
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });

camera.position.z += 90;
camera.position.y += 30;
//camera.position.x += 90;

//.
//.
//.
// [ Skybox bg ]
let loaderBgBox = new THREE.CubeTextureLoader();
let skyBoxBg = loaderBgBox.load(["assets/posX-skybox.png", "assets/negX-skybox.png", "assets/posY-skybox.png", "assets/negY-skybox.png", "assets/posZ-skybox.png", "assets/negZ-skybox.png"]);
scene.background = skyBoxBg;

renderer.shadowMap.enabled = true;
//renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);

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
// [Plane and Grid]
// [Plane]
let planeGeo = new THREE.PlaneGeometry(60, 60);
let planeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.65, transparent: true });
let planeMesh = new THREE.Mesh(planeGeo, planeMaterial);
planeMesh.rotation.x -= Math.PI / 2;
planeMesh.position.y += 10;
planeMesh.receiveShadow = true;
scene.add(planeMesh);

// [Grid]
var grid = new THREE.GridHelper(100, 100, 0x0a0a0a, 0x000000);
grid.position.set(0, 10, 0);
scene.add(grid);

//.
//.
//.
// [Lighting]
let movingLight2 = 0.08;
let movingLight3 = -0.08;
// Center light controlled by Dat.gui
let pLight = new THREE.PointLight(0xfffffff, 0.5);
pLight.position.set(0, 30, 0);
pLight.castShadow = true;
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight, 0.1, 0xff0000));
const helper = new THREE.CameraHelper(pLight.shadow.camera);
scene.add(helper);
pLight.shadow.mapSize.width = 512;
pLight.shadow.mapSize.height = 512;
pLight.shadow.camera.near = 0.5;
pLight.shadow.camera.far = 500;
// Center Point Light Control using Dat.GUI]
let pointLightControl = new Object();
pointLightControl.x = 0;
pointLightControl.y = 30;
pointLightControl.z = 0;
let guiPointLight = new dat.GUI();
guiPointLight.add(pointLightControl, "x", -30, 30);
guiPointLight.add(pointLightControl, "y", 15, 50);
guiPointLight.add(pointLightControl, "z", -30, 30);
// [Automatic Moving Point Light]
// Behind
let pLight2 = new THREE.PointLight(0xfffffff, 0.8);
pLight2.position.set(-20, 15, -20);
pLight2.castShadow = true;
scene.add(pLight2);
scene.add(new THREE.PointLightHelper(pLight2, 0.1, 0xff0000));
pLight2.shadow.mapSize.width = 3000;
pLight2.shadow.mapSize.height = 3000;
pLight2.shadow.camera.near = 0.5;
pLight2.shadow.camera.far = 2000;
const helper2 = new THREE.CameraHelper(pLight2.shadow.camera);
scene.add(helper2);
//Front
let pLight3 = new THREE.PointLight(0xfffffff, 0.8);
pLight3.position.set(20, 15, 15);
pLight3.castShadow = true;
scene.add(pLight3);
scene.add(new THREE.PointLightHelper(pLight3, 0.1, 0xff0000));
pLight3.shadow.mapSize.width = 3000;
pLight3.shadow.mapSize.height = 3000;
pLight3.shadow.camera.near = 0.5;
pLight3.shadow.camera.far = 2000;
const helper3 = new THREE.CameraHelper(pLight3.shadow.camera);
scene.add(helper3);

//.
//.
//.
// [Box Creation]
const kindTexture = [
  new THREE.TextureLoader().load("assets/texture/air_texture.jpg"),
  new THREE.TextureLoader().load("assets/texture/cloud_texture.jpg"),
  new THREE.TextureLoader().load("assets/texture/jewerly_texture.jpg"),
  new THREE.TextureLoader().load("assets/texture/sky_texture.jpg"),
  new THREE.TextureLoader().load("assets/texture/corn_texture.jpg"),
];

let boxGeo = new THREE.BoxGeometry(1, 1, 1);

for (let x = -5; x < 5; x++) {
  for (let y = -5; y < 5; y++) {
    let boxMat = new THREE.MeshPhongMaterial({ map: kindTexture[Math.floor(Math.random() * 5)] });
    let boxMesh = new THREE.Mesh(boxGeo, boxMat);
    boxMesh.position.set(Math.random() + x * 5, 10.5, Math.random() + y * 5);
    boxMesh.castShadow = true;
    boxMesh.receiveShadow = true;
    scene.add(boxMesh);
  }
}

let bigBoxGeo1 = new THREE.BoxGeometry(4, 4, 4);
let boxMat1 = new THREE.MeshPhongMaterial({ map: kindTexture[0] });
let boxMesh1 = new THREE.Mesh(bigBoxGeo1, boxMat1);
boxMesh1.castShadow = true;
boxMesh1.position.set(-25, 20, 0);
scene.add(boxMesh1);

let boxMat2 = new THREE.MeshPhongMaterial({ map: kindTexture[1] });
let boxMesh2 = new THREE.Mesh(bigBoxGeo1, boxMat2);
boxMesh2.castShadow = true;
boxMesh2.position.set(-10, 20, 0);
scene.add(boxMesh2);

let boxMat3 = new THREE.MeshPhongMaterial({ map: kindTexture[2] });
let boxMesh3 = new THREE.Mesh(bigBoxGeo1, boxMat3);
boxMesh3.castShadow = true;
boxMesh3.position.set(1, 20, 0);
scene.add(boxMesh3);

let boxMat4 = new THREE.MeshPhongMaterial({ map: kindTexture[3] });
let boxMesh4 = new THREE.Mesh(bigBoxGeo1, boxMat4);
boxMesh4.castShadow = true;
boxMesh4.position.set(10, 20, 0);
scene.add(boxMesh4);

let boxMat5 = new THREE.MeshPhongMaterial({ map: kindTexture[4] });
let boxMesh5 = new THREE.Mesh(bigBoxGeo1, boxMat5);
boxMesh5.castShadow = true;
boxMesh5.position.set(25, 20, 0);
scene.add(boxMesh5);

//.
scene.fog = new THREE.Fog(0xffffff, 10, 150);

//.
//.
// [Update Scene]
function updateScene() {
  pLight.position.set(pointLightControl.x, pointLightControl.y, pointLightControl.z);

  pLight2.position.x += movingLight2;
  if (pLight2.position.x > 30 || pLight2.position.x < -30) {
    movingLight2 *= -1;
  }

  pLight3.position.x += movingLight3;
  if (pLight3.position.x > 30 || pLight3.position.x < -30) {
    movingLight3 *= -1;
  }

  boxMesh1.rotation.y += 0.01;
  boxMesh1.rotation.z += 0.01;

  boxMesh2.rotation.y -= 0.01;
  boxMesh2.rotation.z += 0.01;

  boxMesh3.rotation.y += 0.01;
  boxMesh3.rotation.z -= 0.01;

  boxMesh4.rotation.y -= 0.01;
  boxMesh4.rotation.z -= 0.01;

  boxMesh5.rotation.y += 0.01;
  boxMesh5.rotation.z -= 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(updateScene);
}

updateScene();

//.
//.
//.
// [Title HTML Control-Texture-Panorama-Shadow-Fog]
var titleText = "Control-Texture-Panorama-Shadow-Fog-";
var speed = 250;
var refresh = null;
function moveTitle() {
  document.title = titleText;
  titleText = titleText.substring(1, titleText.length) + titleText.charAt(0);
  refresh = setTimeout("moveTitle()", speed);
}

moveTitle();

//.
//.
//.
