const COORDS = 'coords';
const API_KEY = 'ed2bc89bd02cef4785676a780bc93cab';
const weather = document.querySelector(".js-dateweather");
const weatherText = weather.querySelector("h3");
const wIcon = weather.querySelector("img");
const wtemperture = weather.querySelector("p");

//fetch 
//then = 함수를 호출함(데이터가 다 들어올때 까지 기다린 후에)
function getWeather(lat, lon){ 
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const currentWeather = json.weather[0].main;
        const weatherID = json.weather[0].id;
        const place = json.name;
        
        wtemperture.innerHTML=`<span>${place}</span><br>  ${json.main.temp}℃`
        
        weatherText.innerText= ` ${currentWeather}`;
        
        //아이콘
        if(weatherID >= 200 && weatherID <300){
            wIcon.setAttribute("src","./images/thunderstorm.svg");
        }else if(weatherID >=300 && weatherID <400) {
            wIcon.setAttribute("src",'./images/shower.svg');
        }else if(weatherID >=500 && weatherID <600) {
            wIcon.setAttribute("src",'./images/rain.svg');
        }else if(weatherID >=600 && weatherID <700) {
            wIcon.setAttribute("src",'./images/snow.svg');
        }else if(weatherID >=700 && weatherID <800) {
            wIcon.setAttribute("src",'./images/haze.svg');
        }else if(weatherID == 800) {
            wIcon.setAttribute("src",'./images/sunny.svg');
        }else if(weatherID == 801 || weatherID ==802) {
            wIcon.setAttribute("src","./images/cloud.svg")
        }else if(weatherID == 803 || weatherID == 804){
            wIcon.setAttribute("src","./images/cloudy.svg")
        }

    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

//위도,경도 가져오기
function handleGeoSucces(position){ 
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //latitude: latitude,
        //longitude: longtitude 
        //변수의 이름과 키가 같은 이름이라면 아래 처럼 표현가능
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("cant access geo location")
}

//위치 정보 요청해서 가져오기
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

//위치정보 소유 체크
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords(); 
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();