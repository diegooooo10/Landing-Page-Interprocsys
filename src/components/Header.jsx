import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    alert('');
  };

  return (
    <header className="bg-gradient-to-b from-blue-900 to-black">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center">
          <img
            src="ips-adobbe.webp" 
            alt="INTERPROCSYS Logo"
            className="w-12 h-12 mr-2"
          />
          <h1 className="text-[36px] font-poppins font-bold text-white">INTERPROCSYS</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖️' : 'Entrevistas>'}
          </button>
        </div>

        <nav className={`flex-grow md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex justify-center md:justify-end md:ml-8"> 
            <ul className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-7">
              <li>
                <a href="#servicio" className="text-white" aria-label="Servicio">Servicio</a>
              </li>
              <li>
                <a href="#empresa" className="text-white" aria-label="Empresa">Empresa</a>
              </li>
              <li>
                <a href="#entrevista" className="text-white" aria-label="Entrevista">Entrevista</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-[60px] font-poppins font-medium text-white mb-2">
          Expertos en <span className="text-blue-300">Tecnología</span>
        </h2>
        <p className="text-[60px] font-poppins font-medium text-blue-500 mb-4">
          <span className="text-blue-500">4.0</span> y <span className="text-blue-500">Blockchain</span>
        </p>
        <p className="mt-4 text-lg text-white">
          Transforma tu negocio hoy con soluciones innovadoras y personalizadas
        </p>
        <button 
          onClick={handleContactClick}
          className="px-8 py-4 mt-4 text-lg text-black transition duration-300 rounded shadow-md bg-cyan-500 hover:bg-cyan-600"
          aria-label="Contáctanos"
        >
          Contáctanos
        </button>
      </div>  

      <div className="relative">
        <svg 
          className="w-full"
          viewBox="0 0 1440 150" 
          preserveAspectRatio="none"
        >
          <path 
            fill="rgba(2, 56, 113, 1)" 
            d="M0,150 C720,0 1440,150 1440,150 L0,150 Z"
          />
          <text x="50%" y="100" textAnchor="middle" className="text-3xl font-semibold text-white">
            ¿Quiénes somos?
          </text>
        </svg>
      </div>
    </header>
  );
};

