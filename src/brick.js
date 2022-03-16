export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;
    this.width = 40;
    this.height = 20;
    this.game = game;
    this.doesExist = true;
  }
  update(deltaTime) {
    if (this.game.ball.position.y <= this.position.y + this.height) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.doesExist = false;
    }
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
