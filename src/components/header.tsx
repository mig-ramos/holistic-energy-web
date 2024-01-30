import { useContext } from "react";
import { ActiveLink } from "@/components/activeLink";
import Image from "next/image";
import LogoLight from "../../public/logo-light.svg";
import LogoDark from "../../public/logo-dark.svg";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import AppContext from "@/data/contexts/app/AppContext";
import useAppData from "@/data/hooks/useAppData";
import BotaoAlternarTema from "./buttonAlternationTheme";

export function Header() {
  const { signOut, isAuthenticated } = useContext(AuthContext);
  // const { tema, alternarTema } = useAppData(); // Para o Botão
  const { tema } = useContext(AppContext);
  let linkActive = "text-green-500 font-bold";
  return (
    <header
      className={`w-full bg-zinc-100 dark:bg-gray-900 dark:text-gray-100 text-gray-500 font-light text-xl`}
    >
      <nav
        className={"lg:w-11/12 flex flex-col lg:flex-row items-center mx-auto"}
      >
        <div className="flex items-center justify-center">
          <ActiveLink href={"/"}>
            {tema === "" ? (
              <Image
                src={LogoLight}
                alt="Logo do site"
                width={120}
                objectFit=""
                placeholder={`empty`}
              />
            ) : (
              <Image
                src={LogoDark}
                alt="Logo do site"
                width={120}
                objectFit=""
                placeholder={`empty`}
              />
            )}
          </ActiveLink>
        </div>
        <div className={`flex-grow md:ml-6`}>
          <ActiveLink href={"/"} activeClassName={linkActive}>
            <span>Home</span>
          </ActiveLink>
          <ActiveLink href={"/about"} activeClassName={linkActive}>
            <span>Sobre</span>
          </ActiveLink>
          <ActiveLink href={"/therapies"} activeClassName={linkActive}>
            <span>Terapias</span>
          </ActiveLink>
          <ActiveLink href={"/contact"} activeClassName={linkActive}>
            <span>Contato</span>
          </ActiveLink>
          <ActiveLink href={"/dashboard"} activeClassName={linkActive}>
            <span>Meu Painel</span>
          </ActiveLink>
        </div>
        <div>
          {/* <BotaoAlternarTema tema={"tema"} alternarTema={() =>alternarTema}/> */}
          {/* {isAuthenticated ?? (
            <button
            className={`hover:text-green-600 font-bold text-xl mx-6`}
            onClick={signOut}
          >
            Sair
          </button>
          )} */}
          
        </div>
      </nav>
    </header>
  );
}
