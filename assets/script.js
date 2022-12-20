var computerWin= 0;
var playerWin= 0;
var tie= 0;

var humanrockSelection = " ";
var humanpaperSelection = " ";
var humanscissorsSelection = " ";
var computerrockSelection = " ";
var computerpaperSelection = " ";
var computerscissorsSelection = " ";

//Makes the buttons selectable as Javascript Variables
var rockButton = document.querySelector("#rock-button");
var paperButton = document.querySelector("#paper-button");
var scissorsButton = document.querySelector("#scissors-button");

//Makes the images selectable as Javascript Variables
const humanRock = document.querySelector("#rock-image-human");
const humanPaper = document.querySelector("#paper-image-human");
const humanScissors = document.querySelector("#scissors-image-human");
const computerRock = document.querySelector("#rock-image-computer");
const computerPaper = document.querySelector("#paper-image-computer");
const computerScissors = document.querySelector("#scissors-image-computer");

// Adds eventlistener to the buttons
var initialRock = rockButton.addEventListener("click", e=> {
    playRock();
});
var initialPaper = paperButton.addEventListener("click", e=> {
    playPaper();
});
var initialScissors = scissorsButton.addEventListener("click", e=> {
    playScissors();
});

//Adds a function that writes the score to the #score textArea
function writeScore() {
    var score = document.querySelector("#score");
    score.value = "Score: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies: " + tie; 
}

//Clears the images from the page so a new round can be played
function clearImages() {
    if ((humanrockSelection === "true") && (computerrockSelection === "true")) {
        computerRock.style.display = "none";
        humanRock.style.display = "none";
    } else if ((humanpaperSelection === "true") && (computerpaperSelection === "true")) {
        humanPaper.style.display = "none";
        computerPaper.style.display = "none";
    } else if ((humanscissorsSelection === "true") && (computerscissorsSelection === "true")) {
        humanScissors.style.display = "none";
        computerScissors.style.display = "none";
    } else if ((humanrockSelection === "true") && (computerpaperSelection === "true")) {
        humanRock.style.display = "none";
        computerPaper.style.display = "none";
    } else if ((humanrockSelection === "true") && (computerscissorsSelection === "true")) {
        humanRock.style.display = "none";
        computerScissors.style.display = "none";
    } else if ((humanpaperSelection === "true") && (computerrockSelection === "true")) {
        humanPaper.style.display = "none";
        computerRock.style.display = "none";
    } else if ((humanpaperSelection === "true") && (computerscissorsSelection === "true")) {
        humanPaper.style.display = "none";
        computerScissors.style.display = "none";
    } else if ((humanscissorsSelection === "true") && (computerrockSelection === "true")) {
        humanScissors.style.display = "none";
        computerRock.style.display = "none";
    } else if ((humanscissorsSelection === "true") && (computerpaperSelection === "true")) {
        humanScissors.style.display = "none";
        computerPaper.style.display = "none";
    }
}

//Sets the length of the array for the math.random method
const computerOptions = ["Rock", "Paper", "Scissors"];

function playRock() {
    clearImages();
    humanrockSelection = " ";
    humanpaperSelection = " ";
    humanscissorsSelection = " ";
    computerrockSelection = " ";
    computerpaperSelection = " ";
    computerscissorsSelection = " ";
    let computerChoice = Math.floor(Math.random()*computerOptions.length);
        if (computerChoice === 0) {
            computerrockSelection = "true";
            humanrockSelection = "true";
            humanRock.style.display = "block";
            computerRock.style.display = "block";
            tie++;
            alert("You Tied");
            score = " ";
            writeScore();
        } else if (computerChoice === 1) {
            computerpaperSelection = "true";
            humanrockSelection = "true";
            humanRock.style.display = "block";
            computerPaper.style.display = "block";
            computerWin++;
            alert("You Lost");
            score = " ";
            writeScore();
        } else if (computerChoice === 2) {
            computerscissorsSelection = "true";
            humanrockSelection = "true";
            humanRock.style.display = "block";
            computerScissors.style.display = "block";
            playerWin++;
            alert("You Won");
            score = " ";
            writeScore();
        }
    }

