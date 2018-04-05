var canvasWidth = 600;
var canvasHeight = 600;
var scl = 20;

var snake;
var food;

var score = 0;
var difficulty = 10;

function setup() {
  document.querySelector(".endgame").style.display = "none";
  score = 0;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('main');
	frameRate(difficulty);

	snake = new Snake();
	food = createVector(0,0);

  createFood();

  draw();
  loop();
  
// load audio
//let audio = new Audio();
//audio.src = "funkyWorm.mp3";
//audio.play();
}

function draw() {
	background(51);
	fill(255,0,100);
	rect(food.x, food.y, scl, scl);

	snake.draw();

  update();
  
  fill(255);
  //noStroke();
  textSize(18);
  text("Score: "+ score, 500, 560);
}

function update() {
	snake.update();

	if (snake.eats(food)) {
		createFood();
	}
}

function keyPressed() {
	if(keyCode == LEFT_ARROW || keyCode == 65) {
		snake.moveOnX(-1);
	}
	else if (keyCode == RIGHT_ARROW || keyCode == 68) {
		snake.moveOnX(1);
	}
	else if (keyCode == UP_ARROW || keyCode == 87) {
		snake.moveOnY(-1);
	}
	else if (keyCode == DOWN_ARROW || keyCode == 83) {
		snake.moveOnY(1);
	}
}

function createFood() {
	var x = floor(random(0, floor(canvasWidth/scl))) * scl;
	var y = floor(random(0, floor(canvasHeight/scl))) * scl;

	food.x = x;
	food.y = y;
}

function gameover() {
  document.querySelector(".endgame").style.display = "block";
  score = 0;
  noLoop();
}

