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
  function Paddle(game, padding, inputHandler, bulletController) {
    _classCallCheck(this, Paddle);

    this.width = 50;
    this.height = 50;
    this.padding = 10;
    this.inputHandler = inputHandler;
    this.bulletController = bulletController;
    this.position = {
      x: game.GAME_WIDTH / 2 - this.width / 2,
      y: game.GAME_HEIGHT - this.height - this.padding
    };
    this.cSpeed = {
      x: 0,
      y: 0
    };
    this.maxSpeed = 40;
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveTop = this.moveTop.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveStop = this.moveStop.bind(this);
    this.inputHandler.addCommandHandler(37, this.moveLeft);
    this.inputHandler.addCommandHandler(39, this.moveRight);
    this.inputHandler.addCommandHandler(38, this.moveTop);
    this.inputHandler.addCommandHandler(40, this.moveDown);
    this.inputHandler.addCommandHandler(32, this.moveStop);
  }

  _createClass(Paddle, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.cSpeed.x = -this.maxSpeed;
      this.cSpeed.y = 0;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.cSpeed.x = this.maxSpeed;
      this.cSpeed.y = 0;
    }
  }, {
    key: "moveTop",
    value: function moveTop() {
      this.cSpeed.y = -this.maxSpeed;
      this.cSpeed.x = 0;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.cSpeed.y = this.maxSpeed;
      this.cSpeed.x = 0;
    }
  }, {
    key: "moveStop",
    value: function moveStop() {
      this.bulletController.shoot();
      this.cSpeed.x = 0;
      this.cSpeed.y = 0;
    }
  }, {
    key: "shoot",
    value: function shoot() {
      var speed = 5;
      var delay = 7;
      var damage = 1;
      var bulletX = this.position.x + this.width / 2;
      var bulletY = this.position.y;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
      this.shoot();
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.inputHandler.update();
      this.position.x += this.cSpeed.x / deltaTime;
      this.position.y += this.cSpeed.y / deltaTime;

      if (this.position.x > 800 || this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }]);

  return Paddle;
}();

exports["default"] = Paddle;
//# sourceMappingURL=paddle.dev.js.map
