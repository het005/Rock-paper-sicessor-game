
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const drowgame = () => {
  console.log("game was drow");
  msg.innerText = "GAME WAS DROW PLAY AGAIN";
};

const showWinner = (userwin) => {
  if (userwin) {
    console.log("you Win");
    msg.innerText = "YOU WIN";
    msg.style.backgroundColor = "green";
  } else {
    console.log("you loose");
    msg.innerText = "YOU LOOSE";
    msg.style.backgroundColor = "red";
  }
};
const playgame = (userchoice) => {
  console.log("You Choices =", userchoice);
  const compchoice = gencomputerchoice();
  console.log("Computer Choices =", compchoice);

  if (userchoice === compchoice) {
    //drowgame
    drowgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissors,paper
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "paper" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};
const gencomputerchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const ranInx = Math.floor(Math.random() * 3);
  return options[ranInx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log(userchoice);
    playgame(userchoice);
  });
});
