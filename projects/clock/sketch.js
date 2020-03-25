var canvas;
var radius;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    canvas.style('align-self', 'center');
    angleMode(DEGREES);

}

function draw() {

    translate(windowWidth/2, windowHeight/2);
    rotate(-90);

    background(20);

    var hr = hour();
    var mn = minute();
    var sc = second();
    var milli_sc = millis() % 1000;

    strokeWeight(8);
    noFill();

    end1 = map(milli_sc % 1000, 0, 1000, 0, 360);
    end2 = map(sc % 60, 0, 60, 0, 360);
    end3 = map((mn * 60) + sc, 0, 3600, 0, 360);
    end4 = map(((hr % 12) * 60) + mn, 0, 720, 0, 360);

    if (windowWidth < windowHeight) {
        radius = windowWidth;
    } else {
        radius = windowHeight;
    }


    stroke(150, 100, 255);
    arc(0, 0, 0.8 * radius, 0.8 * radius, 0 , end1);

    stroke(255, 100, 150);
    arc(0, 0, 0.75 * radius, 0.75 * radius, 0 , end2);

    stroke(255, 150, 100);
    arc(0, 0, 0.7 * radius, 0.7 * radius, 0, end3);

    stroke(100, 255, 150);
    arc(0, 0, 0.65 * radius, 0.65 * radius, 0, end4);

    strokeWeight(1);
    fill(255);

    rotate(90);

    if (mn % 60 < 10) {
        if (sc < 10) {
            text(hr + ':0' + mn + ':0' + sc, 0.05 * windowWidth, 0.25 * windowHeight);
        } else {
            text(hr + ':0' + mn + ':' + sc, 0.05 * windowWidth, 0.25 * windowHeight);
        }
    } else {
        text(hr + ':' + mn + ':' + sc, 140, 180);
    }

    rotate(-90);

    strokeWeight(4);

    push();
    stroke(150, 100, 255);
    rotate(end1 - 45);
    line(0, 0, 140, 140);
    pop();

    push();
    stroke(255, 100, 150);
    rotate(end2 - 45);
    line(0, 0, 120, 120);
    pop();

    push();
    stroke(255, 150, 100);
    rotate(end3 - 45);
    line(0, 0, 100, 100);
    pop();

    push();
    stroke(100, 255, 150);
    rotate(end4 - 45);
    line(0, 0, 80, 80);
    pop();

}
