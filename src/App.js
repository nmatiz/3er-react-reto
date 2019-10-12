import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { contar: 0 }
  };
 
//se crea la funcion primero, que es la que va a realizar el conteo
  contador(event) {
    this.setState({
      /**el 'event' es el evento que sucede desde donde se llama, y a este se e asigna la funcion, para este casova capturando la longitud de lo que se tenga en contar, cada vez que cambia*/
      contar: event.target.value.length
    });
  }
//En el render se pinta la pagina, y en el onChange, se captura lo que va cambiando
  render() {
    return (
      <div className="container">
        {/**con el onchange en la caja de texto captura los cambios que tenga la caja*/}
        <textarea rows="3" onChange={this.contador.bind(this)}></textarea>
        {/**en este div, va mostrando el estado de contar*/}
        <div className="counter">{this.state.contar}</div>
      </div>
    );
  }
}

export default App;
