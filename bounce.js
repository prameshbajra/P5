var velocityX = 5,
    velocityY = 5;
var x = 20,
    y = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    x += velocityX;
    y += velocityY;
    if (x > width || x < 0) {
        velocityX *= -1;
    }
    if (y > height || y < 0) {
        velocityY *= -1;
    }
    fill(255, 0, 0);
    ellipse(x, y, 30, 30);
}