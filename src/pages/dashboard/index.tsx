import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import { canSSRAuth } from "@/utils/canSSAuth";
import Content from "@/components/offTheHome/content";
import Head from "next/head";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelHeader } from "@/components/layoutDashborad/panelHeader";

import { APP_SERV } from "@/data/config/configApp";

import Link from "next/link";
import { useSlide } from "@/data/hooks/home/useSlide";
import { useAbout } from "@/data/hooks/home/useAbout";
import { useTherapy } from "@/data/hooks/home/useTherapy";
import { useBookTherapy } from "@/data/hooks/home/useBookTherapy";
import { useMapLocal } from "@/data/hooks/home/useMapLocal";
import { Mapa } from "@/components/maps/apiProvider";

export default function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { slides } = useSlide();
  const { abouts } = useAbout();
  const { therapies } = useTherapy();
  const { bookTherapies } = useBookTherapy();
  const { mapLocals } = useMapLocal();

  const pathImage = APP_SERV.pathBaseImages;

  try {
    switch (user.role) {
      case "ADMIN":
        break;

      case "THERAPIST":
        break;

      case "CLIENT":
        break;
      default:
        Router.push("/");
    }
  } catch (err) {
    return <Link href={"/"} />;
  }

  function toSlides() {
    <link href="/dashboard/home-setup/slide" />;
  }

  return (
    <Content>
      <LayoutDasboard>
        <PanelHeader role={user.role} />
        <div>
          <Head>
            <title>Meu Painel</title>
            <meta name="description" content="Painel Administrativo" />
          </Head>
          {isAuthenticated && user.role === "ADMIN" && (
            <div>
              <h2>Painel do ADMINISTRADOR: {user.name}</h2>
              <h3 className="py-4 font-bold text-xl md:text-2xl text-green-500">
                Página HOME
              </h3>
              <div className="flex-col lg:flex lg:flex-row gap-4">
                <div className="flex flex-col lg:w-1/2 ">
                  <div className="bg-slate-100 rounded-xl p-4 border-2 border-green-200">
                    <Link
                      href={"/dashboard/home-setup/slide"}
                      className="flex gap-10 bg-yellow-300 px-3 py-2 rounded-xl mb-2"
                    >
                      <span className="font-bold">Sessão: SLIDES</span> CLICK
                      para Editar...
                    </Link>

                    <div className="flex flex-col">
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1"
                        onClick={toSlides}
                      >
                        {slides.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="h-auto w-full rounded-xl"
                            >
                              <span className="font-bold text-green-500 text-xl">
                                {item.name
                                  ?.split("-")[1]
                                  .split(".")[0][0]
                                  .toUpperCase()}
                                {item.name
                                  ?.split("-")[1]
                                  .split(".")[0]
                                  .substring(1)}
                              </span>
                              <img
                                src={`${pathImage}${item.name}`}
                                className="w-full rounded"
                                alt={`Slide ${item.name}.split("-")[1].split(".")[0]
                                `}
                              />
                              <p className="p-4">
                                <span className="font-bold">Slogan:</span>{" "}
                                {item.slogan}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-xl p-4 border-2 border-green-200">
                    <Link
                      href={"/dashboard/home-setup/book-therapy"}
                      className="flex gap-10 bg-yellow-300 px-3 py-2 rounded-xl mb-2"
                    >
                      <span className="font-bold">
                        Sessão:{` MARCAR TERAPIA`}
                      </span>{" "}
                      CLICK para Editar...
                    </Link>

                    {bookTherapies.map((item) => {
                      return (
                        <div className="" key={item.id}>
                          <div className="flex flex-col md:flex-row h-auto gap-4">
                            <div className="w-full md:w1/2">
                              <p className="">
                                <span className="font-bold text-green-500">
                                  Subtítulo:{" "}
                                </span>
                                {item.subTitle}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Título:{" "}
                                </span>{" "}
                                {item.title}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Título do Botão:{" "}
                                </span>{" "}
                                {item.buttonTitle}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Descrição:{" "}
                                </span>
                                {item.description}
                              </p>
                            </div>
                            <div className="w-full md:w-1/2">
                              <img
                                className="rounded-md w-full"
                                src={pathImage + item.photo}
                                alt={`BookTherapy ${
                                  item.photo.split("-")[1].split(".")[0]
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-slate-100 rounded-xl p-4 border-2 border-green-200">
                    <Link
                      href={"/dashboard/home-setup/map-local"}
                      className="flex gap-10 bg-yellow-300 px-3 py-2 rounded-xl mb-2"
                    >
                      <span className="font-bold">
                        Sessão:{` Mapa do Local`}
                      </span>{" "}
                      CLICK para Editar...
                    </Link>

                    {mapLocals.map((item) => {
                      return (
                        <div className="" key={item.id}>
                          <div className="flex flex-col md:flex-row h-auto gap-4">
                            <div className="w-full md:w1/2">
                              <p className="">
                                <span className="font-bold text-green-500">
                                  Título:{" "}
                                </span>
                                {item.title}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  API KEY:{" "}
                                </span>{" "}
                                {item.apiKey}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Latitude:{" "}
                                </span>{" "}
                                {item.lat}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Longitude:{" "}
                                </span>
                                {item.lng}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Info Mapa:{" "}
                                </span>
                                {item.info}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Google mapId:{" "}
                                </span>
                                {item.mapId}
                              </p>
                              <span className=" ">Se <span className="text-green-500 font-bold"><u>Info Mapa</u></span> estiver preenchido será usado o Google Map</span>
                            </div>
                            <div className="w-full md:w-1/2">
                              {!item.info ? (
                                <img
                                  className="rounded-md w-full"
                                  src={pathImage + item.photo}
                                  alt={`Local ${
                                    item.photo.split("-")[1].split(".")[0]
                                  }`}
                                />
                              ) : (
                                <Mapa
                                  apiKey={item.apiKey}
                                  lat={Number(item.lat.trim())}
                                  lng={Number(item.lng.trim())}
                                  mapId={item.mapId}
                                  info={item.info}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-green-100 rounded-xl p-4">
                    <p>Sessão: EXPEDIENTE</p>
                    <div className="flex h-auto gap-4">
                      <div className="w-full bg-orange-200">
                        <p>
                          <span>Semana: </span>SEG - TER - QUI - SEX
                        </p>
                        <p>
                          <span>Das: </span>09h às 16h
                        </p>
                        <p>
                          <span>Zap: </span>11 99765-3424
                        </p>
                        <span>Geolocalização</span>
                        <p>
                          <span>Latitude: </span>-25.8650945
                        </p>
                        <p>
                          <span>Longitude: </span>-48.8650945
                        </p>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <div>
                    {abouts.map((item) => {
                      return (
                        <div
                          className="bg-slate-100 rounded-xl p-4 border-2 border-green-200"
                          key={item.id}
                        >
                          <Link
                            href={"/dashboard/home-setup/about"}
                            className="flex gap-10 bg-yellow-300 px-3 py-2 rounded-xl mb-2"
                          >
                            <span className="font-bold">
                              Sessão:{" "}
                              {item.subTitle
                                ? item.subTitle.toUpperCase()
                                : "SOBRE MIM"}
                            </span>{" "}
                            CLICK para Editar...
                          </Link>
                          <div className="flex flex-col md:flex-row h-auto gap-4">
                            <div className="w-full md:w1/2">
                              <p className="">
                                <span className="font-bold text-green-500">
                                  Subtítulo:{" "}
                                </span>
                                {item.subTitle}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Título:{" "}
                                </span>{" "}
                                {item.title}
                              </p>
                              <p>
                                <span className="font-bold text-green-500">
                                  Descrição:{" "}
                                </span>
                                {item.description}
                              </p>
                            </div>
                            <div className="w-full md:w-1/2">
                              <img
                                className="rounded-md w-full"
                                src={pathImage + item.photo}
                                alt={`Sobre ${
                                  item.photo.split("-")[1].split(".")[0]
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col bg-slate-100 rounded-xl p-4 border-2 border-green-200">
                    <Link
                      href={"/dashboard/home-setup/therapy"}
                      className="flex gap-10 bg-yellow-300 px-3 py-2 rounded-xl mb-2"
                    >
                      <span className="font-bold">Sessão: TERAPIA(s)</span>{" "}
                      CLICK para Editar...
                    </Link>
                    <div className=" h-auto gap-4">
                      {therapies.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-col md:flex-row lg:flex-col h-auto gap-4 py-2"
                          >
                            <div className="w-full md:w-1/2 lg:w-full h-auto">
                              <img
                                src={pathImage + item.photo}
                                alt={`Terapia ${
                                  item.photo.split("-")[1].split(".")[0]
                                }`}
                              />
                            </div>
                            <div className="w-full h-auto">
                              <h3 className="font-bold">{item.name}</h3>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isAuthenticated && user.role === "THERAPIST" && <div>TERAPEUTA</div>}

          {isAuthenticated && user.role === "CLIENT" && <div>CLIENTE</div>}
        </div>
      </LayoutDasboard>
    </Content>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
