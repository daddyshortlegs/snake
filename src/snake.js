export function Snake(size, starting = []) {

    let elements = starting;
    let collided = false;

    function updatePosition(x, y) {
        collided = checkCollision(x, y);
        elements.push({x: x, y: y});

        if (elements.length > size) {
            elements = elements.slice(1);
        }
    }

    function checkCollision(x, y) {
        return !!elements.find(element => element.x === x && element.y === y);
    }

    function getElements() {
        return elements;
    }

    function grow() {
        size += 1;
    }

    function getX() {
        return elements[0].x;
    }

    function getY() {
        return elements[0].y;
    }

    function hasCollided() {
        return collided;
    }

    return {updatePosition, getElements, grow, getX, getY, hasCollided};
}
