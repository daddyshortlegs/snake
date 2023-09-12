import {Game} from "./game";

const KEY = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Space: 32
};


const ARENA_WIDTH = 99;
const ARENA_HEIGHT = 59;
const REFRESH_INTERVAL = 100;
const PIXEL_SIZE = 10;


let game = Game(ARENA_WIDTH, ARENA_HEIGHT);

let ratSound = new Audio("resources/rat.mp3");
ratSound.loop = false;
let snakeSound = new Audio("resources/snake.mp3");
snakeSound.loop = false;
// snakeSound.play();
const intervalId = setInterval(draw, REFRESH_INTERVAL);

let key: number;

document.onkeydown = function (event) {
    key = event.keyCode;
};

function draw() {
    switch (key) {
        case KEY.Up:
            game.up();
            break;
        case KEY.Down:
            game.down();
            break;
        case KEY.Left:
            game.left();
            break;
        case KEY.Right:
            game.right();
            break;
        case KEY.Space:
            game.grow();
            break;
    }

    key = null;
    const ctx = clearCanvas();
    drawRat(ctx);
    drawSnake(ctx);

    game.tick();
    if (game.eatenRat()) {
        // ratSound.play();
    }

    if (game.isGameOver()) {
        clearInterval(intervalId);
        displayGameOver();
        // ratSound.play();
    }
}

function clearCanvas() {
    const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return ctx;
}

function drawRat(ctx: CanvasRenderingContext2D) {
    const rat = game.getRat();
    drawDot(ctx, rat.x, rat.y, "rgb(132,77,14)");
}

function drawSnake(ctx: CanvasRenderingContext2D) {
    game.getSnakeBody().forEach((element: { x: number; y: number; }) => {
        drawDot(ctx, element.x, element.y);
    });
}

function drawDot(ctx: CanvasRenderingContext2D, x: number, y: number, fillStyle = "green") {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
}

function displayGameOver() {
    const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over, rats!", canvas.width / 2, canvas.height / 2);
}

draw();
