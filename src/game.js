import Ball from "./ball.js";
import Brick from "./brick.js";
import BulletController from "./bulletController.js";
import Centipede from "./centipede.js";
import CentipedeController from "./centipedeController.js";
import Enemy from "./enemy.js";
import EnemyController from "./enemyController.js";
import gameObject from "./gameobject.js";
import InputHandler from "./inputHandler.js";
import Player from "./paddle.js";
import Spider from "./spider.js";
import Sprite from "./sprite.js";

export default class Game {
  colors = [
    "red",
    "blue",
    "red",
    "green",
    "yellow",
    "orange",
    "white",
    "brown",
    "pink",
  ];

  constructor(gameWidth, gameHeight) {
    this.GAME_WIDTH = gameWidth;
    this.GAME_HEIGHT = gameHeight;
    this.gameOver = false;
    this.end = this.end.bind(this);
  }

  start(game, topCode, downCode, rightCode, leftCode, life, score) {
    // this.ball = new Ball(this);
    this.inputHandler1 = new InputHandler();
    this.bulletController1 = new BulletController();
    this.downCode = downCode;
    this.topCode = topCode;
    this.rightCode = rightCode;
    this.leftCode = leftCode;
    this.player = new Player(
      this,
      10,
      this.inputHandler1,
      this.bulletController1,
      topCode,
      downCode,
      rightCode,
      leftCode,
      20,
      life,
      score
    );
    document.getElementById("lives_scoreboard").innerText = this.player.life;

    this.enemeyController1 = new EnemyController(
      this.bulletController1,
      this.player
    );

    let centipedeController1 = new CentipedeController(10, 0, 50, 50);
    centipedeController1.createCentipede(1);

    // let bricks = [];
    // for (let i = 0; i < 7; i++) {
    //   let brick = new Brick(this, { x: i * 40, y: 400 });
    //   bricks.push(brick);
    // }

    let spider1 = new Spider(
      new Sprite("", 50, 50, 5),
      new gameObject(100, 100, { x: 10, y: 20 })
    );

    this.enemeyController1.createEnemy(50, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 420, true, "white", 4, "spidey");
    this.enemeyController1.createFlea(350, 20, 4);
    this.enemeyController1.createEnemy(500, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(650, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(750, 20, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(600, 20, false, "green", 4, "scorpio");
    this.enemeyController1.createEnemy(120, 320, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(290, 620, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(0, 520, true, "green", 4, "spidey");
    this.enemeyController1.createEnemy(0, 190, true, "green", 4, "scorpion");
    this.enemeyController1.createEnemy(550, 250, true, "green", 4, "scorpion");
    this.enemeyController1.createEnemy(40, 400, true, "green", 4, "scorpion");
    this.enemeyController1.createEnemy(675, 590, true, "green", 4, "scorpion");
    this.enemeyController1.createEnemy(350, 120, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(350, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 320, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 420, false, "green", 4, "mushroom");
    this.enemeyController1.createEnemy(200, 420, false, "green", 4, "mushroom");
    this.enemeyController1.createFlea(40, 60, 4);
    this.enemeyController1.createFlea(280, 84, 4);
    // this.enemeyController1.createEnemy(20, 40, false, "green", 4, "flea");
    // this.enemeyController1.createEnemy(250, 420, false, "green", 4, "flea");
    console.log(this.enemeyController1.enemies);

    this.gameObject = [
      // this.ball,
      this.bulletController1,
      this.player,
      this.enemeyController1,
      centipedeController1,
    ];
  }

  end() {
    this.player.life = this.player.life - 1;
    document.getElementById("lives_scoreboard").innerText = this.player.life;
    if (this.player.life <= 0) {
      this.gameOver = true;
      document.getElementById("game_end_msg").style.display = "block";
      let list = document.getElementById("myScores");
      let highScores = JSON.parse(localStorage.getItem("highScores"));
      highScores.forEach((value)=>{
        let li = document.createElement("li");
        li.innerText = value;
        list.appendChild(li);
      });
      console.log(highScores)
      // document.getElementById("").innerHTML = localStorage.getItem();
      this.enemeyController1.gameFinish.play();
    } else {
      let prevScore = localStorage.getItem("currentScore");
      this.start(
        this,
        this.topCode,
        this.downCode,
        this.rightCode,
        this.leftCode,
        this.player.life,
        prevScore
      );
    }
  }

  update(deltaTime) {
    this.gameObject.forEach((element) => {
      element.update(deltaTime, this.end);
    });
    document.getElementById("current_scoreboard").innerText =
      localStorage.getItem("currentScore");
  }

  draw(context) {
    this.gameObject.forEach((element) => {
      element.draw(context);
    });
  }
}
