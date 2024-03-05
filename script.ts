const typer = document.querySelector('.typing');
const text1 = 'A aspiring front-end dev';
const text2 = 'A linux entusiast';
const text3 = 'Open source contributor';
function typingEffect(element, text1, i = 0) {
	if (i === 0) {
		element.textContent = '';
	}
	element.textContent += text1[i];
	if (i === text1.length - 1) {
		return;
	}
	setTimeout(() => typingEffect(typer, text1, i + 1), 30);
	// if (element.textContent = "A aspiring front-end dev") {
	//     setTimeout(() => eraserEffect, 30)
	// }
	// setTimeout(() => typingEffect(typer, text2, i + 1), 30)
}
typingEffect(typer, text1, 0);
function eraserEffect() {
	textContent.slice(0, -1);
}


//breakout ==>


const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = -3;
let dy = 4;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0
let lives = 3;

let bricks:any= [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status:1};
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0
          score++
          if (score === brickRowCount * brickColumnCount) {
          ctx.font = "16px Arial";
          ctx.fillStyle = "#0095DD";
          ctx.fillText('You won', canvas.width - 270, 190);
            clearInterval(interval); 
          }
        }
      }
    }
  }
}
function drawBall() {
    ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
              const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = "#0095DD";
              ctx.fill();
              ctx.closePath();
          }
    }
  }
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Score: ${score}`, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
    collisionDetection();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
      if (y + dy < ballRadius) {
          dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
          if ((y = y - paddleHeight)) {
              dy = -dy;
          }
    } else {
     lives--;
if (!lives) {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText('Game over', canvas.width- 270, 190)
	clearInterval(interval); 
	canvasbtn?.textContent === 'Restart?'
  } else {
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = -3;
    dy = 4;
    paddleX = (canvas.width - paddleWidth) / 2;
        }
      }
    }
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw) 
}
function startGame() {
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  function keyDownHandler(e:any) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(e:any) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  };
  draw();
}
const canvasbtn = document.querySelector('#canvasbtn')

canvasbtn.addEventListener("click", function () {
  startGame();
	this.disabled = true;
	if (!lives) {
    this.disabled = false;
	}
})

// document.addEventListener("mousemove", mouseMoveHandler, false);

// function mouseMoveHandler(e:any) {
//   const relativeX = e.clientX - canvas.offsetLeft;
//   if (relativeX > 0 && relativeX < canvas.width) {
//     paddleX = relativeX - paddleWidth / 2;
//   }
// }