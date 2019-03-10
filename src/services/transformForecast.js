import moment from 'moment';
// import {SUN,RAIN,SNOW,THUNDER,DRIZZLE,CLOUDY} from '../constants/weather';

//     const  getWeatherState = weather => {
//        const {id} = weather;
//        if (id <300){
//            return THUNDER;
//        }else if(id <400){
//            return DRIZZLE;
//        }else if (id <600){
//            return RAIN;
//        }else if (id >700){
//             return SNOW;
//        }else if (id ===800){
//            return SUN;
//        }else {
//            return CLOUDY;
//        }
       
//     }

//     const transformForecast = forecastData =>{
//         const {humidity, temp,temp_min,temp_max} = forecastData.main;
//         const {weatherState} = getWeatherState(forecastData.weather[0]);
//         const {speed} = forecastData.wind;
        
//         //debugger;
//         /* var temp2 = Math.round((temp-273.15)*100)/100;
//         var tempMin2 = Math.round((temp_min-273.15)*100)/100;
//         var tempMax2 = Math.round((temp_max-273.15)*100)/100;*/

//         const data = {
            
//             humidity,
//             temperature : temp,
//             temperatureMin: temp_min,
//             temperatureMax: temp_max,
//             weatherState,
//             wind: `${speed} m/s`
//         }
//             return data;
//     }

const transformForecast = data =>(
    //aqui se lee el array y se iguala a la hora que queremos con el moment.unix
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
        ))
);

     export default transformForecast;

