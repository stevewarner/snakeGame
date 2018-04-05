function Snake () {
    // start in top left 0, 0
    this.x = 0;
    this.y = 0;

    this.head = createVector(this.x, this.y, 0);

	this.body = [];
    this.body.push(this.head);
    
    this.speed = createVector(1,0);
    this.color = 255;

    this.draw = function() {
		for (var i = 0; i < this.body.length; i++) {
            fill(this.color);
			rect(this.body[i].x, this.body[i].y, scl, scl);
		}
    }
    
    this.update = function() {
		// move body of snake
		for (var i = this.body.length - 1; i >= 1; i--) {
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}

		// move head of snake
		this.head.x += this.speed.x * scl;
		this.head.y += this.speed.y * scl;

		this.head.x = constrain(this.head.x, 0, width - scl);
		this.head.y = constrain(this.head.y, 0, width - scl);

		// check if dead
		for (var i = 1; i < this.body.length; i++) {
			if (this.head.x === this.body[i].x && this.head.y === this.body[i].y) {
				//reset tail
				this.body = [];
				this.body.push(this.head);
                //game over
                gameover();
			}
		}
    }
    
   // Controls
	this.moveOnX = function(dir) {
		if (dir * this.speed.x < 0) return;
		this.speed.x = dir;
		this.speed.y = 0;
	}

	this.moveOnY = function(dir) {
		if (dir * this.speed.y < 0) return;
		this.speed.x = 0;
		this.speed.y = dir;
	}

	this.eats = function(food) {
		if (food.x === this.head.x && food.y === this.head.y) {
			this.addToTail();
			return true;
		} else {
			return false;
		}
	}

	this.addToTail = function() {
		var lastTailElement = this.body[this.body.length - 1];
        this.body.push(createVector(lastTailElement.x, lastTailElement.y, 0));
        score++;
	}
	//
}