// Make velocity change accordingly later ...
var vel = 5,
    sizeX = 0,
    sizeY = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    ellipse(width / 2, height / 2, sizeX, sizeY);
    sizeX += vel;
    sizeY += vel;
    if (sizeX >= windowWidth || sizeY >= windowHeight || sizeX <= 0) {
        vel *= -1;
    }
}