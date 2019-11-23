const wURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(wURL)
    .then((response) => response.json())
    .then((jswObject) => {

        document.getElementById('current').textContent = jswObject.weather[0].main;
        document.getElementById('high').textContent = jswObject.main.temp_max;
        document.getElementById('windSpeed').textContent = jswObject.wind.speed;
        document.getElementById('humidity').textContent = jswObject.main.humidity;
    })

const fcURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';
