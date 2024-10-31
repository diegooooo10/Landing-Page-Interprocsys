import { useState, useEffect } from "react";
import entrevistasData from "../mocks/entrevistas.json";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entrevistas, setEntrevistas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setEntrevistas(entrevistasData.entrevistas || []);
    setIsLoading(false);
  }, []);

  const itemsToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsToShow >= entrevistas.length ? 0 : prev + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsToShow < 0
        ? entrevistas.length - itemsToShow
        : prev - itemsToShow
    );
  };

  if (isLoading)
    return (
      <div className="text-center text-white">Cargando entrevistas...</div>
    );

  if (entrevistas.length === 0)
    return (
      <div className="text-center text-white">
        No hay entrevistas disponibles.
      </div>
    );

  const visibleSlides = entrevistas.slice(
    currentIndex,
    currentIndex + itemsToShow
  );


  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-4 text-gray-300 bg-gradient-to-b bg-zinc-900 to-black">
      <button
        onClick={() => (window.location.href = "/")}
        className="absolute p-3 text-black transition-colors duration-300 rounded-md shadow-md top-6 left-6 bg-cyan-500 hover:bg-cyan-400"
        aria-label="Regresar"
      >
        <svg
          className="w-8 h-8 transform rotate-180"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
        </svg>
      </button>

      <h2 className="mt-6 mb-2 text-3xl font-bold text-center text-cyan-300">
        Entrevistas
      </h2>
      <p className="mb-10 text-2xl text-center text-white">
        Diálogo con emprendimiento 2021
      </p>

      <button
        onClick={prevSlide}
        className="absolute z-10 p-3 text-white transition-colors duration-300 transform -translate-y-1/2 left-4 top-1/2 hover:text-cyan-300"
        aria-label="Anterior"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </button>

      <div className="flex justify-center w-full max-w-5xl p-24 bg-stone-700 ring-4 ring-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {visibleSlides.map((entrevista, index) => (
            <div key={index} className="relative group">
              {/* Tarjeta principal */}
              <div className="relative w-full overflow-hidden transition-transform duration-300 transform rounded-lg shadow-md bg-stone-900 hover:scale-105 hover:shadow-lg">
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
                </div>
              </div>

              {/* Información en hover fuera de la tarjeta */}
              <div className="static absolute flex flex-col items-center justify-center w-full p-4 text-center transition-all duration-300 rounded-lg shadow-md opacity-0 h-90 top-3/4 group-hover:opacity-100 bg-stone-900">
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
                {entrevista.link && (
                  <a
                    href={entrevista.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-400 underline hover:text-blue-500"
                  >
                    Ver entrevista
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute z-10 p-3 text-white transition-colors duration-300 transform -translate-y-1/2 right-4 top-1/2 hover:text-cyan-300"
        aria-label="Siguiente"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
};
