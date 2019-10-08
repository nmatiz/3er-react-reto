import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
  };

//se crea la funcion primero, que es la que va a realizar el conteo
  count(event) {
    this.setState({
      count: event.target.value.length
    });
  }
//En el render se pinta la pagina, y en el onChange, se captura lo que va cambiandp
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count.bind(this)}></textarea>
        <div className="counter">{this.state.count} caracteres</div>
      </div>
    );
  }
}

export default App;
