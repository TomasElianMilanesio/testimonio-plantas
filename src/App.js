import React from 'react';
import './App.css';
import Testimonio from "./componentes/Testimonio.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Las plantas de nuestro jardin nos dan su testimonio</h1>
           <Testimonio 
            nombre='Flor amarilla y azul'
            pais='Argentina'
            imagen='amarilla'
            cargo='Flor colorida'
            lugar='Jardin'
            testimonio="Soy la flor mágica en tonos amarillo y azul, despierto en la mañana para pintar de alegría tu día. Mi fragancia embriaga, soy la danza cromática de la naturaleza."
            />
            <Testimonio 
            nombre='Flor rosa'
            pais='Brasil'
            imagen='rosa'
            cargo='Flor grande'
            lugar='Patio'
            testimonio="Soy la flor majestuosa en tonos rosados y blancos, despierto al alba para llenar tu jardín de elegancia y belleza. Mi presencia es un espectáculo que cautiva, soy la sinfonía floral que embellece la naturaleza."
  
            />
            <Testimonio 
            nombre='Flor violeta'
            pais='Japon'
            imagen='violeta'
            cargo='Flor atractiva'
            lugar='Frente de la casa'
            testimonio="Soy la flor vibrante en tonos violeta intenso, despierto con la primera luz del día para añadir un toque místico a tu entorno. Mi esencia es enigmática, soy la poesía visual que enriquece el paisaje natural."
  
            />
        </div>
      </div>
    );  
  }
}


export default App;
