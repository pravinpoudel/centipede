"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bullet = _interopRequireDefault(require("./bullet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BulletController =
/*#__PURE__*/
function () {
  function BulletController() {
    _classCallCheck(this, BulletController);

    this.bullets = [];
    this.timerTillNextBullet = 0;
    this.shoot = this.shoot.bind(this);
  }

  _createClass(BulletController, [{
    key: "shoot",
    value: function shoot(x, y, speed, damage, delay) {
      if (this.timerTillNextBullet <= 0) {
        var bulletNew = new _bullet["default"](x, y, speed, damage);
        this.bullets.push(bulletNew);
        this.timerTillNextBullet = delay;
      }

      this.timerTillNextBullet--;
    }
  }, {
    key: "isBulletOffScreen",
    value: function isBulletOffScreen(bullet) {
      return bullet.x <= -bullet.width || bullet.x > 800 || bullet.y > 800 || bullet.y <= -bullet.height;
    }
  }, {
    key: "collideWith",
    value: function collideWith(sprite) {
      var _this = this;

      this.bullets.some(function (bullet, index) {
        if (bullet.collideWith(sprite)) {
          _this.bullets.splice(index, 1);

          return true;
        }

        return false;
      });
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.bullets.forEach(function (bullet) {
        bullet.update();
      });
    }
  }, {
    key: "draw",
    value: function draw(context) {
      var _this2 = this;

      // console.log(this.bullets.length);
      this.bullets.forEach(function (bullet, index) {
        if (_this2.isBulletOffScreen(bullet)) {
          _this2.bullets.splice(index, 1);

          return;
        }

        bullet.draw(context);
      });
    }
  }]);

  return BulletController;
}();

exports["default"] = BulletController;
//# sourceMappingURL=bulletController.dev.js.map
