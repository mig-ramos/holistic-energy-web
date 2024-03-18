import Head from "next/head";
import { Carosel } from "@/components/offTheHome/carosel";
import { AboutHome } from "@/components/offTheHome/about";
import Content from "@/components/offTheHome/content";
import { Schedule } from "@/components/offTheHome/schedule";
import { Contact } from "@/components/offTheHome/contact";
import { Therapies } from "@/components/offTheHome/therapies";

import { useSlide } from "@/data/hooks/home/useSlide";
import { useAbout } from "@/data/hooks/home/useAbout";

export default function Home() {
  const { slides } = useSlide();
  const { abouts } = useAbout();

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
          <Therapies />
          <Schedule />
          <Contact />
        </Content>
      </main>
    </>
  );
}
