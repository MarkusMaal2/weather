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
            displayWeather(data)
        })
        .catch(function() {
            // error handling
        })
}

function cityWeather(e) {
    weatherDataFetch("Tallinn")
}

function displayWeather(data) {
    let celcius = Math.round(parseFloat(data.main.temp)-273.15)
    let description = data.weather[0].description
    document.querySelector("#description").innerHTML = description
    document.querySelector("#temp").innerHTML = celcius + "&deg;C"
    document.querySelector("#location").innerHTML = data.name
}