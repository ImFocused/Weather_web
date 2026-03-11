const apikey ="34485d06b7ad93b169190c0479695ba1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn = document.querySelector("#search button");
const searchbox = document.querySelector("#search input");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);
    document.querySelector("#city-name").innerHTML = data.name ;
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + ` °C`;
    document.querySelector("#humidity-no").innerHTML = data.main.humidity + ` %`;
    document.querySelector("#wind-no").innerHTML = data.wind.speed + `Km/Hr`;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png"


    

}
}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

