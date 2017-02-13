var slider = [];
var angle = 0;

function setup() {
    noCanvas(); // This is needed to clear default vako wala sano canvas ...
    for (var i = 0; i < 250; i++) {
        slider[i] = createSlider(0, 500, 50); // Creates a silder in js .....
    }
}

function draw() {
    var offset = 0; // For dalay between each slider point ...
    for (var i = 0; i < slider.length; i++) {
        // Mapping -1 and 1 values of sin curve with slider max and min values
        var x = map(sin(angle + offset), -1, 1, 0, 500);
        // Setting slider value to mapped value .... which generate kind of a sin curve ...
        slider[i].value(x);
        // Setting points of slider bit off from one another ...
        offset += 0.025;
    }
    angle += 0.1;
}