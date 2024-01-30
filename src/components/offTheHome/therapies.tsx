import Image from "next/image";
import florais from "../../../public/images/terapia-floral.png";
import reiki from "../../../public/images/reiki.png";
import acupuntura from "../../../public/images/acupuntura.png";

export function Therapies() {
  return (
    <section className={`dark:bg-gray-800 dark:text-gray-200 w-full mt-4`}>
      <div className={`flex flex-col mx-auto justify-center`}>
        <div className="border-s-8 border-green-500 p-4">
          <h2 className={`text-green-500 text-xl`}>As especialidades</h2>
          <h1 className={`font-bold text-green-500 text-3xl`}>Terapias</h1>
        </div>

        <div className={`flex flex-col md:flex-row gap-4`}>
          <div className={`md:w-1/3  text-start  pt-4`}>
            <h3 className={`font-bold text-2xl mb-2`}>Florais</h3>
            <Image
              src={florais}
              alt=""
              height={140}
              className="rounded-3xl w-full"
            />
            <div className={`mt-4 text-xl text-gray-700 dark:text-gray-300`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className={`md:w-1/3  text-start  pt-4`}>
            <h2 className={`font-bold text-2xl mb-2`}>Reiki</h2>
            <Image
              src={reiki}
              alt=""
              height={140}
              className="rounded-3xl w-full"
            />
            <div className={`mt-4 text-xl text-gray-700 dark:text-gray-300`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
          <div className={`md:w-1/3  text-start  pt-4`}>
            <h2 className={`font-bold text-2xl mb-2`}>Acupuntura</h2>
            <Image
              src={acupuntura}
              alt=""
              height={140}
              className="rounded-3xl w-full"
            />
            <div className={`mt-4 text-xl text-gray-700 dark:text-gray-300`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
