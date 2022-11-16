let exStlForecastWeather =
  "http://api.openweathermap.org/data/2.5/forecast?lat=38&lon=-89&appid=5082e4062959ff23200dac304c5cf020";

function getWeatherForecast() {
  fetch(exStlForecastWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityStlNoontemp1 = document.createElement("h3");
      var cityStlNoontemp2 = document.createElement("h3");
      var position = document.querySelector("h2");
      cityStlNoontemp1.textContent =
        "One Day Forecast " + data.list[2].main.temp;
      cityStlNoontemp2.textContent =
        "Two Day Forecast " + data.list[9].main.temp;
      position.appendChild(cityStlNoontemp1);
      position.appendChild(cityStlNoontemp2);
    });
}

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
getWeatherForecast();
