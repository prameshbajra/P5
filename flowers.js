var d = 8;
var n = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    translate(windowWidth / 2, windowHeight / 2);
    stroke(70, 70, 255);
    noFill();
    strokeWeight(2);
    d = map(mouseX, 0, windowWidth, 1, 9);
    n = map(mouseY, 0, windowHeight, 1, 7);
    var k = n / d;
    beginShape();
    for (var i = 0; i < TWO_PI * d; i += 0.03) {
        var r = 250 * cos(k * i);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
    }
    endShape(CLOSE);
}