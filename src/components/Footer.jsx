import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconX,
} from "../../public/svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center h-auto bg-FondoColor2 md:h-36">
      <div className="grid items-center w-full grid-cols-2 gap-4 px-2">
        {/* Sección de íconos */}
        <section className="flex justify-center gap-3 sm:justify-start">
          {[
            {
              label: "Contactanos por Facebook",
              href: "https://www.facebook.com/Interprocsysmx/",
              Icon: IconFacebook,
            },
            {
              label: "Contactanos por Instagram",
              href: "https://www.instagram.com/interprocsys_sa_de_cv/",
              Icon: IconInstagram,
            },
            {
              label: "Contactanos por LinkedIn",
              href: "https://www.linkedin.com/company/interprocsys-s-a-de-c-v/",
              Icon: IconLinkedin,
            },
            {
              label: "Contactanos por X",
              href: "https://x.com/interprocsys",
              Icon: IconX,
            },
          ].map(({ label, href, Icon }, index) => (
            <a
              key={index}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
            </a>
          ))}
        </section>

        {/* Sección de texto */}
        <section className="py-2 text-xs font-medium text-right text-white lg:text-base md:py-0 font-quicksand">
          <p className="mb-2">© 2019-2024 Interprocsys S.A de C.V. v1.8.0</p>
          <p className="mb-2">contacto@interprocsys.com</p>
          <p>
            2024 Interprocsys. This project is licensed under the GNU GPLv3.
          </p>
        </section>
      </div>
    </footer>
  );
};
