import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconX,
} from "../../public/svg";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center h-auto bg-FondoColor2 md:h-36">
      <div className="grid items-center w-full min-w-full grid-cols-2 gap-4 px-2">
        {/* Sección de íconos */}
        <section className="flex justify-center gap-3 mt-5 md:mt-0 sm:justify-start">
          <a
            href="https://www.facebook.com/Interprocsysmx/"
            target="_blank"
            rel="noreferrer"
          >
            <IconFacebook />
          </a>
          <a
            href="https://www.instagram.com/interprocsys_sa_de_cv/"
            target="_blank"
            rel="noreferrer"
          >
            <IconInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/interprocsys-s-a-de-c-v/"
            target="_blank"
            rel="noreferrer"
          >
            <IconLinkedin />
          </a>
          <a href="https://x.com/interprocsys" target="_blank" rel="noreferrer">
            <IconX />
          </a>
        </section>

        {/* Sección de texto */}
        <section className="text-[10px] py-2 md:py-0 font-medium text-right text-white md:text-base font-quicksand">
          <p className="mb-2 ">© 2019-2024 Interprocsys S.A de C.V. v1.8.0</p>
          <p className="mb-2 ">contacto@interprocsys.com</p>
          <p>
            2024 Interprocsys. This project is licensed under the GNU GPLv3.
          </p>
        </section>
      </div>
    </footer>
  );
};
