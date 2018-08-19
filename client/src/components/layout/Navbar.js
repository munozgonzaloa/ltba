import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark p-0">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="http://res.cloudinary.com/dqa7mf5v4/image/upload/c_scale,h_65,q_100/v1534617038/Logo3.png"
              className="img-fluid"
              alt="Responsive image"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
