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

// function getHumanChoice() {
//     userChoice = prompt("What do you like to choose(Rock, Paper or Scissors): ");
//     return userChoice;
// }

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

// function PlayGame() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`Round ${i}: `);
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if (humanScore > computerScore) {
//         console.log(`You Win The Game!!!
// your score: ${humanScore}
// computer score: ${computerScore}
// Thank You For Playing!`)
//     } else {
//         console.log(`You Lose! Better Luck Next Time!
// your score: ${humanScore}
// computer score: ${computerScore}
// Thank You For Playing!`);
//     }

// }

let humanScore = 0;
let computerScore = 0;


let btn = document.querySelector("#buttons");

function getHumanChoice() {
    let computerChoice = getComputerChoice();
    let result;

    btn.addEventListener('click', (event) => {
        let target = event.target;

        switch (target.id) {
            case 'rock':
                result = playRound('rock', computerChoice);
                break;
            case 'paper':
                result = playRound('paper', computerChoice);
                break;
            case 'scissors':
                result = playRound('scissors', computerChoice);
                break;
        }
    });
}

function getScore(result){
    if (result == 'Win') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
    return humanScore,computerScore
}

function showScore(humanScore,computerScore){
    
}

