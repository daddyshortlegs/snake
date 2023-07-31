import { Game } from "./game.js";

const UP_KEY = 38;
const DOWN_KEY = 40;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const SPACE = 32;
let key;

let game = Game(99, 59);

const intervalId = setInterval(draw, 20);

document.onkeydown = function(event) {
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

    let snakeBody = game.getSnakeBody();

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snakeBody.forEach(element => {
        drawDot(ctx, element.x, element.y);
    });

    game.tick();
}

function drawDot(ctx, x, y) {
    ctx.fillStyle = "green";
    ctx.fillRect(x * 10, y * 10, 10, 10);
}

