export default class Centipede {
  constructor(x, y) {
    console.log(x);
    this.x = x;
    this.y = y;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.head = [this.x, this.y];
    this.enemyImage = new Image();
    this.enemyImage.src = "./assets/spidey.png";
    this.frameWidthPlusOffset = 90;
    this.frameWidth = 78;
    this.frameHeight = 80;
    this.index = 0;
    this.count = 0;
  }

  draw(context) {
    context.drawImage(
      this.enemyImage,
      this.index * this.frameWidthPlusOffset,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.count++;
    if (this.count > 10) {
      this.index++;
      this.count = 0;
    }
    if (this.index > 4) {
      this.index = 0;
    }
  }
}
