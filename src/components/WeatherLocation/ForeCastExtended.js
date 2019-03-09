import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../ForecastItem/index';
import './lstyles.css';

const days=['Lunes','Martes','Miercoles','Jueves','Viernes',];
class ForecastExtended extends Component {
  
    renderForecastItemDays(){
        return days.map(day => <ForecastItem weekDay={day} hour={'10:00 hrs'}/>);
    }

    render (){
        const {city}= this.props;
        
        return (
                <div>
                    <h2 className="forecast-title">Pronóstico Extendido para {city} </h2> 
                    {this.renderForecastItemDays()}
                </div>
               
                );
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;