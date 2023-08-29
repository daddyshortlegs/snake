import { Snake } from "./snake";
import { Rat } from "./rat";
import { Coordinate } from "./coordinate";

export function Game(maxX: number = 3, maxY: number = 3, init: boolean = true) {
    let snake = Snake(2, [], maxX, maxY);
    let rat = Rat(maxX, maxY);

    if (init === true) {
        rat.placeRandomly();
    }

    snake.resetPosition();

    function tick() {
        snake.move();

        if (eatenRat()) {
            grow();
            rat.placeRandomly();
        }
    }

    function eatenRat(): boolean {
        const ratX = rat.getRatPosition().x;
        const ratY = rat.getRatPosition().y;
        return snake.getX() === ratX && snake.getY() === ratY;
    }

    function down() {
        snake.changeDirection({x: 0, y: 1});
    }

    function up() {
        snake.changeDirection({x: 0, y: -1});
    }

    function left() {
        snake.changeDirection({x: -1, y: 0});
    }

    function right() {
        snake.changeDirection({x: 1, y: 0});
    }

    function getX(): number {
        return snake.getX();
    }

    function getY(): number {
        return snake.getY();
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

    function placeRat(position: Coordinate) {
        rat.placeRat(position);
    }

    function getRat() {
        return rat.getRatPosition();
    }

    function isGameOver(): boolean {
        return snake.hasCollided();
    }

    return { tick, down, up, left, right, getX, getY, grow, getSnake, getSnakeBody, placeRat, getRat, isGameOver, eatenRat };
}

