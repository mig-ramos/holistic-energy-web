import Content from "@/components/offTheHome/content";
import Head from "next/head";
import Link from "next/link";

import { APP_SERV } from "@/data/config/configApp";
import { useCompany } from "@/data/hooks/home/useCompany";

import { Mapa } from "@/components/maps/apiProvider";
import { useMapLocal } from "@/data/hooks/home/useMapLocal";
import {
  IconeFacebook,
  IconeInstagram,
  IconeMap,
  IconeTwitter,
  IconeYoutube,
} from "@/components/icons";
import { CalendarClock, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const { companies } = useCompany();
  const pathImage = APP_SERV.pathBaseImages;

  const { mapLocals } = useMapLocal();

  return (
    <Content>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Minhas redes sociais" />
      </Head>
      <main>
        <section className="mb-2 border border-solid border-green-500 rounded-3xl bg-zinc-100 dark:bg-zinc-600">
          <div className={`border-s-8 border-green-500 mt-4 p-4`}>
            <h2 className={`text-green-500 text-start  text-xl`}>
              Nossas redes sociais
            </h2>
            <h1 className={`text-green-500 text-start  font-bold text-3xl`}>
              Entre em Contato
            </h1>
          </div>
          <div className={`flex flex-col justify-center xl:flex-row p-4`}>
            <div className={`xl:w-1/2 w-full`}>
              <div className="mt-4 xl:mr-4">
                <div>
                  <div className="flex flex-col gap-2 items-center md:items-center  my-4">
                    {companies.map((item) => {
                      return (
                        <div key={item.id}>
                          <ul className="px-3 ml-1 text-left">
                            <h3 className="text-xl mb-4 font-bold">
                              Onde estamos:
                            </h3>
                            <li>
                              <a href="" className="flex mb-4">
                                <span className="text-green-600 font-bold mb-2">
                                  <IconeMap />
                                </span>
                                &nbsp;
                                {item.companyAddress}
                              </a>
                            </li>
                            <h3 className="text-xl mb-4 font-bold">
                              Expediente:
                            </h3>
                            <li>
                              {item.officeOur && (
                                <Link href={"/dashboard"} className="flex mb-4">
                                  <span className="font-bold">
                                    <CalendarClock color="#07ba00" />
                                  </span>
                                  &nbsp; {item.officeOur}
                                </Link>
                              )}
                            </li>
                            <h3 className="text-xl mb-4 font-bold">
                              Nossas redes sociais:
                            </h3>
                            <li>
                              {item.zap && (
                                <a
                                  href={`tel:+55${item.zap}`}
                                  className="flex gap-2 my-2"
                                >
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
                                  className="flex my-4 gap-2"
                                >
                                  <span className="font-bold">
                                    <Mail color="#07ba00" />
                                  </span>
                                  {item.email}
                                </Link>
                              )}
                            </li>
                            <ul className="flex flex-row gap-12 my-8 justify-center">
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
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-4 md:mt-0 xl:w-1/2 w-full`} id="Mapa">
              {mapLocals.map((item) => {
                return (
                  <div key={item.id}>
                    <h3 className={`font-light text-xl mb-2`}>{item.title}:</h3>
                    {!item.info ? (
                      <img
                        src={pathImage + item.photo}
                        alt={item.title}
                        className="rounded-2xl flex size-auto hover:scale-140"
                      />
                    ) : (
                      <div>
                        <div className="flex w-full h-[380px] items-center justify-center bg-slate-300 border rounded-2xl">
                          <Mapa
                            apiKey={item.apiKey}
                            lat={Number(item.lat.trim())}
                            lng={Number(item.lng.trim())}
                            mapId={item.mapId}
                            info={item.info}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Content>
  );
}
