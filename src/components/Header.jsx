import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ onServiciosClick, onEmpresaClick, handleMostrar }) => {
  return (
    <header className="bg-gradient-to-t from-FondoColor2 to-FondoEspecial">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="ips-adobbe.webp"
            alt="Interprocsys logo"
            className="xl:h-[125px] xl:w-[125px] h-[65px] w-[65px]"
          />
          <h1 className="text-xl font-medium md:text-2xl xl:text-4xl font-poppins">
            INTERPROCSYS
          </h1>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li className="hidden lg:flex cursor-pointer hover:opacity-50">
              <a onClick={onEmpresaClick}>Empresa</a>
            </li>
            <li className="hidden lg:flex cursor-pointer hover:opacity-50">
              <a onClick={onServiciosClick}>Servicios</a>
            </li>
            <li className="flex items-start cursor-pointer hover:opacity-50">
              <Link to="/entrevistas">Entrevistas</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-center text-4xl">
          <span className="text-blue-500">Expertos</span>{" "}
          <span className="text-blue-600">en</span>{" "}
          <span className="text-blue-700">Tecnología</span>{" "}
          <span className="text-sky-500">4.0</span>{" "}
          <span className="text-cyan-500">y Blockchain</span>
        </h1>
        <p className="mb-20 text-xl font-semibold text-white lg:text-2xl">
          Transforma tu negocio hoy con soluciones innovadoras y personalizadas
        </p>
        <button
          onClick={handleMostrar}
          className="p-3 text-xl font-medium text-black rounded-md bg-TextoEspecial lg:h-[80px] lg:w-[220px] hover:opacity-50"
        >
          Contáctanos
        </button>
      </div>

      <div className="grid grid-cols-3">
        <hr className="w-full h-[5px] bg-TextoEspecial" />
        <span className="text-[14px] font-medium text-center text-white md:text-2xl font-poppins">
          ¿Quiénes Somos?
        </span>
        <hr className="w-full h-[5px] bg-TextoEspecial" />
      </div>
    </header>
  );
};

export default Header;
