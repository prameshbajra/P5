var microphone;
var volume;

function setup() {
    createCanvas(windowWidth, windowHeight);
    microphone = new p5.AudioIn();
    microphone.start();
}

function draw() {
    background(255);
    volume = microphone.getLevel();
    fill(255, 0, 0);
    ellipse(windowWidth / 2, windowHeight / 2, 350, volume * 500);
    line(342, 318, 682, 318);
}