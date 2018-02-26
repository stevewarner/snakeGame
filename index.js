const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

// load audio
//let audioName = new Audio();
//audioName.src = "sounds/filename.mp3";

// draw rect
ctx.fillStyle = "red";
//          (X, Y, Width, Height)
ctx.fillRect = (100,300,30,30);

let snake = [];
