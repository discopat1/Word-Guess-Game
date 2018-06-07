
// variables
var startGame
var blankWord


// create event for game to start upon key press
// document.onkeyup = function() {
//     var startGame = String.fromCharCode(event.keyCode);
// }
// console.log(startGame);

// create a word bank

var wordBank = {
    cowboy: ["c", "o", "w", "b", "o", "y"],
    revolver: ["r", "e", "v", "o", "l", "v", "e", "r"],
    wagon: ["w", "a", "g", "o", "n"],
    rattlesnake: ["r", "a", "t", "t", "l", "e", "s", "n", "a", "k", "e"],
    saloon: ["s", "a", "l", "o", "o", "n"],
    sasparilla: ["s", "a", "s", "p", "a", "r", "i", "l", "l", "a"],
    stirup: ["s","t", "i", "r", "u", "p"],
    railroad: ["r", "a", "i", "l", "r", "o", "a", "d"]
}

console.log(wordBank.cowboy);

// computer randomly picks a word from the word bank

// var targetWord = wordBank[Math.floor(Math.random()*wordBank)];


console.log(targetWord);

//I need to create another array that the computer can display as many "_" as necessary for the random words it selects

//something like this maybe


// function blank() {
//     document.querySelector('#missing-word').innerHTML = blankWord;


// if (targetWord === "cowboy") {
//    blankWord = "_ _ _ _ _ _"
// }

// if (targetWord === "revolver") {
//     blankWord = "_ _ _ _ _ _ _ _"
//  }

//  if (targetWord === "wagon") {
//     blankWord = "_ _ _ _ _"
//  }
 
//  if (targetWord === "rattlesnake") {
//     blankWord = "_ _ _ _ _ _ _ _ _ _ _"
//   }

//   if (targetWord === "saloon") {
//     blankWord = "_ _ _ _ _ _"
//  }
 
//  if (targetWord === "sasparilla") {
//     blankWord = "_ _ _ _ _ _ _ _ _ _"
//   }

//   if (targetWord === "stirup") {
//     blankWord = "_ _ _ _ _ _"
//  }
 
//  if (targetWord === "railroad") {
//     blankWord = "_ _ _ _ _ _ _ _"
//   }
  
// }
  

  
//dostuff();
// console.log(blankWord);



// blank word is presented



// key press is captured

// document.onkeyup = function() {
    // var userPick = String.fromCharCode(event.keyCode);
// }

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

// turn wordBank into an object and turn the words into arrays
