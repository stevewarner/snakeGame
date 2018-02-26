var snek;
var scl = 20;
var score = 0;

var food;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('main');
  snek = new Snake();
  frameRate(10);
  pickLocation();


// load audio
let audio = new Audio();
audio.src = "funkyWorm.mp3";
//audio.play();
}

function pickLocation() {
  var col = floor(width/scl);
  var row = floor(height/scl);
  food = createVector(floor(random(col)), floor(random(row)));
  food.mult(scl);
}

function draw() {
  background(0);

  if (snek.eat(food)) {
    score++;
    console.log(score);
    pickLocation();
  }

  snek.death();
  snek.update();
  snek.show();

  fill(255, 0, 100);
  noStroke();
  rect(food.x, food.y, scl, scl);

  fill(255);
  noStroke();
  textSize(18);
  text("Score: "+ score, 500, 560);

}

function keyPressed() {
  switch(keyCode) {
    case 27:
      alert('hi');
      break;
    case UP_ARROW:
      snek.dir(0,-1);
      break;
    case DOWN_ARROW:
      snek.dir(0,1);
      break;
    case LEFT_ARROW:
      snek.dir(-1,0);
      break;
    case RIGHT_ARROW:
      snek.dir(1,0);
      break;
    case 87:
      snek.dir(0,-1);
      break;
    case 83:
      snek.dir(0,1);
      break;
    case 65:
      snek.dir(-1,0);
      break;
    case 68:
      snek.dir(1,0);
      break;
  }

}

function gameover() {
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Game over \nScore: " + score + "\nPlay again?", 300, 200);
  score = 0;
  //restart();
  document.getElementById("").addEventListener("click", restart);
}

function restart() {
  window.location.reload();
}

