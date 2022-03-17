import Enemy from "./enemy.js";

export default class EnemyController {
  constructor(bulletController) {
    this.enemies = [];
    this.bulletController = bulletController;
  }

  createEnemy(x, y, falling, color, health, type) {
    let enemy = new Enemy(x, y, falling, color, health, type);
    this.enemies.push(enemy);
  }

  update(deltaTime) {
    this.enemies.forEach((enemy, index) => {
      if (enemy.health <= 0 || enemy.y > 800 - enemy.height) {
        this.enemies.splice(index, 1);
        return;
      }
      if (this.bulletController.collideWith(enemy)) {
        if (enemy.health <= 1) {
          this.enemies.splice(index, 1);
        }
      } else {
        enemy.update(deltaTime);
      }
    });
  }

  draw(context) {
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
}
