
// variables



// create event for game to start upon key press
function startGame() {
    myGameArea.start();
}

// create a word bank

var wordBank = ["cowboy", "revolver", "wagon", "rattlesnake", "saloon", "sasparilla", "stirup", "railroad"];

console.log(wordBank);

// computer randomly picks a word from the word bank

var targetWord = wordBank[Math.floor(Math.random()*wordBank.length)];

console.log(targetWord);

//I need to create another array that the computer can display as many "_" as necessary for the random words it selects

//something like this maybe

// var targetWord = wordBank[0];
if (targetWord === "cowboy") {
   var missingWord = "_ _ _ _ _ _"
}

if (targetWord === "revolver") {
    var missingWord = "_ _ _ _ _ _ _ _"
 }

 if (targetWord === "wagon") {
    var missingWord = "_ _ _ _ _"
 }
 
 if (targetWord === "rattlesnake") {
     var missingWord = "_ _ _ _ _ _ _ _ _ _ _"
  }

  if (targetWord === "saloon") {
    var missingWord = "_ _ _ _ _ _"
 }
 
 if (targetWord === "sasparilla") {
     var missingWord = "_ _ _ _ _ _ _ _ _ _"
  }

  if (targetWord === "stirup") {
    var missingWord = "_ _ _ _ _ _"
 }
 
 if (targetWord === "railroad") {
     var missingWord = "_ _ _ _ _ _ _ _"
  }

 

console.log(missingWord);

// blank word is presented

// function blank() {
//     document.querySelector('#missing-word').innerHTML = missingWord;
// }

// key press is captured

document.onkeyup = function() {
    var userPick = String.fromCharCode(event.keyCode);
}

// condition: if letter matches current word is displayed on "current word"

// if (userPick === ) {

// }
// condition: if letter doesn't match it is displayed on "letters used"

// create counter for guesses remaining

var remainingGuesses = 15;

// when counter reaches 0, reset word

// create counter for wins

var wins = 0;

// if word is matched add 1 to wins



