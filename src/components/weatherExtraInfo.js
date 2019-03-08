import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';
const WeatherExtraInfo =({humidity,wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText"><WeatherIcons className="wiconE" name="humidity"/>{` Humedad: ${humidity} % `}</span>
        <span className="extraInfoText"><WeatherIcons className="wiconE" name="strong-wind"/>{`Vientos: ${wind}` }</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;