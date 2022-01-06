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


function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Tie! Play again.';        
    }else if(playerSelection === 'rock') {
        if(computerSelection === 'paper'){
            return 'You lose! Paper beats Rock.';
        }else {
            return 'You win! Rock beats Scissors.';
        }
    } else if( playerSelection === 'paper') {
        if(computerSelection === 'rock'){
            return 'You win! Paper beats Rock.';
        }else {
            return 'You lose! Scissors beats Paper.';
        }
    } else {
        if(computerSelection === 'rock'){
            return 'You lose! Rock beats Scissors.';
        }else {
            return 'You win! Scissors beats Paper.';
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = '';
    for (let index = 0; index < 5; index++) {
        computerSelection = computerPlay();
        playerSelection = prompt('What is your selection (Rock, Paper or Scissors)?', 'Rock');
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes('win')) {
            playerScore++;
        }else if(roundResult.includes('lose')) {
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log(`You win with the score ${playerScore} against ${computerScore}!`);
    }else if(playerScore < computerScore) {
        console.log(`You lose with the score ${playerScore} against ${computerScore}!`);
    }else {
        console.log(`Tie with the score ${playerScore} against ${computerScore}!`);
    }
}
game();