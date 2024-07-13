const targetWord = "example"; // You can make this dynamic or random
let timeLeft = 60;

document.getElementById('guessInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitGuess();
    }
});

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timer);
        document.getElementById('result').innerHTML = "Time's up! The word was " + targetWord;
        document.getElementById('guessInput').disabled = true;
    } else {
        document.getElementById('time').innerHTML = timeLeft;
        timeLeft--;
    }
}

const timer = setInterval(countdown, 1000);

function submitGuess() {
    const guess = document.getElementById('guessInput').value;
    if (guess.toLowerCase() === targetWord) {
        document.getElementById('result').innerHTML = "Congratulations! You've guessed the word!";
        clearInterval(timer);
        document.getElementById('guessInput').disabled = true;
    } else {
        document.getElementById('result').innerHTML = "Try again!";
    }
}
