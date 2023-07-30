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

    return {updatePosition, getElements};
}

module.exports = { Snake };
