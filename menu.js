function viewHighScore() {
  let highScore = localStorage.getItem("highScores");
  if (!highScore) {
    highScore = 0;
  } else {
    let scoreArray = JSON.parse(localStorage.getItem("highScores"));
    highScore = scoreArray[0];
    let list = document.getElementById("myScores");
    let highScores = JSON.parse(localStorage.getItem("highScores"));
    highScores.forEach((value) => {
      let li = document.createElement("li");
      li.innerText = value;
      list.appendChild(li);
    });
    console.log(highScore);
  } 
  document.getElementById("customControl1").style.display = "block";
  document.getElementById("highScoreBoard").style.display = "block";
  document.getElementById("highScoreBoard").innerText = highScore;
}

function customizeControl() {
  //   document.getElementsByClassName("button_body")[0].style.display = "none";
  document.getElementById("customControl1").style.display = "none";
  document.getElementById("customControl").style.display = "block";
}

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    console.log("esc pressed");
    document.getElementById("game_end_msg").style.display = "none";
    document.getElementById("credit").style.display = "none";
    document.getElementById("customControl1").style.display = "none";
    document.getElementById("customControl").style.display = "none";
  }
});

function viewCredit() {
  document.getElementById("credit").style.display = "block";
}
