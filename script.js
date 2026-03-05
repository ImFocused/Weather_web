const apikey ="34485d06b7ad93b169190c0479695ba1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbtn = document.querySelector("#search button");
const searchbox = document.querySelector("#search input");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);
    document.querySelector("#city-name").innerHTML = data.name ;
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + ` °C`;
    document.querySelector("#humidity-no").innerHTML = data.main.humidity + ` %`;
    document.querySelector("#wind-no").innerHTML = data.wind.speed + `Km/Hr`;
    

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

