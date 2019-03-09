
import React from 'react';
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';
import '../styles.css';
import PropTypes from 'prop-types';

const WeatherData = ({data:{temperature,temperatureMin,temperatureMax,humidity,wind,weatherState}}) => (

    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature    = {temperature} 
        temperatureMin = {temperatureMin}
        temperatureMax = {temperatureMax}
        weatherState   = {weatherState}
        />
        <WeatherExtraInfo humidity ={humidity} wind={wind}> </WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape ({
        temperature: PropTypes.number.isRequired,
        temperatureMin: PropTypes.number.isRequired,
        temperatureMax: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;