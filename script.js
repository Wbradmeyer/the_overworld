var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 
    [2,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,3,2],
    [2,1,2,1,0,2,0,2,2,2,1,2,0,0,0,0,0,2,0,2,2,2,2,2,2],
    [2,1,2,2,2,2,0,0,0,2,1,2,0,0,2,2,0,2,0,0,1,1,1,3,2],
    [2,0,2,0,0,2,3,0,0,2,1,2,0,0,0,0,0,0,0,2,2,2,2,0,2],
    [2,0,0,0,0,2,2,2,0,2,2,2,0,2,2,0,0,2,0,2,1,1,1,0,2],
    [2,0,0,2,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,0,2,0,2,0,0,0,2,0,0,0,0,0,2,0,2,2,2,2,2,2,0,2],
    [2,0,0,0,0,2,1,2,0,2,0,2,0,2,0,0,0,2,0,0,0,0,0,3,2],
    [2,0,1,2,1,2,1,2,0,0,0,2,0,0,0,2,2,2,0,2,1,2,2,2,2],
    [2,0,1,2,1,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0,1,1,1,2],
    [2,0,1,1,1,2,1,1,1,0,2,0,0,0,2,0,0,0,0,0,2,1,2,3,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var maxPoints = 610;

var player1 = {
    x: 1,
    y: 1
}

var enemy = {
    x: 11,
    y: 11
}

function displayWorld() {
    var output = ''

    for (i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 3)
                output += "<div class='mushroom'></div>";
            else if (world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] == 1) 
                output += "<div class='coin'></div>";
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "\n</div>"
    }
    // console.log(output)
    document.getElementById('world').innerHTML = output;
}

function displayPlayer1() {
    document.getElementById('player1').style.left = player1.x*20+"px";
    document.getElementById('player1').style.top = player1.y*20+"px";
}

function displayEnemy() {
    document.getElementById('enemy').style.left = enemy.x*20+"px";
    document.getElementById('enemy').style.top = enemy.y*20+"px";
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
    if(score == maxPoints)
        document.getElementById('game_over').innerHTML += 'Game Over';
}

displayWorld();
displayPlayer1();
displayEnemy();
displayScore();

document.onkeydown = function(e){
    switch(e.key) {
        case 'ArrowLeft':
            if (world[player1.y][player1.x-1] != 2) {
                player1.x--
                document.getElementById('player1').style.transform = 'rotateY(0deg)'
            }
            break;
        case 'ArrowRight':
            if (world[player1.y][player1.x+1] != 2) {
                player1.x++
                document.getElementById('player1').style.transform = 'rotateY(180deg)'
            }
            break;
        case 'ArrowUp':
            if (world[player1.y-1][player1.x] != 2) {
                player1.y--
            }
            break;
        case 'ArrowDown':
            if (world[player1.y+1][player1.x] != 2) {
                player1.y++
            }
            break;
    }

    if (world[player1.y][player1.x] == 1){
        world[player1.y][player1.x] = 0;
        score += 10
        displayWorld();
        displayScore();
    } 
    else if (world[player1.y][player1.x] == 3){
        world[player1.y][player1.x] = 0;
        score += 50
        displayWorld();
        displayScore();
    }
    displayPlayer1()
}

// add a random timed move to enemy