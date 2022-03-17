import Ball from "./ball.js";
import Brick from "./brick.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";
import EnemyController from "./enemyController.js";
import InputHandler from "./inputHandler.js";
import Paddle from "./paddle.js";

export default class Game {
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

  constructor(gameWidth, gameHeight) {
    this.GAME_WIDTH = gameWidth;
    this.GAME_HEIGHT = gameHeight;
  }

  start(game) {
    // this.ball = new Ball(this);
    this.inputHandler1 = new InputHandler();
    this.bulletController1 = new BulletController();
    this.enemeyController1 = new EnemyController(this.bulletController1);
    this.paddle = new Paddle(
      this,
      10,
      this.inputHandler1,
      this.bulletController1
    );

    // let bricks = [];
    // for (let i = 0; i < 7; i++) {
    //   let brick = new Brick(this, { x: i * 40, y: 400 });
    //   bricks.push(brick);
    // }

    this.enemeyController1.createEnemy(50, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 20, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(350, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(500, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(650, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(750, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(350, 120, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(450, 120, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(50, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(150, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(250, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(350, 420, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(250, 420, false, "green", 4, "mushroom");
    console.log(this.enemeyController1.enemies);

    this.gameObject = [
      // this.ball,
      this.bulletController1,
      this.paddle,
      this.enemeyController1,
    ];
  }

  update(deltaTime) {
    this.gameObject.forEach((element) => {
      element.update(deltaTime);
    });
  }

  draw(context) {
    this.gameObject.forEach((element) => {
      element.draw(context);
    });
  }
}
