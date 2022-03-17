"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InputHandler =
/*#__PURE__*/
function () {
  function InputHandler() {
    _classCallCheck(this, InputHandler);

    this.keys = {};
    this.handlers = {};
    this.addKey = this.addKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.clearKey = this.clearKey.bind(this);
    this.addCommandHandler = this.addCommandHandler.bind(this);
    window.addEventListener("keydown", this.addKey);
    window.addEventListener("keyup", this.removeKey);
    window.addEventListener("blur", this.clearKey);
  }

  _createClass(InputHandler, [{
    key: "addKey",
    value: function addKey(e) {
      this.keys[e.keyCode] = true;
    }
  }, {
    key: "removeKey",
    value: function removeKey(e) {
      delete this.keys[e.keyCode];
    }
  }, {
    key: "clearKey",
    value: function clearKey(e) {
      console.log("blurred"); // this.keys = {};
      // this.handlers = {};
    }
  }, {
    key: "addCommandHandler",
    value: function addCommandHandler(keyCode, method) {
      console.log(keyCode, method);
      this.handlers[keyCode] = method;
    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      for (var key in this.keys) {
        if (this, this.handlers[key]) this.handlers[key](timeStamp);else {
          console.log("press space to shoot");
          console.warn("we only support WASD and key up-down-right-left");
        }
      }
    }
  }]);

  return InputHandler;
}();

exports["default"] = InputHandler;
//# sourceMappingURL=inputHandler.dev.js.map
