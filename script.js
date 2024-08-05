function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return 'rock';
    } else if (randomNumber == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    userChoice = prompt("What do you like to choose(Rock, Paper or Scissors): ");
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        } else if (computerChoice == 'scissors') {
            console.log("You Win! Rock beats Scissors.");
            humanScore += 1;
        } else {
            console.log("Its a Draw!");
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log("You Win! Paper Beats Rock.");
            humanScore += 1;
        } else if (computerChoice == 'scissors') {
            console.log("You Lose! Scissors beat Paper.");
            computerScore += 1;
        } else {
            console.log("Its a Draw!");
        }
    } else {
        if (computerChoice == 'rock') {
            console.log("You Lose! Rock beats scissors");
            computerScore += 1;
        } else if (computerChoice == 'paper') {
            console.log("You win! Scissors beat Paper");
            humanScore += 1;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`your score : ${humanScore}
Computer Score : ${computerScore}`);
