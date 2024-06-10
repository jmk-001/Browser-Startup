const API_KEY = "3218f4aec525db16356f88d651d8c9d5";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.name}\n${data.weather[0].main}\n${Math.round(
        data.main.temp
      )}°C  `;
    });
}

function onGeoFail() {
  alert("Permission is required for weather information.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
