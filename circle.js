var sizeX = 640;
var sizeY = 640;
var vel = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    translate(windowWidth / 2, windowHeight / 2);
    sizeX -= vel;
    sizeY -= vel;
    ellipse(0, 0, sizeX, sizeY);
    vel += 0.1;
}