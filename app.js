const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

/* generates random computer choice and displays this choice */
function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    } 
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

/* result is determined and displayed */
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a Draw!'
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win!'
    }
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You Lose!'
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lose!'
    }
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You Win!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You Lose!'
    }
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You Win!'
    }
    resultDisplay.innerHTML = result
}