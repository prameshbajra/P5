var mic;
var points = [];
var amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
    background(0);
}

function draw() {
    background(0);
    points.push(mic.getLevel());
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < points.length; i++) {
        var y = map(points[i], 0, 1, height / 1.5, 0);
        vertex(i, y);
    }
    endShape();
    if (points.length > width) {
        points.splice(0, 1);
    }
}