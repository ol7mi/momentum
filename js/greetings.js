const formLogin = document.querySelector("#formLogin")
const formLoginInput = document.querySelector("#formLogin input")
const title = document.querySelector("#greetings")
const USERNAMES = "userName"
const HIDDENS = "hidden"

function LoginOn (event){
    event.preventDefault();
    formLogin.classList.add(HIDDENS)
    const newUserName = formLoginInput.value
    localStorage.setItem(USERNAMES, newUserName)
    titleFun(newUserName)
}
function titleFun (a){
    // title.innerText = `안녕 나는 ${a}`
    title.classList.remove(HIDDENS)
    title.innerText = `안녕 나는 ${a}`
}

const nameGet = localStorage.getItem(USERNAMES)
if(nameGet === null){
    formLogin.classList.remove(HIDDENS)
    formLogin.addEventListener("submit",LoginOn)
}else{
    titleFun(nameGet)
}