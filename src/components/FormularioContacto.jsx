import { useState, useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/conexion";

export const FormularioContacto = ({ onCerrar }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el loading
  const captcha = useRef(null);

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;
  const regexTelefono = /^[0-9]{10}$/;

  const validateInputs = useCallback(() => {
    if (!isCaptchaValid) {
      setError("Completa el captcha");
      return false;
    }
    if (!regexNombre.test(nombre)) {
      setError("Ingresa tu nombre completo correctamente.");
      return false;
    }
    if (!regexEmail.test(email)) {
      setError(
        "Correo electrónico no válido. Asegúrate de ingresar un formato correcto."
      );
      return false;
    }
    if (!regexTelefono.test(telefono)) {
      setError("Teléfono no válido. Debe ser un número de 10 dígitos.");
      return false;
    }
    if (mensaje.trim() === "") {
      setError("Mensaje no válido. Debe contener un mensaje.");
      return false;
    }
    return true;
  }, [isCaptchaValid, nombre, email, telefono, mensaje]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true); // Activar loading

    if (!validateInputs()) {
      setIsLoading(false); // Desactivar loading si hay error
      return;
    }

    try {
      await addDoc(collection(db, "contacto"), {
        nombre,
        correo: email,
        telefono,
        mensaje,
      });
      setSuccessMessage("Mensaje enviado con éxito.");
      setIsCaptchaValid(false);
      captcha.current.reset();
      // Resetear los campos del formulario
      setNombre("");
      setEmail("");
      setTelefono("");
      setMensaje("");
    } catch (e) {
      setError(
        "Error al enviar el mensaje. Por favor, intenta nuevamente. " +
          e.message
      );
    } finally {
      setIsLoading(false); // Desactivar loading
    }
  };

  const onChange = (value) => {
    setIsCaptchaValid(!!value);
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="email" className="labelFormularioContacto">
            Correo Electrónico:
          </label>
          <input
            type="email"
            name="email"
            className="inputFormularioContacto peer"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col md:items-center">
          <ReCAPTCHA
            ref={captcha}
            sitekey="6LcuuXEqAAAAAJrUV4IrZnJ5qicaF8jD_48bcVOB"
            onChange={onChange}
          />
          <button
            type="submit"
            className={`md:mt-5 mt-2 text-black bg-TextoEspecial hover:opacity-80 font-medium rounded-lg text-sm md:text-base w-auto px-5 py-2.5 text-center mb-3 ${
              isCaptchaValid ? "" : "opacity-50 cursor-not-allowed"
            } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!isCaptchaValid || isLoading}
          >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </aside>
  );
};
