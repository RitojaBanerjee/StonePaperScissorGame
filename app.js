const emojiMap = {
  rock: "🪨",
  paper: "📄",
  scissor: "✂️",
};

//winning rule
const rules = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};

//where text needs to be popped up
const userBox = document.querySelector(".choice-user");
const compBox = document.querySelector(".choice-comp");
const userScoreBox = document.querySelector(".score-user");
const compScoreBox = document.querySelector(".score-comp");
const resultBox = document.querySelector(".result");

const choices = ["rock", "paper", "scissor"];

let btns = document.querySelectorAll("button");

//computer's choice
const handleCompChoice = () => {
  const idx = Math.floor(Math.random() * 3);
  return choices[idx];
};

let userScore = 0;
let compScore = 0;

//user's choice + comp's choice
const handleChoice = (event) => {
  const userChoice = event.currentTarget.id;
  const compChoice = handleCompChoice();

  userBox.innerText = emojiMap[userChoice];
  compBox.innerText = emojiMap[compChoice];

  let result = "";
  if (userChoice == compChoice) {
    result = "It's a draw";
  } else if (rules[userChoice] == compChoice) {
    result = "You Win !!";
    userScore += 1;
    console.log("userScore : " + userScore);
    console.log("compScore : " + compScore);
  } else {
    result = "Computer Win !!";
    compScore += 1;
    console.log("userScore : " + userScore);
    console.log("compScore : " + compScore);
  }

  resultBox.innerText = result;
  userScoreBox.innerText = userScore;
  compScoreBox.innerText = compScore;
};

btns.forEach((btn) => {
  btn.addEventListener("click", handleChoice);
});

/*const handleCompChoice = () => {
  let n = Math.floor(Math.random() * 3) + 1;
  return n;
};

const handleChoice = (event) => {
  const user_choice = event.currentTarget.id;
  if (user_choice == "paper") {
    document.getElementsByClassName("choice-user")[0].innerText = "📄";
  } else if (user_choice == "rock") {
    document.getElementsByClassName("choice-user")[0].innerText = "🪨";
  } else {
    document.getElementsByClassName("choice-user")[0].innerText = "✂️";
  }

  const comp_choice = handleCompChoice();
  if (comp_choice == 1) {
    document.getElementsByClassName("choice-comp")[0].innerText = "📄";
  } else if (comp_choice == 2) {
    document.getElementsByClassName("choice-comp")[0].innerText = "🪨";
  } else {
    document.getElementsByClassName("choice-comp")[0].innerText = "✂️";
  }
};

let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", handleChoice);
});
*/
