var n = 4;
var c = 5;
var x = 1;
var y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
    angleMode(DEGREES);
    background(0);
}

function draw() {
    var angle = 137.3 * n;
    var r = c * sqrt(n);
    var x = r * cos(angle) + width / 2;
    var y = r * sin(angle) + height / 2;
    noStroke();
    fill(n % 256, 255, 255);
    ellipse(x, y, 5, 5);
    n++;
}