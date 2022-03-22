import Bullet from "./bullet.js";

export default class BulletController {
  constructor() {
    this.bullets = [];
    this.timerTillNextBullet = 0;
    this.shoot = this.shoot.bind(this);
  }

  shoot(x, y, speed, damage, delay) {
    if (this.timerTillNextBullet <= 0) {
      const bulletNew = new Bullet(x, y, speed, damage);
      this.bullets.push(bulletNew);
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

  collideWith(sprite){  
   return this.bullets.some((bullet, index) => {
     if (bullet.collideWith(sprite)) {
       let currentScore = parseInt(localStorage.getItem("currentScore"));
       localStorage.setItem("currentScore", ++currentScore);
       console.log(localStorage.getItem("currentScore"));
       this.bullets.splice(index, 1);
       return true;
     }
     return false;
   });
  }
  update(deltaTime) {
    this.bullets.forEach((bullet) => {
      bullet.update();
    });
  }

  draw(context) {
    // console.log(this.bullets.length);
    this.bullets.forEach((bullet, index) => {
      if (this.isBulletOffScreen(bullet)) {
        this.bullets.splice(index, 1);
        return;
      }
      bullet.draw(context);
    });
  }
}
