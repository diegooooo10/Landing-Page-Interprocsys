import { useState, useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Servicios } from "./components/servicios/Servicios";
import { FormularioContacto } from "./components/FormularioContacto";
import { QuienesSomos } from "./components/QuienesSomos";
import { Navigate, Route, Routes } from "react-router-dom";
import { Carousel } from "./components/Entrevistas";

export const App = () => {
  const [mostrar, setMostrar] = useState(false);
  const serviciosRef = useRef(null);
  const quienesSomosRef = useRef(null);

  const handleMostrar = (e) => {
    e.preventDefault();
    setMostrar(true);
  };

  const handleCerrarFormulario = () => {
    setMostrar(false);
  };

  const scrollToSection = (ref) => {
    const targetPosition = ref.current.offsetTop;
    const step = 20; // Controla la suavidad
    const interval = 5; // Controla la duración

    const scrollInterval = setInterval(() => {
      const currentPosition = window.pageYOffset;
      if (currentPosition < targetPosition - step) {
        window.scrollBy(0, step);
      } else {
        clearInterval(scrollInterval);
        window.scrollTo(0, targetPosition); // Asegúrate de llegar a la posición exacta
      }
    }, interval);
  };

  return (
    <>
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <>
              <Header
                handleMostrar={handleMostrar}
                onServiciosClick={() => scrollToSection(serviciosRef)}
                onEmpresaClick={() => scrollToSection(quienesSomosRef)}
              />
              <div
                className={` flex items-center justify-center transition-opacity duration-500 ${
                  mostrar
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
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
        {/* Ruta para la sección de entrevistas */}
        <Route path="/entrevistas" element={<Carousel />} />
        
        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
