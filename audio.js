const soundBtn = document.querySelector('.soundBtn');
const bgSound = document.querySelector('audio');
const imgNumber = document.querySelector('.bgImage');
const volumeControl = document.querySelector('.volControl');
const volumeText = document.querySelector('.volumeText')

bgSound.volume = 0.5;


function playPause(){
    if(bgSound.paused){
        bgSound.play();
        soundBtn.style.backgroundImage =`url(images/pause.png)`;
    }else{
        bgSound.pause();
        soundBtn.style.backgroundImage =`url(images/start.png)`;
    }
}

function volume() {
    bgSound.volume = this.value/100; 
    volumeText.innerText = parseInt(this.value);
}

volumeControl.addEventListener("change", volume);
soundBtn.addEventListener("click",playPause);

