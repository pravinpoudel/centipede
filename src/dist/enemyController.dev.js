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

var EnemyController =
/*#__PURE__*/
function () {
  function EnemyController(bulletController) {
    _classCallCheck(this, EnemyController);

    this.enemies = [];
    this.bulletController = bulletController;
  }

  _createClass(EnemyController, [{
    key: "createEnemy",
    value: function createEnemy(x, y, falling, color, health, type) {
      var enemy = new _enemy["default"](x, y, falling, color, health, type);
      this.enemies.push(enemy);
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      var _this = this;

      this.enemies.forEach(function (enemy, index) {
        if (enemy.health <= 0 || enemy.y > 800 - enemy.height) {
          _this.enemies.splice(index, 1);

          return;
        }

        if (_this.bulletController.collideWith(enemy)) {
          if (enemy.health <= 1) {
            _this.enemies.splice(index, 1);
          }
        } else {
          enemy.update(deltaTime);
        }
      });
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.enemies.forEach(function (enemy) {
        enemy.draw(context);
      });
    }
  }]);

  return EnemyController;
}();

exports["default"] = EnemyController;
//# sourceMappingURL=enemyController.dev.js.map
