import React, { useState } from "react";

const Servicios = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleMouseEnter = (service) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  const serviceDetails = {
    Infraestructura: [
      "Servidores robustos",
      "Almacenamiento seguro",
      "Repositorios de archivos",
    ],
    Sistemas: [
      "Soluciones que optimizan procesos",
      "Integraciones de software",
      "Soporte especializado",
    ],
    Blockchain: [
      "Asegura la transparencia en las transacciones",
      "Almacenamiento descentralizado",
      "Smart Contracts personalizados",
    ],
  };

  return (
    <section className="bg-[#303030] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="font-poppins text-4xl font-semibold text-[#4dd4ef]">
            Servicios
          </h1>
          <p className="font-quicksand text-xl text-white mt-4">
            Soluciones personalizadas que permiten superar expectativas en
            calidad, tiempo y costos.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-10">
          {/* Sección de servicios con íconos */}
          <div className="md:w-1/3 w-full flex flex-col items-start">
            <ul className="space-y-6">
              <li
                className={`flex items-center cursor-pointer ${
                  hoveredService === "Infraestructura"
                    ? "text-white"
                    : "text-[#4dd4ef]"
                }`}
                onMouseEnter={() => handleMouseEnter("Infraestructura")}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/images/icon_cloud.webp"
                  alt="Infraestructura"
                  className="w-8 h-8 mr-4"
                />
                Infraestructura
              </li>
              <li
                className={`flex items-center cursor-pointer ${
                  hoveredService === "Sistemas"
                    ? "text-white"
                    : "text-[#4dd4ef]"
                }`}
                onMouseEnter={() => handleMouseEnter("Sistemas")}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/images/icon_website.webp"
                  alt="Sistemas Informáticos"
                  className="w-8 h-8 mr-4"
                />
                Sistemas Informáticos
              </li>
              <li
                className={`flex items-center cursor-pointer ${
                  hoveredService === "Blockchain"
                    ? "text-white"
                    : "text-[#4dd4ef]"
                }`}
                onMouseEnter={() => handleMouseEnter("Blockchain")}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/images/icon_blockchain.webp"
                  alt="Blockchain"
                  className="w-8 h-8 mr-4"
                />
                Cadena de bloques
              </li>
            </ul>
          </div>

          {/* Sección de descripción del servicio */}
          <div className="md:w-2/3 w-full mt-6 md:mt-0 md:pl-8">
            <h2 className="font-poppins text-2xl text-white">
              El poder de la nube a su servicio
            </h2>
            <p className="font-quicksand text-lg text-white mt-4">
              Transforme y mejore su infraestructura con la capacidad de nuestro
              soporte especializado. Migre a la nube y aproveche:
            </p>
            <div className="bg-[#1c1c1c] p-5 mt-4 rounded-lg">
              {hoveredService ? (
                <ul className="font-quicksand text-lg text-white list-disc pl-5">
                  {serviceDetails[hoveredService].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-quicksand text-lg text-white">
                  Pase el cursor sobre un servicio para ver más detalles.
                </p>
              )}
            </div>
            <p className="font-poppins text-lg text-[#4dd4ef] mt-6">
              ¡Contáctenos hoy y lleve su negocio a la nube!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
