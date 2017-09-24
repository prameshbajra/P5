function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rotate(-90);
}

function draw() {
    background(0);
    translate(windowWidth / 2, windowHeight / 2);
    rotate(-90);
    var hourTime = hour();
    var minuteTime = minute();
    var secondTime = second();
    strokeWeight(8);
    point(0, 0);
    noFill();
    stroke(255, 0, 0);
    var secondArc = map(secondTime, 0, 60, 0, 360);
    arc(0, 0, 400, 400, 0, secondArc);

    push();
    rotate(secondArc);
    line(0, 0, 140, 0);
    pop();

    stroke(0, 255, 0);
    var minuteArc = map(minuteTime, 0, 60, 0, 360);
    arc(0, 0, 380, 380, 0, minuteArc);

    push();
    rotate(minuteArc);
    line(0, 0, 100, 0);
    pop();

    stroke(0, 0, 255);
    var hourArc = map(hourTime % 12, 0, 12, 1, 360);
    arc(0, 0, 360, 360, 0, hourArc);

    push();
    rotate(hourArc);
    line(0, 0, 60, 0);
    pop();

    point(0, 0);

}