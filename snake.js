const UP_KEY = 38;
const DOWN_KEY = 40;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE = 32;
let x = 10;
let y = 10;
let key;
let snakeSize = 1;
let body = [];
body.push({x: x, y: y});

const intervalId = setInterval(draw, 20);

document.onkeydown = function(event) {
    key = event.keyCode;
};

function draw() {               
    let previousX = x;
    let previousY = y;

    switch (key) {
        case UP_KEY:
            y -= 1;
            break;
        case DOWN_KEY:
            y += 1;
            break;
        case LEFT_KEY:
            x -= 1;
            break;
        case RIGHT_KEY:
            x += 1;
            break;
        case SPACE:
            snakeSize += 1;
            break;
    }                           
    
    
    if (x > 99) {
        x = 0;
    } else if (x < 0) {
        x = 99;
    } else if (y > 59) {
        y = 0;
    } else if (y < 0) {
        y = 59;
    }

    body[0] = {x: x, y: y};


    drawDot(body[0].x, body[0].y);
}

function drawDot(x, y) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(x * 10, y * 10, 10, 10);
}
