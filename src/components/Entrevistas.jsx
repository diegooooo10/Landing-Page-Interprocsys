import { useState, useEffect } from "react";
import entrevistasData from "../mocks/entrevistas.json";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entrevistas, setEntrevistas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const mobileBreakpoint = 600; // px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setEntrevistas(entrevistasData.entrevistas || []);
    setIsLoading(false);
  }, []);

  const itemsToShow = isMobile ? entrevistas.length : 3;

  if (isLoading) {
    return (
      <div className="text-center text-white">Cargando entrevistas...</div>
    );
  }

  if (entrevistas.length === 0) {
    return (
      <div className="text-center text-white">
        No hay entrevistas disponibles.
      </div>
    );
  }

  // Ajuste del índice para evitar espacios en blanco al final
  const maxIndex = entrevistas.length - itemsToShow;
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const visibleSlides = entrevistas.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-4 text-gray-300 bg-gradient-to-b bg-zinc-900 to-black">
      <button
        onClick={() => (window.location.href = "/")}
        className={`absolute ${
          isMobile ? "p-2" : "p-3"
        } text-black transition-colors duration-300 rounded-md shadow-md top-6 left-6 bg-cyan-500 hover:bg-cyan-400`}
        aria-label="Regresar"
      >
        <svg
          className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} transform rotate-180`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
        </svg>
      </button>

      <h2 className="mt-3 mb-2 text-3xl font-bold text-center text-cyan-300">
        Entrevistas
      </h2>
      <p className="mb-10 text-2xl text-center text-white">
        Diálogo con emprendimiento 2021
      </p>

      {/* Scroll en móviles */}
      <div
        className={`${
          isMobile ? "overflow-y-scroll h-[80vh]" : "overflow-visible h-auto"
        } flex justify-center w-full max-w-5xl p-5 md:p-20 bg-stone-700 ring-4 ring-black`}
      >
        <div
          className={`grid gap-5 md:gap-9 ${
            isMobile ? "grid-cols-1" : "grid-cols-3"
          }`}
        >
          {visibleSlides.map((entrevista, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => isMobile && setSelectedCard(index)}
            >
              <div className="relative w-full overflow-hidden rounded-lg shadow-md bg-stone-900 hover:shadow-lg">
                <div className="object-contain w-full p-4 h-90">
                  <div className="overflow-hidden">
                    <img
                      src={entrevista.imagen?.url || "/img/default.webp"}
                      alt={`Imagen de la entrevista ${index}`}
                      className="object-cover w-full transition-transform duration-300 rounded-t-lg h-50 group-hover:scale-90"
                    />
                  </div>
                  <div className="mt-4 text-lg font-bold text-center text-white transition-opacity duration-300 group-hover:opacity-0">
                    {entrevista.empresa}
                  </div>
                  {entrevista.link && isMobile && selectedCard === index && (
                    <a
                      href={entrevista.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute px-4 py-2 font-bold text-black transform -translate-x-1/2 rounded-md shadow-md bottom-4 left-1/2 bg-cyan-500 hover:bg-cyan-400"
                    >
                      Ver video
                    </a>
                  )}
                </div>
              </div>

              {/* Información en hover para pantallas de escritorio */}
              {!isMobile && (
                <div className="absolute flex flex-col items-center justify-center w-full p-4 text-center transition-all duration-300 rounded-lg shadow-md opacity-0 h-90 top-3/4 group-hover:opacity-100 bg-stone-900">
                  <p className="font-semibold text-cyan-300">Empresa:</p>
                  <p className="text-white">{entrevista.empresa}</p>
                  <p className="font-semibold text-cyan-300">Emprendedor:</p>
                  <p className="text-white">
                    {entrevista.emprendedores.join(", ")}
                  </p>
                  <p className="font-semibold text-cyan-300">Descripción:</p>
                  <p className="text-white">{entrevista.descripcion}</p>
                  <p className="font-semibold text-cyan-300">Fecha:</p>
                  <p className="text-white">
                    {new Date(entrevista.fecha).toLocaleDateString("es-ES")}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación en los lados de la pantalla solo en escritorio */}
      {!isMobile && (
        <>
          <button
            onClick={goToNextSlide}
            className="absolute p-3 text-white transform -translate-y-1/2 bg-black rounded-full shadow-md right-4 top-1/2 hover:bg-gray-800"
            aria-label="Anterior"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
            </svg>
          </button>
          <button
            onClick={goToPreviousSlide}
            className="absolute p-3 text-white transform -translate-y-1/2 bg-black rounded-full shadow-md left-4 top-1/2 hover:bg-gray-800"
            aria-label="Siguiente"
          >
            <svg
              className="w-8 h-8 transform rotate-180"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
