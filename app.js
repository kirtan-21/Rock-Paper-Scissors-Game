let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSelect = document.querySelector("#userSec");
const Compselect = document.querySelector("#compSec");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const option = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
}

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game is Draw. Play Again.";
  msg.style.backgroundColor = "orange";

};

const showWinner = (userWin) => {

  if (userWin) {
    console.log("you Win !");
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
  }
  else {
    console.log("you loss!");
    msg.innerText = "You Loss!";
    msg.style.backgroundColor = "red";
    compScore++;
    compScorePara.innerText = compScore;  }

};

const playGame = (userChoice) => {

  console.log("User choice =", userChoice);
  // generate computer choise
  const compChoice = genCompChoice();
  console.log("computer choice =", compChoice);

  userSelect.innerText = `User Select : ${userChoice}`;
  Compselect.innerText = `Compurer Select : ${compChoice}`;

  if (userChoice === compChoice) {
    //draw
    drawGame();

  }
  else {
    let userWin = true;
    
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    }

    else if (userChoice === "paper") {
      // scissors, rock
      userWin = compChoice === "scissors" ? false : true
    }
    else {
      // rock paper
      userWin = compChoice === "rock" ? false : true;
    
    }

    showWinner(userWin);
  }



};





choices.forEach((choice) => {

  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    

  });
});