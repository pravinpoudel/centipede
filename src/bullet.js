export default class Bullet {
  colors = [
    "red",
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "white",
    "brown",
    "pink",
  ];

  constructor(x, y, speed, damage) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;

    this.width = 5;
    this.height = 5;
    this.color = "red";
    // this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  update() {
    this.y -= this.speed;
  }

  collideWith(sprite) {
    let isColliding =
      this.x < sprite.x + sprite.width &&
      this.x + this.width > sprite.x &&
      this.y < sprite.y + sprite.width &&
      this.y + this.height > sprite.y;

    if (isColliding) {
      sprite.takeDamage(this.damage);
      return true;
    }
    return false;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = "black";
  }
}
