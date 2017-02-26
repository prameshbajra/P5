var velocity = 5;
var x = 20,
    y = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    x += velocity;
    if (x > width || x < 0) {
        velocity *= -1;
    }
    ellipse(x, y, 20, 20);
}