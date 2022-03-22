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
    if(e.keyCode != 32)
    this.keys[e.key] = true;
    else if(e.keyCode == 32){
      this.keys[e.keyCode] = true;
    }
  }

  removeKey(e) {
    if(e.keyCode != 32){
        delete this.keys[e.key];
    }

    else if(e.keyCode == 32){
      delete this.keys[e.keyCode];
    }

  }

  clearKey(e) {
    console.log("blurred");
    // this.keys = {};
    // this.handlers = {};
  }

  addCommandHandler(key, method) {
    console.log(key, method);
    this.handlers[key] = method;
  }

  update(timeStamp) {
    for (const key in this.keys) {
      if ((this, this.handlers[key])) this.handlers[key](timeStamp);
      else {
        // console.log("press space to shoot");
        // console.warn("we only support WASD and key up-down-right-left");
      }
    }
  }
}
