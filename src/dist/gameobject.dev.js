"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var gameObject =
/*#__PURE__*/
function () {
  function gameObject(x, y, velocity) {
    _classCallCheck(this, gameObject);

    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }

  _createClass(gameObject, [{
    key: "update",
    value: function update(timeStamp) {
      this.x += this.velocity.x * timeStamp * 0.001;
      this.y += this.velocity.y * timeStamp * 0.001;
    }
  }]);

  return gameObject;
}();

exports["default"] = gameObject;
//# sourceMappingURL=gameobject.dev.js.map
