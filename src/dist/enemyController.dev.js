"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _enemy = _interopRequireDefault(require("./enemy.js"));

var _flea = _interopRequireDefault(require("./flea.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EnemyController =
/*#__PURE__*/
function () {
  function EnemyController(bulletController, player) {
    _classCallCheck(this, EnemyController);

    this.enemies = [];
    this.player = player;
    this.bulletController = bulletController;
    this.mushroomSound = new Audio();
    this.spiderSound = new Audio();
    this.gameFinish = new Audio();
    this.mushroomSound.src = "./assets/audio/mushroomAudio.flac";
    this.spiderSound.src = "./assets/audio/spiderAudio.flac";
    this.gameFinish.src = "./assets/audio/game_end.mp3";
  }

  _createClass(EnemyController, [{
    key: "createEnemy",
    value: function createEnemy(x, y, falling, color, health, type) {
      var enemy = new _enemy["default"](x, y, falling, color, health, type);
      this.enemies.push(enemy);
    }
  }, {
    key: "createFlea",
    value: function createFlea(x, y, health) {
      var enemy = new _flea["default"](x, y, health, this);
      this.enemies.push(enemy);
    }
  }, {
    key: "storeScore",
    value: function storeScore() {
      var highScoreList = localStorage.getItem("highScores");
      highScoreList = JSON.parse(highScoreList);
      var currentScore = parseInt(localStorage.getItem("currentScore"));
      highScoreList[highScoreList.length] = currentScore;
      highScoreList.sort(function (a, b) {
        return b - a;
      });
      console.log(highScoreList);
      highScoreList = highScoreList.slice(0, 5);
      console.log(highScoreList);
      highScoreList = JSON.stringify(highScoreList);
      console.log(highScoreList);
      localStorage.setItem("highScores", highScoreList);
      console.log(localStorage.getItem("highScores"));
    }
  }, {
    key: "update",
    value: function update(deltaTime, gameOver) {
      var _this = this;

      this.enemies.forEach(function (enemy, index) {
        if (enemy.health <= 0 || enemy.y > 800 - enemy.height) {
          _this.enemies.splice(index, 1);

          return;
        }

        if (_this.bulletController.collideWith(enemy)) {
          if (enemy.falling) {
            _this.spiderSound.play();
          } else {
            _this.mushroomSound.play();
          }

          if (enemy.health <= 1) {
            _this.enemies.splice(index, 1);
          }
        }

        if (enemy.type == "scorpio" && enemy.x > 800 - enemy.width) {
          _this.enemies.splice(index, 1);
        }

        if (enemy.type == "flea") {
          console.log(_this.player.collideWith(enemy));
        } // if (this.player.collideWith(enemy) || enemy.y > 800 - enemy.height) {
        //   gameOver();
        //   this.storeScore();
        // }


        if (_this.player.collideWith(enemy)) {
          gameOver();

          _this.storeScore();
        }

        enemy.update(deltaTime);
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
