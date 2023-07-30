function Game() {
    let x = 0;
    let y = 0;

    function tick() {
        x += 1;
    }

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    return { tick, getX, getY };
};

module.exports = { Game };
