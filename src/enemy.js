export default class Enemy {
  constructor(x, y, falling, color, health, type) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.health = health;
    this.context = null;
    this.width = 12;
    this.height = 12;
    this.enemyImage = new Image();
    this.frameWidthPlusOffset = 90;
    this.frameWidth = 8;
    this.frameHeight = 8;
    this.falling = falling;
    this.count = 0;
    this.cspeedX = 100;
    this.cspeedY = 100;
    this.enemyImage.src = "./assets/mushroom.png";
    this.type = type;
    
    if (type == "spidey") {
      this.frameWidth = 16;
      this.frameHeight = 8;
      this.enemyImage.src = "./assets/spider.png";
    }

    if (type == "flea") {
      this.frameWidth = 168;
      this.frameHeight = 80;
      this.enemyImage.src = "./assets/flea.png";
    }

    if (type == "scorpion") {
      this.frameWidth = 16;
      this.frameHeight = 8;
      this.enemyImage.src = "./assets/scorpion.png";
    }
    
    this.index = 0;
    this.type = type;
    this.drawSprite = this.drawSprite.bind(this)
  }

  takeDamage(damage) {
    this.health -= damage;
  }

  update(timeStamp) {
    // this.x += 200 * (2 * Math.random() - 1) * 0.001 * timeStamp;

    if(this.type== "scorpion"){
      this.x += this.cspeedX * 0.001 * timeStamp;
    }
    
    if(this.type== "spidey"){
      this.cspeedX = this.x < 0 || this.x > 800 - this.width? (-1 * this.cspeedX): this.cspeedX;
      this.cspeedY = this.y < 0 || this.y > 770 - this.height? (-1 * this.cspeedY): this.cspeedY;
      this.x += this.cspeedX * 0.001 * timeStamp;
      this.y += this.cspeedY * 0.001 * timeStamp;
      // if (this.x < 0 || this.x > 800 - this.width) {
      //   this.x = 400;
      // }
  
    }
  }

  drawSprite() {
    this.context.drawImage(
      this.enemyImage,
      this.index * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    if (this.type == "spidey") {
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

  draw(context) {
    this.context = context;
    context.filLStyle = this.color;
    if (this.health > 1) {
      if(this.type == "mushroom"){
        this.index = 4 - this.health;
      }
      this.drawSprite();
    } else {
      console.log("mushroom is not here, correct your code");
    }
    // context.fillRect(this.x, this.y, this.width, this.height);
    // context.strokeRect(this.x, this.y, this.width, this.height);
    // context.fillStyle = "white";
    // context.font = "25px Arial";
    // context.fillText(
    //   this.health,
    //   this.x + this.width / 4,
    //   this.y + this.height / 1.5
    // );
    // context.fillStyle = "black";
  }
}
