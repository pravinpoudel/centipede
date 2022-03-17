export default class Paddle {
  constructor(game, padding, inputHandler, bulletController) {
    this.width = 50;
    this.height = 50;
    this.padding = 10;
    this.inputHandler = inputHandler;
    this.bulletController = bulletController;
    this.context = null;
    this.position = {
      x: game.GAME_WIDTH / 2 - this.width / 2,
      y: game.GAME_HEIGHT - this.height - this.padding,
    };

    this.cSpeed = {
      x: 200,
      y: 200,
    };

    this.spriteGunImage = new Image();
    this.spriteGunImage2 = new Image();

    this.spriteGunImage.src = "./assets/gun1.png";
    this.spriteGunImage2.src = "./assets/gun2.png";

    this.maxSpeed = 40;

    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveTop = this.moveTop.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveStop = this.moveStop.bind(this);
    this.shoot = this.shoot.bind(this);
    this.animateGun = this.animateGun.bind(this);
    this.animationGun2 = this.animationGun2.bind(this);

    this.inputHandler.addCommandHandler(37, this.moveLeft);
    this.inputHandler.addCommandHandler(39, this.moveRight);
    this.inputHandler.addCommandHandler(38, this.moveTop);
    this.inputHandler.addCommandHandler(40, this.moveDown);
    this.inputHandler.addCommandHandler(32, this.moveStop);
  }

  moveLeft(deltaTime) {
    console.log(deltaTime)
    // this.cSpeed.x = -this.maxSpeed;
    this.position.x -= this.cSpeed.x * 0.001* deltaTime;
    // this.cSpeed.y = 0;
  }
  moveRight(deltaTime) {
    // this.cSpeed.x = this.maxSpeed;
    this.position.x += this.cSpeed.x * 0.001 * deltaTime;
    // this.cSpeed.y = 0;
  }
  moveTop(deltaTime) {
    // this.cSpeed.y = -this.maxSpeed;
    this.position.y -= this.cSpeed.y * 0.001 * deltaTime;
    // this.cSpeed.x = 0;
  }

  moveDown(deltaTime) {
    // this.cSpeed.y = this.maxSpeed;
    this.position.y += this.cSpeed.y * 0.001* deltaTime;
    // this.cSpeed.x = 0;
  }

  moveStop(deltaTime) {
    this.shoot();
    // this.cSpeed.x = 0;
    // this.cSpeed.y = 0;
  }

  shoot() {
    this.animationGun2();
    const speed = 5;
    const delay = 5;
    const damage = 1;
    const bulletX = this.position.x + this.width / 2;
    const bulletY = this.position.y;
    this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
    // this.animateGun();
  }

  animateGun(){
    console.log(this.context)
    this.context.drawImage(this.spriteGunImage, this.position.x, this.position.y, this.width, this.height);
  }

  animationGun2(){
    this.context.drawImage(this.spriteGunImage2, this.position.x, this.position.y, this.width, this.height );
  }

  draw(context) {
    this.context = context;
    this.animationGun2();
    this.bulletController.draw(context);
  }

  update(deltaTime) {
    this.inputHandler.update(deltaTime);
    this.bulletController.update();
    // console.log(this.position)
    if (this.position.x > 800 || this.position.x < 0) {
      this.position.x = 0;
    }
  }
}
