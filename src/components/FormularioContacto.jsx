import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../backend/conexion";
import xss from "xss";
import { verificarLimiteSolicitudes } from "../../backend/limitacionSolicitudes"; // Importa la función

export const FormularioContacto = ({ onCerrar }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isLimitReached, setIsLimitReached] = useState(false); // Estado para saber si el límite se alcanzó
  const captcha = useRef(null);

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;
  const regexTelefono = /^[0-9]{10}$/;

  const handleFieldChange = () => {
    const fieldsAreValid =
      regexNombre.test(nombre) &&
      regexEmail.test(email) &&
      regexTelefono.test(telefono) &&
      mensaje.trim() !== "";

    setShowCaptcha(fieldsAreValid);
    setError(""); // Limpiar errores previos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores al intentar enviar
    setSuccessMessage("");
    setIsLoading(true);

    // Validación de campos
    if (!regexNombre.test(nombre)) {
      setError("El nombre completo es inválido o está incompleto.");
      setIsLoading(false);
      return;
    }
    if (!regexEmail.test(email)) {
      setError("El correo electrónico es inválido.");
      setIsLoading(false);
      return;
    }
    if (!regexTelefono.test(telefono)) {
      setError("El número de teléfono debe tener 10 dígitos.");
      setIsLoading(false);
      return;
    }
    if (mensaje.trim() === "") {
      setError("El mensaje no puede estar vacío.");
      setIsLoading(false);
      return;
    }

    // Verificar que el captcha sea válido antes de enviar
    if (!isCaptchaValid) {
      setIsLoading(false);
      setError("Completa el captcha antes de enviar.");
      return;
    }

    // Verificar si se ha alcanzado el límite de solicitudes
    const limiteAlcanzado = await verificarLimiteSolicitudes(email);
    if (limiteAlcanzado) {
      setIsLimitReached(true); // Actualizar el estado de límite alcanzado
      setIsLoading(false);
      return; // Aquí no mostramos el mensaje de error
    }

    try {
      // Sanitizar datos para prevenir XSS
      const sanitizedNombre = xss(nombre);
      const sanitizedEmail = xss(email);
      const sanitizedTelefono = xss(telefono);
      const sanitizedMensaje = xss(mensaje);

      await addDoc(collection(db, "contacto"), {
        nombre: sanitizedNombre,
        correo: sanitizedEmail,
        telefono: sanitizedTelefono,
        mensaje: sanitizedMensaje,
      });
      setSuccessMessage("Mensaje enviado con éxito.");
      setIsCaptchaValid(false);
      captcha.current.reset();
      setNombre("");
      setEmail("");
      setTelefono("");
      setMensaje("");
      setShowCaptcha(false); // Ocultar captcha después de enviar
    } catch (e) {
      setError(
        "Error al enviar el mensaje. Por favor, intenta nuevamente. " +
          e.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (value) => {
    setIsCaptchaValid(!!value);
  };

  useEffect(() => {
    // Verificar el límite cuando el email cambie
    if (email) {
      console.log(`Verificando límite para el correo ${email}`);
      verificarLimiteSolicitudes(email).then((limiteAlcanzado) => {
        console.log(`Estado de límite alcanzado: ${limiteAlcanzado}`);
        setIsLimitReached(limiteAlcanzado);
      });
    }
  }, [email]);

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
            id="nombre"
            className="inputFormularioContacto peer"
            placeholder="Nombre(s). Apellidos."
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              handleFieldChange();
            }}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="email" className="labelFormularioContacto">
            Correo Electrónico:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="inputFormularioContacto peer"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleFieldChange();
            }}
            autoComplete="email"
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="telefono" className="labelFormularioContacto">
            Teléfono:
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            className="inputFormularioContacto peer"
            placeholder="1234567890"
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
              handleFieldChange();
            }}
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
            id="mensaje"
            value={mensaje}
            onChange={(e) => {
              setMensaje(e.target.value);
              handleFieldChange();
            }}
          ></textarea>
        </div>
        <div className="flex flex-col md:items-center">
          {showCaptcha && (
            <ReCAPTCHA
              ref={captcha}
              sitekey="6LcuuXEqAAAAAJrUV4IrZnJ5qicaF8jD_48bcVOB"
              onChange={onChange}
            />
          )}
          <button
            type="submit"
            className={`md:mt-5 mt-2 text-black bg-TextoEspecial hover:opacity-80 font-medium rounded-lg text-sm md:text-base w-auto px-5 py-2.5 text-center mb-3 ${
              isLoading || isLimitReached ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading || isLimitReached}
          >
            {isLoading
              ? "Enviando..."
              : isLimitReached
              ? "Límite Alcanzado"
              : "Enviar"}
          </button>
        </div>
      </form>
    </aside>
  );
};
