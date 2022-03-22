export default class Sprite {
  constructor(src, width, height, imageCount) {
    this.width = width;
    this.height = height;

    this.enemyImage = new Image();
    this.enemyImage.src = src;

    this.count = 0;
    this.index = 0;
    this.frameWidth = this.enemyImage.width / imageCount;
    this.frameHeight = this.enemyImage.height / imageCount;
  }

  draw(x, y, context) {
    context.drawImage(
      this.enemyImage,
      this.index * this.frameWidthPlusOffset,
      0,
      x,
      y,
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
