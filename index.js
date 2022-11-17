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
        // date
        var cityForecastdate24 = data.list[6].dt_txt;
        var cityForecastdate48 = data.list[14].dt_txt;
        var cityForecastdate72 = data.list[22].dt_txt;
        var cityForecastdate96 = data.list[30].dt_txt;
        var cityForecastdate120 = data.list[38].dt_txt;
        // Temps
        var cityForecast24temp1 = document.createElement("p");
        var cityForecast48temp2 = document.createElement("p");
        var cityForecast72temp3 = document.createElement("p");
        var cityForecast96temp4 = document.createElement("p");
        var cityForecast120temp5 = document.createElement("p");
        // weather
        var cityForecast24weather1 = document.createElement("p");
        var cityForecast48weather2 = document.createElement("p");
        var cityForecast72weather3 = document.createElement("p");
        var cityForecast96weather4 = document.createElement("p");
        var cityForecast120weather5 = document.createElement("p");
        // wind speed
        var cityForecast24wind1 = document.createElement("p");
        var cityForecast48wind2 = document.createElement("p");
        var cityForecast72wind3 = document.createElement("p");
        var cityForecast96wind4 = document.createElement("p");
        var cityForecast120wind5 = document.createElement("p");
        // humidity
        var cityForecast24humid1 = document.createElement("p");
        var cityForecast48humid2 = document.createElement("p");
        var cityForecast72humid3 = document.createElement("p");
        var cityForecast96humid4 = document.createElement("p");
        var cityForecast120humid5 = document.createElement("p");
        var position = document.getElementById("Forecast");
        forecastCityName.textContent = cityform + " , " + stateform;
        // temp
        cityForecast24temp1.textContent = "temp: " + data.list[6].main.temp;
        cityForecast48temp2.textContent = "temp: " + data.list[14].main.temp;
        cityForecast72temp3.textContent = "temp: " + data.list[22].main.temp;
        cityForecast96temp4.textContent = "temp: " + data.list[30].main.temp;
        cityForecast120temp5.textContent = "temp: " + data.list[38].main.temp;
        //weather
        cityForecast24weather1.textContent =
          cityForecastdate24 + " weather: " + data.list[6].weather[0].main;
        cityForecast48weather2.textContent =
          cityForecastdate48 + " weather: " + data.list[14].weather[0].main;
        cityForecast72weather3.textContent =
          cityForecastdate72 + " weather: " + data.list[22].weather[0].main;
        cityForecast96weather4.textContent =
          cityForecastdate96 + " weather: " + data.list[30].weather[0].main;
        cityForecast120weather5.textContent =
          cityForecastdate120 + " weather: " + data.list[38].weather[0].main;
        // wind
        cityForecast24wind1.textContent = "wind: " + data.list[6].wind.speed;
        cityForecast48wind2.textContent = "wind: " + data.list[14].wind.speed;
        cityForecast72wind3.textContent = "wind: " + data.list[22].wind.speed;
        cityForecast96wind4.textContent = "wind: " + data.list[30].wind.speed;
        cityForecast120wind5.textContent = "wind: " + data.list[38].wind.speed;
        //humidity
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

        position.appendChild(forecastCityName);
        //day1
        position.appendChild(cityForecast24weather1);
        position.appendChild(cityForecast24temp1);
        position.appendChild(cityForecast24wind1);
        position.appendChild(cityForecast24humid1);
        // day2
        position.appendChild(cityForecast48weather2);
        position.appendChild(cityForecast48temp2);
        position.appendChild(cityForecast48wind2);
        position.appendChild(cityForecast48humid2);
        // day 3
        position.appendChild(cityForecast72weather3);
        position.appendChild(cityForecast72temp3);
        position.appendChild(cityForecast72wind3);
        position.appendChild(cityForecast72humid3);
        // day 4
        position.appendChild(cityForecast96weather4);
        position.appendChild(cityForecast96temp4);
        position.appendChild(cityForecast96wind4);
        position.appendChild(cityForecast96humid4);
        // day 5
        position.appendChild(cityForecast120weather5);
        position.appendChild(cityForecast120temp5);
        position.appendChild(cityForecast120wind5);
        position.appendChild(cityForecast120humid5);
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
