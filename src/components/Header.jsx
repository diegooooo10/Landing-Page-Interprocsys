import { Link, useNavigate } from "react-router-dom"; // Importa Link y useNavigate

export const Header = ({ handleMostrar }) => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setFade(true);
    setTimeout(() => {
      navigate(path);
      setFade(false); 
    }, 500); 
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
          <h1 className="text-[30px] font-poppins font-bold text-white">INTERPROCSYS</h1>
        </div>

        <div className="md:hidden">
          <button onClick={handleMostrar} className="text-white focus:outline-none">
            Contacto
          </button>
        </div>

        <nav className={`flex-grow md:flex`}>
          <div className="flex justify-center md:justify-end md:ml-8"> 
            <ul className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-7">
              <li>
              <a
                  href="#"
                  onClick={() => handleSectionClick('servicio')}
                  className="text-white hover:text-[#4E99A8] font-poppins"
                  aria-label="Servicio"
                >
                  Servicio
                </a>
              </li>
              <li>
              <a
                  href="#"
                  onClick={() => handleSectionClick('empresa')}
                  className="text-white hover:text-[#4E99A8] font-poppins"
                  aria-label="Empresa"
                >
                  Empresa
                </a>
              </li>
              <li>
                <Link to="/entrevistas" className="text-white" aria-label="Entrevista">Entrevista</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={`flex flex-col items-center justify-center h-screen text-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
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
          onClick={handleMostrar}
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
