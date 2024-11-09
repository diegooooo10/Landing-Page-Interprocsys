import { Link } from "react-router-dom";

export const Header = ({ onServiciosClick, onEmpresaClick, handleMostrar }) => {
  return (
    <header className="bg-gradient-to-t from-FondoColor2 to-FondoEspecial">
      <div className="grid items-center grid-cols-3 p-2 pl-2 text-white md:pl-7 md:p-7">
        <div className="flex items-center">
          <img
            src="ips-adobbe.webp"
            alt="Interprocsys logo"
            className="h-[65px] w-[65px] xl:h-[125px] xl:w-[125px] object-cover"
            loading="lazy"
          />
          <h1 className="ml-2 text-[18px] font-medium md:text-2xl lg:text-3xl font-poppins">
            INTERPROCSYS
          </h1>
        </div>

        <nav className="flex justify-end col-span-2 md:justify-center">
          <ul className="flex col-span-2 space-x-0 text-base font-medium md:col-span-2 md:space-x-4 lg:space-x-10 lg:text-xl font-poppins">
            <li className="hidden cursor-pointer hover:opacity-50 md:flex">
              <Link onClick={onEmpresaClick}>Empresa</Link>
            </li>
            <li className="hidden cursor-pointer hover:opacity-50 md:flex">
              <Link onClick={onServiciosClick}>Servicios</Link>
            </li>
            <li className="flex items-start cursor-pointer hover:opacity-50">
              <Link to="/entrevistas">Entrevistas</Link>
              <span className="block ml-1 md:hidden">&gt;</span>
            </li>
            <li className="hidden cursor-pointer hover:opacity-50 md:flex">
              <Link onClick={handleMostrar}>Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-screen px-10 mx-auto lg:w-3/4 ">
        <div className="text-center">
          <p className="mb-16 text-5xl font-semibold leading-snug md:text-6xl font-poppins">
            <span className="text-white">Expertos en </span>
            <span className="text-TextoEspecial">Tecnologías </span>
            <br />
            <span className="text-TextoEspecial">4.0 </span>
            <span className="text-white">y </span>
            <span className="text-TextoEspecial">Blockchain </span>
          </p>

          <p className="mb-16 text-xl font-semibold leading-snug text-white lg:text-2xl xl:text-3xl font-quicksand">
            Transforma tu negocio hoy con soluciones innovadoras y
            personalizadas
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleMostrar}
            className="p-3 text-2xl font-medium text-black rounded-md bg-TextoEspecial font-poppins xl:h-[80px] xl:w-[220px] lg:h-[60px] lg:w-[200px] hover:opacity-50 block md:hidden"
          >
            Contáctanos
          </button>
        </div>
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
