import { useState, useEffect, useRef } from "react";

export const Carousel = ({ autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entrevistas, setEntrevistas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const slideInterval = useRef(null); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/mocks/entrevistas.json");
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data = await response.json();
        setEntrevistas(data.entrevistas || []);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === entrevistas.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? entrevistas.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (autoPlay && entrevistas.length > 1) {
      slideInterval.current = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval.current);
    }
  }, [autoPlay, interval, entrevistas]);

  if (isLoading) return <div>Cargando entrevistas...</div>;
  if (entrevistas.length === 0)
    return <div>No hay entrevistas disponibles.</div>;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative h-64 overflow-hidden">
        {entrevistas.map((entrevista, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={entrevista.imagen?.url || "/img/default.webp"}
              alt={`Imagen de la entrevista ${index}`}
              className="object-cover w-full h-full"
              onError={(e) => (e.currentTarget.src = "/img/default.webp")}
            />
            <div className="absolute bottom-0 w-full p-4 text-white bg-black bg-opacity-50">
              <h3 className="font-bold">{entrevista.empresa}</h3>
              <p>{entrevista.descripcion}</p>
              <p>
                Fecha: {new Date(entrevista.fecha).toLocaleDateString("es-ES")}
              </p>
              <p>Emprendedores: {entrevista.emprendedores?.join(", ")}</p>
              {entrevista.link && (
                <a
                  href={entrevista.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Ver entrevista
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 top-1/2"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 top-1/2"
      >
        {">"}
      </button>
      
      <div className="flex justify-center mt-2">
        {entrevistas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
