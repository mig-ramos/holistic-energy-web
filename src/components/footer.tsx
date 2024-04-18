import { useContext } from "react";
import AppContext from "@/data/contexts/app/AppContext";
import { ActiveLink } from "@/components/activeLink";
import Image from "next/image";
import LogoLight from "../../public/logo-light.svg";
import LogoDark from "../../public/logo-dark.svg";
import Therapy from "@/data/db/home/therapy/Therapy";
import { MessageCircle, Mail, CalendarClock } from "lucide-react";
import { IconeFacebook, IconeInstagram, IconeYoutube } from "./icons";
import Link from "next/link";

type FooterProps = {
  therapies: Therapy[];
};

export function Footer<T>(props: FooterProps) {
  const { tema } = useContext(AppContext);
  let linkActive = "text-green-500 font-bold";
  let linksTherapias = props.therapies;

  function telefonar() {
    let phone = "11456734567";
    let message = encodeURIComponent(
      `Meu nome: ${"Terapeuta da Silva"} \n Email: ${"terapias-holisticas@teste.com"} \n Assunto: ${"Como é o atendimento de ..."}`
    );
    return window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }

  return (
    <section
      className={`flex flex-col w-auto border-t-2 border-green-600 mt-4 h-auto`}
    >
      <div className="flex flex-col md:flex-row px-1 justify-center md:gap-8 bg-zinc-200  dark:bg-gray-900 dark:text-gray-200 text-gray-500">
        <div className="flex ml-1 pl-3 justify-center w-full md:w-1/4 mb-4">
          <div>
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
            <div>
              <h3 className="text-xl font-bold">Diversos:</h3>
              <ul className="px-3 ml-1 text-center md:text-left">
                <li>Política da Informação</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
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
          <h3 className="text-xl font-bold">Terapia(s):</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            {linksTherapias.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/4 my-4">
          <h3 className="text-xl font-bold">Redes Sociais:</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            <li>
              <Link className="flex" href={""} onClick={telefonar}>
                {" "}
                <span className="font-bold">
                  <MessageCircle color="#07ba00" />
                </span>
                &nbsp;11 45673-4567
              </Link>
            </li>
            <li>
              <Link
                href={
                  "mailto:terapias-holisticas@teste.com?subject=Holistic_Energy&body=Como..."
                }
                className="flex"
              >
                {" "}
                <span className="font-bold">
                  <Mail color="#07ba00" />
                </span>
                &nbsp; terapias-holisticas@teste.com
              </Link>
            </li>
            <li>
              <Link href={"/dashboard"} className="flex">
                <span className="font-bold">
                  <CalendarClock color="#07ba00" />
                </span>
                &nbsp; das 09:00hs às 16:00hs
              </Link>
            </li>

            <ul className="flex flex-row gap-8 mt-4 justify-center">
              <li className="text-green-600">
                <Link href="https://www.facebook.com/?locale=pt_BR">
                  <IconeFacebook />
                </Link>
              </li>
              <li className="text-green-600">
                <Link href="https://www.instagram.com/?locale=pt_BR">
                  <IconeInstagram />
                </Link>
              </li>
              <li className="text-green-600">
                <Link href="https://www.youtube.com/?locale=pt_BR">
                  <IconeYoutube />
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center bg-zinc-300  dark:bg-black dark:text-gray-400 text-gray-400">
        <p className={`font-thin py-1`}>
          &copy;{new Date().getFullYear()} todos direitos reservados by
          sidebit.dev
        </p>
      </div>
    </section>
  );
}
