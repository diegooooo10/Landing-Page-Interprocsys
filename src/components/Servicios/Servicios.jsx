// Servicios.jsx
import { useState, useEffect } from "react";
import { ServiciosComputadora } from "./Servicios_computadora"; // Componente para computadoras
import { ServiciosCelular } from "./Servicios_celular"; // Componente para celulares

export const Servicios = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth === null) return null;

  return (
    <>{windowWidth < 768 ? <ServiciosCelular /> : <ServiciosComputadora />}</>
  );
};
