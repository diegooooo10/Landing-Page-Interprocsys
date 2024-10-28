const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto flex items-center p-4">
        <div className="flex items-center">
          <img
            src="image.png" 
            alt="INTERPROCSYS Logo"
            className="h-12 w-12 mr-2"
          />
          <h1 className="text-[36px] font-poppins font-bold text-white">INTERPROCSYS</h1>
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#servicio" className="text-white">Servicio</a>
            </li>
            <li>
              <a href="#empresa" className="text-white">Empresa</a>
            </li>
            <li>
              <a href="#entrevista" className="text-white">Entrevista</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center h-screen">
  <div className="flex flex-col items-center">
    <h2 className="text-[60px] font-poppins font-medium text-white text-center mb-2">
      Expertos en <span className="text-blue-300">Tecnología</span>
    </h2>
    <p className="text-[60px] font-poppins font-medium text-blue-500 mb-4">
      <span className="text-blue-500">4.0</span> y <span className="text-blue-500">Blockchain</span>
    </p>
          <p className="text-lg text-white mt-4 text-center">
            Transforma tu negocio hoy con soluciones innovadoras y personalizadas
          </p>
        </div>
        <a 
  href="#contacto" 
  className="bg-cyan-500 text-black py-4 px-8 text-lg rounded hover:bg-cyan-600 transition duration-300 shadow-md"
>
  Contáctanos
</a>
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
          ></path>
          <text x="50%" y="100" textAnchor="middle" className="text-3xl font-semibold text-white">
            ¿Quiénes somos?
          </text>
        </svg>
      </div>
    </header>
  );
};

export default Header;
