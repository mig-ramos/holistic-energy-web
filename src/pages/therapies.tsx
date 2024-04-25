import Content from "@/components/offTheHome/content";
import Head from "next/head";

import { APP_SERV } from "@/data/config/configApp";
import { useTherapy } from "@/data/hooks/home/useTherapy";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Therapies() {
  const { therapies } = useTherapy();
  const pathImage = APP_SERV.pathBaseImages;
  return (
    <Content>
      <Head>
        <title>Terapias</title>
        <meta name="description" content="Nossos Atendimentos" />
      </Head>
      <main>
        <section className="mb-2 border border-solid border-green-500 rounded-3xl bg-zinc-100 dark:bg-zinc-600">
          {therapies.map((item) => {
            return (
              <div key={item.id} className={`flex flex-col`}>
                <div
                  className={`flex flex-col md:flex-row mx-auto my-auto rounded-t-3xl  justify-center  dark:bg-gray-700 mt-4`}
                >
                  <div className={`md:w-9/12  text-start`}>
                    <div className="border-s-8 border-green-500 p-4">
                      <h1 className={`font-bold text-green-500 text-3xl`}>
                        {item.name}
                      </h1>
                      <h2 className={`text-green-500 text-xl`}></h2>
                    </div>
                    <div
                      className={`mt-4 mr-4 text-xl text-gray-700 dark:text-gray-300 p-4`}
                    >
                      {item.description}
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center p-4 md:w-96 md:mt-0 h-auto `}
                  >
                    <img
                      src={pathImage + item.photo}
                      height={260}
                      alt={item.name}
                      className="rounded-3xl w-full hover:scale-110 hover:rotate-2 duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center dark:bg-gray-500 rounded-b-3xl text-2xl">
                  <h3 className="mt-4 ">
                    Acesse seu Painel de Cliente sem compromisso!
                  </h3>
                  <div className="flex w-full md:w-1/2 lg:w-1/3 my-4">
                    <Link href={"/dashboard"} className="bg-blue-400 text-2xl mx-4 text-center py-2 px-4 w-full rounded-lg">
                      Quero experimentar!
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </Content>
  );
}
