import { createStore } from 'redux';


export const store = createStore(()=>{},
//esta instruccion sirve para agregar el plugin de chrome y podamos usar las herramientas de desarrollo
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());