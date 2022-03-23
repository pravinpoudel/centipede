import Enemy from "./enemy.js";

export default class Flea {
  constructor(x, y, health, enemyController) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.health = health;
    this.cspeedX = 100;
    this.enemyController = enemyController;
    this.enemyImage = new Image();
    this.enemyImage.src = "./assets/flea.png";
    this.frameWidth = 12;
    this.frameHeight = 8;
    this.count = 0;
    this.index = 0;
    this.speed = 100;
    this.dt = 0;
    this.type="flea";
  }
  takeDamage(damage) {
    this.health -= damage;
  }

  update(timeStamp) {
    if (Math.random() > 0.8 && this.dt > 100 && this.y < 700) {
      this.dt = 0;
      let mushroom = new Enemy(this.x, this.y, false, "green", 4, "mushroom");
      this.enemyController.enemies.push(mushroom);
    }
    let dt = this.speed * 0.001 * timeStamp;
    this.y += dt;
    this.dt += dt;
  }

  draw(context) {
    context.drawImage(
      this.enemyImage,
      this.index * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.count++;
    if (this.count > 10) {
      this.index++;
      this.count = 0;
    }
    if (this.index > 1) {
      this.index = 0;
    }
  }
}
