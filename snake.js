const UP_KEY = 38;
const DOWN_KEY = 40;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
let x = 10;
let y = 10;
let key;

const intervalId = setInterval(draw, 10);

document.onkeydown = function(event) {
    key = event.keyCode;
};

function draw() {               
    switch (key) {
        case UP_KEY:
            y -= 1;
            break;
        case DOWN_KEY:
            y += 1;
            break;
        case LEFT_KEY:
            x -= 1;
            break;
        case RIGHT_KEY:
            x += 1;
            break;
    }                           
    
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    ctx.fillRect(x, y, 10, 10);
}
