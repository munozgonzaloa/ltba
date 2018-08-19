import React, { Component } from "react";
import { Link } from "react-router-dom";

class Highlight extends Component {
  render() {
    return (
      <div className="highlight-blue">
        <div className="container" styles="background-position:center;">
          <div className="intro">
            <h2 className="text-center">Convertimos sueños en realidad</h2>
            <p className="text-center text-white">
              Solicitá asesoramiento y nos contacaremos a la brevedad
            </p>
          </div>
          <div className="buttons">
            <Link to="/Contacto">
              <button className="btn btn-primary btn-lg" type="button">
                Contacto
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Highlight;
