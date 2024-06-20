

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
      function getRoundResults(userOption) {
        const computerResult = getRandomComputerResult();
        
      }
      
      console.log(getRoundResults("Rock"));
      console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);