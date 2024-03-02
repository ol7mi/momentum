const API_KEY = "76c4e8e9f67abc1c050d7e8fde8076dd"
function onGeoOk(position){ //성공
    const lat = position.coords.latitude //위도
    const lon = position.coords.longitude //경도
    console.log(`You live in, ${lat} ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = `[${data.sys.country}] ${data.name}`
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError(){ //실패
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError) 