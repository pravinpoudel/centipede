export default class gameObject {
  constructor(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }
  update(timeStamp) {
    this.x += this.velocity.x * timeStamp * 0.001;
    this.y += this.velocity.y * timeStamp * 0.001;
  }
}
