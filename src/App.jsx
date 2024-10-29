/* import { useState } from "react"; */
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Servicios } from "./components/servicios/Servicios";
import { FormularioContacto } from "./components/FormularioContacto";
import { useState } from "react";
import { QuienesSomos } from "./components/QuienesSomos";

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
      <div className={mostrar ? "block" : "hidden"}>
        <FormularioContacto onCerrar={handleCerrarFormulario} />
      </div>
      <QuienesSomos/>
      <hr className="w-full bg-TextoEspecial h-[5px]" />
      <Servicios />
      <hr className="w-full bg-white h-[1px]" />
      <Footer />
    </>
  );
};
