import { useState } from "react";

export const Servicios = () => {
  const [hoveredService, setHoveredService] = useState("Infraestructura");

  const handleMouseEnter = (servicio) => {
    setHoveredService(servicio);
  };

  const handleMouseLeave = () => {};

  const serviceDetails = {
    Infraestructura: {
      title: "El poder de la nube a su servicio",
      description:
        "Transforme y mejore su infraestructura con la capacidad de nuestro soporte especializado. Migra a la nube y aproveche:",
      features: [
        "Servidores robustos",
        "Almacenamiento seguro",
        "Repositorios de archivos",
      ],
      contactText: "¡Contáctenos hoy y lleve su negocio a la nube!",
    },
    Sistemas: {
      title: "Soluciones Inteligentes",
      description:
        "Desarrollamos herramientas a la medida que destacan por su calidad y eficiencia. Superamos expectativas en:",
      features: ["Calidad", "Costos", "Tiempos de entrega"],
      contactText: "¡Solicite una consulta gratuita ahora!",
    },
    Blockchain: {
      title: "La cadena de Bloques",
      description: "Aproveche blockchain para su negocio. Beneficios:",
      features: [
        "Seguridad",
        "Inmutabilidad",
        "Trazabilidad",
        "Confianza",
        "Privacidad",
      ],
      contactText: "¡Hable con experto en Blockchain hoy mismo!",
    },
  };

  const serviceImages = {
    Infraestructura: "/icon_cloud.webp",
    Sistemas: "/icon_website.webp",
    Blockchain: "/icon_blockchain.webp",
  };

  const detailImages = {
    Infraestructura: "image_infraestructura.webp",
    Sistemas: "image_sistemas.webp",
    Blockchain: "image_blockchain.webp",
  };

  return (
    <section className="bg-[#303030] py-12 min-h-screen relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mt-5 mb-20">
          <h1 className="font-poppins text-4xl font-semibold text-[#4dd4ef]">
            Servicios
          </h1>
          <p className="mt-5 text-xl text-white font-quicksand">
            Soluciones personalizadas que permiten superar expectativas en
            calidad, tiempo y costos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex w-full md:w-1/4 items-start ml-44">
            <div
              className="w-[4px] h-[70vh] bg-[#00c2ff] mr-4"
              style={{ marginTop: "30px" }}
            ></div>
            <ul className="space-y-12">
              {Object.keys(serviceDetails).map((servicio) => (
                <li
                  key={servicio}
                  className={`flex items-center cursor-pointer space-x-5 ${
                    hoveredService === servicio
                      ? "text-[#4dd4ef] opacity-100"
                      : "text-[#4dd4ef] opacity-50"
                  } mb-6 transition-opacity duration-300`}
                  onMouseEnter={() => handleMouseEnter(servicio)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={serviceImages[servicio]}
                    alt={servicio}
                    className="w-14 h-14 mb-6"
                  />
                  <span className="text-lg" style={{ lineHeight: "120px" }}>
                    {servicio}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 relative">
            <div className="absolute left-[130px] top-[40px] text-left">
              <h2 className="text-3xl text-white font-poppins mb-4">
                {serviceDetails[hoveredService].title}
              </h2>
              <p className="text-lg text-white font-quicksand leading-relaxed">
                {serviceDetails[hoveredService].description}
              </p>
            </div>
            <div className="absolute right-10 top-[180px] bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-[600px] h-[220px] flex items-center">
              <ul className="text-lg text-white list-disc font-quicksand space-y-2 mr-4 pl-5">
                {serviceDetails[hoveredService].features.map(
                  (elemento, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <span className="text-[#4dd4ef] mr-2">•</span>
                      <span>{elemento}</span>
                    </li>
                  )
                )}
              </ul>
              <img
                src={detailImages[hoveredService]}
                alt={hoveredService}
                className="w-1/2 h-auto object-cover mb-4"
                style={{ marginTop: "40px" }}
              />
            </div>
            <div className="absolute right-20 text-center top-[420px] mr-16">
              <p className="font-poppins text-lg text-[#4dd4ef] mt-4">
                {serviceDetails[hoveredService].contactText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
