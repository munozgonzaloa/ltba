import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

class Contacto extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      text: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newContacto = {
      name: this.state.name,
      email: this.state.email,
      text: this.state.text
    };

    console.log(newContacto);
    /*
    axios
      .post("/api/users/register", newContacto)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));*/
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register p-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Contacto</h1>
              <p className="lead text-center">Envianos tu consulta</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Nombre y Apellido"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email
                    })}
                    placeholder="Dirección de Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.text
                    })}
                    placeholder="Escribe tu consulta..."
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                  />
                  {errors.text && (
                    <div className="invalid-feedback">{errors.text}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacto;
