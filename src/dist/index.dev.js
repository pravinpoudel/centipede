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
var game = new _game["default"](GAME_WIDTH, GAME_HEIGHT);
game.start();
console.log(game.gameObject);
var then = 0;

function update(timeStamp) {
  var delta = timeStamp - then;
  then = timeStamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(delta);
  game.draw(context);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
//# sourceMappingURL=index.dev.js.map
