import React from "react";
import Ionicon from "react-ionicons";

export default () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 item">
              <h3>Servicios</h3>
              <ul>
                <li>
                  <a href="#">Construcción</a>
                </li>
                <li>
                  <a href="#">Remodelaciones</a>
                </li>
                <li>
                  <a href="#">Instalaciones</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>LTBA Construcciones SRL</h3>
              <p>Ciudad de Buenos Aires - Argentina</p>
              <p>info@ltbaconstrucciones.com.ar</p>
              <p>+54 9 11 6441-5494 - +54 9 11 5660-7813</p>
            </div>
            <div className="col item social">
              <a href="#">
                <Ionicon icon="logo-facebook" fontSize="34px" color="white" />
              </a>
              <a href="#">
                <Ionicon icon="logo-twitter" fontSize="34px" color="white" />
              </a>
              <a href="#">
                <Ionicon icon="logo-snapchat" fontSize="34px" color="white" />
              </a>
              <a href="#">
                <Ionicon icon="logo-instagram" fontSize="34px" color="white" />
              </a>
            </div>
          </div>
          <p className="copyright">LTBA Construcciones SRL © 2018</p>
        </div>
      </footer>
    </div>
  );
};
