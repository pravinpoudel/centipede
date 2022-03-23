import Centipede from "./centipede.js";
export default class CentipedeController {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.tails = [];
    this.head = [this.x, this.y];
    this.moveVertical = false;
    this.moveHorizontal = true;
    this.h_direction = 1;
    this.width = width;
    this.xSpeed = 100;
  }

  createCentipede(count) {
    this.total = count;
    for (let i = 0; i < count; ++i) {
      let newCentipedenew = new Centipede(this.x + i * this.width, this.y);
      console.log(newCentipedenew);
      this.tails.push(newCentipedenew);
    }
  }

  move() {
    for (let i = 1; i < this.total; i++) {
      this.tails[i - 1].x = this.tails[i].x;
      this.tails[i - 1].y = this.tails[i].y;
    }
  }

  update(timeStamp) {
    this.move();
    if (this.x + this.width == 800) {
      this.h_direction = -1;
      this.y += this.height;
    }
    if (this.x + this.width == 0) {
      this.h_direction = 1;
      this.y += this.height;
    }
    this.move();
    this.tails[this.total - 1].x += this.h_direction * this.width;
    this.x = this.tails[this.total - 1].x;
    this.tails[this.total - 1].y = this.y;
  }

  draw(context) {
    this.tails.forEach((element, index) => {
      element.draw(context);
    });
  }
}
