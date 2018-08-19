import React, { Component } from "react";
import { Link } from "react-router-dom";

class Features extends Component {
  render() {
    return (
      <section className="features-blue" name="servicios" id="servicios">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">LTBA CONSTRUCCIONES SRL</h2>
            <p className="text-center">
              <br />
              Somos una empresa constituida en 2014, nuestra labor se centra en
              la prestacion de servicios de construcción. Garantizando una
              solucion eficaz y efectiva para las necesidades de nuestros
              clientes.
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="row features">
            <div className="col-sm-6 col-md-4 item">
              <i className="fa fa-building icon" />
              <h3 className="name">Construcción</h3>
              <p className="description">
                <br />
                Hogares, comercios y oficinas. resultados optimos y economicos.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <i className="fa fa-tasks icon" />
              <h3 className="name">Remodelaciones</h3>
              <p className="description">
                <br />
                Remodelaciones y ampliaciones, asesoramiento de primer nivel.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div className="col-sm-6 col-md-4 item">
              <i className="fa fa-male icon" />
              <h3 className="name">Instalaciones</h3>
              <p className="description">
                <br />
                Expertos en instalaciones electricas, sanitarias y de gas.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
