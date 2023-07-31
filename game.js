import { Snake } from "./snake.js";

export function Game(maxX = 3, maxY = 3) {
    let x = 0;
    let y = 0;

    let xDirection = 1;
    let yDirection = 0;

    let snake = Snake(1);
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

    return { tick, down, up, left, right, getX, getY, grow, getSnake, getSnakeBody };
}
