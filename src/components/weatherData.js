
import React from 'react';
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,FOG} from '../constants/weather';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={20} 
        weatherState={RAIN}
        />
        <br/>
        <WeatherExtraInfo humidity ={80} wind={"10 m/s"}> </WeatherExtraInfo>
    </div>
);


export default WeatherData;