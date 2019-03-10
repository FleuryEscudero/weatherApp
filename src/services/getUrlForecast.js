import {apiKey,urlForecastWeather} from '../constants/api.url';


const getUrlForecastWeather = city => {
    return `${urlForecastWeather}?q=${city}&units=metric&appid=${apiKey}`;
}


export default getUrlForecastWeather;