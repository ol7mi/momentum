const clock = document.querySelector("h2#clock")

function clocks (){
    const getDate = new Date()
    const getHours = String(getDate.getHours()).padStart(2,"0")
    const getMinutes = String(getDate.getMinutes()).padStart(2,"0")
    const getSeconds = String(getDate.getSeconds()).padStart(2,"0")
    clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`
}
clocks()
setInterval(clocks,1000)