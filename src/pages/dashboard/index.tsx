import { canSSRAuth } from "@/utils/canSSAuth";
import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";

export default function Dashboard() {
  return <Content>Meu Painel</Content>;
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
