import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

const data = {
        temperature: 10,
        temperatureMin: 3,
        temperatureMax: 12,
        weatherState: 'cloudy',
        humidity: 15,
        wind: "10 m/s",
}
const ForecastItem = ({weekDay, hour}) =>(
    <div>
    <div>{weekDay} Hora: {hour}</div>
    <WeatherData data = {data}/>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;