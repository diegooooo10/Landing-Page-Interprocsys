import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/conexion";

export const FormularioContacto = ({ onCerrar }) => {
  // regex para los campos de entrada
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;
  const regexTelefono = /^[0-9]{10}$/;

  const [error, setError] = useState(""); // para mensaje de error
  const [setUsuarioValido] = useState(false); //para compronar usuario realiza captcha
  const [successMessage, setSuccessMessage] = useState(""); // para mensaje de éxito
  const [isCaptchaValid, setIsCaptchaValid] = useState(false); // nuevo estado para captcha

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      setError("Completa el captcha");
      return;
    }

    // variables para guardar el dato del input
    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const telefono = e.target.telefono.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    if (!regexNombre.test(nombre)) {
      setError("Ingresa tu nombre completo correctamente.");
      setSuccessMessage(""); // Limpiar mensaje de éxito
      return;
    }

    if (!regexEmail.test(email)) {
      setError(
        "Correo electrónico no válido. Asegúrate de ingresar un formato correcto."
      );
      setSuccessMessage(""); // Limpiar mensaje de éxito
      return;
    }

    if (!regexTelefono.test(telefono)) {
      setError("Teléfono no válido. Debe ser un número de 10 dígitos.");
      setSuccessMessage(""); // Limpiar mensaje de éxito
      return;
    }

    if (mensaje.trim() === "") {
      setError("Mensaje no válido. Debe contener un mensaje.");
      setSuccessMessage(""); // Limpiar mensaje de éxito
      return;
    }

    // Si todo es correcto se envía directamente a la base de datos
    try {
      await addDoc(collection(db, "contacto"), {
        nombre,
        correo: email,
        telefono,
        mensaje,
      });
      e.target.reset();
      setError("");
      setSuccessMessage("Mensaje enviado con éxito."); // Mensaje de éxito
      setIsCaptchaValid(false); // Reseteamos el captcha
    } catch (e) {
      setError(
        "Error al enviar el mensaje. Por favor, intenta nuevamente." + e
      );
      setSuccessMessage(""); // Limpiar mensaje de éxito
    }
  };

  const captcha = useRef(null);

  const onChange = (value) => {
    if (value) {
      setIsCaptchaValid(true); // Activar el botón
      setUsuarioValido(true);
    } else {
      setIsCaptchaValid(false); // Desactivar el botón si no hay valor
    }
  };

  return (
    <aside className="fixed top-0 right-0 h-auto text-TextoEspecial bg-FondoColor rounded-md border border-TextoEspecial p-4 font-poppins z-50 w-3/4 sm:w-3/6 lg:w-[450px]">
      <div className="flex justify-between mb-4">
        <button
          className="md:px-3 px-0 w-[27px] h-[27px] md:w-[35px] md:h-[35px] text-black border bg-TextoEspecial border-TextoEspecial rounded-md hover:opacity-80 ring-pink-100"
          onClick={onCerrar}
        >
          x
        </button>
        <p className="mx-auto text-xl font-medium text-white md:text-2xl">
          Contáctanos
        </p>
        <span className="w-10"></span>
      </div>
      {error && (
        <div className="mb-4 text-xs text-center text-red-500 md:text-sm">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 text-xs text-center text-green-500 md:text-sm">
          {successMessage}
        </div>
      )}
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="nombre" className="labelFormularioContacto">
            Nombre Completo:
          </label>
          <input
            type="text"
            name="nombre"
            className="inputFormularioContacto peer"
            placeholder="Nombre(s). Apellidos."
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="email" className="labelFormularioContacto">
            Correo Electrónico:
          </label>
          <input
            type="text"
            name="email"
            className="inputFormularioContacto peer"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="telefono" className="labelFormularioContacto">
            Teléfono:
          </label>
          <input
            type="tel"
            name="telefono"
            className="inputFormularioContacto peer"
            placeholder="1234567890"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="mensaje" className="labelFormularioContacto">
            Mensaje:
          </label>
          <textarea
            name="mensaje"
            className="resize-none h-14 md:h-32 inputFormularioContacto peer"
            placeholder="Ingresa tu mensaje."
          ></textarea>
        </div>
        <div className="text-center">
          <div className="">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LcuuXEqAAAAAJrUV4IrZnJ5qicaF8jD_48bcVOB"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className={`md:mt-5 mt-2 text-black bg-TextoEspecial hover:opacity-80 font-medium rounded-lg text-sm md:text-base w-auto px-5 py-2.5 text-center mb-3 ${
              isCaptchaValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isCaptchaValid}
          >
            Enviar
          </button>
        </div>
      </form>
    </aside>
  );
};