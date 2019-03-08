import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,FOG} from '../constants/weather';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"

};

const getWeatherIcon = weatherState => {
    const sizeIcon = "4x";
    const icon = icons[weatherState];

    if (icon){
        return  <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    }else {
        return  <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>
    }
    
}
const WeatherTemperature = ({temperature, temperatureMin,temperatureMax,weatherState}) => (
    <div className="weatherTemperatureCont">
       {
           getWeatherIcon (weatherState)
        }
        <span className= "temperature">{`${temperature}`}</span>
        <span className= "temperatureType">{` C°`}</span>
            <div className="divTemp">
                <span className= "temperatureM">{`Min: ${temperatureMin}`}</span>
                <span className= "temperatureMType">{`C°`}</span>
                <span className= "temperatureM">{`Max: ${temperatureMax}`}</span>
                <span className= "temperatureMType">{`C°`}</span>
            </div>
        
    </div>);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;