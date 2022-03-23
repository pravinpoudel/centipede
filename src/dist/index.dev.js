"use strict";

var _paddle = _interopRequireDefault(require("./paddle.js"));

var _inputHandler = _interopRequireDefault(require("./inputHandler.js"));

var _ball = _interopRequireDefault(require("./ball.js"));

var _game = _interopRequireDefault(require("./game.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var canvas = document.getElementById("gameScreen");
var context = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 800;
var PADDLE_OFFSET = 10;
var ballElement = document.getElementById("img_ball");
var topCode, downCode, rightCode, leftCode;
leftCode = "ArrowLeft";
rightCode = "ArrowRight";
topCode = "ArrowUp";
downCode = "ArrowDown";
var activeButton = null;
var then = 0;
var game;
document.getElementById("startMenu").addEventListener("click", restartGame);

if (!localStorage.getItem("highScores")) {
  localStorage.setItem("highScores", JSON.stringify([0]));
}

function restartGame() {
  game = new _game["default"](GAME_WIDTH, GAME_HEIGHT);
  game.start(game, topCode, downCode, rightCode, leftCode, 5, 0);
  document.getElementById("menu").style.display = "none";
  requestAnimationFrame(update);
}

window.addEventListener("keydown", function (event) {
  if (activeButton) {
    activeButton.innerText = event.key;
    var element_key = activeButton.dataset.key;

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
    } // activeButton = null;

  }
});
document.getElementById("customControl").addEventListener("focusout", function (e) {
  console.log("blurred");
  activeButton = null;
});

function restartForm() {
  document.getElementById("top_button").innerText = topCode;
  document.getElementById("top_button").addEventListener("click", function (event) {
    activeButton = document.getElementById("top_button");
  });
  document.getElementById("right_button").innerText = rightCode;
  document.getElementById("right_button").addEventListener("click", function (event) {
    activeButton = document.getElementById("right_button");
    console.log(activeButton);
  });
  document.getElementById("left_button").innerText = leftCode;
  document.getElementById("left_button").addEventListener("click", function (event) {
    activeButton = document.getElementById("left_button");
  });
  document.getElementById("down_button").innerText = downCode;
  document.getElementById("down_button").addEventListener("click", function (event) {
    activeButton = document.getElementById("down_button");
    console.log(activeButton);
  });
}

restartForm();

function update(timeStamp) {
  var delta = timeStamp - then;
  then = timeStamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(delta);
  game.draw(context);

  if (!game.gameOver) {
    requestAnimationFrame(update);
  } else {
    document.getElementById("menu").style.display = "block";
  }
}
//# sourceMappingURL=index.dev.js.map
