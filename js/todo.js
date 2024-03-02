const todoForm = document.getElementById("todoForm")
const todoFormInput = todoForm.querySelector("input")
const todoList = document.getElementById("todoList")
const TODO_KEY = "todos"
// const toDos = [] //비어있으면 나중에 새로고침하고 다시 리스트를 작성하면 기존 것들이 삭제
let toDos = [] //그래서 업데이트가 가능한 let을 사용함

function saveToDos(){ //5. 함수실행 todo 들을 저장
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos))
}
function deletes (event){
    /** 
     * console.log(event.target.parentElement); 
     * 
     * 이벤트에 대한 정보를 얻고 있다 하지만 event 만은 많은 정보를 주지 않는다 event.target을 살펴봐야 한다 target 은 클릭된 HTML 엘리먼트이다
     * 그리고 모든  HTML 엘리먼트에는 하나 이상의 프로퍼티가 있다
     * parentElement는 클릭된 엘리먼트의 부모이다 여기서는 <li> 가 부모다
     * */ 
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id))
    saveToDos()
}
function paintToDo (newTodo){
    const newli = document.createElement("li") 
    newli.id = newTodo.id
    const newspan = document.createElement("span") 
    newspan.innerText = newTodo.text //Text 변경

    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", deletes)

    newli.appendChild(newspan) //li 부모 안에 span 자식추가 (append은 맨 마지막)
    newli.appendChild(button) //li 부모 안에 button 자식추가
    todoList.appendChild(newli)
}
function handleToDoSubmit (event){
    event.preventDefault()
    const newTodo = todoFormInput.value
    console.log(todoFormInput.value);
    todoFormInput.value = "" //2. input을 비우고
    console.log(newTodo, todoFormInput.value);
    const objNewTodo = {
        text : newTodo ,
        id: Date.now() ,
    }
    //input에서 value를 얻어서 paintToDo 함수에 그 값을 보낸다
    toDos.push(objNewTodo) //3. 그 텍스트를 toDos array에 push하고
    paintToDo(objNewTodo) //4. 화면에 todo를 그려주고
    saveToDos()
}
todoForm.addEventListener("submit", handleToDoSubmit) //1. 사용자가 submit 하면 


// function sayHello (item){
//     console.log(`this is my ${item}`)
// }
const saveTD = localStorage.getItem(TODO_KEY)
// console.log(saveTD);
if(saveTD !== null){
    const parseTodo = JSON.parse(saveTD)
    toDos = parseTodo
    console.log(parseTodo); // 덮어쓰기 방지용으로, parseTodo를 빈 배열에 할당해줌으로서 전에 있던 것들을 복원시킴
    // parseTodo.forEach((item) => console.log(`this is my ${item}`));
    parseTodo.forEach(paintToDo);
}