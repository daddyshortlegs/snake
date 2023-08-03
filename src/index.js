import {Game} from "./game.js";

const UP_KEY = 38;
const DOWN_KEY = 40;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE = 32;
let key;

let game = Game(99, 59);

let ratSound = new Audio("resources/rat.mp3");
ratSound.loop = false;
let snakeSound = new Audio("resources/snake.mp3");
snakeSound.loop = false;
snakeSound.play();
const intervalId = setInterval(draw, 100);

document.onkeydown = function (event) {
    key = event.keyCode;
};

function draw() {
    switch (key) {
        case UP_KEY:
            game.up();
            break;
        case DOWN_KEY:
            game.down();
            break;
        case LEFT_KEY:
            game.left();
            break;
        case RIGHT_KEY:
            game.right();
            break;
        case SPACE:
            game.grow();
            break;
    }

    key = null;
    const ctx = clearCanvas();
    drawRat(ctx);
    drawSnake(ctx);

    game.tick();
    if (game.eatenRat()) {
        ratSound.play();
    }

    if (game.isGameOver()) {
        clearInterval(intervalId);
        displayGameOver();
        ratSound.play();
    }
}

function clearCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return ctx;
}

function drawRat(ctx) {
    const rat = game.getRat();
    drawDot(ctx, rat.ratX, rat.ratY, "rgb(132,77,14)");
}

function drawSnake(ctx) {
    game.getSnakeBody().forEach(element => {
        drawDot(ctx, element.x, element.y);
    });
}

function drawDot(ctx, x, y, fillStyle = "green") {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x * 10, y * 10, 10, 10);
}

function displayGameOver() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, Rats!", canvas.width / 2, canvas.height / 2);
}
