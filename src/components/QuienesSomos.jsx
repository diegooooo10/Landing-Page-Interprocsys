export const QuienesSomos = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen py-10 bg-FondoColor2">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-8 px-4 text-white md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-medium md:mb-7 font-poppins text-TextoEspecial md:text-5xl">
              Interprocsys
            </h1>
            <p className="text-base text-justify lg:text-xl font-quicksand">
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
              loading="lazy"
            />
          </div>
        </div>

        <hr className="mx-auto w-11/12 bg-TextoEspecial h-[2px] my-0 md:my-10 md:w-full" />

        <div className="mx-auto text-center text-white">
          <h2 className="mb-6 text-2xl font-semibold text-TextoEspecial">
            Beneficios clave
          </h2>
          <ul className="flex flex-col items-center justify-center gap-6 text-base list-none md:flex-row md:gap-12">
            {[
              "Innovación y vanguardia",
              "Experiencia en múltiples sectores",
              "Soluciones personalizadas",
            ].map((benefit, index) => (
              <li
                key={index}
                className="pl-6 list-none before:content-['◆'] before:mr-2 before:text-TextoEspecial"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
