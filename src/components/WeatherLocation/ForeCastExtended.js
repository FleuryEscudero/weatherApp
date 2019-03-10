import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../ForecastItem/index';
import transformForecast from '../../services/transformForecast';
import './lstyles.css';
export const urlForecastWeather = "http://api.openweathermap.org/data/2.5/forecast";
export const apiKey = "f99bbd9e4959b513e9bd0d7f7356b38d";

class ForecastExtended extends Component {
  
    constructor (){
            super ();
            
            this.state = {
                
                forecastData: null 
                 
            }
    }

    componentDidMount (){
  
    this.updatecity(this.props.city);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({forecastData:null});
            this.updatecity(nextProps.city);
        }
    }
    
        updatecity = city =>{
            const urlForecast = `${urlForecastWeather}?q=${city}&units=metric&appid=${apiKey}`
           
            fetch(urlForecast).then(
                data =>(data.json())
            ).then(
                weather_data => {
                    console.log(weather_data);
                    const forecastData = transformForecast(weather_data);
                    console.log(forecastData);
                    this.setState({forecastData});
                }
            );
        }
    renderForecastItemDays=(forecastData)=> {
        return forecastData.map(forecast => 
            
        (<ForecastItem 
                       key={`${forecast.weekDay}${forecast.hour}`}
                       weekDay={forecast.weekDay} 
                       hour={forecast.hour} 
                       data={forecast.data}/>));
        
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido...</h3>;
    }

    render (){
        const {city}= this.props;
        const { forecastData } = this.state;
        return (
                <div>
                    <h2 className="forecast-title">Pronóstico Extendido para {city} </h2> 
                    {forecastData ?
                    this.renderForecastItemDays(forecastData) :
                    this.renderProgress()}
                </div>
               
                );
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;