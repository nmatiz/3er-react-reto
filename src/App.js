import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { contar: 0 }
  };
 
//se crea la funcion primero, que es la que va a realizar el conteo
  contar(event) {
    this.setState({
      contar: event.target.value.length
    });
  }
//En el render se pinta la pagina, y en el onChange, se captura lo que va cambiandp
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.contar.bind(this)}></textarea>
        <div className="counter">{this.state.contar}</div>
      </div>
    );
  }
}

export default App;
