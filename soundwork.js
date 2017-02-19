var song;

function preLoad() {
    song = loadsound("mario.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    song.play();
}

function draw() {
    background(0);
}