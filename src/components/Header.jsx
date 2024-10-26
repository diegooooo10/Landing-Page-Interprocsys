export const Header = ({handleMostrar}) => {
  return (
    <header className="text-black bg-sky-900">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <div className="flex items-center">
          <img src="/public/ips-adobbe.webp" alt="Logo" className="w-12 h-12 mr-2" />
          <h2 className="text-2xl font-bold">INTERPROCSYS</h2>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#servicio"
                className="transition duration-300 hover:text-white"
              >
                servicio
              </a>
            </li>
            <li>
              <a
                href="#empresa"
                className="transition duration-300 hover:text-white"
              >
                empresa
              </a>
            </li>
            <li>
              <a
                href="#entrevista"
                className="transition duration-300 hover:text-white"
              >
                entrevista
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-center">
          <span className="text-blue-500">Expertos</span>{" "}
          <span className="text-blue-600">en</span>{" "}
          <span className="text-blue-700">Tecnologia</span>{" "}
          <span className="text-sky-500">4.0</span>{" "}
          <span className="text-cyan-500">y Blockshop</span>
        </h1>
        <button
        onClick={handleMostrar}
          className="px-4 py-2 ml-4 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
        >
          Contáctanos
        </button>
      </div>
    </header>
  );
};
