import Image from "next/image";
import mim from "../../../public/images/mim.jpg";

export function About() {
  return (
    <section
      className={`flex flex-col md:flex-row mx-auto my-auto rounded-3xl  justify-center bg-zinc-100 dark:bg-gray-700 mt-4`}
    >
      <div className={`md:w-9/12  text-start`}>
        <div className="border-s-8 border-green-500 p-4">
          <h2 className={`text-green-500 text-xl`}>Sobre nós:</h2>
          <h1 className={`font-bold text-green-500 text-3xl`}>
            Holistic Energy
          </h1>
        </div>
        <div className={`mt-4 mr-4 text-xl text-gray-700 dark:text-gray-300`}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </div>
      </div>
      <div
        className={`flex justify-center items-center mt-4 md:w-3/12 md:mt-0 h-auto`}
      >
        <Image
          src={mim}
          height={260}
          alt="Foto sobre mim"
          className="rounded-3xl w-full"
          priority={true}
        />
      </div>
    </section>
  );
}
