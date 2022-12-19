var computerWin= 0;
var playerWin= 0;
var tie= 0;

const computerOptions = ["Rock", "Paper", "Scissors"];

var playGame = function() {
    var userSelection = prompt("Enter Rock, Paper, or Scissors to Play!");
    let computerChoice = Math.floor(Math.random()*computerOptions.length);
        if (!userSelection) {
            return;
        } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 0) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 1) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 2)){
            tie++;
            window.alert("It's a tie! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);
            var playAgain = confirm("Play Again?");
            if (playAgain) {
                playGame();
                } else {
                return; 
            }
        } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 2) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 0) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 1)){
            playerWin++;
            window.alert("You Won! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);
            var playAgain = confirm("Play Again?");
            if (playAgain) {
                playGame();
                } else {
                return; 
            }
        } else if ((userSelection.toUpperCase() === "ROCK" && computerChoice === 1) || (userSelection.toUpperCase() === "PAPER" && computerChoice === 2) || (userSelection.toUpperCase() === "SCISSORS" && computerChoice === 0)){
            computerWin++;
            window.alert("You Lost! \nstats: \nWins: " + playerWin + "\nLosses: " + computerWin + "\nTies " + tie);
            var playAgain = confirm("Play Again?");
            if (playAgain) {
                playGame();
                } else {
                return; 
                }
        }
}
playGame();
