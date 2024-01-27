import Head from "next/head";
import { Hero } from "@/components/offTheHome/hero";
import { About } from "@/components/offTheHome/about";
import { Schedule } from "@/components/offTheHome/schedule";
import { Contact } from "@/components/offTheHome/contact";
import Content from "@/components/offTheHome/content";

export default function Home() {
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
          <h1>HOME</h1>
          <Hero />
          <About />
          <Schedule />
          <Contact />
        </Content>
      </main>
    </>
  );
}
