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
    //weatherDataFetch("Cairo")
    weatherDataFetch("Tartu")
}

function displayWeather(data) {
    let celcius = Math.round(parseFloat(data.main.temp)-273.15)
    let description = data.weather[0].description
    let tempElement = document.querySelector("#temp")
    document.querySelector("#description").innerHTML = description
    tempElement.innerHTML = celcius + "&deg;C"
    if (celcius > 0) {
        tempElement.style.color = "orange"
    } else {
        tempElement.style.color = "skyblue"
    }
    document.querySelector("#location").innerHTML = data.name
}