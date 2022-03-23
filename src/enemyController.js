import Enemy from "./enemy.js";
import Flea from "./flea.js";
export default class EnemyController {
  constructor(bulletController, player) {
    this.enemies = [];
    this.player = player;
    this.bulletController = bulletController;
    this.mushroomSound = new Audio();
    this.spiderSound = new Audio();
    this.gameFinish = new Audio();
    this.mushroomSound.src = "./assets/audio/mushroomAudio.flac";
    this.spiderSound.src = "./assets/audio/spiderAudio.flac";
    this.gameFinish.src = "./assets/audio/game_end.mp3";
  }

  createEnemy(x, y, falling, color, health, type) {
    let enemy = new Enemy(x, y, falling, color, health, type);
    this.enemies.push(enemy);
  }

  createFlea(x, y, health) {
    let enemy = new Flea(x, y, health, this);
    this.enemies.push(enemy);
  }

  storeScore() {
    let highScoreList = localStorage.getItem("highScores");
    highScoreList = JSON.parse(highScoreList);
    let currentScore = parseInt(localStorage.getItem("currentScore"));
    highScoreList[highScoreList.length] = currentScore;
    highScoreList.sort(function (a, b) {
      return b - a;
    });
    console.log(highScoreList);
    highScoreList = highScoreList.slice(0, 5);
    console.log(highScoreList);
    highScoreList = JSON.stringify(highScoreList);
    console.log(highScoreList);
    localStorage.setItem("highScores", highScoreList);
    console.log(localStorage.getItem("highScores"));
    
  }

  update(deltaTime, gameOver) {
    this.enemies.forEach((enemy, index) => {
      if (enemy.health <= 0 || enemy.y > 800 - enemy.height) {
        this.enemies.splice(index, 1);
        return;
      }

      if (this.bulletController.collideWith(enemy)) {
        if (enemy.falling) {
          this.spiderSound.play();
        } else {
          this.mushroomSound.play();
        }
        if (enemy.health <= 1) {
          this.enemies.splice(index, 1);
        }
      }

      if (enemy.type == "scorpio" && enemy.x > 800 - enemy.width) {
        this.enemies.splice(index, 1);
      }

      if (enemy.type == "flea") {
        console.log(this.player.collideWith(enemy));
      }
      // if (this.player.collideWith(enemy) || enemy.y > 800 - enemy.height) {
      //   gameOver();
      //   this.storeScore();
      // }

      if (this.player.collideWith(enemy)) {
        gameOver();
        this.storeScore();
      }
      enemy.update(deltaTime);
    });
  }

  draw(context) {
    this.enemies.forEach((enemy) => {
      enemy.draw(context);
    });
  }
}
