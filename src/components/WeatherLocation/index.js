import React, { Component } from 'react';
import Location from './location';
import WeatherData from './WeatherData/index';
import './wstyles.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherbyCity from '../../services/getUrlWeatherbyCity';
import PropTypes from 'prop-types';
//data del servidor del tiempo

    class WeatherLocation extends Component { 

        constructor (props){
            super (props);
            const {city} = props;
            this.state = {
                 city,
                 data: null,
                
           
            };
            
        }

        componentDidMount() {
            this.handleUpdateClick();
        }
        
        componentDidUpdate(prevProps, prevState) {
            
            
        }
              
    handleUpdateClick = () =>{

        fetch(getUrlWeatherbyCity(this.props.city)).then(resolve => {
           
            return resolve.json();
        }).then(data=>{
            const newWeather = transformWeather(data);
            
            //debugger;
            this.setState({
                data:newWeather
            });

            /*FLYQUOTE a im si me gusta hacer las cosas bien
            console.log(
                `city: ${data.name}`,
                `temperature: ${data.main.temp}`,
                `temperatureMin: ${data.main.temp_min}`,
                `temperatureMax: ${data.main.temp_max}`,
                `weatherState: ${data.weather[0].id}`,
                `humidity: ${data.main.humidity}`,
                `wind: ${data.wind.speed}`,
                );
            debugger;
            */
        });
        
    }

        render() {
            const {onWeatherLocationClick} = this.props;
            const {city,data} = this.state;
            
             return (
                <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                    <Location city={city} ></Location>
                    
                    {data ? 
                        <WeatherData data={data}></WeatherData> :
                        <CircularProgress size={50}/>
                    }
                </div>
             );
        }
    };

    WeatherLocation.propTypes = {
        city: PropTypes.string.isRequired,
        onWeatherLocationClick: PropTypes.func,
    }

export default WeatherLocation;