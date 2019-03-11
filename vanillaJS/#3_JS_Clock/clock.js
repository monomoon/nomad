const clockContainer = document.querySelector(".js-clock"), // div 선택 콤마로 const 선언을 연결
      clockTitle = clockContainer.querySelector("h1"),  // div 안 h1 00:00 선택
      dateContainer = document.querySelector(".js-dateWeather"),
      dateView = dateContainer.querySelector("h2");



function getTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // clockTitle.innerText = (hours<10 ? "0"+hours : hours) + ":" + (minutes<10 ? "0"+minutes : minutes)+ ":" + (seconds < 10 ? "0"+seconds : seconds)
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` :seconds}`

    dateView.innerText = `${year}년 ${month+1}월 ${day}일`

}

function init() {
    setInterval(getTime,1000);
}

init();

// setInterval(fn, 1000) 

// function sayHi() {console.log("hi")} // sayhi라는 함수 생성
// setInterval(sayHi, 1000) // sayHi 함수를 1초마다 실행하는것