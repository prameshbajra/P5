function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 150, 150);

}

function draw() {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(0, windowWidth), random(0, windowHeight), 20, 20);
}