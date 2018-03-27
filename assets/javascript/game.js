var gaCities = ["Decatur", "Sherwood Forest", "Johns Creek", "Alparetta", "Buckhead Forest", "Atlanta", "Midtown", "Suwanee", "Roswell", "Peachtree Park"];

// choose words randomly for word array
var theWord = gaCities[Math.floor(Math.random() * gaCities.length)];
var wins = 0;
var guesses = 7;
var alreadyGuessed = [];

/*==================Functions ========================*/

function startGame(){
	document.onkeyup = function(e){
		for (i = 0; i < gaCities.length; i ++){
    	
    	$("#theWord").append("Guess ths word: " + theWord);
    	break;
    }
    $("#theWord").append(theWord);
    $("#wins").append(wins);
    $("#guesses").append(guesses);
	}
};

startGame();

