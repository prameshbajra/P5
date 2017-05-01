let sizeOfCube = 400,
    timer = 1000;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(250);
    translate(0, 0, sizeOfCube);
    if (sizeOfCube > 100) {
        sizeOfCube -= 10;
    }
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    box(70, 70, 70);
    timer -= 10;
    if (timer == 0) {
        noLoop();
    }
}