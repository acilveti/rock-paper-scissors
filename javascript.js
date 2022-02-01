let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const buttons = document.querySelectorAll('#buttons .btn');

buttons.forEach(button => button.addEventListener('click',()=>{duelPlay(button.id)}));


function computerPlay (){
    console.log("computerPlay")
    const computer_options = ["rock", "scissor", "paper"];
    const random_selection = computer_options[Math.floor(Math.random() * computer_options.length)];
    return (random_selection);
}
function scoreCount(last_winner){

}
function duelPlay(player_selection){
    const computer_selection = computerPlay ()
    //const player_selection = computerPlay ()    //change later

    console.log("computer selects %s. and person selects %s.",computer_selection, player_selection)
    
    if (player_selection === "rock") {
        if (computer_selection === "rock"){
            winner = undefined 
        }
        if (computer_selection === "scissor"){
            winner = "player" 
        }
        if (computer_selection === "paper"){
            winner = "computer" 
        }
    }
    else if (player_selection === "scissor") {
        if (computer_selection === "rock"){
            winner = "computer" 
        }
        if (computer_selection === "scissor"){
            winner = undefined 
        }
        if (computer_selection === "paper"){
            winner = "player" 
        }
    }

    else if (player_selection === "paper") {
        if (computer_selection === "rock"){
            winner = "player" 
        }
        if (computer_selection === "scissor"){
            winner = "computer" 
        }
        if (computer_selection === "paper"){
            winner = undefined 
        }
    }

    if (winner === "player"){
        playerScore++;
    }
    else if (winner === "computer"){
        compScore++;
    }

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;

    return winner

}






