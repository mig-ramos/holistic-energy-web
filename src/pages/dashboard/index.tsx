import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import { canSSRAuth } from "@/utils/canSSAuth";
import Content from "@/components/offTheHome/content";
import Head from "next/head";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelHeader } from "@/components/layoutDashborad/panelHeader";
import { useSlide } from "@/data/hooks/home/useSlide";
import { APP_SERV } from "@/data/config/configApp";

import Link from "next/link";
import { useAbout } from "@/data/hooks/home/useAbout";
import { useTherapy } from "@/data/hooks/home/useTherapy";

export default function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { slides } = useSlide();
  const { abouts } = useAbout();
  const { therapies } = useTherapy();

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
                  <div className="bg-slate-100 rounded-xl p-4">
                    <p className="font-bold">Sessão: SLIDES</p>
                    <div className="flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
                        {slides.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="h-auto w-full rounded-xl"
                            >
                              <span className="font-bold">{`${
                                item.slide
                                  .split("-")[1]
                                  .split(".")[0][0]
                                  .toUpperCase() +
                                item.slide
                                  .split("-")[1]
                                  .split(".")[0]
                                  .substring(1)
                              }`}</span>
                              <img
                                src={pathImage + item.slide}
                                className="w-full rounded"
                                alt={`Slide ${
                                  item.slide.split("-")[1].split(".")[0]
                                }`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
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

                {abouts.map((item) => {
                    return (
                      <div
                        className="bg-slate-100 rounded-xl p-4"
                        key={item.id}
                      >
                        <p className="py-2 font-bold">
                          Sessão: {item.subTitle.toUpperCase()}
                        </p>
                        <div className="flex flex-col md:flex-row h-auto gap-4">
                          <div className="w-full md:w1/2">
                            <p>
                              <span className="font-bold">Subtítulo: </span>
                              {item.subTitle}
                            </p>
                            <p>
                              <span className="font-bold">Título: </span>{" "}
                              {item.title}
                            </p>
                            <p>
                              <span className="font-bold">Descrição: </span>
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

                <div className="flex flex-col bg-slate-100 rounded-xl p-4">
                    <p className="font-bold">Sessão: TERAPIAS</p>
                    <div className=" h-auto gap-4">
                      {therapies.map((item) => {
                        return (
                          <div key={item.id} className="flex flex-col md:flex-row lg:flex-col h-auto gap-4 py-2">
                           
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
