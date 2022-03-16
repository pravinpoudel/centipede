"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputHandler = function InputHandler(paddle) {
  _classCallCheck(this, InputHandler);

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 37) {
      paddle.moveLeft();
    }
  });
};

exports["default"] = InputHandler;
//# sourceMappingURL=inputHandler.dev.js.map
