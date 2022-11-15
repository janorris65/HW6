let exStlWeather =
  "http://api.openweathermap.org/data/2.5/weather?q=63116,US&APPID=5082e4062959ff23200dac304c5cf020";

function getWeather() {
  fetch(exStlWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityStl = document.createElement("h3");
      var weatherStl = document.createElement("p");
      var tempStl = document.createElement("p");
      var position = document.querySelector("h1");
      cityStl.textContent = data.name;
      weatherStl.textContent = data.weather[0].main;
      tempStl.textContent = data.main.temp;
      position.appendChild(cityStl);
      position.appendChild(weatherStl);
      position.appendChild(tempStl);
    });
}
getWeather();
