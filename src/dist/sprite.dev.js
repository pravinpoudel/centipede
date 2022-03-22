"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(src, width, height, imageCount) {
    _classCallCheck(this, Sprite);

    this.width = width;
    this.height = height;
    this.enemyImage = new Image();
    this.enemyImage.src = src;
    this.count = 0;
    this.index = 0;
    this.frameWidth = this.enemyImage.width / imageCount;
    this.frameHeight = this.enemyImage.height / imageCount;
  }

  _createClass(Sprite, [{
    key: "draw",
    value: function draw(x, y, context) {
      context.drawImage(this.enemyImage, this.index * this.frameWidthPlusOffset, 0, x, y, this.width, this.height);
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

  return Sprite;
}();

exports["default"] = Sprite;
//# sourceMappingURL=sprite.dev.js.map
