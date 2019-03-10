import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from '../ForecastItem/index';
import transformForecast from '../../services/transformForecast';
import './lstyles.css';
export const urlForecastWeather = "http://api.openweathermap.org/data/2.5/forecast";
export const apiKey = "f99bbd9e4959b513e9bd0d7f7356b38d";

//const days=['Lunes','Martes','Miercoles','Jueves','Viernes',];

// const data = {
//     temperature: 10,
//     temperatureMin: 3,
//     temperatureMax: 12,
//     weatherState: 'cloudy',
//     humidity: 15,
//     wind: "10 m/s",
// }
class ForecastExtended extends Component {
  
    constructor (props){
            super (props);
            const {city} = props;
            this.state = {
                 city,
                 data: null,
                forecastData: null 
                 
            }
    }

    componentDidMount (){
    //     fetch(getUrlForecastWeather(this.props.city)).then(
    //         data => (data.json())
    //     ).then (
    //         data =>{
    //         console.log(data);
    //         const forecastData = transformForecast(data);
    //         this.setState({forecastData});
    // });
  
    const urlForecast = `${urlForecastWeather}?q=${this.props.city}&units=metric&appid=${apiKey}`
           
        fetch(urlForecast).then(
            data =>(data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
    }

    renderForecastItemDays(){
        //return days.map(day => <ForecastItem weekDay={day} hour={'10:00 hrs'} data={data}/>);
        return "Render Items";
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
                    this.renderForecastItemDays() :
                    this.renderProgress()}
                </div>
               
                );
    }
}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;