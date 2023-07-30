function Game() {
    let x = 0;
    let y = 0;

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    return { getX, getY };
};

module.exports = { Game };
