var bg;
var bgWidth = 2510;
var bgHeight = 1450;
var cnv;
var button;


function setup() {
    var width = windowWidth;
    var height = windowHeight;
  bg = loadImage('images/background.png');
  if (width  <= bgWidth) {

    cnv = createCanvas(width, (height - 150) * (1/3));
  }
  else {
    cnv = createCanvas(bgWidth, (bgHeight - 150) * (1/3));
    width = bgWidth;
    height = bgHeight;
  }
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  cnv.position(0, 50);
  background(bg);
}

function draw() {

  var width = windowWidth;
  var height = windowHeight;

  if (width  <= bgWidth) {

    cnv = createCanvas(width, (height - 150) * (1/3));
  }
  else {
    cnv = createCanvas(bgWidth, (bgHeight - 150) * (1/3));
    width = bgWidth;
    height = bgHeight;
  }
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  cnv.position(0, 50);
  background(bg);


}

