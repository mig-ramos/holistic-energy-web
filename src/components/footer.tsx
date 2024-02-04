import { useContext } from "react";
import AppContext from "@/data/contexts/app/AppContext";
import { ActiveLink } from "@/components/activeLink";
import Image from "next/image";
import LogoLight from "../../public/logo-light.svg";
import LogoDark from "../../public/logo-dark.svg";

export function Footer() {
  const { tema } = useContext(AppContext);
  let linkActive = "text-green-500 font-bold";

  return (
    <section
      className={`flex flex-col w-auto border-t-2 border-green-800  h-auto`}
    >
      <div className="flex flex-col md:flex-row px-1 justify-center md:gap-8 bg-zinc-200  dark:bg-gray-900 dark:text-gray-200 text-gray-500">
        <div className="flex ml-1 pl-3 justify-center w-full md:w-1/4 mb-4">
          <ActiveLink href={"/"}>
            {tema === "" ? (
              <Image
                src={LogoLight}
                alt="Logo do site"
                width={150}
                objectFit=""
                placeholder={`empty`}
              />
            ) : (
              <Image
                src={LogoDark}
                alt="Logo do site"
                width={150}
                objectFit=""
                placeholder={`empty`}
              />
            )}
          </ActiveLink>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/4 my-4">
          <h3 className="text-xl font-bold">Links:</h3>
          <div>
            <ActiveLink href={"/"} activeClassName={linkActive}>
              <span>Home</span>
            </ActiveLink>
          </div>
          <div>
            <ActiveLink href={"/about"} activeClassName={linkActive}>
              <span>Sobre</span>
            </ActiveLink>
          </div>
          <div>
            <ActiveLink href={"/therapies"} activeClassName={linkActive}>
              <span>Terapias</span>
            </ActiveLink>
          </div>
          <div>
            <ActiveLink href={"/contact"} activeClassName={linkActive}>
              <span>Contato</span>
            </ActiveLink>
          </div>
          <div>
            <ActiveLink href={"/dashboard"} activeClassName={linkActive}>
              <span>Meu Painel</span>
            </ActiveLink>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/4 my-4">
          <h3 className="text-xl font-bold">Terapias:</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            <li>Florais</li>
            <li>Reiki</li>
            <li>Acupuntura</li>
            <li>Radiestesia</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/4 my-4">
          <h3 className="text-xl font-bold">Diversos:</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            <li>Política da Informação</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center bg-zinc-300  dark:bg-black dark:text-gray-400 text-gray-400">
        <p className={`font-thin py-1`}>
          &copy;2024 todos direitos reservados by sidebit.dev
        </p>
      </div>
    </section>
  );
}
