var playerScore = 0;
var compScore = 0;

function play(num) {
  const Selections = [
    {
      name: "rock",
      beats: "scissors",
    },
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
  ];

  function computerSelection() {
    let compC = Math.floor(Math.random() * 2);
    return Selections[compC];
  }

  function playerSelection(nums) {
    return Selections[nums];
  }

  function isWinner(selection, opponent) {
    if (playerScore < 5 && compScore < 5) {
      if (selection === opponent) {
        document.querySelector("#results").innerHTML = "DRAW";
        document.querySelector(".pChoice").innerHTML = selection.name;
        document.querySelector(".cChoice").innerHTML = opponent.name;
      } else if (selection.name == "rock") {
        if (opponent.name == "paper") {
          compScore++;
          document.querySelector(".comp").innerHTML =
            "Computer Score:" + " " + compScore;
          document.querySelector("#results").innerHTML = "LOSE";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        } else {
          playerScore++;
          document.querySelector(".player").innerHTML =
            "Player Score:" + " " + playerScore;
          document.querySelector("#results").innerHTML = "WIN";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        }
      } else if (selection.name == "scissors") {
        if (opponent.name == "rock") {
          compScore++;
          document.querySelector(".comp").innerHTML =
            "Computer Score:" + " " + compScore;
          document.querySelector("#results").innerHTML = "LOOSE";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        } else {
          playerScore++;
          document.querySelector(".player").innerHTML =
            "Player Score:" + " " + playerScore;
          document.querySelector("#results").innerHTML = "WIN";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        }
      } else if (selection.name == "paper") {
        if (opponent.name == "scissors") {
          compScore++;
          document.querySelector(".comp").innerHTML =
            "Computer Score:" + " " + compScore;
          document.querySelector("#results").innerHTML = "LOOSE";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        } else {
          playerScore++;
          document.querySelector(".player").innerHTML =
            "Player Score:" + " " + playerScore;
          document.querySelector("#results").innerHTML = "WIN";
          document.querySelector(".pChoice").innerHTML = selection.name;
          document.querySelector(".cChoice").innerHTML = opponent.name;
        }
      }
    }
    if (playerScore >= 5) {
      document.querySelector(".pChoice").innerHTML = "You WIN";
      document.querySelector(".cChoice").innerHTML = "Refresh to play again";
    } else if (compScore >= 5) {
      document.querySelector(".pChoice").innerHTML = "You LOSE";
      document.querySelector(".cChoice").innerHTML = "Refresh to play again";
    }
  }
  isWinner(playerSelection(num), computerSelection());
}
