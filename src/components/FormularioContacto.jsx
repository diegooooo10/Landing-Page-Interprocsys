import { useState } from "react";

export const FormularioContacto = ({ onCerrar }) => {
  // Regex para validar correo electrónico
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Regex para validar nombre completo (solo letras y espacios)
  const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+( [A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/;

  // Regex para validar teléfono celular (10 dígitos)
  const regexTelefono = /^[0-9]{10}$/;

  //Se hace uso de useState para poder mostrar mensajes de error
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Se jacem varoanñes de los inputs para poder verificar que cumplan con el regex
    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const telefono = e.target.telefono.value.trim();
    const mensaje = e.target.mensaje.value.trim();

    //condifcional para verificar si estan correctos
    if (!regexNombre.test(nombre)) {
      setError("Ingresa tu nombre completo correctamente.");
      return;
    }

    if (!regexEmail.test(email)) {
      setError(
        "Correo electrónico no válido. Asegúrate de ingresar un formato correcto."
      );
      return;
    }

    if (!regexTelefono.test(telefono)) {
      setError("Teléfono no válido. Debe ser un número de 10 dígitos.");
      return;
    }
    if (mensaje.trim() === "") {
      setError("Mensaje no válido. Debe contener un mensaje.");
      return;
    }

    //limpia formulario y quita los errores
    e.target.reset();
    setError("");
  };

  return (
    
    <aside className="fixed top-0 right-0 h-auto text-TextoEspecial w-[330px] md:w-[450px] bg-FondoColor rounded-md border border-TextoEspecial p-4 font-poppins z-50">
      <div className="flex justify-between mb-4">
        <button
          className="px-3 w-[35px] h-[35px] text-black border bg-TextoEspecial border-TextoEspecial rounded-md hover:opacity-80 ring-pink-100"
          onClick={onCerrar}
        >
          x
        </button>
        <p className="mx-auto text-2xl font-medium text-white">Contáctanos</p>
        <span className="w-10"></span>
      </div>

      {error && (
        <div className="mb-4 text-sm text-center text-red-500 f">{error}</div>
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
            type="text "
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
            className="h-32 resize-none inputFormularioContacto peer"
            placeholder="Ingresa tu mensaje."
          ></textarea>
        </div>

        <div className="text-center ">
          <button
            type="submit"
            className="mt-2 text-black bg-TextoEspecial hover:opacity-80 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center mb-3"
          >
            Enviar
          </button>
        </div>
      </form>
    </aside>
  );
};
