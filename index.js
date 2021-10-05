function main() {

    console.log("laoded");

    /**
    * @type {HTMLCanvasElement} canvas
    */
    const canvas = document.getElementById("myCanvas");
    /**
     * @type {WebGLRenderingContext} gl
     */
    const gl = canvas.getContext("webgl");

    let leftFd = [
        //(koordinat x, koordinat y, Red, Green , blue)

        //body kiri
        -0.844, 0.729, 0.98, 0.98, 0.98,
        -0.391, 0.748, 0.98, 0.98, 0.98,
        -0.882, 0.489, 0.98, 0.98, 0.98,

        -0.882, 0.489,  0.98, 0.98, 0.98,
        -0.391, 0.748,  0.98, 0.98, 0.98,
        -0.346, 0.514,  0.98, 0.98, 0.98,

        //lambang eco campus
        -0.550, 0.550, 0.0, 1.0, 0.0,
        -0.500, 0.550, 0.0, 1.0, 0.0,
        -0.550, 0.516, 0.0, 1.0, 0.0,

        -0.550, 0.516, 0.0, 1.0, 0.0,
        -0.500, 0.550, 0.0, 1.0, 0.0,
        -0.496, 0.518, 0.0, 1.0, 0.0,

        //lambang its
        -0.436, 0.553, 0.0, 0.0, 1.0,
        -0.395, 0.558, 0.0, 0.0, 1.0,
        -0.433, 0.524, 0.0, 0.0, 1.0,

        -0.433, 0.524, 0.0, 0.0, 1.0,
        -0.390, 0.529, 0.0, 0.0, 1.0,
        -0.395, 0.558, 0.0, 0.0, 1.0,


        //fd
        -0.408, 0.670, 0.0, 0.0, 0.0,
        -0.374, 0.632, 0.0, 0.0, 0.0,
        -0.369, 0.781, 0.0, 0.0, 0.0,

        -0.403, 0.810, 0.0, 0.0, 0.0,
        -0.369, 0.781, 0.0, 0.0, 0.0,
        -0.408, 0.670, 0.0, 0.0, 0.0,
    ];

    let rightFd = [

        //body
        0.280, 0.315, 1.0, 1.0, 1.0,
        0.324, 0.632, 1.0, 1.0, 1.0,
        0.522, 0.636, 1.0, 1.0, 1.0,

        0.522, 0.636, 1.0, 1.0, 1.0,
        0.549, 0.317, 1.0, 1.0, 1.0,
        0.280, 0.315, 1.0, 1.0, 1.0,

        //fd
        0.394, 0.715, 0.0, 0.0, 0.0,
        0.459, 0.713, 0.0, 0.0, 0.0,
        0.456, 0.620, 0.0, 0.0, 0.0,

        0.394, 0.620, 0.0, 0.0, 0.0,
        0.394, 0.715, 0.0, 0.0, 0.0,
        0.456, 0.620, 0.0, 0.0, 0.0,


        //lambang eco
        0.487, 0.571, 0.0, 1.0, 0.0,
        0.512, 0.572, 0.0, 1.0, 0.0,
        0.514, 0.549, 0.0, 1.0, 0.0,

        0.488, 0.549, 0.0, 1.0, 0.0,
        0.487, 0.571, 0.0, 1.0, 0.0,
        0.514, 0.549, 0.0, 1.0, 0.0,

        //lambang its
        0.485, 0.613, 0.0, 0.0, 1.0,
        0.509, 0.613, 0.0, 0.0, 1.0,
        0.512, 0.590, 0.0, 0.0, 1.0,

        0.486, 0.589, 0.0, 0.0, 1.0,
        0.485, 0.613, 0.0, 0.0, 1.0,
        0.512, 0.590, 0.0, 0.0, 1.0,

    ];

    let leftFdContainer = [

        //tempat fd
        -0.561, 0.663, 0.0, 0.0, 1.0,
        -0.408, 0.670, 0.0, 0.0, 1.0,
        -0.374, 0.632, 0.0, 0.0, 1.0,
        -0.530, 0.628, 0.0, 0.0, 1.0,
        -0.561, 0.663, 0.0, 0.0, 1.0        
        
    ];

    let rightFdContainer = [

        // tempat fd
        0.394, 0.620, 0.0, 0.0, 1.0,
        0.456, 0.620, 0.0, 0.0, 1.0,
        0.456, 0.529, 0.0, 0.0, 1.0,
        0.391, 0.529, 0.0, 0.0, 1.0,
        0.394, 0.620, 0.0, 0.0, 1.0
    ];

    let verticesFd = [...leftFd, ...rightFd];
    let verticesFdContainer = [...leftFdContainer, ...rightFdContainer];
    let vertices = [...verticesFd, ...verticesFdContainer];

    let vertexBufferObject = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBufferObject);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    let vertexShaderText = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 fragColor;
        uniform mat4 uChange;

        void main() {
            fragColor = aColor;
            gl_Position = uChange * vec4(aPosition, 0.0, 1.0);
        }
    `;

    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderText);
    gl.compileShader(vertexShader);

    let fragmentShaderText = `
        precision mediump float;
        
        varying vec3 fragColor;
        void main() {
            gl_FragColor = vec4(fragColor, 1.0);
        }
    `;

    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderText);
    gl.compileShader(fragmentShader);

    //membuat package, file .exe yang bisa di compile oleh CPU yang kemudia dikirm ke GPU untuk digambar
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);



    let positionAttribLocation = gl.getAttribLocation(program, 'aPosition');
    let colorAttribLocation = gl.getAttribLocation(program, 'aColor');
    gl.vertexAttribPointer(positionAttribLocation, 2, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 0 );
    gl.vertexAttribPointer(colorAttribLocation, 3, gl.FLOAT, gl.FALSE, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT );

    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(colorAttribLocation);

    
    let uChange = gl.getUniformLocation(program, 'uChange');
    let speed = 0.0156;
    let dy = 0;

    function render() {
        if (dy >= 0.27 || dy <= -1.3) {
            speed = -speed;
        }
		
        dy += speed;
        
		let leftS = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0,
		];
		
		let rightS = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, dy, 0.0, 1.0,
		];

        
        gl.clearColor(0.6, 0.6, 1.0, 1.0); // warna background
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.useProgram(program);
        gl.uniformMatrix4fv(uChange, false, leftS);
        gl.drawArrays(gl.TRIANGLES, 0, leftFd.length/5);
        gl.drawArrays(gl.LINE_STRIP, verticesFd.length/5, leftFdContainer.length/5);

		gl.uniformMatrix4fv(uChange, false, rightS);
        gl.drawArrays(gl.TRIANGLES, leftFd.length/5, rightFd.length/5);
        gl.drawArrays(gl.LINE_STRIP, (vertices.length-rightFdContainer.length)/5, rightFdContainer.length/5);
            
        requestAnimationFrame(render);
    }
    render();

}