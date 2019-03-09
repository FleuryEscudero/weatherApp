import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/WeatherLocation/locationList';

const cities = [
  'Mexico, MX',
  'London, UK',
  'Madrid, ES',
  'New york, US',
  'Los Angeles, US'
]

class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`) 
  }
  render() {
    return (

     <Grid>
       <Row>Titulo</Row>
       <Row>
         <Col xs={12} md={6}>
            <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}/>
         </Col>
         <Col xs={12} md={6}>
            <div className="details"></div>
         </Col>
       </Row>
       

     </Grid>        
    );
  }
}

export default App;
