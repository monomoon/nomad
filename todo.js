const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDos) {
    return toDos.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify(...) : ...를 스트링 타입으로 바꿔준다.
  //localStorage는 String type으로 저장되기 때문에 ..
}

function paintToDo(text, text2) {
  const newId = toDos.length + 1;
  const li = document.createElement("li");
  const doneBtn = document.createElement("input");
  doneBtn.type = "checkbox";
  doneBtn.id = newId;
  const task = text2; 
  const label = document.createElement("label");
  label.setAttribute("for", "doneCheckBox");

  const delBtn = document.createElement("button");

  doneBtn.addEventListener("change", doneToDo);
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  label.innerText = text;

  li.appendChild(doneBtn);
  li.appendChild(label);
  li.appendChild(delBtn);

  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
    class: task
  };
  
  if(toDoObj.class == "off"){
    loadDoneTodo();
  }
  toDos.push(toDoObj);
  saveToDos();

  function loadDoneTodo(){
    label.classList.add("toDoDone");
  }

  function doneToDo(event) {
    const checkBox = event.target;
    const labelText = checkBox.nextSibling;
    
    if (labelText.classList != "toDoDone") {
      labelText.classList.add("toDoDone")
      toDoObj.class = "off";
      toDos.splice(newId-1,1,toDoObj);
    } else {
      labelText.classList.remove("toDoDone")
      toDoObj.class = "on"
      toDos.splice(newId-1,1,toDoObj);
    };
    
    
    saveToDos();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue == "") {

  } else {
    paintToDo(currentValue);
  }
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
      const parsedToDos = JSON.parse(loadedToDos);
      parsedToDos.forEach(function (toDo) {
        paintToDo(toDo.text, toDo.class);
      });
    }
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();