"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enemy = _interopRequireDefault(require("./enemy.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Flea =
/*#__PURE__*/
function () {
  function Flea(x, y, health, enemyController) {
    _classCallCheck(this, Flea);

    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.health = health;
    this.count = 0;
    this.cspeedX = 100;
    this.enemyController = enemyController;
    this.enemyImage = new Image();
    this.enemyImage.src = "./assets/mushroom1.png";
    this.speed = 100;
    this.dt = 0;
  }

  _createClass(Flea, [{
    key: "takeDamage",
    value: function takeDamage(damage) {
      this.health -= damage;
    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      if (Math.random() > 0.8 && this.dt > 100) {
        this.dt = 0;
        var mushroom = new _enemy["default"](this.x, this.y, false, "green", 4, "mushroom");
        this.enemyController.enemies.push(mushroom);
      }

      var dt = this.speed * 0.001 * timeStamp;
      this.y += dt;
      this.dt += dt;
      console.log(this.dt);
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.enemyImage, this.index * this.frameWidth, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
      this.count++;

      if (this.count > 10) {
        this.index++;
        this.count = 0;
      }

      if (this.index > 4) {
        this.index = 0;
      }
    }
  }]);

  return Flea;
}();

exports["default"] = Flea;
//# sourceMappingURL=flea.dev.js.map
