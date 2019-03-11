const body = document.querySelector("body");
const rainSound = document.querySelector("audio");
const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  if(imgNumber==4){
    image.src = `images/${imgNumber +1}.gif`;
    rainSound.setAttribute("autoplay",'true');
    rainSound.setAttribute("loop","true");
  }else if(imgNumber==5){
    image.src = `images/${imgNumber +1}.gif`;
    rainSound.setAttribute("src","./audio/heaviestRain2.mp3")
    rainSound.setAttribute("autoplay","true");
    rainSound.setAttribute("loop","true");
  }else{
  image.src = `images/${imgNumber + 1}.jpg`;}
  image.classList.add("bgImage"); 
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();