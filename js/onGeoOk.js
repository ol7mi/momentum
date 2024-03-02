function onGeoOk(position) {
  const lat = position.coords.latitude; //위도
  const lon = position.coords.longitude; //경도
  console.log(`You live in, ${lat} ${lon}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);
    });
}
