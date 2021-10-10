console.log("Hi");

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100)
var renderer = new THREE.WebGLRenderer()

const water_texture = new THREE.TextureLoader().load('./texture/air_texture.jpg')
const corn_texture = new THREE.TextureLoader().load('./texture/corn_texture.jpg')
const cloud_texture = new THREE.TextureLoader().load('./texture/cloud_texture.jpg')
const jewerly_texture = new THREE.TextureLoader().load('./texture/jewrly_texture.jpg')
const sky_texture = new THREE.TextureLoader().load('./texture/sky_texture.jpg')

const boxGeo = new THREE.BoxGeometry(0.2,0.5,0.8, 4,2,5)

const boxMaterial = new THREE.MeshBasicMaterial({color: 0x000ff0, wireframe:true})
let boxWireframe = new THREE.Mesh(boxGeo,boxMaterial)
boxWireframe.position.set(-3.6,3.9,0)
scene.add(boxWireframe)

const boxMat1 = new THREE.MeshBasicMaterial({color: 0x000ff0})
let boxMeshBasic = new THREE.Mesh(boxGeo, boxMat1)
boxMeshBasic.position.set(-2.3,3.9,0)
scene.add(boxMeshBasic)

//perlu light agar muncul
const boxMat2 = new THREE.MeshLambertMaterial({color: 0x000ff0})
let boxMeshLambert = new THREE.Mesh(boxGeo, boxMat2)
boxMeshLambert.position.set(-0.9,3.9,0)
scene.add(boxMeshLambert)

//terpangurhi light
const boxMat3 = new THREE.MeshPhongMaterial({color: 0x000ff0, shininess:100, flatShading: true})
let boxMeshPong = new THREE.Mesh(boxGeo, boxMat3)
boxMeshPong.position.set(0.8,3.9,0)
scene.add(boxMeshPong)


const sphereGeo = new THREE.SphereGeometry(0.35,5,3)

const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xFF00FF, wireframe: true})
let sphere = new THREE.Mesh(sphereGeo, sphereMaterial)
sphere.position.set(-3.6,2.2,0)
scene.add(sphere)

const sphereMaterial1 = new THREE.MeshBasicMaterial({color: 0xFF00FF})
let sphereBasic = new THREE.Mesh(sphereGeo, sphereMaterial1)
sphereBasic.position.set(-2.3,2.2,0)
scene.add(sphereBasic)

const sphereMaterial2 = new THREE.MeshLambertMaterial({color: 0xFF00FF})
let sphereLambert = new THREE.Mesh(sphereGeo, sphereMaterial2)
sphereLambert.position.set(-0.8,2.2,0)
scene.add(sphereLambert)

const sphereMaterial3 = new THREE.MeshPhongMaterial({color: 0xFF00FF, flatShading: true, shininess:100})
let spherePhong = new THREE.Mesh(sphereGeo, sphereMaterial3)
spherePhong.position.set(0.8,2.2,0)
scene.add(spherePhong)


const coneGeo = new THREE.ConeGeometry(0.4,0.8,9)
const coneMaterial = new THREE.MeshBasicMaterial({color:0xffff00, wireframe:true})
let cone = new THREE.Mesh(coneGeo, coneMaterial)
cone.position.set(-3.9,0.4,-1)
scene.add(cone)

const coneMaterial1 = new THREE.MeshBasicMaterial({color:0xffff00})
let coneBasic = new THREE.Mesh(coneGeo, coneMaterial1)
coneBasic.position.set(-2.5,0.4,-1)
scene.add(coneBasic)

const coneMaterial2 = new THREE.MeshLambertMaterial({color:0xffff00})
let coneLambert = new THREE.Mesh(coneGeo, coneMaterial2)
coneLambert.position.set(-1,0.4,-1)
scene.add(coneLambert)

const coneMaterial3 = new THREE.MeshPhongMaterial({color:0xffff00, flatShading: true, shininess:100})
let conePhong = new THREE.Mesh(coneGeo, coneMaterial3)
conePhong.position.set(0.9,0.4,-1)
scene.add(conePhong)

