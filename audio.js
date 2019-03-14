const soundBtn = document.querySelector('.soundBtn');
const bgSound = document.querySelector('audio');
const imgNumber = document.querySelector('.bgImage');
const volumeControl = document.querySelector('.volControl');
const volumeText = document.querySelector('.volumeText')
bgSound.volume = 0.5;

function playPause(){
    if(bgSound.paused){
        bgSound.play();
    }else{
        bgSound.pause();
        
    }
}

function volume() {
    bgSound.volume = this.value/100; // this.value ?? 
    volumeText.innerText = parseInt(this.value);
}

volumeControl.addEventListener("change", volume);
soundBtn.addEventListener("click",playPause);

/*
이미지마다 재생되는 소리가 다르게 설정

1. 버튼에 이벤트리스너 추가
2. 클릭했을대 소리 온,오프
3. 이벤트 일어났을때 이미지 교체

볼륨 컨트롤 바?

슬라이드 바의 변화된 최종 값을 볼륨에 대입

*/