var img1;
var img2;
var img3;
var d = 550;
function preload() {
img1 = loadImage("Track.jpg");
img2 = loadImage("Running Man 2.png");
img3 = loadImage("manypeoplerunning.png");
  
}

function setup() {
  createCanvas(550, 550);
}

function draw() {
 imageMode(CORNER);
  image(img1, 0, 0);
  
  imageMode(CENTER);
  image(img2, mouseX, mouseY);
  
  image(img3, d, 200);
  d = d - 5;
  
}