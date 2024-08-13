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
            showMessage("You lose! Paper beats Rock.");
            getScore('lose');
        } else if (computerChoice == 'scissors') {
            showMessage("You Win! Rock beats Scissors.");
            getScore('win');
        } else {
            console.log("Its a Draw!");
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'rock') {
            showMessage("You Win! Paper Beats Rock.");
            getScore('win');
        } else if (computerChoice == 'scissors') {
            showMessage("You Lose! Scissors beat Paper.");
            getScore('lose');
        } else {
            console.log("Its a Draw!");
        }
    } else {
        if (computerChoice == 'rock') {
            showMessage("You Lose! Rock beats scissors");
            getScore('lose');
        } else if (computerChoice == 'paper') {
            showMessage("You win! Scissors beat Paper");
            getScore('win');
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



btn.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();

    switch (target.id) {
        case 'rock':
            playRound('rock', computerChoice);
            break;
        case 'paper':
            playRound('paper', computerChoice);
            break;
        case 'scissors':
            playRound('scissors', computerChoice);
            break;
    }
});


function getScore(result) {
    if (result == 'win') {
        humanScore += 1;
        showScore(humanScore, computerScore);
    } else if (result == 'lose') {
        computerScore += 1;
        showScore(humanScore, computerScore);
    } else {
        showScore(humanScore, computerScore);
    }
}

function showScore(humanScore, computerScore) {
    let score = document.querySelector("#show-score");
    score.textContent = `${humanScore}  -  ${computerScore}`;
    if (humanScore == 5) {
        alert("You Are The Winner!!");

    } else if (computerScore == 5) {
        alert("Sorry, You lose!");
    }
}

let div = document.querySelector(".moves");
function showMessage(result) {
    const msg = document.createElement("span");
    const hr = document.createElement("hr");
    msg.classList.add("message");
    hr.classList.add("line");
    msg.textContent = result;
    div.appendChild(msg);
    msg.appendChild(hr);
}

showScore(humanScore, computerScore);

