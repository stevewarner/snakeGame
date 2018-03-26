var snake;
var scl = 20;
var score = 0;
var difficulty = 10;
var highScore = 0;

var food;
var textColorButton;

function setup() {
  var canvas = createCanvas(600,600);
  canvas.parent('main');
  snake = new Snake();
  frameRate(difficulty);
  pickLocation();

// load audio
//let audio = new Audio();
//audio.src = "funkyWorm.mp3";
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

  if (snake.eat(food)) {
    score++;
    highScore++;
    pickLocation();
  }

  snake.death();
  snake.update();
  snake.show();

  fill(255,0,100);
  //fill(color(random(255), random(255), random(255)));
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
      snake.dir(0,-1);
      break;
    case DOWN_ARROW:
      snake.dir(0,1);
      break;
    case LEFT_ARROW:
      snake.dir(-1,0);
      break;
    case RIGHT_ARROW:
      snake.dir(1,0);
      break;
    case 87:
      snake.dir(0,-1);
      break;
    case 83:
      snake.dir(0,1);
      break;
    case 65:
      snake.dir(-1,0);
      break;
    case 68:
      snake.dir(1,0);
      break;
  }

}

function gameover() {
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("Game over \nScore: " + score + "\nHigh Score: " + highScore + "\nPlay again?", 300, 200);
  score = 0;
  //button
  textColorButton = createButton('Change Color');
  textColorButton.position(25, 25);
  textColorButton.mousePressed(restart); 
  //restart();
  //document.getElementById("main").addEventListener("click", restart);
}

function restart() {
  alert('hey');
  //window.location.reload();
}

