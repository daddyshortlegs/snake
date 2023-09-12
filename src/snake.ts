import { Coordinate } from "./coordinate";

export function Snake(size: number, maxX: number = 3, maxY: number = 3) {
    let elements: any[] = [];
    let collided: boolean = false;
    let snakePosition: Coordinate = {x: 0, y: 0};
    let direction: Coordinate = {x: 1, y: 0};

    function resetPosition() {
        updatePosition({x: 0, y: 0});
    }

    function move() {
        snakePosition.x += direction.x;
        if (snakePosition.x > maxX) {
            snakePosition.x = 0;
        } else if (snakePosition.x < 0) {
            snakePosition.x = maxX;
        }

        snakePosition.y += direction.y;
        if (snakePosition.y > maxY) {
            snakePosition.y = 0;
        } else if (snakePosition.y < 0) {
            snakePosition.y = maxY;
        }

        updatePosition(snakePosition);
    }

    function changeDirection(coordinate: Coordinate) {
        direction = {...coordinate};
    }

    function updatePosition(coordinate: Coordinate) {
        collided = checkCollision(coordinate);
        elements.push({...coordinate});

        if (elements.length > size) {
            elements = elements.slice(1);
        }
    }

    function checkCollision(coordinate: Coordinate): boolean {
        return !!elements.find((element: Coordinate) => element.x === coordinate.x && element.y === coordinate.y);
    }

    function getElements() {
        return elements;
    }

    function grow() {
        size += 1;
    }

    function getX(): number {
        return elements[elements.length - 1].x;
    }

    function getY(): number {
        return elements[elements.length - 1].y;
    }

    function hasCollided(): boolean {
        return collided;
    }

    return {resetPosition, move, changeDirection, updatePosition, getElements, grow, getX, getY, hasCollided};
}
