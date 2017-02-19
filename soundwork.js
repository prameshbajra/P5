var song;

function setup() {
    createCanvas(windowWidth, windowHeight);
    song = loadSound("mario.mp3", loaded);
}

function loaded() {
    song.play();
}

function draw() {
    background(random(255), random(255), random(255));
}