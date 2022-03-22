"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy =
/*#__PURE__*/
function () {
  function Enemy(x, y, falling, color, health, type) {
    _classCallCheck(this, Enemy);

    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
    this.width = 50;
    this.context = null;
    this.height = 50;
    this.enemyImage = new Image();
    this.frameWidthPlusOffset = 90;
    this.frameWidth = 78;
    this.frameHeight = 80;
    this.falling = falling;
    this.count = 0;
    this.cspeedX = 100;

    if (type == "spidey") {
      this.frameWidth = 168;
      this.frameHeight = 80;
      this.enemyImage.src = "./assets/spidey.png";
    }

    if (type == "flea") {
      this.frameWidth = 168;
      this.frameHeight = 80;
      this.enemyImage.src = "./assets/flea.png";
    }

    if (type == "scorpion") {
      this.frameWidth = 168;
      this.frameHeight = 80;
      this.enemyImage.src = "./assets/scorpion.png";
    } else {
      this.enemyImage.src = "./assets/mushroom1.png";
    }

    this.index = 0;
    this.type = type;
    this.drawSprite = this.drawSprite.bind(this);
  }

  _createClass(Enemy, [{
    key: "takeDamage",
    value: function takeDamage(damage) {
      this.health -= damage;
    }
  }, {
    key: "update",
    value: function update(timeStamp) {
      // this.x += 200 * (2 * Math.random() - 1) * 0.001 * timeStamp;
      if (this.falling) {
        this.y += 100 * 0.001 * timeStamp;
      }

      if (this.type == "spider") {
        cspeedX = this.x < 0 || this.x > 800 - this.width ? -1 * cspeedX : cspeedX;
        this.x += cspeeedX * 0.001 * timeStamp;
      }

      if (this.x < 0 || this.x > 800 - this.width) {
        this.x = 400;
      }
    }
  }, {
    key: "drawSprite",
    value: function drawSprite() {
      this.context.drawImage(this.enemyImage, this.index * this.frameWidthPlusOffset, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);

      if (this.type == "spidey") {
        this.count++;

        if (this.count > 10) {
          this.index++;
          this.count = 0;
        }

        if (this.index > 4) {
          this.index = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.context = context;
      context.filLStyle = this.color;

      if (this.health > 1) {
        if (this.type == "mushroom") {
          this.index = 4 - this.health;
        }

        this.drawSprite();
      } else {
        console.log("mushroom is not here, correct your code");
      } // context.fillRect(this.x, this.y, this.width, this.height);
      // context.strokeRect(this.x, this.y, this.width, this.height);
      // context.fillStyle = "white";
      // context.font = "25px Arial";
      // context.fillText(
      //   this.health,
      //   this.x + this.width / 4,
      //   this.y + this.height / 1.5
      // );
      // context.fillStyle = "black";

    }
  }]);

  return Enemy;
}();

exports["default"] = Enemy;
//# sourceMappingURL=enemy.dev.js.map
