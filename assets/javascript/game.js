var word = ["atlanta", "doraville", "marietta","mableton","smyrna","kennesaw","gainesville"];

var wins = 0;

var pWins = function (){
  wins++;
}
//Create a variable for the word.

//Number of guesses remaining for the user
//Create a variable for guesses
//Set the variable to 12(optional)
//If the player misses a letter, derease by 1.

var Guessed = function (pressedKey) {
  $( "#letters-guessed" ).append( "<span>" + pressedKey + "<span>" );
}

var pressedLetters = function (event) {
    var usersGuessedLetter = event.key;
    //Function checks to see if the letter is in the word
    //If the letter is in the word, display it on the screen
    //Else - call the decrease guess Function
    // call the letter guessed function

        Guessed(usersGuessedLetter);
}

//Display a dash, for each letter in the word
//Use .length to check the length of the word
//Create a for loop that puts as many dashes as the selected word.
$(document).ready(function() {
  for (var i = 0; i < word.length; i++) {
      console.log("The loop ran");
      $( "#answer-box" ).append( "<span>_<span>" );

  }

})

  