import React from 'react';
import Location from './location';
import WeatherData from './weatherData';

    const WeatherLocation = () =>  (
    <div>
        <Location city={"Ciudad de México"}></Location>
        <WeatherData></WeatherData>
    </div>
    );

export default WeatherLocation;