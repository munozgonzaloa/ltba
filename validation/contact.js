const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  console.log(data);

  data.email = !isEmpty(data.email) ? data.email : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "El email ingresado no es valido";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "El email es obligatorio";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "El campo nombre es obligatorio";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "El campo consulta es obligatorio";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
