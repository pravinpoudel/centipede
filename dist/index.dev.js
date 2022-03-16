"use strict";

var _paddle = _interopRequireDefault(require("./paddle.js"));

var _inputHandler = _interopRequireDefault(require("./inputHandler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var canvas = document.getElementById("gameScreen");
var context = canvas.getContext("2d");
var GAME_WIDTH = 800;
var GAME_HEIGHT = 800;
var PADDLE_OFFSET = 10;
var ball = document.getElementById("img_ball");
var paddle = new _paddle["default"](GAME_WIDTH, GAME_HEIGHT, PADDLE_OFFSET);
paddle.draw(context);
new _inputHandler["default"](paddle);
var then = 0;

function update(timeStamp) {
  var delta = timeStamp - then;
  then = timeStamp;
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  context.drawImage(ball, 10, 10, 16, 16);
  paddle.update(delta);
  paddle.draw(context);
  requestAnimationFrame(update);
}

update();
//# sourceMappingURL=index.dev.js.map
