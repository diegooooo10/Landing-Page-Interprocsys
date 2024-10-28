import { useState } from "react";

const ServiceSection = ({ servicio, details }) => {
  return (
    <div className="flex flex-col mb-8 md:flex-row">
      {/* Sección izquierda con el icono y nombre del servicio alineado a la izquierda */}
      <div className="flex flex-col items-start w-full mb-6 md:w-1/4 md:pl-4">
        <div className="flex items-center space-x-3">
          <img
            src={details.image}
            alt={servicio}
            className="w-10 h-10 md:w-12 md:h-12"
          />
          <span className="text-lg font-semibold text-[#4dd4ef] md:text-xl">
            {servicio}
          </span>
        </div>
      </div>

      {/* Información del servicio alineada a la izquierda */}
      <div className="text-left w-full mt-4 md:pl-4">
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          {details.title}
        </h2>
        <p className="text-sm text-white md:text-base mt-1">
          {details.description}
        </p>
      </div>

      {/* Sección derecha con características y detalle de imagen */}
      <div className="flex flex-col w-full md:w-3/4">
        <div className="flex items-center p-4 bg-[#1c1c1c] rounded-lg shadow-lg mt-4">
          {/* Lista de características a la izquierda */}
          <ul className="w-2/3 space-y-2 text-sm text-white list-disc pl-4">
            {details.features.map((feature, index) => (
              <li key={index} className="flex items-start leading-relaxed">
                <span className="text-[#4dd4ef] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Imagen de detalle a la derecha */}
          <div className="w-1/3 flex justify-center">
            <img
              src={details.detailImage}
              alt={servicio}
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>

        {/* Texto de contacto debajo del cuadro principal */}
        <div className="text-center mt-4">
          <p className="text-sm text-[#4dd4ef] md:text-base">
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
    <section className="bg-[#303030] py-6 min-h-screen relative">
      <div className="container px-4 mx-auto">
        <div className="mt-5 mb-10 text-center">
          <h1 className="text-3xl font-semibold text-[#4dd4ef] md:text-4xl">
            Servicios
          </h1>
          <p className="mt-3 text-base text-white md:text-lg">
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
