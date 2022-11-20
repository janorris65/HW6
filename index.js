// Form Submission
let Elcityform = document.getElementById("city");
let Elstateform = document.getElementById("state");
let ElSubmit = document.getElementById("submit");
let clearbutton = document.getElementById("clearbutton");
let cityform;
let stateform;
let getLatLon;
let lat;
let lon;
const citylist = [];
let something;
// This 'click' gets the Lat Lon from geo, passes info to and calls main function "weathercast" to populate page. Initiates saveCast
ElSubmit.addEventListener("click", function (event) {
  //event.preventDefault();
  cityform = Elcityform.value;
  stateform = Elstateform.value;
  saveCast(cityform, stateform);

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
        let forecastCityName = document.getElementById("forecastCityName");
        forecastCityName.textContent = cityform + " , " + stateform;
        // date
        var cityForecastdate24 = document.getElementById("cityForecastdate24");
        var cityForecastdate48 = document.getElementById("cityForecastdate48");
        var cityForecastdate72 = document.getElementById("cityForecastdate72");
        var cityForecastdate96 = document.getElementById("cityForecastdate96");
        var cityForecastdate120 = document.getElementById(
          "cityForecastdate120"
        );
        cityForecastdate24.textContent =
          "Forecast date/time: " + data.list[6].dt_txt;
        cityForecastdate48.textContent =
          "Forecast date/time: " + data.list[14].dt_txt;
        cityForecastdate72.textContent =
          "Forecast date/time: " + data.list[22].dt_txt;
        cityForecastdate96.textContent =
          "Forecast date/time: " + data.list[30].dt_txt;
        cityForecastdate120.textContent =
          "Forecast date/time: " + data.list[38].dt_txt;

        // Temps
        var cityForecast24temp1 = document.getElementById("cityForecast24temp");
        var cityForecast48temp2 = document.getElementById("cityForecast48temp");
        var cityForecast72temp3 = document.getElementById("cityForecast72temp");
        var cityForecast96temp4 = document.getElementById("cityForecast96temp");
        var cityForecast120temp5 = document.getElementById(
          "cityForecast120temp"
        );
        cityForecast24temp1.textContent = "temp: " + data.list[6].main.temp;
        cityForecast48temp2.textContent = "temp: " + data.list[14].main.temp;
        cityForecast72temp3.textContent = "temp: " + data.list[22].main.temp;
        cityForecast96temp4.textContent = "temp: " + data.list[30].main.temp;
        cityForecast120temp5.textContent = "temp: " + data.list[38].main.temp;
        // weather
        var cityForecast24weather1 = document.getElementById(
          "cityForecast24weather"
        );
        var cityForecast48weather2 = document.getElementById(
          "cityForecast48weather"
        );
        var cityForecast72weather3 = document.getElementById(
          "cityForecast72weather"
        );
        var cityForecast96weather4 = document.getElementById(
          "cityForecast96weather"
        );
        var cityForecast120weather5 = document.getElementById(
          "cityForecast120weather"
        );
        cityForecast24weather1.textContent =
          " weather: " + data.list[6].weather[0].main;
        cityForecast48weather2.textContent =
          " weather: " + data.list[14].weather[0].main;
        cityForecast72weather3.textContent =
          " weather: " + data.list[22].weather[0].main;
        cityForecast96weather4.textContent =
          " weather: " + data.list[30].weather[0].main;
        cityForecast120weather5.textContent =
          " weather: " + data.list[38].weather[0].main;
        // wind speed
        var cityForecast24wind1 = document.getElementById("cityForecast24wind");
        var cityForecast48wind2 = document.getElementById("cityForecast48wind");
        var cityForecast72wind3 = document.getElementById("cityForecast72wind");
        var cityForecast96wind4 = document.getElementById("cityForecast96wind");
        var cityForecast120wind5 = document.getElementById(
          "cityForecast120wind"
        );
        cityForecast24wind1.textContent = "wind: " + data.list[6].wind.speed;
        cityForecast48wind2.textContent = "wind: " + data.list[14].wind.speed;
        cityForecast72wind3.textContent = "wind: " + data.list[22].wind.speed;
        cityForecast96wind4.textContent = "wind: " + data.list[30].wind.speed;
        cityForecast120wind5.textContent = "wind: " + data.list[38].wind.speed;
        // humidity
        var cityForecast24humid1 = document.getElementById(
          "cityForecast24humid"
        );
        var cityForecast48humid2 = document.getElementById(
          "cityForecast48humid"
        );
        var cityForecast72humid3 = document.getElementById(
          "cityForecast72humid"
        );
        var cityForecast96humid4 = document.getElementById(
          "cityForecast96humid"
        );
        var cityForecast120humid5 = document.getElementById(
          "cityForecast120humid"
        );
        cityForecast24humid1.textContent =
          "humidity: " + data.list[6].main.humidity;
        cityForecast48humid2.textContent =
          "humidity: " + data.list[14].main.humidity;
        cityForecast72humid3.textContent =
          "humidity: " + data.list[22].main.humidity;
        cityForecast96humid4.textContent =
          "humidity: " + data.list[30].main.humidity;
        cityForecast120humid5.textContent =
          "humidity: " + data.list[38].main.humidity;
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
        var cityCurrent = document.getElementById("cityCurrent");
        var weatherCurrent = document.getElementById("weatherCurrent");
        var tempCurrent = document.getElementById("tempCurrent");
        var humidityCurrent = document.getElementById("windCurrent");
        var windspeedCurrent = document.getElementById("humidityCurrent");

        cityCurrent.textContent = data.name;
        weatherCurrent.textContent = "Conditions: " + data.weather[0].main;
        tempCurrent.textContent = "Temperature: " + data.main.temp;
        humidityCurrent.textContent = "Humidity: " + data.main.humidity;
        windspeedCurrent.textContent = "WindSpeed: " + data.wind.speed;
      });
  }
  getWeather();
  getWeatherForecast();
}
// Saved Cities Function; uses object method with JSON
function saveCast(city, state) {
  const fakeLocation = {
    fakeCity: city,
    fakeState: state,
  };
  citylist.push(fakeLocation);
  console.log(citylist);
  localStorage.setItem("list", JSON.stringify(citylist));
}
// Runs day/time at top of screen
function currentTime() {
  var crtTime = document.createElement("h3");
  var today = new Date();
  crtTime.textContent = today.toDateString();
  var position = document.querySelector("h1");
  position.appendChild(crtTime);
}
currentTime();
// Passing code from saveCast to displaySaveCast
something = localStorage.getItem("list");
let somethingelse = JSON.parse(something);

function displaySaveCast() {
  somethingelse.forEach(function (element) {
    var searchedCity = document.createElement("button");
    searchedCity.type = "button";
    searchedCity.id = "citybutton";
    searchedCity.textContent = element.fakeCity + "," + element.fakeState;
    var position = document.getElementById("savedcity");
    position.appendChild(searchedCity);
    console.log(element);
  });
}
displaySaveCast();
// function to re display saved results
function searchSaveCast() {}
// clear button to clear local storage
clearbutton.addEventListener("click", function (event) {
  localStorage.removeItem("list");
  location.reload();
});
