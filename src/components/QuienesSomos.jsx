export const QuienesSomos = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen py-10 bg-FondoColor2">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-8 px-4 text-white md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-medium md:mb-7 font-poppins text-TextoEspecial md:text-5xl">
              Interprocsys
            </h1>
            <p className="text-xl text-justify font-quicksand">
              Somos una empresa mexicana con amplia experiencia en banca,
              telecomunicaciones y finanzas. Superamos tus expectativas con
              tecnologías avanzadas y soluciones a medida.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="object-contain h-[300px] w-[300px] md:h-[450px] md:w-[450px]"
              src="/image_team.webp"
              alt="Equipo"
            />
          </div>
        </div>

        <hr className="mx-auto w-11/12 bg-TextoEspecial h-[2px] my-0 md:my-10 md:w-full" />

        <div className="mx-auto text-center text-white">
          <h3 className="mb-6 text-2xl font-semibold text-TextoEspecial">
            Beneficios clave
          </h3>
          <ul className="flex flex-col items-center justify-center gap-6 text-base list-none md:flex-row md:gap-12">
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-TextoEspecial before:rotate-45 before:rounded-sm">
              Innovación y vanguardia
            </li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-TextoEspecial before:rotate-45 before:rounded-sm">
              Experiencia en múltiples sectores
            </li>
            <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-TextoEspecial before:rotate-45 before:rounded-sm">
              Soluciones personalizadas
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
