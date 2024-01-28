import Image from "next/image";
import slide from "/public/images/praia.jpg";

export function Hero() {
  return (
    <section
      className={`flex mx-auto my-auto rounded-3xl justify-center bg-zinc-100 mt-4`}
    >
      <Image src={slide} alt="Slides" className="rounded-3xl w-full" />
    </section>
  );
}
