var song;
var sliderVolume;
var sliderRate;
var sliderPan;
var buttonP;
var buttonS;

function setup() {
    createCanvas(windowWidth, windowHeight);
    song = loadSound("mario.mp3");
    sliderVolume = createSlider(0, 1, 0.5, 0.1);
    sliderRate = createSlider(0, 2, 1, 0.1);
    sliderPan = createSlider(-1, 1, 0, 0.5);
    buttonS = createButton();
    buttonS.mousePressed(toggleButton2);
    buttonP = createButton();
    buttonP.mousePressed(toggleButton);
}

function toggleButton2() {
    if (song.isPlaying()) {
        song.stop();
        buttonS.html("Play From The Start");
    } else {
        song.play();
        buttonS.html("Stop now");
    }
}

function toggleButton() {
    if (song.isPlaying) {
        buttonP.html("Pause");
        song.pause();
    } else {
        buttonP.html("Play");
        song.play();
    }
}

function draw() {
    background(song.currentTime() * 20, 100, 0);
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());
}