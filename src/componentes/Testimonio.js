import React from "react";
import "../hojas-de-estilo/Testimonio.css";

class Testimonio extends React.Component {
  render() {
    return(
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio"
        src={require(`../imagenes/flor-${this.props.imagen}.jpg`)}
        alt={`Foto de ${this.props.nombre}`} />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio"><strong>{this.props.nombre}</strong> de {this.props.pais}</p>
          <p className="cargo-testimonio">{this.props.cargo} de {this.props.lugar}</p>
          <p className="texto-testimonio">"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

export default Testimonio;


