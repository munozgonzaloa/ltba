import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mb-0 mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-6">
              <h1 className="display-5 text-primary">
                Bienvenido a LTBA Construcciones
              </h1>
              <br />
              <p className="lead text-info">
                Una descripción de la empresa o una frase acerca de nosotros
              </p>
              <br />
              <br />
              <p className="lead">
                <Link to="/Contacto" className="btn btn-primary btn-lg">
                  Contactanos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;