const place = document.querySelector(".place");
const search = document.querySelector(".search");
const windDir = document.querySelector(".wind-dir");
const humidity = document.querySelector(".humidity");
const currentTemp = document.querySelector(".current-temp");
const weatherIcon = document.querySelector(".weather-icon");

function getData(location) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=df4b33153d0a407890264350250802&q=${location}&aqi=no`
    ).then(res => res.json()).then(data => replaceData(data));
}

function replaceData(data) {
    weatherIcon.src = `https:${data.current.condition.icon}`;
    place.textContent = data.location.country;
    currentTemp.textContent = `${data.current.temp_c}ºC`;
    humidity.textContent =`${data.current.humidity}%`;
    windDir.textContent = data.current.wind_dir;
}

search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getData(search.value);
        search.value = "";
    }
});

getData("paris");