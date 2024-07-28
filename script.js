let userScore = 0;
let compScore = 0;

let userBox = document.querySelector('.uscore');
let compBox = document.querySelector('.cscore');

let playBox = document.querySelector('.playBox');

let endBox = document.querySelector('.gameEnd');
endBox.style.display = "none";

function display() {
    userBox.textContent = `Your Score: ${userScore}`;
    compBox.textContent = `AI Score: ${compScore}`;
}

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

function playRound(userChoice) {
    let compChoice = compHand()
    let roundOutcome = gameLogic(userChoice, compChoice)
    if (roundOutcome == 'user') {
        userScore++;
    }
    else if (roundOutcome == 'comp') {
        compScore++;
    }

    display();

    if (userScore === 5 || compScore === 5) {
        playBox.style.display = 'none';
        endBox.style.display = 'flex';

        let textBox = document.querySelector('.textBox');
        textBox.textContent = (userScore >= compScore) ? `You Won With ${userScore} Points Over ${compScore}` : `You Lost With ${userScore} Points Behind ${compScore}`;

        let playAgain = document.querySelector('.gameStart');
        playAgain.onclick = resetGame;
    }
}

function resetGame() {
    userScore = 0;
    compScore = 0;
    display();
    playBox.style.display = 'flex';
    endBox.style.display = 'none';
}

display();

let btnList = document.querySelectorAll('.playBtn');
btnList.forEach(btn => btn.addEventListener('click', e => {
    playRound(e.target.textContent.toLowerCase());
}))


