const wURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';

fetch(wURL)
    .then((response) => response.json())
    .then((jswObject) => {

        document.getElementById('current').textContent = jswObject.weather[0].main;
        document.getElementById('high').textContent = jswObject.main.temp_max;
        document.getElementById('windSpeed').textContent = jswObject.wind.speed;
        document.getElementById('humidity').textContent = jswObject.main.humidity;
    })

    var ht = document.getElementById("high").textContent;
    var ws = document.getElementById("windSpeed").textContent;
    var wc = (35.74 + (0.6215*ht)- (35.75*(Math.pow(ws, 0.16))) + (0.4275*ht*Math.pow(ws, 0.16)));

    if (ht < 51 && ws > 3) {
        document.getElementById("chilly").innerHTML = wc.toFixed(1) + " &deg;F";
    }
    else {
        document.getElementById("chilly").textContent = "N/A";
    }

const fcURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=903315a084f4c575140e618810300ad3';
    fetch(fcURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var count = 1;
        for (var day of jsObject.list) {
            if (day.dt_txt.includes("18:00:00")) {
                var date = new Date(day.dt.txt);
                var dayName = days[date.getDay()];
                document.getElementById("day" + count).textContent = dayName;
                var currTemp = day.main.temp;
                document.getElementById("temp" + count).textContent = currTemp.toFixed(0);
                const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
                const visual = day.weather[0].description;
                document.getElementById('icon' + count).setAttribute('src', imagesrc);
                document.getElementById('icon' + count).setAttribute('alt', visual);
                count += 1;
            }
        }
    });