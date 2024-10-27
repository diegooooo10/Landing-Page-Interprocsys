
const Header = () => {
  return (

    export const Header = ({handleMostrar}) => {
      return (
    <header className="bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="image.png" 
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <h1 className="text-2xl font-bold text-white">INTERPROCSYS</h1>
        </div>
        
        <nav>
          
          <ul className="flex space-x-4">
            <li>
              <a href="#servicio" className="text-white">servicio</a>
            </li>
            <li>
              <a href="#empresa" className="text-white">empresa</a>
            </li>
            <li>
              <a href="#entrevista" className="text-white">entrevista</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center mr-6">
          <h1 className="text-6xl text-white text-center">
            Expertos
           
            <p className="text-blue-400">en</p>
           
            <p className="text-blue-500">Tecnología</p>
            
            <p className="text-blue-300">4.0</p>
            
            <p className="text-cyan-400">y Blockshop</p>
          </h1>
          <button
        onClick={handleMostrar}
          className="px-4 py-2 ml-4 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
        ></button>
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
