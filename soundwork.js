var song;
var button;
var amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    song = loadSound("mario.mp3", loadSong);
    amp = new p5.Amplitude();
}

function loadSong() {
    button = createButton("Play");
    button.mousePressed(togglePlayPause);
}

function togglePlayPause() {
    if (!song.isPlaying()) {
        song.play();
        button.html("Pause");
    } else {
        song.pause();
        button.html("Play");
    }
}

function draw() {
    background(255);
    var size = amp.getLevel();
    var diamX = map(size, 0, 1, 200, 800);
    translate(windowWidth / 2, windowHeight / 2);
    fill(0, 0, 255);
    ellipse(0, 0, diamX, diamX);
}