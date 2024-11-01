import { useState } from "react";

export const ServiciosComputadora = () => {
  const [hoveredService, setHoveredService] = useState("Infraestructura");

  const handleMouseEnter = (servicio) => {
    setHoveredService(servicio);
  };

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
      contactText: "¡Hable con un experto en Blockchain hoy mismo!",
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
    <section className="bg-[#303030] py-12 min-h-screen content-center ">
      <div className="container px-4 mx-auto">
        <div className="mt-5 text-center mb-96">
          <h1 className="font-poppins text-4xl font-semibold text-[#4dd4ef]">
            Servicios
          </h1>
          <p className="mt-5 text-xl text-white font-quicksand">
            Soluciones personalizadas que permiten superar expectativas en
            calidad, tiempo y costos.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-0 ">
          <div className="w-1 bg-[#4dd4ef] h-[17rem] ml-2"></div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            <div className="flex flex-col space-y-8">
              {Object.keys(serviceDetails).map((servicio) => (
                <div
                  key={servicio}
                  className={`flex items-center cursor-pointer space-x-5 p-4 rounded-lg h-16 ${
                    hoveredService === servicio
                      ? "text-[#4dd4ef] opacity-100"
                      : "text-[#4dd4ef] opacity-50"
                  } mb-6 transition-opacity duration-300`}
                  onMouseEnter={() => handleMouseEnter(servicio)}
                >
                  <img
                    src={serviceImages[servicio]}
                    alt={servicio}
                    className="w-12 h-12"
                  />
                  <span className="text-lg">{servicio}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className=" min-h-[109px]">
                <h2 className="text-2xl text-white font-poppins">
                  {serviceDetails[hoveredService].title}
                </h2>
                <p className="text-lg text-white font-quicksand">
                  {serviceDetails[hoveredService].description}
                </p>
              </div>

              <div
                className="bg-[#1c1c1c] p-4 rounded-lg shadow-lg flex items-center space-x-4"
                style={{
                  width: "90%",
                  minWidth: "100px",
                  height: "200px",
                }}
              >
                <ul className="w-2/3 space-y-2 text-base text-white list-disc font-quicksand">
                  {serviceDetails[hoveredService].features.map(
                    (elemento, index) => (
                      <li
                        key={index}
                        className="flex items-center mb-2 text-base"
                      >
                        <span className="text-[#4dd4ef] mr-2">•</span>
                        <span>{elemento}</span>
                      </li>
                    )
                  )}
                </ul>
                <img
                  src={detailImages[hoveredService]}
                  alt={hoveredService}
                  className="object-cover w-1/3 h-auto ml-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center mb-96" style={{ marginLeft: "12cm" }}>
          <p className="font-poppins text-xl text-[#4dd4ef]">
            {serviceDetails[hoveredService].contactText}
          </p>
        </div>
      </div>
    </section>
  );
};
