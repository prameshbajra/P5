function setup() {
    createCanvas(windowWidth, windowHeight);
}
var deg = 0;

function draw() {
    background(255);
    translate(windowWidth / 2, windowHeight / 2);
    rotate(radians(deg));
    fill(0);
    rect(50, 50, 50, 50);
    fill(255, 0, 0);
    ellipse(75, 75, 10, 10);
    deg += 1;
}