const torusGeo = new THREE.TorusGeometry(0.3, 0.1, 4, 12)
const torusMaterial = new THREE.MeshBasicMaterial({color: 0x00ffff, wireframe: true})
let torus = new THREE.Mesh(torusGeo, torusMaterial)
torus.position.set(-3.6,-1.2,0)
scene.add(torus)

const torusMaterialBsc = new THREE.MeshBasicMaterial({color: 0x00ffff})
let torusBasic = new THREE.Mesh(torusGeo, torusMaterialBsc)
torusBasic.position.set(-2.2,-1.2,0)
scene.add(torusBasic)

const torusMaterialLmbrt = new THREE.MeshLambertMaterial({color: 0x00ffff})
let torusLambert = new THREE.Mesh(torusGeo, torusMaterialLmbrt)
torusLambert.position.set(-0.9,-1.2,0)
scene.add(torusLambert)

const torusMaterialPh = new THREE.MeshPhongMaterial({color: 0x00ffff, flatShading: true, shininess:100})
let torusPhong = new THREE.Mesh(torusGeo, torusMaterialPh)
torusPhong.position.set(0.9,-1.2,0)
scene.add(torusPhong)

const octaHedronGeo = new THREE.OctahedronGeometry(0.4,1)

const octaHedronMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe:true})
let octaHedron = new THREE.Mesh(octaHedronGeo, octaHedronMat)
octaHedron.position.set(-3.6, -2.9, -0.1)
scene.add(octaHedron)

const octaHedronMatBsc = new THREE.MeshBasicMaterial({color: 0xFFFFFF})
let octaHedronBsc = new THREE.Mesh(octaHedronGeo, octaHedronMatBsc)
octaHedronBsc.position.set(-2.2, -2.9, -0.1)
scene.add(octaHedronBsc)

const octaHedronMatLmbr = new THREE.MeshLambertMaterial({color: 0xFFFFFF})
let octaHedronLmbrt = new THREE.Mesh(octaHedronGeo, octaHedronMatLmbr)
octaHedronLmbrt.position.set(-0.9, -2.9, -0.1)
scene.add(octaHedronLmbrt)

const octaHedronMatPh = new THREE.MeshPhongMaterial({color: 0xFFFFFF, shininess:100, flatShading:true})
let octaHedronPhong = new THREE.Mesh(octaHedronGeo, octaHedronMatPh)
octaHedronPhong.position.set(0.8, -2.9, -0.1)
scene.add(octaHedronPhong)


// const octaHedronMat = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe:true})
// let octaHedron = new THREE.Mesh(octaHedronGeo, octaHedronMat)
// octaHedron.position.set(-3.6, -2.9, -0.1)
//scene.add(octaHedron)


const boxMaterialTexture = new THREE.MeshBasicMaterial({map: water_texture})
let boxTexture = new THREE.Mesh(boxGeo,boxMaterialTexture)
boxTexture.position.set(3,3.9,0)
scene.add(boxTexture)

const sphereMaterialTexture = new THREE.MeshBasicMaterial({map: jewerly_texture})
let sphereTexture = new THREE.Mesh(sphereGeo, sphereMaterialTexture)
sphereTexture.position.set(3,2.2,0)
scene.add(sphereTexture)

const coneMaterialTexture = new THREE.MeshBasicMaterial({map:corn_texture})
let coneTexture = new THREE.Mesh(coneGeo, coneMaterialTexture)
coneTexture.position.set(3.3,0.4,-1)
scene.add(coneTexture)

const torusMatTexture = new THREE.MeshBasicMaterial({map:sky_texture})
let torusTexture = new THREE.Mesh(torusGeo, torusMatTexture)
torusTexture.position.set(3,-1.2,0)
scene.add(torusTexture)

const octaHedronMatTexture = new THREE.MeshBasicMaterial({map:cloud_texture})
let octaHedronTexture = new THREE.Mesh(octaHedronGeo, octaHedronMatTexture)
octaHedronTexture.position.set(3, -2.9, -0.1)
scene.add(octaHedronTexture)


var spotlight = new THREE.SpotLight(0xff00ff, 0.7)
spotlight.position.set(0,4,4)
scene.add(spotlight)
scene.add(new THREE.SpotLightHelper(spotlight))


