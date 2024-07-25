let userScore = 0;
let compScore = 0;

function compHand() {
    let randChoice = Math.random()
    if (randChoice <= 0.33) {
        return "rock"
    }
    else if (randChoice > 0.33 && randChoice <= 0.66) {
        return "paper"
    }
    else if (randChoice > 0.66 && randChoice <= 1) {
        return "scissors"
    } 
}

function gameLogic(user, comp) {
    if (user == 'rock') {
        return (comp == 'paper') ? 'comp' : (comp == 'scissors') ? 'user' : 'draw'
    }
    else if (user == 'paper') {
        return (comp == 'rock') ? 'user' : (comp == 'scissors') ? 'comp' : 'draw'
    }
    else if (user == 'scissors') {
        return (comp == 'paper') ? 'user' : (comp == 'rock') ? 'comp' : 'draw'
    }
}

function playRound() {
    let userChoice = prompt("Play Rock, Paper Or Scissors!").toLowerCase();
    let compChoice = compHand()
    let roundOutcome = gameLogic(userChoice, compChoice)
    if (roundOutcome == 'user') {
        userScore++;
    }
    else if (roundOutcome == 'comp') {
        compScore++;
    }
}

playRound();
playRound();
playRound();
playRound();
playRound();

(userScore >= compScore) ? console.log(`You Won With ${userScore} Points Over ${compScore}`) : console.log(`You Lost With ${userScore} Points Behind ${compScore}`)