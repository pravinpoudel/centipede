"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bullet =
/*#__PURE__*/
function () {
  function Bullet(x, y, speed, damage) {
    _classCallCheck(this, Bullet);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;
    this.width = 5;
    this.height = 5;
    this.color = "red";
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update() {
      this.y -= this.speed;
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Bullet;
}();

exports["default"] = Bullet;
//# sourceMappingURL=bullet.dev.js.map
