import {Snake} from "./snake";
import { Coordinate } from "./coordinate";

export function Game(maxX: number = 3, maxY: number = 3, init: boolean = true) {
    let ratPosition: Coordinate = {x: 0, y: 0};

    let snake = Snake(2, [], maxX, maxY);
    if (init === true) {
        randomRat();
    }

    snake.resetPosition();

    function tick() {
        snake.move();

        if (eatenRat()) {
            grow();
            randomRat();
        }
    }

    function eatenRat(): boolean {
        const ratX = ratPosition.x;
        const ratY = ratPosition.y;
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
        return ratPosition;
    }

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function isGameOver(): boolean {
        return snake.hasCollided();
    }

    return { tick, down, up, left, right, getX, getY, grow, getSnake, getSnakeBody, placeRat, getRat, isGameOver, eatenRat };
}

