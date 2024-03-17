import Head from "next/head";
import { Carosel } from "@/components/offTheHome/carosel";
import { About } from "@/components/offTheHome/about";
import Content from "@/components/offTheHome/content";
import { Schedule } from "@/components/offTheHome/schedule";
import { Contact } from "@/components/offTheHome/contact";
import { Therapies } from "@/components/offTheHome/therapies";

import { useSlide } from "@/data/hooks/home/useSlide"

export default function Home() {
  const { slides } = useSlide();

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
          <Carosel slide={slides}/>
          <About />
          <Therapies />
          <Schedule />
          <Contact />
        </Content>
      </main>
    </>
  );
}
