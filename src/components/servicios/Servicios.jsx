// Servicios.jsx
import { useState, useEffect, useCallback } from "react";
import { ServiciosComputadora } from "./Servicios_computadora";
import { ServiciosCelular } from "./Servicios_celular";

export const Servicios = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowWidth < 769 ? <ServiciosCelular /> : <ServiciosComputadora />;
};
