export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");
    this.speed = {
      x: 2,
      y: 2,
    };
    this.position = { x: 10, y: 10 };
    this.size = 16;
    this.game = game;
    this.GAME_WIDTH = game.GAME_WIDTH;
    this.GAME_HEIGHT = game.GAME_HEIGHT;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    let ballBottomPosition = this.position.y + this.size;

    let ballRightPosition = this.position.x + this.size;
    let ballLeftPosition = this.position.x;

    let paddleTopPosition = this.game.paddle.position.y;
    let paddleRightPosition =
      this.game.paddle.position.x + this.game.paddle.width;
    let paddleLeftPosition = this.game.paddle.position.x;

    if (
      ballLeftPosition <= paddleRightPosition &&
      ballRightPosition >= paddleLeftPosition &&
      ballBottomPosition >= paddleTopPosition
    ) {
      this.speed.y = -this.speed.y;
    }

    if (this.position.x < 0 || this.position.x + this.size >= this.GAME_WIDTH)
      this.speed.x = -this.speed.x;
    if (this.position.y <= 0) {
      this.speed.y = -this.speed.y;
    }
    if (this.position.y + this.size >= this.GAME_HEIGHT) {
      console.log("dead");
      this.speed.y = -this.speed.y;
    }
  }
}
