



//Variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var lives;
var words = ["biology", "chemistry", "physics"];
var hints = ["study of life", "study of matter", "study of the nature of matter"];
var newWord = 0;
var wins = 0;
var blankSpaces = "";
var currentWord = words[Math.floor(Math.random() * words.length)];
var wordLength = currentWord.length;
var currentHint="";
//initiates setup function
window.onload = function() {setup()};

//setup
function setup() {
	//selects random word from words array


	//Displays possible words blank spaces
	for (i = 0; i < wordLength; i++) {
    	var x = currentWord.charAt(i);

    if (x === " " || x === "/'") {
      blankSpaces += x;
    } else {
      blankSpaces += "_ ";
    }
   }
//shows hint based on word
	if (currentWord === words[0]) {
		currentHint += hints[0];
	}
	else if (currentWord === words[1]) {
		currentHint += hints[1];
	}
	else if (currentWord === words[2]) {
		currentHint += hints[2];
	}

    document.getElementById("hint").innerHTML =  "Hint: " + currentHint;

	document.getElementById("blankspaces").innerHTML =  "Current word: " + blankSpaces;
	
	document.onkeyup =function(event){
	var userGuess = event.key;
	if (userGuess )

}
}



















