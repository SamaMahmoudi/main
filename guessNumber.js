"use strict";

const promessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = secretNumber;

let newNumber = document
  .querySelector(".check")
  .addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    ///WHEN THER IS NO INPUTE
    if (!guess) {
      promessage("no NUMBER!!!");
    }
  });
///WHEN PLAYER WIN

if (guess == secretNumber) {
  promessage(" YOU WIN");
  document.querySelector("body").style.backgroundColor = " green ";
  document.querySelector(".number").style.width = "30rem";
  if (highscore > score) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
}
/// WHEN PLAYER FAILED
else if (!geuss == secretNumber) {
  if (score > 1) {
    document.querySelector(".message").textContent =
      geuss > secretNumber ? "too high" : "too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
} else {
  promessage("you loose");
  document.querySelector(".score").textContent = 0;
}
