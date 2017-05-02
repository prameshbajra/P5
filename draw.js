function preload() {
    let imageLoad1 = loadImage("olo/asdf.jpg");
    let imageLoad2 = loadImage("olo/fgfg.jpg");
    let imageLoad3 = loadImage("olo/qwer.jpg");
    let imageLoad4 = loadImage("olo/zxcv.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    colorMode(RGB, 1);
    frameRate(60);
}

function draw() {
    translate(-mouseX * 0.2, mouseY * 0.1, 0);
    background(255);
    strokeWeight(4);
    scale(90);
    rotateX(mouseX * 0.01);
    rotateY(mouseY * 0.01);
    strokeWeight(30);
    // Back side view ...
    beginShape();
    fill(1, 0, 0);
    vertex(0, 0, 0);
    vertex(0, 1, 0);
    vertex(1, 1, 0);
    vertex(1, 0, 0);
    vertex(0, 0, 0);
    endShape(CLOSE);

    // left side view ...
    beginShape();
    fill(0, 1, 0);
    vertex(0, 0, 0);
    vertex(0, 0, 1);
    vertex(0, 1, 1);
    vertex(0, 1, 0);
    endShape(CLOSE);

    // Top view ...
    beginShape();
    fill(0, 0, 1);
    vertex(1, 0, 0);
    vertex(1, 0, 1);
    vertex(0, 0, 1);
    vertex(0, 0, 0);
    endShape(CLOSE);

    // Front view ...
    beginShape();
    fill(1, 1, 0);
    vertex(1, 0, 1);
    vertex(1, 1, 1);
    vertex(0, 1, 1);
    vertex(0, 0, 1);
    endShape(CLOSE);

    // Right view ...
    beginShape();
    fill(0, 1, 1);
    vertex(1, 0, 1);
    vertex(1, 0, 0);
    vertex(1, 1, 0);
    vertex(1, 1, 1);
    endShape(CLOSE);

    beginShape();
    fill(0);
    vertex(1, 1, 1);
    vertex(0, 1, 1);
    vertex(0, 1, 0);
    vertex(1, 1, 0);
    endShape(CLOSE);
}