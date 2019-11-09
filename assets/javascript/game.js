window.alert("I want to Play a Game");
window.alert("Guess what Letter I am Thinking Of");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
  var userGuess = event.key;

  console.log("Computer Guess: " + computerGuess)
  console.log("User Guess: " + userGuess )

  if (computerChoices.indexOf(userGuess) > -1) {
    if (userGuess === computerGuess) {
      wins++;
      numGuesses = 9;
      guessChoices = [];
      window.alert ("Winner!")
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    } else if (guessChoices.indexOf(userGuess) >= 0 ) {
      window.alert ("You can't repeat letters, try again!")
    } else if (userGuess != computerGuess) {
      numGuesses--;
      guessChoices.push(userGuess);
    }

    if (numGuesses === 0) {
       numGuesses = 9;
       losses++;
       guessChoices = [];
       computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    }

   var html =
   "<h1>Psychic Game</h1>" +
   "<h2>Wins: " + wins + "</h2>" +
   "<h2>Losses: " + losses + "</h2>" +
   "<h2>Guesses Left: " + numGuesses + "</h2>" +
   "<h2>Guesses so Far: " + guessChoices.join(", ") + "</h2>";

   document.querySelector("#game").innerHTML = html;

   }
};