const apiKey = "b0114387a53092b5438e0fa7dc660be0";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const Response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(Response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    var data = await Response.json();
    console.log(data);
    // console.log(data.list[0].main.temp);
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "km/h";

    if(data.list[0].weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }else if(data.list[0].weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }else if(data.list[0].weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }else if(data.list[0].weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.list[0].weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }else if(data.list[0].weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";
    }

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})

