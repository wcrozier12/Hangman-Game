window.onload = function() {


var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '../Hangman-Game/assets/images/biologyImage.jpeg';

imgArray[1] = new Image();
imgArray[1].src = '../Hangman-Game/assets/images/chemistryImage.jpg';

imgArray[2] = new Image();
imgArray[2].src = '../Hangman-Game/assets/images/physicsImage.jpg';

imgArray[3] = new Image();
imgArray[3].src = '../Hangman-Game/assets/images/enzyme.jpeg';

imgArray[4] = new Image();
imgArray[4].src = '../Hangman-Game/assets/images/photosynthesis.jpg';

imgArray[5] = new Image();
imgArray[5].src = '../Hangman-Game/assets/images/glycolysis.jpg';

imgArray[6] = new Image();
imgArray[6].src = '../Hangman-Game/assets/images/mitosis.jpg';

imgArray[7] = new Image();
imgArray[7].src = '../Hangman-Game/assets/images/solvent.jpg';

imgArray[8] = new Image();
imgArray[8].src = '../Hangman-Game/assets/images/nucleus.jpg';

imgArray[9] = new Image();
imgArray[9].src = '../Hangman-Game/assets/images/ohm.jpg';

imgArray[10] = new Image();
imgArray[10].src = '../Hangman-Game/assets/images/photon.jpg';

imgArray[11] = new Image();
imgArray[11].src = '../Hangman-Game/assets/images/gluconeogenesis.jpg';

imgArray[12] = new Image();
imgArray[12].src = '../Hangman-Game/assets/images/lipid.png';

imgArray[13] = new Image();
imgArray[13].src = '../Hangman-Game/assets/images/virus.jpg';

imgArray[14] = new Image();
imgArray[14].src = '../Hangman-Game/assets/images/atp.png';

imgArray[15] = new Image();
imgArray[15].src = '../Hangman-Game/assets/images/evolution.jpg';

var audio = new Audio('../Hangman-Game/assets/audio/blindedMeWithScience.mp3');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedLetters = [];
var words = ["biology", "chemistry", "physics", "enzyme", "photosynthesis", "glycolysis", "mitosis", "solvent", 'nucleus', "ohm", "photon", 'gluconeogenesis', 'lipid', 'virus', 'atp', 'evolution'];
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
	imgPosition = words.indexOf(newWord)
	showBlanks();
	getImg = imgArray[imgPosition].src;
	document.getElementById("blanks").innerHTML = 'Current Word: ' + answerArray.join(' ');
	document.getElementById('lives').innerHTML = 'Guesses Remaining ' + lives;
	document.getElementById("guessed").innerHTML = 'Letters Already Guessed: ';
};

var showBlanks = function () {
	for (var i =0; i < newWord.length; i++){
	answerArray[i] = '_';	
	}
return answerArray
}

function win () {wins++; document.getElementById('win').innerHTML = 'Wins: ' + wins; document.getElementById('winimage').src = getImg; resetGame();} 
function lose () {losses++; resetGame(); document.getElementById('loss').innerHTML = 'Losses: ' + losses;}





//Game Play
var guessWord = function () {
var userGuess = event.key;
document.getElementById('winimage').src = "";


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
	document.getElementById("guessed").innerHTML = 'Letters Already Guessed: ' + guessedLetters.join(' ');
	document.getElementById('lives').innerHTML = 'Guesses Remaining ' + lives;
	}


document.onkeyup = function(event) {
	var userGuess = event.key;
	guessWord();
	
}


resetGame();
audio.play();


}




