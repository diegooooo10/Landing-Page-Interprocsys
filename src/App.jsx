/* import { useState } from "react"; */
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Servicios } from "./components/Servicios";
import { FormularioContacto } from "./components/FormularioContacto";
import { useState } from "react";

export const App = () => {
  const [mostrar, setMostrar] = useState(false);

  const handleMostrar = (e) => {
    e.preventDefault();
    setMostrar(true);
  };

  const handleCerrarFormulario = () => {
    setMostrar(false);
  };

  return (
    <>
      <Header handleMostrar={handleMostrar} />
      <Servicios />
      <div className={mostrar ? "block" : "hidden"}>
        <FormularioContacto onCerrar={handleCerrarFormulario} />
      </div>
      <hr className="w-full bg-white h-[1px]" />
      <Footer />
    </>
  );
};
