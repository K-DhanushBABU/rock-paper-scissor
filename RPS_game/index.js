


      let score = JSON.parse(localStorage.getItem("score"));

      if (score === null) {
        score = {
          wins: 0,
          looses: 0,
          ties: 0,
        };
      }
      scoreDisplay();

      function playGame(move) {
        const computerMOve = pickComputerMove();
        let result = " ";
        if (move === "scissor") {
          if (computerMOve === "rock") {
            result = "You Loose";
          } else if (computerMOve === "paper") {
            result = "You Win";
          } else if (computerMOve === "scissor") {
            result = "Tie";
          }
        } else if (move === "paper") {
          if (computerMOve === "rock") {
            result = "You Win";
          } else if (computerMOve === "paper") {
            result = "Tie";
          } else if (computerMOve === "scissor") {
            result = "You Loose";
          }
        } else if (move === "rock") {
          if (computerMOve === "rock") {
            result = "Tie";
          } else if (computerMOve === "paper") {
            result = "You Loose";
          } else if (computerMOve === "scissor") {
            result = "You Win";
          }
        }
        if (result === "You Win") {
          score.wins += 1;
        } else if (result === "You Loose") {
          score.looses += 1;
        } else if (result === "Tie") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        scoreDisplay();

        document.querySelector(".js-result").innerText = `${result}`;
        document.querySelector(".js-move").innerHTML = `            
            YOU <img class="move-image" src="images/${move}-emoji.png">  
                  <img class="move-image" src="images/${computerMOve}-emoji.png"> COMPUTER`;
      }

      function scoreDisplay() {
        document.querySelector(".js-score").innerHTML = `wins: ${score.wins} ,
              looses: ${score.looses}  ,
              ties: ${score.ties}`;
      }

      function removeMoveResult() {
        document.querySelector(".js-result").innerText = "";
        document.querySelector(".js-move").innerText = "";
      }

      function pickComputerMove() {
        const randomNUmber = Math.random();

        let computerMOve = " ";
        if (randomNUmber >= 0 && randomNUmber < 1 / 3) {
          computerMOve = "rock";
        } else if (randomNUmber >= 1 / 3 && randomNUmber < 2 / 3) {
          computerMOve = "paper";
        } else if (randomNUmber >= 2 / 3 && randomNUmber < 1) {
          computerMOve = "scissor";
        }
        return computerMOve;
      }
    