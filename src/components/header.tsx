import { ActiveLink } from "@/components/activeLink";
import Image from "next/image";
import LogoLight from "../../public/logo-light.svg";
import LogoDark from "../../public/logo-dark.svg";

export function Header() {
  let linkActive = "text-green-500 font-bold";
  return (
    <header
      className={`w-full bg-zinc-100 dark:bg-gray-900 dark:text-gray-100 text-gray-500 font-light text-xl`}
    >
      <nav className={"w-11/12 flex items-center mx-auto"}>
        <div className="flex items-center justify-center">
          <ActiveLink href={"/"}>
            <Image
              src={LogoLight}
              alt="Logo do site"
              width={120}
              objectFit=""
              placeholder={`empty`}
            />
          </ActiveLink>
        </div>
        <div className={`flex-grow ml-6`}>
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
          <button
            className={`hover:text-green-600 font-bold text-xl mx-6`}
            onClick={() => alert("Saindo")}
          >
            Sair
          </button>
        </div>
      </nav>
    </header>
  );
}
