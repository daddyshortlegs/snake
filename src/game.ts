import {Snake} from "./snake";
import { Coordinate } from "./coordinate";

export function Rat(maxX: number = 3, maxY: number = 3) {
    let ratPosition: Coordinate = {x: 0, y: 0};

    function placeRat(position: Coordinate) {
        ratPosition = position;
    }

    function randomRat() {
        placeRat({
            x: getRandomInt(maxX),
            y: getRandomInt(maxY)
        });
    }

    function getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    function getRatPosition(): Coordinate {
        return ratPosition;
    }

    return { placeRat, randomRat, getRatPosition };
}

export function Game(maxX: number = 3, maxY: number = 3, init: boolean = true) {
    let snake = Snake(2, [], maxX, maxY);
    let rat = Rat(maxX, maxY);

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

    function randomRat() {
        rat.randomRat();
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

