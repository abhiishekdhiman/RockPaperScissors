let userScore = 0;
let cpuScore = 0;

const choices = document.querySelectorAll('.choice');

const getCpuChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

const getWinner = (userChoice, cpuChoice) => {
    if (userChoice === cpuChoice) {
        return 'draw';
    } else if ((userChoice === 'rock' && cpuChoice === 'scissors') || (userChoice === 'paper' && cpuChoice === 'rock') || (userChoice === 'scissors' && cpuChoice === 'paper')) {
        return 'user';
    } else {
        return 'cpu';
    }
}

const updateScore = (winner) => {
    if (winner === 'user') {
        userScore++;
    } else if (winner === 'cpu') {
        cpuScore++;
    }
    showScore();
}

const showScore = () => {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('cpu-score').textContent = cpuScore;
}

const updateMessage = (winner) => {
    if (winner === 'draw') {
        document.getElementById('message').textContent = 'DRAW!';
    } else if (winner === 'user') {
        document.getElementById('message').textContent = 'YOU WIN!';
    } else if (winner === 'cpu') {
        document.getElementById('message').textContent = 'CPU WINS!';
    }
}

const playGame = (userChoice) => {
    // console.log(`${userChoice} was user choice`);
    const cpuChoice = getCpuChoice();
    // console.log(`${cpuChoice} was cpu choice`);
    const winner = getWinner(userChoice, cpuChoice);
    // console.log(winner);
    updateScore(winner);
    updateMessage(winner);
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
     