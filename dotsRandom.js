// Currently some what clutterly made .... fix later if need be ...

var count = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(random(1, 255), random(1, 255), random(1, 255));
    noStroke();
    ellipse(random(0, windowWidth), random(0, windowHeight), 10, 10);
    fill(255);
    ellipse(random(0, windowWidth), random(0, windowHeight), 10, 10);
}