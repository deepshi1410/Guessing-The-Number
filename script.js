'use-strict';
// adding event listeners to check and again button
document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', resetGame);
const numberToGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let message
    // document.querySelector('.number').textContent = numberToGuess


// code to handle different cases when user clicks on check button
function check() {
    const guess = Number(document.querySelector('.guess').value);
    let flagToCheckDifference = true
    const difference = Math.abs(guess - numberToGuess);
    if (!guess) {
        message = 'No Input from User!'
        flagToCheckDifference = false
    } else if (guess === numberToGuess) {
        message = 'Correct Answer. Yippeee!! :)'
        document.querySelector('body').style.background = 'green'
        document.querySelector('.number').style.width = '22rem'
        document.querySelector('.number').textContent = numberToGuess
        flagToCheckDifference = false
    } else if (guess > 20) {
        message = 'Please enter a number between 1 and 20'
        flagToCheckDifference = false
    }
    if (flagToCheckDifference == true) {
        switch (true) {
            case (difference > 0 && difference <= 5):
                message = 'Close to the correct guess'
                break;
            case difference > 5 && difference <= 10:
                message = 'A bit higher from correct answer'
                break;
            case difference > 10 && difference <= 15:
                message = 'Too high'
                break;
            case difference > 15:
                message = 'So far from correct number'
                break;
        }
        score -= 1
        if (score <= 0) {
            score = 0
            message = 'Ahh! You lost the game :('
            document.querySelector('body').style.background = 'crimson'
        } else {
            document.querySelector('.score').textContent = score;
        }
    }
    document.querySelector('.message').textContent = message
}


// code to implement again button functionality to restart the game
function resetGame() {
    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore
    }
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start Guessing...'
        // document.querySelector('.highscore').textContent = score
    document.querySelector('.score').textContent = 20
    document.querySelector('body').style.background = 'linear-gradient(to top left, #5388bd, #741e8a)'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
}