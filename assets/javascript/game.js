window.onload = function() {

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedLetters = [];
var words = ["biology", "chemistry", "physics"];
var wins = 0;
var losses = 0
var userGuess = event.key;
var lives = 9;

var resetGame = function() {
	answerArray = [];
	guessedLetters = [];
	lives = 9;
	newWord = words[Math.floor(Math.random() * words.length)];
	remainingLetters = newWord.length;
	showBlanks();
	document.getElementById("blanks").innerHTML = 'Current Word: ' + answerArray.join(' ');
	document.getElementById('lives').innerHTML = 'Lives: ' + lives;
	document.getElementById("guessed").innerHTML = 'Already Guessed: ';
};

var showBlanks = function () {
	for (var i =0; i < newWord.length; i++){
	answerArray[i] = '_';	
	}
return answerArray
}


//Game Play
var guessWord = function () {
var userGuess = event.key;

		if (alphabet.includes(userGuess) === false){
			return;
		}
		else if (guessedLetters.includes(userGuess) === true){
			return;
		}
		else if (answerArray.includes(userGuess) === true){
			return;
		}
		
		for (var j =0; j < newWord.length; j++) {
			if (newWord[j]=== userGuess) {
				answerArray[j] = userGuess;
				remainingLetters--;
				console.log(remainingLetters)
				
		}			
		}
		if (newWord.indexOf(userGuess) === -1) { 
				guessedLetters.push(userGuess);
				lives--;	
		}
		if (remainingLetters === 0){
			win();
		}
		if (lives === 0) {
			lose();
		}

	document.getElementById("blanks").innerHTML = 'Current Word: ' + answerArray.join(' ');
	document.getElementById("guessed").innerHTML = 'Already Guessed: ' + guessedLetters.join(' ');
	document.getElementById('lives').innerHTML = 'Lives: ' + lives;
	}

function win () {wins++; alert('You win!'); resetGame();}
function lose () {losses++; alert('game over'); resetGame();}



document.onkeyup = function(event) {
	var userGuess = event.key;
	guessWord();
}


resetGame();

}


