var font;
var vehicles = [];

function preload() {
    font = loadFont('BAUHS93.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // textFont(font);
    // textSize(192);
    // fill(255);
    // noStroke();
    // text('train', 100, 200);

    var points = font.textToPoints("Shrihesh", 100, 400, 400, {
        sampleFactor: 0.1
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
    }
}

function draw() {
    background(255);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}