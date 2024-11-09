import { useState, useEffect, useMemo, useCallback } from "react";
import entrevistasData from "../mocks/entrevistas.json";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [videoIframeSrc, setVideoIframeSrc] = useState(null);

  const entrevistas = useMemo(() => entrevistasData.entrevistas || [], []);
  const itemsToShow = isMobile ? entrevistas.length : 3;
  const maxIndex = useMemo(() => entrevistas.length - itemsToShow, [entrevistas.length, itemsToShow]);
  const visibleSlides = useMemo(() => entrevistas.slice(currentIndex, currentIndex + itemsToShow), [entrevistas, currentIndex, itemsToShow]);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 600);
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(handleResize, 150);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
      clearTimeout(window.resizeTimer);
    };
  }, [handleResize]);

  const openModal = (videoLink) => {
    setShowModal(true);
    setTimeout(() => {
      setVideoIframeSrc(videoLink.replace("/view", "/preview"));
    }, 0);
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoIframeSrc(null);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };


  return (
    <div className="flex-col items-center content-center justify-center min-h-screen p-4 mx-auto text-gray-300 bg-gradient-to-b bg-zinc-900 to-black">
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

      {/* Modal para el video */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl p-6 transition-transform duration-300 ease-out transform scale-105 shadow-lg bg-FondoColor md:max-w-2xl lg:max-w-4xl xl:max-w-[1220px] md:p-8 rounded-xl">
            <button
              onClick={closeModal}
              className="absolute text-red-500 transition-colors duration-300 top-4 right-4 hover:opacity-50"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-6 h-6 md:h-8 lg:right-[-16px] lg:top-[-16px] right-[-12px] top-[-9px] md:right-[-10px] md:top-[-10px] md:w-8 lg:h-10 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="w-full h-[70vh] md:h-[75vh] lg:h-[80vh]">
              <iframe
                src={videoIframeSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Scroll en móviles */}
      <div
        className={`${
          isMobile
            ? "overflow-y-scroll h-screen"
            : "overflow-visible rounded-md mx-auto sm:min-h-[500px] h-[500px]  md:h-[650px] lg:h-[600px]"
        } flex justify-center w-full max-w-6xl p-4 md:p-24 bg-stone-700 ring-4 ring-black`}
        style={{ marginTop: isMobile ? "0" : "-35px" }}
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
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-300 rounded-t-lg group-hover:scale-75 -translate-y-7"
                    />
                  </div>
                </div>
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
                  <button
                    onClick={() => openModal(entrevista.link)}
                    className="absolute w-24 px-3 py-3 font-bold text-center text-black transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md bottom-4 left-1/2 bg-TextoEspecial md:w-32 lg:w-40 sm:py-1 sm:px-3 sm:text-sm md:py-3 md:px-6 md:text-lg hover:opacity-50"
                  >
                    Ver video
                  </button>
                )}
              </div>

              {!isMobile && (
                <div className="absolute flex flex-col justify-center w-full p-4 transition-all duration-300 rounded-lg shadow-md opacity-0 h-90 top-44 group-hover:opacity-100 bg-stone-900">
                  <p className="font-semibold text-TextoEspecial">Empresa:</p>
                  <p className="text-white">{entrevista.empresa}</p>
                  <p className="font-semibold text-TextoEspecial">
                    Emprendedor:
                  </p>
                  <p className="text-white">
                    {entrevista.emprendedores.join(", ")}
                  </p>
                  <p className="font-semibold text-TextoEspecial">
                    Descripción:
                  </p>
                  <p className="text-white">{entrevista.descripcion}</p>
                  <p className="font-semibold text-TextoEspecial">Fecha:</p>
                  <p className="text-white">
                    {new Date(entrevista.fecha).toLocaleDateString("es-ES")}
                  </p>

                  <button
                    onClick={() => openModal(entrevista.link)}
                    className="w-24 px-3 py-3 mx-auto font-bold text-center text-black rounded-md shadow-md bottom-4 left-1/2 bg-TextoEspecial md:w-32 lg:w-1/2 sm:py-1 sm:px-3 sm:text-sm md:py-3 md:px-6 md:text-lg hover:opacity-50"
                  >
                    Ver video
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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
