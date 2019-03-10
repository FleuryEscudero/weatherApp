import {urlBaseWeather,apiKey} from '../constants/api.url';

const getUrlWeatherbyCity = city =>{

    return `${urlBaseWeather}?q=${city}&units=metric&appid=${apiKey}`;

}

// const getUrlForecastWeather = city => {
//     return `${urlForecastWeather}?q=${city}&units=metric&appid=${apiKey}`;
// }


// export default { getUrlWeatherbyCity,getUrlForecastWeather };


export default getUrlWeatherbyCity;