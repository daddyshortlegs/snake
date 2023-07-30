function Game() {
    let x = 0;
    let y = 0;

    let xDirection = 1;
    let yDirection = 0;

    let snake = [{x: getX(), y: getY()}];

    function tick() {
        x += xDirection;
        if (x > 3) {
            x = 0;
        } else if (x < 0) {
            x = 3;
        }

        y += yDirection;
        if (y > 3) {
            y = 0;
        } else if (y < 0) {
            y = 3;
        }

        snake[0].x = x;
        snake[0].y = y;
    }

    function down() {
        xDirection = 0;
        yDirection = 1;
    }

    function up() {
        xDirection = 0;
        yDirection = -1;
    }

    function left() {
        xDirection = -1;
        yDirection = 0;
    }

    function right() {
        xDirection = 1;
        yDirection = 0;
    }

    function getX() {
        return x;
    }

    function getY() {
        return y;
    }

    function grow() {

    }

    function getSnake() {
        return snake;
    }
    return { tick, down, up, left, right, getX, getY, grow, getSnake };
};

module.exports = { Game };
