export default class Enemy {
  constructor(x, y, falling, color, health, type) {
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
    if (type == "spidey") {
      this.frameWidth = 168;
      this.frameHeight = 80;
      this.enemyImage.src = "./assets/spidey.png";
    } else {
      this.falling = false;
      this.enemyImage.src = "./assets/mushroom1.png";
    }
    this.index = 0;
    this.type = type;
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  update(timeStamp) {
    // this.x += 200 * (2 * Math.random() - 1) * 0.001 * timeStamp;
    if (this.falling) {
      this.y += 100 * 0.001 * timeStamp;
    }
    if (this.x < 0 || this.x > 800 - this.width) {
      this.x = 400;
    }
  }

  drawSprite() {
    this.context.drawImage(
      this.enemyImage,
      this.index * this.frameWidthPlusOffset,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

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

  draw(context) {
    this.context = context;
    context.filLStyle = this.color;
    if (this.health > 1) {
      this.index = 4 - this.health;
      this.drawSprite();
    } else {
      console.log("mushroom is not here, correct your code");
    }
    // context.fillRect(this.x, this.y, this.width, this.height);
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
}
