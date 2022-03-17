export default class InputHandler {
  constructor() {
    this.keys = {};
    this.handlers = {};

    this.addKey = this.addKey.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.clearKey = this.clearKey.bind(this);

    this.addCommandHandler = this.addCommandHandler.bind(this);
    window.addEventListener("keydown", this.addKey);
    window.addEventListener("keyup", this.removeKey);
    window.addEventListener("blur", this.clearKey);
  }

  addKey(e) {
    this.keys[e.keyCode] = true;
  }

  removeKey(e) {
    delete this.keys[e.keyCode];
  }

  clearKey(e) {
    console.log("blurred");
    // this.keys = {};
    // this.handlers = {};
  }

  addCommandHandler(keyCode, method) {
    console.log(keyCode, method);
    this.handlers[keyCode] = method;
  }

  update(timeStamp) {
    for (const key in this.keys) {
      if ((this, this.handlers[key])) this.handlers[key](timeStamp);
      else {
        console.log("press space to shoot");
        console.warn("we only support WASD and key up-down-right-left");
      }
    }
  }
}
