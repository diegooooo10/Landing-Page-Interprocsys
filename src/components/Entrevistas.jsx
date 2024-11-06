import { useState, useEffect } from "react";
import entrevistasData from "../mocks/entrevistas.json";
import { Link } from "react-router-dom";

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
      <Link
        to="/"
        className={`absolute ${
          isMobile ? "p-2" : "p-3"
        } text-black transition-colors duration-300 rounded-md shadow-md top-6 left-6 bg-TextoEspecial hover:opacity-50`}
        aria-label="Regresar"
      >
        <svg
          className={`${isMobile ? "w-6 h-6" : "w-8 h-8"} transform rotate-180`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
        </svg>
      </Link>

      <h2 className="mt-3 mb-2 text-3xl font-bold text-center text-TextoEspecial">
        Entrevistas
      </h2>
      <p className="text-2xl text-center text-white mb-14">
        Diálogo con emprendimiento 2021
      </p>

      {/* Scroll en móviles */}
      <div
        className={`${
          isMobile ? "overflow-y-scroll h-[90vh]" : "overflow-visible rounded-md sm:h-[600px]  md:h-[650px] lg:h-[600px]"
        } flex justify-center w-full max-w-6xl p-4 md:p-24 bg-stone-700 ring-4 ring-black`}
        style={{ marginTop: isMobile ? "0" : "-20px" }}
      >
        <div
          className={`grid gap-5 md:gap-9 ${
            isMobile ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {visibleSlides.map((entrevista, index) => (
            <div
              key={index}
              className="relative group"
              onClick={() => isMobile && setSelectedCard(index)}
            >
              <div className="relative w-full overflow-hidden rounded-lg shadow-md h-72 md:h-96 bg-stone-900 hover:shadow-lg">
                <div className="object-contain w-full h-48 p-4 md:h-64">
                  <div className="h-full overflow-hidden">
                    <img
                      src={entrevista.imagen?.url || "/img/default.webp"}
                      alt={`Imagen de la entrevista ${index}`}
                      loading="lazy" // Carga diferida para mejorar rendimiento
                      className="object-cover w-full h-full transition-transform duration-300 rounded-t-lg group-hover:scale-75 -translate-y-7"
                    />
                  </div>
                </div>
                {/* Nombre de la empresa, se oculta si es la tarjeta seleccionada */}
                <div
                  className={`mt-4 text-lg font-bold text-center text-white transition-opacity duration-300 ${
                    isMobile && selectedCard === index
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                >
                  {entrevista.empresa}
                </div>
                {entrevista.link && isMobile && selectedCard === index && (
                  <a
                    href={entrevista.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute w-24 px-3 py-3 font-bold text-center text-black transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bottom-4 left-1/2 bg-TextoEspecial md:w-32 lg:w-40 sm:py-1 sm:px-3 sm:text-sm md:py-3 md:px-6 md:text-lg hover:opacity-50"
                  >
                    Ver video
                  </a>
                )}
              </div>

              {/* Información en hover para pantallas de escritorio */}
              {!isMobile && (
                <div className="absolute flex flex-col justify-center w-full p-4 transition-all duration-300 rounded-lg shadow-md opacity-0 h-90 top-44 group-hover:opacity-100 bg-stone-900">
                  <p className="font-semibold text-TextoEspecial">Empresa:</p>
                  <p className="text-white">{entrevista.empresa}</p>
                  <p className="font-semibold text-TextoEspecial">Emprendedor:</p>
                  <p className="text-white">
                    {entrevista.emprendedores.join(", ")}
                  </p>
                  <p className="font-semibold text-TextoEspecial">Descripción:</p>
                  <p className="text-white">{entrevista.descripcion}</p>
                  <p className="font-semibold text-TextoEspecial">Fecha:</p>
                  <p className="text-white">
                    {new Date(entrevista.fecha).toLocaleDateString("es-ES")}
                  </p>

                  <a
                    href={entrevista.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 px-3 py-3 mx-auto font-bold text-center text-black rounded-md shadow-md bottom-4 left-1/2 bg-TextoEspecial md:w-32 lg:w-1/2 sm:py-1 sm:px-3 sm:text-sm md:py-3 md:px-6 md:text-lg hover:opacity-50"
                  >
                    Ver video
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación solo en escritorio */}
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
