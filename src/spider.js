export default class Spider {
  constructor(sprite, gameObject) {
    this.sprite = sprite;
    this.gameObject = gameObject;
  }

  update(timeStamp) {
    this.gameObject.update(timeStamp);
  }

  draw(context) {
    this.sprite.draw(this.gameObject.x, this.gameObject.y, context);
  }
}
