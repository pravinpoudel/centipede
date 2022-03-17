"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ball = _interopRequireDefault(require("./ball.js"));

var _brick = _interopRequireDefault(require("./brick.js"));

var _bulletController = _interopRequireDefault(require("./bulletController.js"));

var _enemy = _interopRequireDefault(require("./enemy.js"));

var _inputHandler = _interopRequireDefault(require("./inputHandler.js"));

var _paddle = _interopRequireDefault(require("./paddle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(gameWidth, gameHeight) {
    _classCallCheck(this, Game);

    this.GAME_WIDTH = gameWidth;
    this.GAME_HEIGHT = gameHeight;
  }

  _createClass(Game, [{
    key: "start",
    value: function start(game) {
      this.ball = new _ball["default"](this);
      this.inputHandler1 = new _inputHandler["default"]();
      this.bulletController1 = new _bulletController["default"]();
      this.paddle = new _paddle["default"](this, 10, this.inputHandler1, this.bulletController1);
      var bricks = [];
      var enemies = [];

      for (var i = 0; i < 7; i++) {
        var brick = new _brick["default"](this, {
          x: i * 40,
          y: 400
        });
        bricks.push(brick);
      }

      this.gameObject = [this.ball, this.bulletController1, this.paddle].concat(bricks);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.gameObject.forEach(function (element) {
        element.update(deltaTime);
      });
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.gameObject.forEach(function (element) {
        element.draw(context);
      });
    }
  }]);

  return Game;
}();

exports["default"] = Game;
//# sourceMappingURL=game.dev.js.map
