/* import { useState } from "react"; */
import { Footer } from "./components/Footer";
import { Servicios } from "./components/Servicios";
/* import { FormularioContacto } from "./components/FormularioContacto"; */

export const App = () => {
  //Quitar comentario cuando se tenga el header, es la funcion del boton para que se quite y aparezca el formulario
  /*   const [mostrar, setMostrar] = useState(false); // Estado para mostrar/ocultar el formulario

  const handleMostrar = (e) => {
    e.preventDefault();
    setMostrar(true); // Muestra el formulario al hacer clic en "Contacto"
  };

  const handleCerrarFormulario = () => {
    setMostrar(false); // Oculta el formulario al hacer clic en la "X"
  };
 */
  return (
    <>
      <Servicios />
      {/* quitar comentario, esto va dentro de Header
        <div className={mostrar ? "block": "hidden"}>
          <FormularioContacto onCerrar={handleCerrarFormulario} />
        </div>
      */}
      <hr className="w-full bg-white h-[1px]" />
      <Footer />
    </>
  );
};
