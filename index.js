let playerscore = 0
let computerscore = 0

function computerPlay() {
  var computerReturn = Math.floor(3 * Math.random());
  if (computerReturn === 0) {
    return "rock"
  } else if (computerReturn === 1) {
    return "paper"
  } else if (computerReturn === 2) {
    return "scissors"
  } else {
    alert("error 529")
    console.log("error 592")
  }
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return "It's a tie"
  } else if ((computerSelection == "rock") & (playerSelection == "scissors")) {
    return "The Computer Wins"
  } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
    return "The Computer Wins"
  } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
    return "The Computer Wins"
  } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You win"
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "You win"
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "You win"
  } else {
    console.log("error 729");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose your Character! Either rock, paper or scissors.").toLowerCase();
    let result = playRound(computerSelection, playerSelection);
    if (result == "You win") {
      playerscore++
    } else if (result == "The Computer Wins") {
      computerscore++
    } else if (result == "It's a tie") {
      console.log("tie")
    } else {
      "error 832"
    }

    alert("You chose " + playerSelection + ". The computer chose " + computerSelection + ". " + result + ".\nAfter round " + (i + 1) + ": player " + playerscore + ", computer " + computerscore + " .")

  }
}

alert("Welcome to rock, paper scissors. This will be a 5 round game. Good luck!")

game()

if (playerscore > computerscore) {
  alert("Congratulations you won!")
} else {
  alert("Better luck next time!")
}

alert("player selection is " + playerSelection)
