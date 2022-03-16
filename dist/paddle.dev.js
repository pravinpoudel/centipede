"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Paddle =
/*#__PURE__*/
function () {
  function Paddle(gameScreenWidth, gameScreenHeight, padding) {
    _classCallCheck(this, Paddle);

    this.width = 160;
    this.height = 10;
    this.padding = 10;
    this.position = {
      x: gameScreenWidth / 2 - this.width / 2,
      y: gameScreenHeight - this.height - this.padding
    };
    this.speed = 0;
    this.maxSpeed = 10;
  }

  _createClass(Paddle, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.speed = -this.maxSpeed;
    }
  }, {
    key: "moveStop",
    value: function moveStop() {
      this.speed = 0;
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!deltaTime) return;
      console.log(deltaTime);
      this.position.x += this.speed / deltaTime;
      console.log(this.position.x);

      if (this.position.x > 800 || this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }]);

  return Paddle;
}();

exports["default"] = Paddle;
//# sourceMappingURL=paddle.dev.js.map