// const torusGeo = new THREE.TorusGeometry(0.3, 0.1, 4, 12)
// const torusMaterial = new THREE.MeshBasicMaterial({color: 0x00ffff, wireframe: true})
// let torus = new THREE.Mesh(torusGeo, torusMaterial)
// torus.position.set(-3.6,-1.2,0)
// scene.add(torus)


// const loader = new THREE.FontLoader();

// loader.load( './examples/fonts/helvetiker_regular.typeface.json', function (font) {

// 	const textGeometry = new THREE.TextGeometry( 'chy', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );

//     const textMesh = new THREE.Mesh(textGeometry, [
//         new THREE.MeshPhongMaterial({color: 0xad4000}),
//         new THREE.MeshPhongMaterial({color: 0x5c2301})
//     ])

//     textMesh.castShadow = true
//     textMesh.position.set(-3.6, -1, 0)
//     scene.add(textMesh)

// } );

// var loader = new THREE.FontLoader();

// loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {

//     var textGeo = new THREE.TextGeometry( "My Text", {

//         font: font,

//         size: 200,
//         height: 50,
//         curveSegments: 12,

//         bevelThickness: 2,
//         bevelSize: 5,
//         bevelEnabled: true

//     } );

//     var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

//     var mesh = new THREE.Mesh( textGeo, textMaterial );
//     mesh.position.set( x, y, z );

//     scene.add( mesh );

// } );


cam.position.z = 12
renderer.setSize(innerWidth,innerHeight)
document.body.appendChild(renderer.domElement)

// biar layarnya responsive
window.addEventListener('resize', function() {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth/this.window.innerHeight
    cam.updateProjectionMatrix()

})

function draw() { 

    requestAnimationFrame(draw)

    boxWireframe.rotation.y += 0.008
    boxWireframe.rotation.z += 0.006
    boxWireframe.rotation.x += 0.009

    boxMeshBasic.rotation.y += 0.008
    boxMeshBasic.rotation.z += 0.006
    boxMeshBasic.rotation.x += 0.009

    boxMeshLambert.rotation.y += 0.008
    boxMeshLambert.rotation.z += 0.006
    boxMeshLambert.rotation.x += 0.009

    boxMeshPong.rotation.y += 0.019
    

    sphere.rotation.y += 0.006
    //sphere.rotation.x += 0.006

    sphereBasic.rotation.y += 0.006
    sphereBasic.rotation.z += 0.01

    sphereLambert.rotation.y += 0.01
    sphereLambert.rotation.z += 0.01

    spherePhong.rotation.y += 0.03

    cone.rotation.x += 0.01
    cone.rotation.y += 0.01

    coneBasic.rotation.x += 0.01
    coneBasic.rotation.y += 0.01

    coneLambert.rotation.x += 0.01
    //coneLambert.rotation.y += 0.01
    coneLambert.rotation.z += 0.01

    conePhong.rotation.y += 0.02
    conePhong.rotation.z += 0.02

    torus.rotation.z += 0.01
    torus.rotation.y += 0.01

    torusBasic.rotation.x += 0.02
    torusBasic.rotation.y += 0.01

    torusLambert.rotation.x += 0.03
    torusLambert.rotation.y += 0.01

    torusPhong.rotation.x += 0.02
    torusPhong.rotation.y += 0.01

    octaHedron.rotation.y += 0.02

    octaHedronBsc.rotation.y += 0.01
    octaHedronBsc.rotation.z += 0.01

    octaHedronLmbrt.rotation.y += 0.01
    octaHedronLmbrt.rotation.z += 0.01

    octaHedronPhong.rotation.y += 0.03
    octaHedronPhong.rotation.x += 0.04

    boxTexture.rotation.y += 0.02
    sphereTexture.rotation.y += 0.02
    coneTexture.rotation.z += 0.02
    coneTexture.rotation.y += 0.02
    torusTexture.rotation.y += 0.02   
    octaHedronTexture.rotation.z += 0.02
    octaHedronTexture.rotation.x += 0.02

    renderer.render(scene,cam)
}

// let dx = boxTexture.position.x
// let speed = 0.0156



draw()