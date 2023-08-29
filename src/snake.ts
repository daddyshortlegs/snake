import { Coordinate } from "./coordinate";

export function Snake(size: number, starting: any = []) {

    let elements = starting;
    let collided: boolean = false;

    function updatePosition(coordinate: Coordinate) {
        collided = checkCollision(coordinate.x, coordinate.y);
        elements.push({x: coordinate.x, y: coordinate.y});

        if (elements.length > size) {
            elements = elements.slice(1);
        }
    }

    function checkCollision(x: number, y: number): boolean {
        return !!elements.find((element: { x: number; y: number; }) => element.x === x && element.y === y);
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

    return {updatePosition, getElements, grow, getX, getY, hasCollided};
}
