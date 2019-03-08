import React from 'react';
import Location from './location';
import WeatherData from './weatherData';

    const WeatherLocation = () =>  (
    <div>
        <Location city={"Madrid"}></Location>
        <br></br>
        <WeatherData></WeatherData>
    </div>
    );

export default WeatherLocation;