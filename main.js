const scoreShow = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;
let roundResult = '';
let playerSelection = '';
let roundResultStatemant = '';
let computerSelection = computerPlay();
const buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn => {
    btn.addEventListener('click', () => playRound(btn, computerPlay()));
})

function showRoundResult() {
    scoreShow.innerText = `${roundResultStatemant} \n Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

//Create function to return rock, paper or scissors randomly. This will be the computer player
function computerPlay() {
    let computerSelection;
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return computerSelection = 'Rock';
            break;
        case 2:
            return computerSelection = 'Paper';
            break;
        case 3:
            return computerSelection = 'Scissors';
            break;
    }
}

function playRound(btn, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    if(btn.id === 'rockButton'){
        playerSelection = 'Rock';
    }else if(btn.id === 'paperButton'){
        playerSelection = 'Paper';
    }else if(btn.id === 'scissorsButton'){
        playerSelection = 'Scissors'; 
    }
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        roundResultStatemant = 'Tie! Play again.';        
    }else if(playerSelection === 'rock') {
        if(computerSelection === 'paper'){
            computerScore++;
            roundResultStatemant = 'You lose! Paper beats Rock.';
        }else {
            playerScore++;
            roundResultStatemant = 'You win! Rock beats Scissors.';
        }
    } else if( playerSelection === 'paper') {
        if(computerSelection === 'rock'){
            playerScore++;
            roundResultStatemant = 'You win! Paper beats Rock.';
        }else {
            computerScore++;
            roundResultStatemant = 'You lose! Scissors beats Paper.';
        }
    } else {
        if(computerSelection === 'rock'){
            computerScore++;
            roundResultStatemant = 'You lose! Rock beats Scissors.';
        }else {
            playerScore++;
            roundResultStatemant = 'You win! Scissors beats Paper.';
        }
    }
    if(computerScore === 5) {
        scoreShow.innerText = 'You lose, unlucky peasent. \n You can start the new game right away.';
        computerScore = 0;
        playerScore = 0;
    }else if(playerScore === 5) {
        scoreShow.innerText = 'You win, lucky one. \n You can start the new game right away.';
        computerScore = 0;
        playerScore = 0;
    }else{
        showRoundResult()
    }
}

   

