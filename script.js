let randomNumber = Math.floor(Math.random()) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
/*Iteration 3 : Identify and correct the error with the assistance of the console*/
const lowOrHi = document.querySelector("lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;
function checkGuess() {
  /*Iteration 5 : Identify and correct the error */
  const userGuess === Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";
  /*Iteration 6 : Identify and correct the error  */
  if (userGuess = randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
/* Iteration 1: Identify and correct the error in the function header */
guessSubmit.addeventListener("click", checkGuess);
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  /* Iteration 2: Identify and correct the error within the function */
  resetButton.addeventListener("click", resetGame);
}
function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  /*Iteration 4: identify and correct the  error */
  randomNumber = Math.floor(Math.random()) + 1;
  /*Iteration 6 : Identify and correct the error with */
