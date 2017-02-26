function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    textFont("Georgia");
    var points = font.textToPoints("Pramesh", 100, 200, 200);
    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        stroke(255);
        strokeWeight(4);
        point(pt.x, pt.y);
    }
}

function draw() {

}