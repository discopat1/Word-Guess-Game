
// variables
// create a word bank
var wordBank = ["cowboy", "revolver", "wagon", "rattlesnake", "saloon", "sasparilla", "stirup", "railroad", "carcass", "gunslinger", "whiskey"];
var targetWord
var blanks = [];
var wrongLetter = [];
var remainingGuesses = 15;



// create event for game to start
window.onload = function() {
    var targetWord = ""
    var blanks = [];
function startGame() {
    // computer randomly picks a word from the word bank
   targetWord = wordBank[Math.floor(Math.random()*wordBank.length)];
   // blank word is presented
   for (var i=0; i<targetWord.length; i++) {
    blanks.push("_");
   }
    document.getElementById("missing-word").innerHTML = blanks.join(" ");

    wrongLetter = [];
    remainingGuesses = 15;

    document.getElementById("remaining").innerHTML = remainingGuesses;
    console.log(targetWord)
}
    // key press is captured
  document.onkeyup = function(event) {
      console.log("hello")
    userPick = event.key;
    // condition: if letter matches current word is displayed on "current word"
    if(targetWord.indexOf(userPick) > -1) {
        
        var displayWord = [];
        for (var i=0; i<targetWord.length; i++) {
            if (targetWord[i] === userPick) {
                blanks[i] = userPick
            }
        }
        console.log("this is the spot", blanks);
    }
    // condition: if letter doesn't match it is displayed on "letters used"
    else {
        wrongLetter.push(userPick);
        remainingGuesses--;
        document.getElementById("remaining").innerHTML = remainingGuesses;
    }
    document.getElementById("missing-word").innerHTML = blanks.join(" ");
    // when counter reaches 0, alert you lose
    if (remainingGuesses === 0) {
        alert("You Lose!")
    }
    console.log(targetWord);
    console.log(blanks.join(""));
    if (targetWord === blanks.join("")) {
        alert("You Win!")
    }
    }
    

startGame();

}