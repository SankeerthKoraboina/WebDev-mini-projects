const apiKey = "ebfedf49593d87ead3d17789130f5f17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    // const response = await fetch(url);
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    // const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds")
        weatherIcon.src = "Images/clouds.png";

    else if (data.weather[0].main == "Clear")
        weatherIcon.src = "Images/clear.png";

    else if (data.weather[0].main == "Drizzle")
        weatherIcon.src = "Images/drizzle.png";

    else if (data.weather[0].main == "Snow")
        weatherIcon.src = "Images/snow.png";

    else if (data.weather[0].main == "Mist")
        weatherIcon.src = "Images/mist.png";

    else
        weatherIcon.src = "Images/rain.png";



}

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);

})

searchBox.addEventListener("keydown", (event) => {
    if (event.key == "Enter")
        checkWeather(searchBox.value);
})