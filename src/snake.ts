import { Coordinate } from "./coordinate";

export function Snake(size: number, starting: any = []) {

    let elements = starting;
    let collided: boolean = false;

    function resetPosition() {
        updatePosition({x: 0, y: 0});
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

    return {resetPosition, updatePosition, getElements, grow, getX, getY, hasCollided};
}