function playPaper() {
    clearImages();
    humanrockSelection = " ";
    humanpaperSelection = " ";
    humanscissorsSelection = " ";
    computerrockSelection = " ";
    computerpaperSelection = " ";
    computerscissorsSelection = " ";
    let computerChoice = Math.floor(Math.random()*computerOptions.length);
        if (computerChoice === 0) {
            computerrockSelection = "true";
            humanpaperSelection = "true";
            humanPaper.style.display = "block";
            computerRock.style.display = "block";
            playerWin++;
            alert("You Won");
            score = " ";
            writeScore();
        } else if (computerChoice === 1) {
            computerpaperSelection = "true";
            humanpaperSelection = "true";
            humanPaper.style.display = "block";
            computerPaper.style.display = "block";
            tie++;
            alert("You Tied");
            score = " ";
            writeScore();
        } else if (computerChoice === 2) {
            computerscissorsSelection = "true";
            humanpaperSelection = "true";
            humanPaper.style.display = "block";
            computerScissors.style.display = "block";
            computerWin++;
            alert("You Lost");
            score = " ";
            writeScore();
        }
    }

function playScissors () {
    clearImages();
    humanrockSelection = " ";
    humanpaperSelection = " ";
    humanscissorsSelection = " ";
    computerrockSelection = " ";
    computerpaperSelection = " ";
    computerscissorsSelection = " ";
    let computerChoice = Math.floor(Math.random()*computerOptions.length);
        if (computerChoice === 0) {
            computerrockSelection = "true";
            humanscissorsSelection = "true";
            humanScissors.style.display = "block";
            computerRock.style.display = "block";
            computerWin++;
            alert("You Lost");
            score = " ";
            writeScore();
        } else if (computerChoice === 1) {
            computerpaperSelection = "true";
            humanscissorsSelection = "true";
            humanScissors.style.display = "block";
            computerPaper.style.display = "block";
            playerWin++;
            alert("You Won");
            score = " ";
            writeScore();
        } else if (computerChoice === 2) {
            computerscissorsSelection = "true";
            humanscissorsSelection = "true";
            humanScissors.style.display = "block";
            computerScissors.style.display = "block";
            tie++;
            alert("You Tied");
            score = " ";
            writeScore();
        }
}
// if the user selects rock via the eventlistener displays image of rock and starts Play Rock()

//  playRock function
//  var userSelection = "ROCK";
//
//  let computerChoice = Math.floor(Math.random()*computerOptions.length);

//  if (computerChoice === 0) {
//      tie++;
//      alert("You Tied");
//      score = " ";
//      writeScore();
//  } else if (computerChoice === 1) {
//      computerWin++;
//      alert("You Lost");
//      score = " ";
//      writeScore();
//  } else if (computerChoice === 2) {
//      playerWin++;
//      alert("You Won");
//      score = " ";
//      writeScore();
//  }


//  if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 0) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 1) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 2)){
//    tie++;


//var playGame = function() {
//    var userSelection = prompt("Enter Rock, Paper, or Scissors to Play!");
//   let computerChoice = Math.floor(Math.random()*computerOptions.length);
//        if (!userSelection) {
//            return;
//        } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 0) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 1) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 2)){
//           tie++;
//           alert("You Tied");
//          score = " ";
//          writeScore();
//         var playAgain = confirm("Play Again?");
//         if (playAgain) {
//            playGame();
//            } else {
//           return; 
//      }
  //      } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 2) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 0) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 1)){
   //         playerWin++;
    //        alert("You Won");
     //       score = " ";
      //      writeScore();
    //        var playAgain = confirm("Play Again?");
     //       if (playAgain) {
      //          playGame();
       //         } else {
        //        return; 
         //   }
     //   } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 1) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 2) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 0)){
      //      computerWin++;
       //     alert("You Lost");
        //    score = " ";
  //          writeScore();
   //         var playAgain = confirm("Play Again?");
    //        if (playAgain) {
     //           playGame();
      //          } else {
       //         return; 
   //             }
    //    }
//}
//playGame();

//window.alert("It's a tie! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);
//window.alert("You Won! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);
//window.alert("You Lost! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);