function $(x) {return document.querySelector(x);}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var snakeBox = $("#snake-box");
const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const speed = 50;

function findColor() {
    return color[getRandomInt(7)];
}
function snakePart() {
    this.xPos = 1,
    this.yPos = 0,
    this.color = findColor()
}

var snake = [new snakePart()];

function makeNewPart() {
    snake.append(new snakePart());
}

var xChange = 1, yChange = 0;

function changeDir(e) {
    var keyName = e.key;
    switch (keyName) {
        case "w":
            if (yChange!=1){xChange = 0, yChange = -1;}
            break;
        case "a":
            if (xChange!=1){xChange = -1, yChange = 0;}
            break;
        case "s":
            if (yChange!=-1){xChange = 0, yChange = 1;}
            break;
        case "d":
            if (xChange!=-1){xChange = 1, yChange = 0;}
            break;
        default:
            break;
    }
}
document.addEventListener("keypress", changeDir);


function updateSnake(snek) {
    var ourSnake = snake[snek];
    var node = document.createElement("DIV");
    node.className = "snake";
    node.style.backgroundColor = ourSnake.color;
    node.style.top = ourSnake.yPos*20+"px";
    node.style.left = ourSnake.xPos*20+"px";
    snakeBox.appendChild(node);
}
function snakeMove(snek) {
    var x = snake[snek].xPos;
    var y = snake[snek].yPos;
    x += xChange;
    y += yChange;
    switch (x) {
        case -1:
            x = 24;
            break;
        case 25:
            x = 0;
            break;
        default:
            break;
    }
    switch (y) {
        case -1:
            y = 24;
            break;
        case 25:
            y = 0;
            break;
        default:
            break;
    }
    return [x,y];
}

function update() {
    snakeBox.innerHTML = "";
    snake[0].xPos = snakeMove(0)[0];
    snake[0].yPos = snakeMove(0)[1];
    updateSnake(i);
    for (let i = 1; i < snake.length; i++) {
        snake[i].xPos = snakeMove(i)[0];
        snake[i].yPos = snakeMove(i)[1];
        updateSnake(i);
    }
    return 0;
    setTimeout(update, speed);
}
update();
