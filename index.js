let playerscore = 0
let computerscore = 0

let rockVar = document.querySelector(".rockbutton")
let paperVar = document.querySelector(".paperbutton")
let scissorsVar = document.querySelector(".scissorsbutton")

rockVar.addEventListener("click", function() {
  let result = (playRound(computerPlay(), "rock"))
  scoreCheck(result)
})

paperVar.addEventListener("click", function() {
  let result = (playRound(computerPlay(), "paper"))
  scoreCheck(result)
})

scissorsVar.addEventListener("click", function() {
  let result = (playRound(computerPlay(), "scissors"))
  scoreCheck(result)
})

// score check uses the result from playround to add the scores, display the score,
// and check if the game is over


function scoreCheck(result) {
  if (result == "You win") {
    playerscore++
    document.querySelector(".resultsDiv").style.color = "green"
    document.querySelector(".resultsDiv").textContent = "You win!"
  } else if (result == "The Computer Wins") {
    computerscore++
    document.querySelector(".resultsDiv").style.color = "red"
    document.querySelector(".resultsDiv").textContent = "You lose!"
  } else if (result == "It's a tie") {
    document.querySelector(".resultsDiv").style.color = "blue"
    document.querySelector(".resultsDiv").textContent = "It's a tie"
  } else {
    "error 832"
  }

  document.querySelector(".scoreDiv").textContent = ("Player -> " + playerscore + " | Computer -> " + computerscore + ".")

  if ((playerscore == 5) || (computerscore == 5)) {
    if (playerscore > computerscore) {
      alert("Congratulations you won!")
    } else {
      alert("Better luck next time!")
    }
    alert("please reload")
  }
}


// get computer rock/paper/scissos
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
  }
}

// plays round with comp selection and player selection
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
    alert("You didn't choose rock, paper or scissors. Please try again.")
    reload()
  }
}
