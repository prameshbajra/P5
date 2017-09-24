var mic;
var points = [];
var amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(255, 255, 0);
    var level = mic.getLevel();
    points.push(level);
    stroke(random(1, 255), random(1, 255), random(1, 255));
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