"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Brick =
/*#__PURE__*/
function () {
  function Brick(game, position) {
    _classCallCheck(this, Brick);

    this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 40;
    this.height = 20;
    this.game = game;
    this.doesExist = true;
  }

  _createClass(Brick, [{
    key: "update",
    value: function update(deltaTime) {
      if (this.game.ball.position.y <= this.position.y + this.height) {
        this.game.ball.speed.y = -this.game.ball.speed.y;
        this.doesExist = false;
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Brick;
}();

exports["default"] = Brick;
//# sourceMappingURL=brick.dev.js.map
