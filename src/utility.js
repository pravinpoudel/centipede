function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function doesIntersect(object1Min, object1Max, value) {
  const isInside =
    object1Min.x < value.x ||
    object1Max.x > value.x ||
    object1Min.y < value.y ||
    object1Max.y > value.y;
  return !isInside;
}

function loadSound(source, id) {
  let sound1 = new Audio();
  sound1.src = source;
  return sound1;
}
const sounds = {};
sounds["shoot"] = loadSound("audio/sound-1.mp3");
sounds["shoot"].play();

