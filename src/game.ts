import {Snake} from "./snake";

interface Coordinate {
    x: number;
    y: number;
}

export function Game(maxX: number = 3, maxY: number = 3, init: boolean = true) {
    let snakePosition: Coordinate = {x: 0, y: 0};

    let xDirection: number = 1;
    let yDirection: number = 0;

    let ratPosition: Coordinate = {x: 0, y: 0};

    let snake = Snake(2);
    if (init === true) {
        randomRat();
    }

    snake.updatePosition(snakePosition.x, snakePosition.y);

    function tick() {
        snakePosition.x += xDirection;
        if (snakePosition.x > maxX) {
            snakePosition.x = 0;
        } else if (snakePosition.x < 0) {
            snakePosition.x = maxX;
        }

        snakePosition.y += yDirection;
        if (snakePosition.y > maxY) {
            snakePosition.y = 0;
        } else if (snakePosition.y < 0) {
            snakePosition.y = maxY;
        }

        snake.updatePosition(snakePosition.x, snakePosition.y);

        if (eatenRat()) {
            grow();
            randomRat();
        }
    }

    function eatenRat(): boolean {
        const ratX = ratPosition.x;
        const ratY = ratPosition.y;
        return snakePosition.x === ratX && snakePosition.y === ratY;
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
        return snakePosition.x;
    }

    function getY(): number {
        return snakePosition.y;
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
        placeRat({
            x: getRandomInt(maxX),
            y: getRandomInt(maxY)
        });
    }

    function placeRat(position: Coordinate) {
        ratPosition = position;
    }

    function getRat() {
        let ratX = ratPosition.x;
        let ratY = ratPosition.y;
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

