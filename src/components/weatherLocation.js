import React, { Component } from 'react';
import Location from './location';
import WeatherData from './weatherData';
import './wstyles.css';
import {SUN} from '../constants/weather';

//data del servidor del tiempo

const location = "Mexico,MX";
const apiKey = "f99bbd9e4959b513e9bd0d7f7356b38d";
const urlBaseWeather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${urlBaseWeather}?q=${location}&units=metric&appid=${apiKey}`;

    const data = {
        temperature: 25,
        temperatureMin:15,
        temperatureMax:34,
        weatherState: SUN,
        humidity: 10,
        wind: '10 m/s',
    }
    class WeatherLocation extends Component { 

        constructor (){
            super ();
            this.state = {
                city: 'Ciudad de México',
                data: data
            };
        }


        getWeatherState = weatherData => {
            return SUN;
        }

        getData = weatherData =>{
            const {city} =weatherData.name;
            const {humidity, temp,temp_min,temp_max} = weatherData.main;
            const {weatherState} = this.getWeatherState(weatherData);
            const {speed} = weatherData.wind;
          
           
           /* var temp2 = Math.round((temp-273.15)*100)/100;
            var tempMin2 = Math.round((temp_min-273.15)*100)/100;
            var tempMax2 = Math.round((temp_max-273.15)*100)/100;*/

            const data = {
                city,
                humidity,
                temperature : temp,
                temperatureMin: temp_min,
                temperatureMax: temp_max,
                weatherState,
                wind: `${speed} m/s`
            }
                return data;
        }

        handleUpdateClick = () =>{

            fetch(api_weather).then(resolve =>{
                return resolve.json();
            }).then(data=>{
                const newWeather = this.getData(data);
                console.log(newWeather);
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
                    `weatherState: ${data.weather[0].main}`,
                    `humidity: ${data.main.humidity}`,
                    `wind: ${data.wind.speed}`,
                    );
                debugger;
                */
            });
           
        }

        render() {
            const {city,data} = this.state;
             return (
                <div className="weatherLocationCont">
                    <Location city={city}></Location>
                    
                    <WeatherData data={data}></WeatherData>
                    <button className="buttonA" onClick={this.handleUpdateClick}>Actualizar</button>
                </div>
             );
        }
};

export default WeatherLocation;