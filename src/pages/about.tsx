import Content from "@/components/offTheHome/content";
import Head from "next/head";
import { APP_SERV } from "@/data/config/configApp";
import { useAbout } from "@/data/hooks/home/useAbout";
import { useCompany } from "@/data/hooks/home/useCompany";
import { useBookTherapy } from "@/data/hooks/home/useBookTherapy";
import Link from "next/link";

export default function AboutHome() {
  const { abouts } = useAbout();
  const { companies } = useCompany();
  const { bookTherapies } = useBookTherapy();
  const pathImage = APP_SERV.pathBaseImages;

  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Minhas atribuições" />
      </Head>
      <main>
        <Content>
          <section className="mb-2 border border-solid border-green-500 rounded-3xl bg-zinc-100">
            {companies.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center  dark:bg-gray-700 mt-4`}
                >
                  <div className={`md:w-9/12  text-start`}>
                    <div className="border-s-8 border-green-500 p-4">
                      <h1 className={`font-bold text-green-500 text-3xl`}>
                        {item.companyName}
                      </h1>
                      <h2 className={`text-green-500 text-xl`}>
                        <p>
                          Toda gratidão e muita reverência a nossa hierarquia
                          divina do Universo!
                        </p>
                      </h2>
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
                      alt={item.companyName}
                      className="rounded-3xl w-full hover:scale-110 hover:rotate-2 duration-300"
                    />
                  </div>
                </div>
              );
            })}
          </section>
          <section className="mb-2 border border-solid border-green-500 rounded-3xl bg-zinc-100">
            {abouts.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center  dark:bg-gray-700 mt-4`}
                >
                  <div className={`md:w-9/12  text-start`}>
                    <div className="border-s-8 border-green-500 p-4">
                      <h1 className={`font-bold text-green-500 text-3xl`}>
                        {item.title}
                      </h1>
                      <h2 className={`text-green-500 text-xl`}>
                        {item.subTitle}
                      </h2>
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
                      alt={item.subTitle}
                      className="rounded-3xl w-full hover:scale-110 hover:rotate-2 duration-300"
                    />
                  </div>
                </div>
              );
            })}
          </section>
          <section className="mb-2">
            {bookTherapies.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row mx-auto  rounded-3xl bg-zinc-100 dark:bg-gray-800 mt-2 border border-solid border-green-500`}
                >
                  {item.mostrar === "Sim" && (
                    <div
                      className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center  dark:bg-gray-700 mt-4`}
                    >
                      <div className={`md:w-1/2 lg:w-1/3`}>
                        <div className={`border-s-8 border-green-500 mt-4 p-4`}>
                          <h2 className={`text-green-500 text-xl`}>
                            {item.subTitle}
                          </h2>

                          <h1 className={`text-green-500 font-bold text-3xl`}>
                            {item.title}
                          </h1>
                        </div>
                        <div className=" flex justify-center p-2 m-2 bg-amber-800/10 rounded-3xl">
                          <img
                            src={pathImage + item.photo}
                            height={260}
                            alt={item.subTitle}
                            className="rounded-3xl w-48 h-auto hover:scale-110 hover:rotate-2 duration-300"
                          />
                        </div>
                      </div>
                      <div
                        className={`flex flex-col justify-center md:w-1/2 lg:w-2/3 lg:text-center p-4`}
                      >
                        <div
                          className={`dark:text-gray-300 font-normal text-xl my-2 flex`}
                        >
                          <p>{item.description}</p>
                        </div>
                        <div className={`flex justify-center`}>
                          <Link
                            href={"/dashboard"}
                            className="text-xl w-full lg:w-8/12 flex items-center justify-center gap-10 bg-yellow-500 hover:bg-yellow-400 px-3 py-2 md:py-3 rounded-xl mb-2 hover:scale-105 duration-300"
                          >
                            <span className="font-bold">
                              {item.buttonTitle}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        </Content>
      </main>
    </>
  );
}
