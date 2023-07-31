

const apikey="968aeba9b8dc8d269ddb480782a7b526";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weather= document.querySelector(".weather-icon");

async function checkweather(city){
    const response =await fetch(apiurl+ city +`&appid=${apikey}`);
    if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
    document.querySelector(".details").style.display="none";
    }

    else{

    
    var data=await response.json();
    //console.log(data);
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    document.querySelector(".details").style.display="flex";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "℃";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + " kmph";
    const icon=data.weather[0].main;

    if(icon=="Clouds"){
        weather.src="images/clouds.png";
    }
    else if(icon=="rain"){
        weather.src="images/rain.png";
    }
    else if(icon=="clear"){
        weather.src="images/clear.png";
    }
    else if(icon=="snow"){
        weather.src="images/snow.png";
    }
    else if(icon=="mist"){
        weather.src="images/mist.png";
    }
    else if(icon=="drizzle"){
        weather.src="images/drizzle.png";
    }

}
}

btn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


