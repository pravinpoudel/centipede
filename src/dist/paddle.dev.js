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
    this.context = null;
    this.position = {
      x: game.GAME_WIDTH / 2 - this.width / 2,
      y: game.GAME_HEIGHT - this.height - this.padding
    };
    this.cSpeed = {
      x: 200,
      y: 200
    };
    this.spriteGunImage = new Image();
    this.spriteGunImage2 = new Image();
    this.spriteGunImage.src = "./assets/gun1.png";
    this.spriteGunImage2.src = "./assets/gun2.png";
    this.maxSpeed = 40;
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveTop = this.moveTop.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveStop = this.moveStop.bind(this);
    this.shoot = this.shoot.bind(this);
    this.animateGun = this.animateGun.bind(this);
    this.animationGun2 = this.animationGun2.bind(this);
    this.inputHandler.addCommandHandler(37, this.moveLeft);
    this.inputHandler.addCommandHandler(39, this.moveRight);
    this.inputHandler.addCommandHandler(38, this.moveTop);
    this.inputHandler.addCommandHandler(40, this.moveDown);
    this.inputHandler.addCommandHandler(32, this.moveStop);
  }

  _createClass(Paddle, [{
    key: "moveLeft",
    value: function moveLeft(deltaTime) {
      console.log(deltaTime); // this.cSpeed.x = -this.maxSpeed;

      this.position.x -= this.cSpeed.x * 0.001 * deltaTime; // this.cSpeed.y = 0;
    }
  }, {
    key: "moveRight",
    value: function moveRight(deltaTime) {
      // this.cSpeed.x = this.maxSpeed;
      this.position.x += this.cSpeed.x * 0.001 * deltaTime; // this.cSpeed.y = 0;
    }
  }, {
    key: "moveTop",
    value: function moveTop(deltaTime) {
      // this.cSpeed.y = -this.maxSpeed;
      this.position.y -= this.cSpeed.y * 0.001 * deltaTime; // this.cSpeed.x = 0;
    }
  }, {
    key: "moveDown",
    value: function moveDown(deltaTime) {
      // this.cSpeed.y = this.maxSpeed;
      this.position.y += this.cSpeed.y * 0.001 * deltaTime; // this.cSpeed.x = 0;
    }
  }, {
    key: "moveStop",
    value: function moveStop(deltaTime) {
      this.shoot(); // this.cSpeed.x = 0;
      // this.cSpeed.y = 0;
    }
  }, {
    key: "shoot",
    value: function shoot() {
      this.animationGun2();
      var speed = 5;
      var delay = 5;
      var damage = 1;
      var bulletX = this.position.x + this.width / 2;
      var bulletY = this.position.y;
      this.bulletController.shoot(bulletX, bulletY, speed, damage, delay); // this.animateGun();
    }
  }, {
    key: "animateGun",
    value: function animateGun() {
      console.log(this.context);
      this.context.drawImage(this.spriteGunImage, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "animationGun2",
    value: function animationGun2() {
      this.context.drawImage(this.spriteGunImage2, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.context = context;
      this.animationGun2();
      this.bulletController.draw(context);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.inputHandler.update(deltaTime);
      this.bulletController.update(); // console.log(this.position)

      if (this.position.x > 800 || this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }]);

  return Paddle;
}();

exports["default"] = Paddle;
//# sourceMappingURL=paddle.dev.js.map
