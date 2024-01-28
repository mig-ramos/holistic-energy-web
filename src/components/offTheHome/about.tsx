import Image from "next/image";
import mim from "../../../public/images/mim.jpg";

export function About() {
  return (
    <section
      className={`flex mx-auto my-auto rounded-3xl justify-center bg-zinc-100 mt-4`}
    >
      <div className={`w-9/12  text-start`}>
        <div className="border-s-8 border-green-500 p-4">
          <h2 className={`text-green-500 text-xl`}>Sobre mim</h2>
          <h1 className={`font-bold text-green-500 text-3xl`}>
            Terapeuta da Silva
          </h1>
        </div>

        <div className={`mt-4 text-xl text-gray-700`}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </div>
      </div>
      <div className={`flex justify-center items-center w-3/12 h-auto`}>
        <Image
          src={mim}
          height={260}
          alt="Foto sobre mim"
          className="rounded-3xl w-full"
        />
      </div>
    </section>
  );
}
