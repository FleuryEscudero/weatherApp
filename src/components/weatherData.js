
import React from 'react';
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,FOG} from '../constants/weather';
import './styles.css';

const WeatherData = ({data:{temperature,humidity,wind,weatherState}}) => (

    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature= {temperature} 
        weatherState={weatherState}
        />
        <WeatherExtraInfo humidity ={humidity} wind={wind}> </WeatherExtraInfo>
    </div>
);


export default WeatherData;