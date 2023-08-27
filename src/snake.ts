export function Snake(size: number, starting: any = []) {

    let elements = starting;
    let collided = false;

    function updatePosition(x: number, y: number) {
        collided = checkCollision(x, y);
        elements.push({x: x, y: y});

        if (elements.length > size) {
            elements = elements.slice(1);
        }
    }

    function checkCollision(x: number, y: number) {
        return !!elements.find((element: { x: number; y: number; }) => element.x === x && element.y === y);
    }

    function getElements() {
        return elements;
    }

    function grow() {
        size += 1;
    }

    function getX() {
        return elements[elements.length - 1].x;
    }

    function getY() {
        return elements[elements.length - 1].y;
    }

    function hasCollided() {
        return collided;
    }

    return {updatePosition, getElements, grow, getX, getY, hasCollided};
}
