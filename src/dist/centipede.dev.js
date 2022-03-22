"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Centipede =
/*#__PURE__*/
function () {
  function Centipede(x, y) {
    _classCallCheck(this, Centipede);

    console.log(x);
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.head = [this.x, this.y];
    this.enemyImage = new Image();
    this.enemyImage.src = "./assets/spidey.png";
    this.frameWidthPlusOffset = 90;
    this.frameWidth = 78;
    this.frameHeight = 80;
    this.index = 0;
    this.count = 0;
  }

  _createClass(Centipede, [{
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.enemyImage, this.index * this.frameWidthPlusOffset, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
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

  return Centipede;
}();

exports["default"] = Centipede;
//# sourceMappingURL=centipede.dev.js.map
