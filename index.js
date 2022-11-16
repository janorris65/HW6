// Form Submission
let Elcityform = document.getElementById("city");
let Elstateform = document.getElementById("state");
let ElSubmit = document.getElementById("submit");
let cityform;
let stateform;
let getLatLon;
let lat;
let lon;
// This 'click' gets the Lat Lon from geo, passes info to and calls main function "weathercast" to populate page.
ElSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  cityform = Elcityform.value;
  stateform = Elstateform.value;

  // Lat Lon from city state, calls main func "weathercast" to populate the page
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
        weathercast(lat, lon);
      });
  }
  getLatLonFunc();
  console.log(lat);
});
// Main Function to populate page, variable followed by its fetch function
function weathercast(lat, lon) {
  let ForecastWeather =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=5082e4062959ff23200dac304c5cf020";

  function getWeatherForecast() {
    fetch(ForecastWeather)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var forecastCityName = document.createElement("h3");
        var cityForecastNoontemp1 = document.createElement("p");
        var cityForecastNoontemp2 = document.createElement("p");
        var position = document.getElementById("Forecast");
        forecastCityName.textContent = cityform + " , " + stateform;
        cityForecastNoontemp1.textContent =
          "One Day Out Forecast: " + data.list[2].main.temp;
        cityForecastNoontemp2.textContent =
          "Two Day Out Forecast: " + data.list[9].main.temp;
        position.appendChild(forecastCityName);
        position.appendChild(cityForecastNoontemp1);
        position.appendChild(cityForecastNoontemp2);
      });
  }

  // current weather
  let currentWeather =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=5082e4062959ff23200dac304c5cf020";
  function getWeather() {
    fetch(currentWeather)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var cityCurrent = document.createElement("h3");
        var weatherCurrent = document.createElement("p");
        var tempCurrent = document.createElement("p");
        var humidityCurrent = document.createElement("p");
        var windspeedCurrent = document.createElement("p");

        var position = document.getElementById("Current");
        cityCurrent.textContent = data.name;
        weatherCurrent.textContent = "Conditions: " + data.weather[0].main;
        tempCurrent.textContent = "Temperature: " + data.main.temp;
        humidityCurrent.textContent = "Humidity: " + data.main.humidity;
        windspeedCurrent.textContent = "WindSpeed: " + data.wind.speed;
        position.appendChild(cityCurrent);
        position.appendChild(weatherCurrent);
        position.appendChild(tempCurrent);
        position.appendChild(windspeedCurrent);
        position.appendChild(humidityCurrent);
      });
  }
  getWeather();
  getWeatherForecast();
}

function currentTime() {
  var crtTime = document.createElement("h3");
  var today = new Date();
  crtTime.textContent = today.toDateString();
  var position = document.querySelector("h1");
  position.appendChild(crtTime);
}
currentTime();
