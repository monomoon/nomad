const body = document.querySelector("body");
const Sound = document.querySelector("audio");
const IMG_NUMBER = 9;

function paintImage(imgNumber) {
 
 if(imgNumber==0){
  body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
  Sound.setAttribute("src","./audio/water.wav");
  }else if( imgNumber==1){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.setAttribute("src","./audio/fire.wav");
  }else if(imgNumber==2){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.src = `audio/heaviestRain2.mp3`;
  }else if( imgNumber==3){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.setAttribute("src","./audio/space.mp3");
  }else if( imgNumber==4){
    body.style.backgroundImage =  `url(images/${imgNumber+1}.gif)`;
    Sound.src = `audio/lightRain.mp3`;
  }else if(imgNumber==5){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.setAttribute("src","./audio/fire.wav");
  }else if( imgNumber==6){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.setAttribute("src","./audio/fire.wav");
  }else if(imgNumber==7){
    body.style.backgroundImage = `url(images/${imgNumber+1}.gif)`;
    Sound.setAttribute("src","./audio/water.wav");
  }else{
    body.style.backgroundImage = "url(images/9.jpg)";
   }

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