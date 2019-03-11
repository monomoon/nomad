//로컬저장소에 currentUser 값이 있는가?
// 있으면 form창은 가리고 h4는 보이면서 hello user 메세지가 나오도록
// 없으면 form창을 보여주고 값을 입력// 입력 받은 값은 localStorage.setItem("currentUser", 입력값)로 설정.

const form = document.querySelector(".js-form"),  // form 태그 전체
    input = form.querySelector("input"), //form 태그의 what is your name 있는 텍스트 입력창
    greeting = document.querySelector(".js-greetings"); // h4, 

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) { // 입력받은 텍스트값을 로컬스토리지에 "CurrentUser" , text로 저장
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { 
    event.preventDefault(); // 이벤트 발생할때 마다 창이 새로고침 되는것을 막는것?
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { // 폼을 화면에 보여주고 인풋 텍스트 값으로 이름값을 받아온다. submit 이벤트가 발생하면 handleSubmit을 수행
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) { // loadName에서 currentUser가 있다면.. css 클래스 조정으로 화면에 보이거나 안보이게 그리고 h4에 텍스트값을 넣는다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() { // 로컬저장소에 currentUser가 있는지 파악하고 없다면 그 값을 요구 있다면 출력
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName(); // 페이지가 열리면 로드네임을 실행
}

init();