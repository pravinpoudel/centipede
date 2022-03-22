import Ball from "./ball.js";
import Brick from "./brick.js";
import BulletController from "./bulletController.js";
import Centipede from "./centipede.js";
import CentipedeController from "./centipedeController.js";
import Enemy from "./enemy.js";
import EnemyController from "./enemyController.js";
import gameObject from "./gameobject.js";
import InputHandler from "./inputHandler.js";
import Paddle from "./paddle.js";
import Spider from "./spider.js";
import Sprite from "./sprite.js";

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
    this.gameOver = false;
    this.end = this.end.bind(this);
  }

  start(game, topCode, downCode, rightCode, leftCode) {
    // this.ball = new Ball(this);
    this.inputHandler1 = new InputHandler();
    this.bulletController1 = new BulletController();
    this.paddle = new Paddle(
      this,
      10,
      this.inputHandler1,
      this.bulletController1,
      topCode,
      downCode,
      rightCode,
      leftCode
    );

    this.enemeyController1 = new EnemyController(
      this.bulletController1,
      this.paddle
    );

    let centipedeController1 = new CentipedeController(10, 0, 50, 50);
    centipedeController1.createCentipede(4);

    // let bricks = [];
    // for (let i = 0; i < 7; i++) {
    //   let brick = new Brick(this, { x: i * 40, y: 400 });
    //   bricks.push(brick);
    // }

    let spider1 = new Spider(
      new Sprite("", 50, 50, 5),
      new gameObject(100, 100, { x: 10, y: 20 })
    );

    this.enemeyController1.createEnemy(50, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 20, true, "white", 4, "spidey");
    this.enemeyController1.createFlea(350, 20, 4);
    this.enemeyController1.createEnemy(500, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(650, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(750, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(350, 120, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(350, 120, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(350, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 420, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 420, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(250, 420, false, "green", 4, "flea");
    console.log(this.enemeyController1.enemies);

    this.gameObject = [
      // this.ball,
      this.bulletController1,
      this.paddle,
      this.enemeyController1,
      centipedeController1,
    ];
  }

  end() {
    this.gameOver = true;
  }

  update(deltaTime) {
    this.gameObject.forEach((element) => {
      console.log(element);
      element.update(deltaTime, this.end);
    });
    document.getElementById("current_scoreboard").innerText =
      localStorage.getItem("currentScore");
  }

  draw(context) {
    this.gameObject.forEach((element) => {
      element.draw(context);
    });
  }
}
