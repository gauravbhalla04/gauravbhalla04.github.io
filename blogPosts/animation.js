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

    cnv = createCanvas(width, height - 150);
  }
  else {
    cnv = createCanvas(bgWidth, bgHeight - 150);
    width = bgWidth;
    height = bgHeight;
  }
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  cnv.position(0, 50);
  background(bg);

  button = createButton('');
  button.size(width, height);
  button.position(0, 0);
  button.mousePressed(playGame);
  button.style('background-color', 'Transparent');
  button.style('background-repeat', 'no-repeat');
  button.style('border', 'none');
  button.style('cursor', 'pointer');
  button.style('overflow', 'hidden');
  button.style('outline', 'none');
  button.size(width, height - 150);
  button.position(0, 50);

}

function draw() {

  var width = windowWidth;
  var height = windowHeight;

  if (width  <= bgWidth) {

    cnv = createCanvas(width, height - 150);
  }
  else {
    cnv = createCanvas(bgWidth, bgHeight - 150);
    width = bgWidth;
    height = bgHeight;
  }
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  cnv.position(0, 50);
  background(bg);


}



function playGame() {
    window.open('https://gauravbhalla.co.uk/projects/snakegame/game.html');
    console.log('called');
}
