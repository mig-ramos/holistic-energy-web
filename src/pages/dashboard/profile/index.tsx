import { canSSRAuth } from "@/utils/canSSAuth";
import Layout from "@/components/template/Layout";
import Head from "next/head";

export default function Profile() {
  return (
    <Layout titulo="Perfil" subtitulo="Meus Dados">
      <Head>
        <title>Meus dados</title>
      </Head>
      <div
        className={`flex flex-col bg-gray-100 dark:bg-gray-800
    dark:text-gray-200 w-full`}
      >
        <div className={`mx-2`}>
          <h1>Meus Dados</h1>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});