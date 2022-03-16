import Bullet from "./bullet.js";

export default class BulletController {
  constructor() {
    this.bullets = [];
    this.timerTillNextBullet = 0;
    this.shoot = this.shoot.bind(this);
  }

  shoot(x, y, speed, damage, delay) {
    if (this.timerTillNextBullet <= 0) {
      this.bullets.push(new Bullet(x, y, speed, damage));
      this.timerTillNextBullet = delay;
    }
    this.timerTillNextBullet--;
  }

  isBulletOffScreen(bullet) {
    return (
      bullet.x <= -bullet.width ||
      bullet.x > 800 ||
      bullet.y > 800 ||
      bullet.y <= -bullet.height
    );
  }

  update(deltaTime) {
    this.bullets.forEach((bullet) => {
      bullet.update();
    });
  }

  draw(context) {
    console.log(this.bullets.length);
    this.bullets.forEach((bullet, index) => {
      if (this.isBulletOffScreen(bullet)) {
        this.bullets.splice(index, 1);
        return;
      }
      bullet.draw(context);
    });
  }
}
