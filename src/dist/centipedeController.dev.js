"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _centipede = _interopRequireDefault(require("./centipede.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CentipedeController =
/*#__PURE__*/
function () {
  function CentipedeController(x, y, width, height) {
    _classCallCheck(this, CentipedeController);

    this.x = x;
    this.y = y;
    this.tails = [];
    this.head = [this.x, this.y];
    this.moveVertical = false;
    this.moveHorizontal = true;
    this.h_direction = 1;
    this.width = width;
    this.xSpeed = 100;
  }

  _createClass(CentipedeController, [{
    key: "createCentipede",
    value: function createCentipede(count) {
      this.total = count;

      for (var i = 0; i < count; ++i) {
        var newCentipedenew = new _centipede["default"](this.x + i * this.width, this.y);
        console.log(newCentipedenew);
        this.tails.push(newCentipedenew);
      }
    }
  }, {
    key: "move",
    value: function move() {
      // console.log(JSON.stringify(this.tails));
      for (var i = 1; i < this.total; i++) {
        this.tails[i - 1].x = this.tails[i].x;
        this.tails[i - 1].y = this.tails[i].y;
      } // console.log(JSON.stringify(this.tails));

    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      this.move();

      if (this.x + this.width == 800) {
        this.h_direction = -1;
        this.y += this.height;
      }

      if (this.x + this.width == 0) {
        this.h_direction = 1;
        this.y += this.height;
      }

      this.move();
      this.tails[this.total - 1].x += this.h_direction * this.width;
      this.x = this.tails[this.total - 1].x;
      this.tails[this.total - 1].y = this.y;
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.tails.forEach(function (element, index) {
        element.draw(context);
      });
    }
  }]);

  return CentipedeController;
}();

exports["default"] = CentipedeController;
//# sourceMappingURL=centipedeController.dev.js.map
