import { body, validationResult } from "express-validator";
import xss from "xss";

export const validarDatosFormulario = [
  body("isCaptchaValid")
    .equals("true")
    .withMessage("El captcha no fue validado correctamente."),
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio.")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/)
    .withMessage("Ingresa tu nombre completo correctamente.")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres.")
    .customSanitizer(value => xss(value)), 

  body("email")
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido.")
    .customSanitizer(value => xss(value)),

  body("telefono")
    .optional()
    .matches(/^[0-9]{10}$/)
    .withMessage("Teléfono no válido. Debe ser un número de 10 dígitos.")
    .customSanitizer(value => xss(value)), 

  body("mensaje")
    .trim()
    .notEmpty()
    .withMessage("El mensaje es obligatorio.")
    .isLength({ min: 10 })
    .withMessage("El mensaje debe tener al menos 10 caracteres.")
    .customSanitizer(value => xss(value)),
];


export const verificarValidacion = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
