import React from 'react';
import Location from './location';
import WeatherData from './weatherData';
import './wstyles.css';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,FOG} from '../constants/weather';

    const data = {
        temperature: 15,
        weatherState: WINDY,
        humidity: 10,
        wind: '10 m/s',
    }
    const WeatherLocation = () =>  (
    <div className="weatherLocationCont">
        <Location city={"Madrid"}></Location>
        
        <WeatherData data={data}></WeatherData>
    </div>
    );

export default WeatherLocation;