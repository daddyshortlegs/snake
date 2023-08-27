import {Snake} from "./snake";

export function Game(maxX = 3, maxY = 3, init = true) {
    let x: number = 0;
    let y: number = 0;

    let xDirection: number = 1;
    let yDirection: number = 0;

    let ratX: number;
    let ratY: number;

    let snake = Snake(2);
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

        if (eatenRat()) {
            grow();
            randomRat();
        }
    }

    function eatenRat(): boolean {
        return x === ratX && y === ratY;
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

    function getX(): number {
        return x;
    }

    function getY(): number {
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

    function placeRat(x: number, y: number) {
        ratX = x;
        ratY = y;
    }

    function getRat() {
        return {ratX, ratY};
    }

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function isGameOver(): boolean {
        return snake.hasCollided();
    }

    return { tick, down, up, left, right, getX, getY, grow, getSnake, getSnakeBody, placeRat, getRat, isGameOver, eatenRat };
}
