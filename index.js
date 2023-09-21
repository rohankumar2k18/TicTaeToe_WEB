const cells = document.querySelectorAll(".cells");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s Turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(!(options[cellIndex] == "" || !running)){
        return;
    }
    else{

    }
    updateCell(this, cellIndex);
    
    checkWinner();
    changePlayer();
}

function updateCell(cell, index){
    if(running){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    }
    
}

function  changePlayer(){
    if(running){
    currentPlayer = (currentPlayer=="X")?"O":"X";
    statusText.textContent = `${currentPlayer}'s Turn`
    }
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0;i<winConditions.length;i++){
        let cond = winConditions[i];
        let pos0 = options[cond[0]];
        let pos1 = options[cond[1]];
        let pos2 = options[cond[2]];

        if(pos1 =="" || pos2=="" || pos2==""){
            continue;
        }

        else if(pos0 == pos1 && pos1 == pos2){
            roundWon = true;
            break;
            
        }
        
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} Wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Game Draw!`;
        running = false;
    }

}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s Turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

