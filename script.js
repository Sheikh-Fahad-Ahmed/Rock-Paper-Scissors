function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        return 'Rock';
    } else if (randomNumber == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    userChoice = prompt("What do you like to choose(Rock, Paper or Scissors): ");
    return userChoice;
}

let humanScore = 0;
let computerScore =0 ;
