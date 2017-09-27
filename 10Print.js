let x = 0;
let y = 0;
let length = 20;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    stroke(0);
    strokeWeight(5);
    if (random(1) < 0.5)
        line(x, y, x + length, y + length);
    else
        line(x, y + length, x + length, y);
    x += length;
    if (x > windowWidth) {
        x = 0;
        y = y + length;
    }
}