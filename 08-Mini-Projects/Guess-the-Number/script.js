// Guess the Number Game

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

function makeGuess() {
  if (gameOver) return;
  
  const guess = parseInt(guessInput.value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100";
    message.className = "message";
    return;
  }
  
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  
  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! You won in ${attempts} attempts!`;
    message.className = "message correct";
    gameOver = true;
    resetBtn.classList.remove("hidden");
    guessBtn.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "📈 Too low! Try higher";
    message.className = "message too-low";
  } else {
    message.textContent = "📉 Too high! Try lower";
    message.className = "message too-high";
  }
  
  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  gameOver = false;
  message.textContent = "";
  message.className = "message";
  attemptsDisplay.textContent = "Attempts: 0";
  guessInput.value = "";
  guessBtn.disabled = false;
  resetBtn.classList.add("hidden");
  guessInput.focus();
}

guessBtn.addEventListener("click", makeGuess);
guessInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") makeGuess();
});
resetBtn.addEventListener("click", resetGame);

guessInput.focus();
