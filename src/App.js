import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/WeatherLocation/locationList';
import ForecastExtended from './components/WeatherLocation/ForeCastExtended';

const cities = [
  'Mexico, MX',
  'London, UK',
  'Madrid, ES',
  'New York, US',
  'Los Angeles, US'
]

class App extends Component {

constructor (){
  super();

  this.state = {city: null};
 
}
  
  handleSelectedLocation = city => {
    this.setState({city});
    // console.log(`handleSelectedLocation ${city}`) 
  }
  render() {
    const {city} = this.state;
    return (

     <Grid>
       <Row>
          <AppBar position='sticky'>
              <Toolbar>
                  <Typography variant ="title" color='inherit'>
                      Weather App
                  </Typography>
              </Toolbar>
          </AppBar>
       </Row>
       <Row>
         <Col xs={12} md={6}>
            <LocationList cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}/>
         </Col>
         <Col xs={12} md={6}>
           <Paper elevation={4}>
            <div className="detail">
              { city && <ForecastExtended city={city}/> }
            </div>
           </Paper>
         </Col>
       </Row>
       

     </Grid>        
    );
  }
}

export default App;
