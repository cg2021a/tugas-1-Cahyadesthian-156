const canvas = document.querySelector('.webgl');
score = document.getElementById('score-el');

let scene = new THREE.Scene()
const loader = new THREE.CubeTextureLoader();
const texture = loader.load([
        './asset/posX.png',
        './asset/negX.png',
        './asset/posY.png',
        './asset/negY.png',
        './asset/posZ.png',
        './asset/negZ.png',
]);
scene.background = texture;


let cam = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
)

cam.position.z += 100


let renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(window.innerWidth, window.innerHeight)
//document.body.appendChild(renderer.domElement) //ke THREE.WebGLRenderer({ canvas }) karena ada canvasnya


window.addEventListener("resize", function() {
    renderer.setSize(this.window.innerWidth, this.window.innerHeight)
    cam.aspect = this.window.innerWidth/this.window.innerHeight
    cam.updateProjectionMatrix()
})


const controls = new THREE.OrbitControls(cam, renderer.domElement);

//buat lighting karena Meshnya dipengaruhi light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1);
directionalLight.position.set(0,50,0)
scene.add( directionalLight );

const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 8, 0xffffff);
scene.add(lightHelper);


//[buat cube] 

//pilihan warnanya 
const colors = [
    0xf1eb3c,  //kuning
    0xf23d6d,  //merah
    0x975ddc,  //ungu
    0x43e9e9,  //biru muda
    0x78f92d,  //hijau muda
    0x4c4cc9,  //biru tua
];

function randomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}

function randomCertainFloat(min, max) {
    return Math.random() * (max - min) + min;
}

let boxCount = 0

let speed = 2250
const speedMin = 500
const speedAdd = 100

const makeBox = () => {
    let cGeo = new THREE.BoxGeometry(1,1,1)
    let cMat = new THREE.MeshToonMaterial({color:randomColor()})
    let cMesh = new THREE.Mesh(cGeo, cMat)
    cMesh.position.set(randomCertainFloat(-25,25), randomCertainFloat(-25,25), randomCertainFloat(-25,25))
    scene.add(cMesh)
    boxCount += 1
    cMesh.name = `box${boxCount}`

    return cMesh

}


const addBox = (num = 2) => {

    if(boxCount <= 96-num) {
        Array(num).fill(0).forEach(makeBox)
        if(speed >= speedMin + speedAdd) {
            speed -= speedAdd
        }
        console.log(`box added, box ${boxCount}, speed ${speed}`);
    }

    setTimeout(addBox, speed)


}

addBox(4)



let rayCast = new THREE.Raycaster()
let mouse = new THREE.Vector2()
let selected
let slctBx

const deselect = () => {
    if (selected == null) {
        return;
    }
    selected.obj.material.color.setHex(selected.init_color);
    selected = null;
    slctBx = undefined
};


const ereaseBox = (object) => {
    object.geometry.dispose();
    object.material.dispose();
    scene.remove(object);
    renderer.renderLists.dispose();
};

const selectedBox = (once = false) => {
    if (selected) {
        const currentColor = selected.obj.material.color.getHex();
        selected.obj.material.color.setHex((currentColor === 0xffffff)?selected.init_color: 0xffffff);
    }
    if (once) {
        return;
    } 
    setTimeout(selectedBox, 500);
};

document.addEventListener("mousedown", (e) => {
    // normalize
    mouse.x = (e.clientX/window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY/window.innerHeight) *-2 + 1;
    rayCast.setFromCamera(mouse, cam);

    let intersects = rayCast.intersectObjects(scene.children, false);
     
    intersects.forEach((i)=> {
        if(i.object.name != "") {
            slctBx = i.object
        }
    })


    
    if (!intersects[0]) {
        deselect();
        return;
    }
    let firstObject = intersects[0].object;

    // compare and erase if color is the same
    if (selected != null) {
        
        evaluateObject(firstObject);
        return;
    }

    // select first object
    selected = ({
        obj: firstObject,
        init_color: firstObject.material.color.getHex()
    });
    selectedBox(true);
    
});

const evaluateObject = (chObject) => {
    if (selected.obj.uuid === chObject.uuid) {
        return;
    }

    const first  = selected.init_color;
    const second = chObject.material.color.getHex();

    const currentScore = parseInt(score.textContent);
    
    let newScore;
    
    if (first === second) {
        ereaseBox(selected.obj);
        ereaseBox(chObject);
        boxCount -= 2;
        newScore = currentScore + 20;
        console.log('paired box erased');
    } 
    score.textContent = '' + ((newScore >= 0) ? newScore : 0);
    deselect();
};

 
document.addEventListener('mousedown', () => {
    document.querySelector('html').classList.toggle('cursor');
});

document.addEventListener('mouseup', () => {
    document.querySelector('html').classList.toggle('cursor');
});

selectedBox()


function update() {
    renderer.render(scene,cam)

    
    if(slctBx!= undefined) {
        slctBx.rotation.y += 0.03
    }
    

    controls.update()

    requestAnimationFrame(update)
}

update()