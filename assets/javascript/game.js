
var totalWins = 0;
var totalLosses = 0;
var triesRemaining = 10;
var currentGuesses = "";
var userPress;
var computerLetter;

function initializeGame() {
    triesRemaining = 10;
    currentGuesses = [];
    userPress;
    computerLetter;
    updateWins();
    updateLosses();
    updateTries();
    updateGuesses();
    generateLetter();
    console.log(computerLetter)
  }

function updateWins() {
      document.querySelector("#wins").innerHTML = "Wins: " + totalWins;
    }

function updateLosses() {
      document.querySelector("#losses").innerHTML = "Losses: " + totalLosses;
    }
function updateTries() {
      document.querySelector("#tries").innerHTML = "Guesses Left: " + triesRemaining;
    }
function updateGuesses() {
      document.querySelector("#guesses").innerHTML = "Your Guesses: " + currentGuesses;
    }

function generateLetter () {
    computerLetter = String.fromCharCode(97+Math.floor(Math.random() * 26));
}
initializeGame();
document.onkeyup = function(event) {
    userPress = event.key
if (triesRemaining > 1) {
      if (userPress == computerLetter) {
          alert("You guessed correctly!")
          totalWins++
          updateWins();
          initializeGame();
      }
      else if (userPress != computerLetter) {
          triesRemaining--
          currentGuesses.push(userPress)
          updateTries();
          updateGuesses();
      }  
    }
else  {
        alert("The letter was " + computerLetter)
        totalLosses++;
        updateLosses();
        initializeGame();
    }   
}


