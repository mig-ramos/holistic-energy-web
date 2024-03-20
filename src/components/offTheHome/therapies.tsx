import Image from "next/image";
import florais from "../../../public/images/terapia-floral.png";
import reiki from "../../../public/images/reiki.png";
import acupuntura from "../../../public/images/acupuntura.png";

import Therapy from "@/data/db/home/therapy/Therapy";
import { APP_SERV } from "@/data/config/configApp";

type TherapyProps = {
  therapy: Therapy[];
};

export function Therapies<T>(props: TherapyProps) {
  const pathImage = APP_SERV.pathBaseImages;

  let therapyHome = props.therapy;

  return (
    <section className={`dark:bg-gray-800 dark:text-gray-200 w-full mt-4`}>
      <div className={`flex flex-col mx-auto justify-center`}>
        <div className="border-s-8 border-green-500 p-4">
          <h2 className={`text-green-500 text-xl`}>As especialidades</h2>
          <h1 className={`font-bold text-green-500 text-3xl`}>Terapias</h1>
        </div>
        <div className={`grid flex-col md:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {therapyHome.map((item) => {
            return (
              <div key={item.id} className={`text-start  pt-4`}>
                <h3 className={`font-bold text-2xl mb-2`}>{item.name}</h3>
                <img
                  src={pathImage + item.photo}
                  alt=""
                  height={140}
                  className="rounded-3xl w-full"
                />
                <div
                  className={`mt-4 text-xl text-gray-700 dark:text-gray-300`}
                >
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
