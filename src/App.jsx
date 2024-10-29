import { useState, useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Servicios } from "./components/servicios/Servicios";
import { FormularioContacto } from "./components/FormularioContacto";
import { QuienesSomos } from "./components/QuienesSomos";
import { Route, Routes } from "react-router-dom";
import { Entrevistas } from "./components/Entrevistas";

export const App = () => {
  const [mostrar, setMostrar] = useState(false);

  //referencias para saber cual es la seccion a desplazar
  const serviciosRef = useRef(null);
  const quienesSomosRef = useRef(null);

  const handleMostrar = (e) => {
    e.preventDefault();
    setMostrar(true);
  };

  const handleCerrarFormulario = () => {
    setMostrar(false);
  };

  // Función de desplazamiento
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Routes>
        {/*Primer ruta, que es la seccion de inicio*/}
        <Route path="/" element={
            <>
              <Header
                handleMostrar={handleMostrar}
                onServiciosClick={() => scrollToSection(serviciosRef)}
                onEmpresaClick={() => scrollToSection(quienesSomosRef)}
              />
              <div className={mostrar ? "block" : "hidden"}>
                <FormularioContacto onCerrar={handleCerrarFormulario} />
              </div>

              <div ref={quienesSomosRef}>
                <QuienesSomos />
              </div>
              <hr className="w-full bg-TextoEspecial h-[5px]" />

              <div ref={serviciosRef}>
                <Servicios />
              </div>

              <hr className="w-full bg-white h-[1px]" />
              <Footer />
            </>
          }
        />
        {/*Para las seccion de entrevistas */}
        <Route path="/entrevistas" element={<Entrevistas />} />
      </Routes>
    </>
  );
};
