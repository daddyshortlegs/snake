function Snake(size) {

    let elements = [];

    function updatePosition(x, y) {
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

    return {updatePosition, getElements, grow, getX, getY};
}

module.exports = { Snake };
