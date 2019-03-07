
import React from 'react';
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo humidity ={80} wind={"10 m/s"}> </WeatherExtraInfo>
    </div>
);


export default WeatherData;