import { useContext } from "react";
import AppContext from "@/data/contexts/app/AppContext";
import { ActiveLink } from "@/components/activeLink";
import Image from "next/image";
import LogoLight from "../../public/logo-light.svg";
import LogoDark from "../../public/logo-dark.svg";
import Therapy from "@/data/db/home/therapy/Therapy";
import { MessageCircle, Mail, CalendarClock } from "lucide-react";
import {
  IconeFacebook,
  IconeInstagram,
  IconeMap,
  IconeTwitter,
  IconeYoutube,
} from "./icons";
import Link from "next/link";
import { useCompany } from "@/data/hooks/home/useCompany";

type FooterProps = {
  therapies: Therapy[];
};

export function Footer<T>(props: FooterProps) {
  const { tema } = useContext(AppContext);
  const { companies } = useCompany();
  let linkActive = "text-green-500 font-bold";
  let linksTherapias = props.therapies;

  function telefonar() {
    let phone = "";
    let message = encodeURIComponent(
      `Meu nome: ${"Terapeuta da Silva"} \n Email: ${"terapias-holisticas@teste.com"} \n Assunto: ${"Como é o atendimento de ..."}`
    );
    return window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }

  return (
    <section
      className={`flex flex-col w-auto border-t-2 border-green-600 h-auto`}
    >
      <div className="flex flex-col md:flex-row px-1 justify-center md:gap-8 bg-zinc-200  dark:bg-gray-900 dark:text-gray-200 text-gray-500">
        <div className="flex ml-1 pl-3 justify-center w-full md:w-5/12 mb-4">
          <div>
            <div className="flex justify-center">
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
            <div className="flex flex-col items-center gap-1 md:items-start">
              <h3 className="text-xl font-bold">Expediente:</h3>
              <ul className="px-3 ml-1 text-center md:text-left">
                {companies.map((item) => {
                  return (
                    <div key={item.id}>
                      <li>
                        <a href="#Mapa" className="flex">
                          <span className="text-green-600 font-bold mb-2">
                            <IconeMap />
                          </span>
                          &nbsp;
                          {item.companyAddress}
                        </a>
                      </li>
                      <li>
                        {item.officeOur && (
                          <Link href={"/dashboard"} className="flex">
                            <span className="font-bold">
                              <CalendarClock color="#07ba00" />
                            </span>
                            &nbsp; {item.officeOur}
                          </Link>
                        )}
                      </li>
                    </div>
                  );
                })}

                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1 md:w-2/12 my-4">
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
        <div className="flex flex-col gap-1 items-center md:items-start md:w-2/12 my-4">
          <h3 className="text-xl font-bold">Terapia(s):</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            {linksTherapias.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
          <h3 className="text-xl font-bold">Diversos:</h3>
          <ul className="px-3 ml-1 text-center md:text-left">
            <li>Política da Informação</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start md:w-4/12 my-4">
          <h3 className="text-xl font-bold">Redes Sociais:</h3>
          {companies.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <ul className="px-3 ml-1 text-center md:text-left">
                    <li>
                      {item.zap && (
                        <a href={`tel:+55${item.zap}`} className="flex gap-2 mb-2">
                          <span className="font-bold">
                            <MessageCircle color="#07ba00" />
                          </span>
                          {item.zap}
                        </a>
                      )}
                    </li>
                    <li>
                      {item.email && (
                        <Link
                          href={` mailto:${item.email}?subject=${item.companyName}&body=Como...`}
                          className="flex gap-2"
                        >
                          <span className="font-bold">
                            <Mail color="#07ba00" />
                          </span>
                          {item.email}
                        </Link>
                      )}
                    </li>
                    <ul className="flex flex-row gap-10 my-6 justify-center">
                      <li className="text-green-600">
                        {item.facebook && (
                          <Link href={item.facebook}>
                            <IconeFacebook />
                          </Link>
                        )}
                      </li>
                      <li className="text-green-600">
                        {item.instagram && (
                          <Link href={item.instagram}>
                            <IconeInstagram />
                          </Link>
                        )}
                      </li>
                      <li className="text-green-600">
                        {item.youtube && (
                          <Link href={item.youtube}>
                            <IconeYoutube />
                          </Link>
                        )}
                      </li>
                      <li className="text-green-600">
                        {item.twitter && (
                          <Link href={item.twitter}>
                            <IconeTwitter />
                          </Link>
                        )}
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            );
          })}
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
