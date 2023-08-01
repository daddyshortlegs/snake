export function Snake(size, starting = []) {

    let elements = starting;
    let collided = false;

    function updatePosition(x, y) {
        let found = elements.find(element => element.x === x && element.y === y);
        if (found) {
            collided = true;
        } else {
            collided = false;
        }

        elements.push({x: x, y: y});


        if (elements.length > size) {
            elements = elements.slice(1);
        }
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

    function collision() {
        return collided;
    }

    return {updatePosition, getElements, grow, getX, getY, collision};
}
