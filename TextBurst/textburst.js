var f;
var particle = [];

function preload() {
    f = loadFont("bauhs93.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(f);
    var points = f.textToPoints("Pramesh", 350, 430, 300);
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var particles = new Particles(pt.x, pt.y);
        particle.push(particles);
    }
}

function draw() {
    background(0);
    for (var i = 0; i < particle.length; i++) {
        var value = particle[i];
        value.update();
        value.show();
    }
}