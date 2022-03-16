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

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();
console.log(game.gameObject);

let then = 0;
function update(timeStamp) {
  let delta = timeStamp - then;
  then = timeStamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(delta);
  game.draw(context);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
