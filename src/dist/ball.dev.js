"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ball =
/*#__PURE__*/
function () {
  function Ball(game) {
    _classCallCheck(this, Ball);

    this.image = document.getElementById("img_ball");
    this.speed = {
      x: 2,
      y: 2
    };
    this.position = {
      x: 10,
      y: 10
    };
    this.size = 16;
    this.game = game;
    this.GAME_WIDTH = game.GAME_WIDTH;
    this.GAME_HEIGHT = game.GAME_HEIGHT;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.position.x += this.speed.x;
      this.position.y += this.speed.y;
      var ballBottomPosition = this.position.y + this.size;
      var ballRightPosition = this.position.x + this.size;
      var ballLeftPosition = this.position.x;
      var paddleTopPosition = this.game.paddle.position.y;
      var paddleRightPosition = this.game.paddle.position.x + this.game.paddle.width;
      var paddleLeftPosition = this.game.paddle.position.x;

      if (ballLeftPosition <= paddleRightPosition && ballRightPosition >= paddleLeftPosition && ballBottomPosition >= paddleTopPosition) {
        this.speed.y = -this.speed.y;
      }

      if (this.position.x < 0 || this.position.x + this.size >= this.GAME_WIDTH) this.speed.x = -this.speed.x;

      if (this.position.y <= 0) {
        this.speed.y = -this.speed.y;
      }

      if (this.position.y + this.size >= this.GAME_HEIGHT) {
        console.log("dead");
        this.speed.y = -this.speed.y;
      }
    }
  }]);

  return Ball;
}();

exports["default"] = Ball;
//# sourceMappingURL=ball.dev.js.map
