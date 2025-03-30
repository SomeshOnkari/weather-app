const inputBox=document.querySelector('.input-box');
const searchBtn=document.querySelector('#searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.Description');
const humidity =document.querySelector('#humidity');
const wind_speed =document.querySelector('#wind-speed');
const location_not_found =document.querySelector('.location-not-found');

const weatherbody=document.querySelector('.weatherbody');
async function checkWeather(city){
    const api_key="63d415b8aad300bd2bca926ffa76f2b5" ;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;



    const weather_data=await fetch(`${url}`).then(response=> response.json());

    if(weather_data.cod ===`404`){
        location_not_found.style.display="flex";
        weatherbody.style.display="none";
        console.log("error");
        return;
    }
    weatherbody.style.display="flex";
    location_not_found.style.display="none";
    
    console.log("run");
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    
    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;

    switch(weather_data.weather[0].main)
    {
        case 'Clouds' :weather_img.src="/WeatherApp/assets/cloud.png";
        break;

        case 'Clear' :weather_img.src="/WeatherApp/assets/clear.png";
        break;
        
        case 'Rain' :weather_img.src="/WeatherApp/assets/rain.png";
        break;

        case 'Mist' :weather_img.src="/WeatherApp/assets/mist.png";
        break;

        case 'Snow' :weather_img.src="/WeatherApp/assets/snow.png";
        break;
    
    }
    console.log(weather_data);
    

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});