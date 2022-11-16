// Form Submission
let Elcityform = document.getElementById("city");
let Elstateform = document.getElementById("state");
let ElSubmit = document.getElementById("submit");
let cityform;
let stateform;
let getLatLon;
let lat;
let lon;
ElSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  cityform = Elcityform.value;
  stateform = Elstateform.value;

  // Lat Lon from city state
  getLatLon =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityform +
    "," +
    stateform +
    ",US&limit=5&appid=5082e4062959ff23200dac304c5cf020";

  function getLatLonFunc() {
    fetch(getLatLon)
      .then(function (reponse) {
        return reponse.json();
      })
      .then(function (data) {
        console.log(data);
        lat = data[0].lat;
        lon = data[0].lon;
        weatherforecast(lat, lon);
      });
  }
  getLatLonFunc();
  console.log(lat);
});
function weatherforecast(lat, lon) {
  let exStlForecastWeather =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=5082e4062959ff23200dac304c5cf020";

  function getWeatherForecast() {
    fetch(exStlForecastWeather)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var cityStlNoontemp1 = document.createElement("h3");
        var cityStlNoontemp2 = document.createElement("h3");
        var position = document.getElementById("Forecast");
        cityStlNoontemp1.textContent =
          "One Day Forecast " + data.list[2].main.temp;
        cityStlNoontemp2.textContent =
          "Two Day Forecast " + data.list[9].main.temp;
        position.appendChild(cityStlNoontemp1);
        position.appendChild(cityStlNoontemp2);
      });
  }

  // current weather
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

        var position = document.getElementById("Current");
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
}
