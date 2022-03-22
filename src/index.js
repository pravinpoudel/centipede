import Paddle from "./paddle.js";
import InputHandler from "./inputHandler.js";
import Ball from "./ball.js";
import Game from "./game.js";

const canvas = document.getElementById("gameScreen");
const context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;
const PADDLE_OFFSET = 10;
const ballElement = document.getElementById("img_ball");

let topCode, downCode, rightCode, leftCode;
leftCode = "ArrowLeft";
rightCode = "ArrowRight";
topCode = "ArrowUp";
downCode = "ArrowDown";
let activeButton = null;
let then = 0;
let game;

document.getElementById("startMenu").addEventListener("click", restartGame);
if (!localStorage.getItem("highScores")) {
  localStorage.setItem("highScores", JSON.stringify([0]));
}

function restartGame() {
  game = new Game(GAME_WIDTH, GAME_HEIGHT);
  game.start(game, topCode, downCode, rightCode, leftCode);
  document.getElementById("menu").style.display = "none";
  requestAnimationFrame(update);
}

window.addEventListener("keydown", (event) => {
  if (activeButton) {
    activeButton.innerText = event.key;
    let element_key = activeButton.dataset.key;
    if (event.key == "Escape") {
      return;
    }
    console.log(event.key);
    switch (element_key) {
      case "top":
        topCode = event.key;
      case "down":
        downCode = event.key;
      case "right":
        rightCode = event.key;
      case "left":
        leftCode = event.key;
    }
    // activeButton = null;
  }
});

document.getElementById("customControl").addEventListener("focusout", (e) => {
  console.log("blurred");
  activeButton = null;
});

function restartForm() {
  document.getElementById("top_button").innerText = topCode;
  document.getElementById("top_button").addEventListener("click", (event) => {
    activeButton = document.getElementById("top_button");
  });
  document.getElementById("right_button").innerText = rightCode;
  document.getElementById("right_button").addEventListener("click", (event) => {
    activeButton = document.getElementById("right_button");
    console.log(activeButton);
  });

  document.getElementById("left_button").innerText = leftCode;
  document.getElementById("left_button").addEventListener("click", (event) => {
    activeButton = document.getElementById("left_button");
  });

  document.getElementById("down_button").innerText = downCode;
  document.getElementById("down_button").addEventListener("click", (event) => {
    activeButton = document.getElementById("down_button");
    console.log(activeButton);
  });
}

restartForm();

function update(timeStamp) {
  let delta = timeStamp - then;
  then = timeStamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(delta);
  game.draw(context);
  console.log(game.gameOver);
  if (!game.gameOver) {
    requestAnimationFrame(update);
  } else {
    document.getElementById("menu").style.display = "block";
  }
}

