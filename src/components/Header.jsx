
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(false);
  const [currentSection, setCurrentSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = () => {
    alert(''); // Implementa tu lógica aquí
  };

  const handleSectionClick = (section) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSection(section);
      setFade(false);
      
    }, 500); 
  };

  return (
    <header className="bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src="ips-adobbe.webp" 
            alt="INTERPROCSYS Logo"
            className="h-12 w-12 mr-2"
          />
          <h1 className="text-[30px] font-poppins font-bold text-white">INTERPROCSYS</h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? '✖️' : 'Entrevistas>'}
          </button>
        </div>

        <nav className={`flex-grow ${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <div className="flex flex-col md:flex-row md:justify-end md:ml-8"> 
            <ul className={`flex flex-col items-center md:flex-row md:justify-end space-y-5 md:space-y-0 md:space-x-7`}>
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
                <a
                  href="#"
                  onClick={() => handleSectionClick('entrevista')}
                  className="text-white hover:text-[#4E99A8] font-poppins"
                  aria-label="Entrevista"
                >
                  Entrevista
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={`flex flex-col items-center justify-center h-screen text-center transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="text-[40px] md:text-[60px] font-poppins font-medium text-white mb-2">
          Expertos en <span className="text-blue-300">Tecnología</span>
        </h2>
        <p className="text-[32px] md:text-[60px] font-poppins font-medium text-blue-500 mb-4">
          <span className="text-blue-500">4.0</span> y <span className="text-blue-500">Blockchain</span>
        </p>
        <p className="text-lg font-poppins text-white mt-4">
          Transforma tu negocio hoy con soluciones innovadoras y personalizadas
        </p>
        <button 
          onClick={handleContactClick}
          className="bg-[#4E99A8] text-white py-4 px-8 text-lg rounded-lg shadow-lg 
                     hover:bg-[#3A7A8D] transition-all duration-300 mt-4"
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
          <text x="50%" y="100" textAnchor="middle" className="text-3xl font-semibold text-white font-poppins">
            ¿Quiénes somos?
          </text>
        </svg>
      </div>
    </header>
  );
};

export default Header;
