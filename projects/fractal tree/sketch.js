var angle;
var radius;
var slider;
var branchLengthMult = 0.67;

function setup() {
    angle = PI/4;
    sliderAngle = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    createCanvas(windowWidth, windowHeight);

    background(20);
    angle = sliderAngle.value();
    stroke(255);
    translate(width/2, height);
    if (windowWidth < windowHeight) {
        radius = windowWidth;
    } else {
        radius = windowHeight;
    }
    branch(radius/4);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
        rotate(angle);
        branch(len * branchLengthMult);
        pop();
        push();
        rotate(-angle);
        branch(len * branchLengthMult);
        pop();
    }

}
