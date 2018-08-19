import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Features from "./components/layout/Features";
import Highlight from "./components/layout/Highlight";
import Register from "./components/auth/Register";
import Contacto from "./components/contact/Contacto";
import Login from "./components/auth/Login";

import "./App.css";
import "./css/Landing.css";
import "./css/Features-Blue.css";
import "./css/Highlight-Blue.css";
import "./css/Footer-Dark.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/" component={Features} />
          <Route exact path="/" component={Highlight} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Contacto" component={Contacto} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
