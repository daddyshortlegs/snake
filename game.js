import {Snake} from "./snake.js";

export function Game(maxX = 3, maxY = 3, init = true) {
    let x = 0;
    let y = 0;

    let xDirection = 1;
    let yDirection = 0;

    let ratX;
    let ratY;

    let snake = Snake(1);
    if (init === true) {
        randomRat();
    }

    snake.updatePosition(x, y);

    function tick() {
        x += xDirection;
        if (x > maxX) {
            x = 0;
        } else if (x < 0) {
            x = maxX;
        }

        y += yDirection;
        if (y > maxY) {
            y = 0;
        } else if (y < 0) {
            y = maxY;
        }

        snake.updatePosition(x, y);

        if (x === ratX && y === ratY) {
            grow();
            randomRat();
        }
    }

    function down() {
        xDirection = 0;
        yDirection = 1;
    }

    function up() {
        xDirection = 0;
        yDirection = -1;
    }

    function left() {
        xDirection = -1;
        yDirection = 0;
    }

    function right() {
        xDirection = 1;
        yDirection = 0;
    }

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    function grow() {
        snake.grow();
    }

    function getSnake() {
        return snake;
    }

    function getSnakeBody() {
        return snake.getElements();
    }

    function randomRat() {
        placeRat(getRandomInt(maxX), getRandomInt(maxY));
    }

    function placeRat(x, y) {
        ratX = x;
        ratY = y;
    }

    function getRat() {
        return {ratX, ratY};
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function isGameOver() {
        return snake.hasCollided();
    }

    return { tick, down, up, left, right, getX, getY, grow, getSnake, getSnakeBody, placeRat, getRat, isGameOver };
}

