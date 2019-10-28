function windChill() {
    var ht = document.getElementById("highTemp").textContent;
    var ws = document.getElementById("windSpeed").textContent;
    var wc = 35.74 + (0.6215 * ht) - (35.75 * Math.pow(ws, 0.16)) + (0.4275 * (ht * Math.pow(ws, 0.16)));

    if (ht <= 50 && ws > 3) {
        document.getElementById("chilly").innerHTML = wc.toFixed(1) + " &deg;F";
    }
    else {
        document.getElementById("chilly").innerHTML = "N/A";
    }
}