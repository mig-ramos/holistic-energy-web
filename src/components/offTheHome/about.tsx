import Image from "next/image";
import mim from "../../../public/images/mim.jpg";

export function About() {
  return (
    <section className={`flex mx-auto my-auto rounded-3xl justify-center bg-lime-100`}>
      <div className={`w-9/12  text-start  p-4`}>
        <h2 className={`text-gray-600 text-xl`}>Sobre mim</h2>
        <h1 className={`font-bold text-3xl`}>Terapeuta da Silva</h1>
        <div className={`mt-4 text-xl text-gray-700`}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </div>
      </div>
      <div
        className={`flex justify-center items-center w-3/12 h-auto`}
      >
        <Image src={mim} height={260} alt="Foto sobre mim" className="rounded-3xl w-full" />
      </div>
    </section>
  );
}
