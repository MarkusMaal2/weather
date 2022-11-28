document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    var key = "f888f2d4b332b94625bd937ba929ae14"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        // json conversion
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data)
        })
        .catch(function() {
            // error handling
        })
}

function cityWeather(e) {
    weatherDataFetch("Tallinn")
}