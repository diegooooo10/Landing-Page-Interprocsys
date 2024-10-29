import { useState } from "react";

const ServiceSection = ({ servicio, details }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8 md:gap-4 lg:gap-6">
      <div className="flex items-center w-full mb-4 md:w-1/3 md:pl-4 lg:pl-6">
        <img
          src={details.image}
          alt={servicio}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mr-4"
        />
        <span className="text-lg font-semibold text-[#4dd4ef] md:text-xl lg:text-2xl">
          {servicio}
        </span>
      </div>

      <div className="w-full md:w-2/3">
        <h2 className="text-lg font-semibold text-white md:text-xl lg:text-2xl">
          {details.title}
        </h2>
        <p className="text-sm text-white mt-2 md:text-base lg:text-lg">
          {details.description}
        </p>

        {/* Cuadro de características e imagen alineados horizontalmente */}
        <div className="flex flex-row items-center p-4 md:p-6 bg-[#1c1c1c] rounded-lg shadow-lg gap-4 mt-4 lg:gap-6">
          <ul className="w-2/3 space-y-2 text-sm text-white list-disc pl-4 md:text-base lg:text-lg">
            {details.features.map((feature, index) => (
              <li key={index} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex-shrink-0">
            <img
              src={details.detailImage}
              alt={servicio}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            />
          </div>
        </div>

        <div className="text-center mt-4 md:mt-6">
          <p className="text-sm text-[#4dd4ef] md:text-base lg:text-lg">
            {details.contactText}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServiciosCelular = () => {
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
      image: "/icon_cloud.webp",
      detailImage: "image_infraestructura.webp",
    },
    Sistemas: {
      title: "Soluciones Inteligentes",
      description:
        "Desarrollamos herramientas a la medida que destacan por su calidad y eficiencia. Superamos expectativas en:",
      features: ["Calidad", "Costos", "Tiempos de entrega"],
      contactText: "¡Solicite una consulta gratuita ahora!",
      image: "/icon_website.webp",
      detailImage: "image_sistemas.webp",
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
      image: "/icon_blockchain.webp",
      detailImage: "image_blockchain.webp",
    },
  };

  return (
    <section className="bg-[#303030] py-4 md:py-6 min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="mt-5 mb-8 text-center">
          <h1 className="text-2xl font-semibold text-[#4dd4ef] md:text-3xl">
            Servicios
          </h1>
          <p className="mt-2 text-base text-white md:text-lg">
            Soluciones personalizadas que permiten superar expectativas en
            calidad, tiempo y costos.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {Object.entries(serviceDetails).map(([servicio, details]) => (
            <ServiceSection
              key={servicio}
              servicio={servicio}
              details={details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
