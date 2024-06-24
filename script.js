

    //CHOIX ALEATOIRE DE L'ORDINATEUR 
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  console.log(getRandomComputerResult());


      //SAVOIR SI LE JOUEUR A GAGNE LE ROUND
  function hasPlayerWonTheRound(player, computer) {
    if ((player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")) {
        return true;
    }
    return false;
}
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

      //
       let playerScore=0;
        let computerScore=0;
      function getRoundResults(userOption) {
        const computerResult = getRandomComputerResult();
       
        if (hasPlayerWonTheRound = true) {
         playerScore++

          return `Player wins! ${userOption} beats ${computerResult}`  

        }
        if (userOption === computerResult) {
          return `It's a tie! Both chose ${userOption}`
        }
        if (hasPlayerWonTheRound = false) {
          computerScore++
          `Computer wins! ${computerResult} beats ${userOption} `
        }

      }
      
      console.log(getRoundResults("Rock"));
      console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  const resultMessage = getRoundResults(userOption);

  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  roundResultsMsg.innerText = resultMessage;




  if (playerScore == 3) {
    winnerMsgElement.innerText = "Player has won the game!"
  }
  if (computerScore ==3) {
    winnerMsgElement.innerText = "Computer has won the game!"
  }
  if (playerScore ==3 || computerScore ==3) {
    resetGameBtn.style.display ='block'
    optionsContainer.style.display='none'
    
    // 2e methode
  // if (playerScore === 3 || computerScore === 3) {
  //   winnerMsgElement.innerText = `${
  //     playerScore === 3 ? "Player" : "Computer"
  //   } has won the game!`;
  }
};

showResults("Rock");