import Head from "next/head";
import { Carosel } from "@/components/offTheHome/carosel";
import { AboutHome } from "@/components/offTheHome/about";
import Content from "@/components/offTheHome/content";
import { BookTherapyHome } from "@/components/offTheHome/book-therapy";
import { Contact } from "@/components/offTheHome/contact";
import { Therapies } from "@/components/offTheHome/therapies";

import { useSlide } from "@/data/hooks/home/useSlide";
import { useAbout } from "@/data/hooks/home/useAbout";
import { useTherapy } from "@/data/hooks/home/useTherapy";
import { useBookTherapy } from "@/data/hooks/home/useBookTherapy";

export default function Home() {
  const { slides } = useSlide();
  const { abouts } = useAbout();
  const { therapies } = useTherapy();
  const { bookTherapies } = useBookTherapy();

  return (
    <>
      <Head>
        <title>Energia Holística</title>
        <meta
          name="description"
          content="Sistema web para terapeutas com agendamento de consultas"
        />
      </Head>
      <main>
        <Content>
          <Carosel slide={slides} />
          <AboutHome about={abouts} />
          <Therapies therapy={therapies} />
          <BookTherapyHome bookTherapy={bookTherapies} />
          <Contact />
        </Content>
      </main>
    </>
  );
}
