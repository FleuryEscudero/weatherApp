import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

const transformForecast = data =>(
    //aqui se lee el array y se iguala a la hora que queremos con el moment.unix
    data.list.filter(item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
    //map es una funcion que nos hace la transformacion de la informacion para poder ser utilizada
        )).map(item =>({
            weekday: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }))
);

     export default transformForecast;

