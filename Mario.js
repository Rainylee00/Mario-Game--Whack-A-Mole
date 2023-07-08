// //程序来源：
// https://www.youtube.com/watch?v=ej8SatOj3V4
// Whack a Mole Game in Javascript HTML CSS


let currMoleTile;
let currPlantTile; 
let score = 0;
let gameOver = false;
let numcount;
let Timeout = false;


window.onload = function(){
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i =0; i < 9; i++){
        let tile= document.createElement("div");
        tile.id =i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
    setTimeout(TimeoutAlert, 5000);
}


function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if(gameOver) {
        return;
    }

    if (Timeout){
        return;
    } 

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    
    if (currPlantTile && currPlantTile.id == num){
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if(gameOver) {
        return;
    }

    if (Timeout){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = "";    
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num){      
        return;
    }    
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);

}


function selectTile() {
    if(gameOver) {
        return;
    }

    if (Timeout){
        return;
    }
     
    if (this == currMoleTile) {
        if (currMoleTile.id !== numcount){
            score += 10;   
            document.getElementById("score").innerText = "Score: " + score.toString();  
            numcount = currMoleTile.id;
            document.getElementById("timeout").innerHTML = "LEVEL UP!";
            Timeout = true;
        }
        
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }

}
