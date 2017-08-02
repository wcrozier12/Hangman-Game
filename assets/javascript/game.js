



//Variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var lives;
var words = ["biology", "chemistry", "physics"];
var hints = ["study of life", "study of matter", "study of the nature of matter"];
var newWord = 0;
var wins = 0;
var randomNumber = Math.floor(Math.random() * words.length);
var currentWord = words[randomNumber];
var currentHint= hints[randomNumber];
var wordLength = currentWord.length;
var userGuess =  "s";
var blanks = "";
var replace =[]; //contains locations of letters that need to be replaced

function blankSpaces (currentWord) {
	for (var i in currentWord) {
		blanks += "_";
	}
	return blanks;
}


function replaceAt(match, userInput) {
	return blanks.substr(0, match) + userInput + blanks.substr(match+1, blanks.length);
}

function getReplacePositions(currentWord, userInput){
	var searchIndex = currentWord.indexOf(userGuess);
	while (searchIndex != -1) {
		replace.push(searchIndex);
		searchIndex = currentWord.indexOf(userGuess, searchIndex + 1);
	}
}
function replaceLetter(){
	var searchIndex = -1;
	var searchIndex = currentWord.indexOf(userGuess);
		while (searchIndex >= 0) {
			var replaced = replaceAt(searchIndex, userGuess);	
			searchIndex = currentWord.indexOf(userGuess, searchIndex + 1);
		}	
		return replaced;
	}	
	


blankSpaces(currentWord);
console.log(replaceLetter());

console.log(replace);























