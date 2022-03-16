import Ball from "./ball.js";
import Brick from "./brick.js";
import BulletController from "./bulletController.js";
import InputHandler from "./inputHandler.js";
import Paddle from "./paddle.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.GAME_WIDTH = gameWidth;
    this.GAME_HEIGHT = gameHeight;
  }

  start(game) {
    this.ball = new Ball(this);
    this.inputHandler1 = new InputHandler();
    this.bulletController1 = new BulletController();
    this.paddle = new Paddle(
      this,
      10,
      this.inputHandler1,
      this.bulletController1
    );
    let bricks = [];
    for (let i = 0; i < 7; i++) {
      let brick = new Brick(this, { x: i * 40, y: 400 });
      bricks.push(brick);
    }
    this.gameObject = [
      this.ball,
      this.bulletController1,
      this.paddle,
      ...bricks,
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
