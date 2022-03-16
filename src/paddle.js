export default class Paddle {
  constructor(game, padding, inputHandler, bulletController) {
    this.width = 50;
    this.height = 50;
    this.padding = 10;
    this.inputHandler = inputHandler;
    this.bulletController = bulletController;
    this.position = {
      x: game.GAME_WIDTH / 2 - this.width / 2,
      y: game.GAME_HEIGHT - this.height - this.padding,
    };

    this.cSpeed = {
      x: 0,
      y: 0,
    };

    this.maxSpeed = 40;

    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveTop = this.moveTop.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveStop = this.moveStop.bind(this);

    this.inputHandler.addCommandHandler(37, this.moveLeft);
    this.inputHandler.addCommandHandler(39, this.moveRight);
    this.inputHandler.addCommandHandler(38, this.moveTop);
    this.inputHandler.addCommandHandler(40, this.moveDown);
    this.inputHandler.addCommandHandler(32, this.moveStop);
  }

  moveLeft() {
    this.cSpeed.x = -this.maxSpeed;
    this.cSpeed.y = 0;
  }
  moveRight() {
    this.cSpeed.x = this.maxSpeed;
    this.cSpeed.y = 0;
  }
  moveTop() {
    this.cSpeed.y = -this.maxSpeed;
    this.cSpeed.x = 0;
  }

  moveDown() {
    this.cSpeed.y = this.maxSpeed;
    this.cSpeed.x = 0;
  }

  moveStop() {
    this.bulletController.shoot();
    this.cSpeed.x = 0;
    this.cSpeed.y = 0;
  }

  shoot() {
    const speed = 5;
    const delay = 7;
    const damage = 1;
    const bulletX = this.position.x + this.width / 2;
    const bulletY = this.position.y;
    this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
  }

  draw(context) {
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.shoot();
  }

  update(deltaTime) {
    this.inputHandler.update();

    this.position.x += this.cSpeed.x / deltaTime;
    this.position.y += this.cSpeed.y / deltaTime;

    if (this.position.x > 800 || this.position.x < 0) {
      this.position.x = 0;
    }
  }
}
