import {SUN,RAIN,SNOW,THUNDER,DRIZZLE,CLOUDY} from '../constants/weather';

    const  getWeatherState = weather => {
       const {id} = weather[0];
       if (id <300){
           return THUNDER;
       }else if(id <400){
           return DRIZZLE;
       }else if (id <600){
           return RAIN;
       }else if (id >700){
            return SNOW;
       }else if (id ===800){
           return SUN;
       }else {
           return CLOUDY;
       }
       
    }

    const transformWeather = weatherData =>{
        const { weather } = weatherData;
        const {humidity, temp,temp_min,temp_max} = weatherData.main;
        const weatherState = getWeatherState(weather);
        const {speed} = weatherData.wind;
        
        const data = {
            
            humidity,
            temperature : temp,
            temperatureMin: temp_min,
            temperatureMax: temp_max,
            weatherState,
            wind: `${speed} m/s`
        }
            return data;
    }


    export default transformWeather;