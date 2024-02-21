import { canSSRAuth } from "@/utils/canSSAuth";
import Content from "@/components/offTheHome/content";
import Head from "next/head";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelHeader } from "@/components/layoutDashborad/panelHeader";
import { AuthContext } from "@/data/contexts/auth/AuthContext";

import { useContext } from "react";

export default function Dashboard() {
  const { isAuthenticated, user } = useContext(AuthContext);

  const role = user.role;

  switch(role) {
    case 'CLIENT':

    break;
    case 'THERAPIST':

    break;
    case 'ADMIN':

    break;
    default:
      
  }
  
  return (
    <Content>
      <LayoutDasboard>
        <PanelHeader role = {user.role}/>
        <div>
          <Head>
            <title>Meu Painel</title>
            <meta name="description" content="Painel Administrativo" />
          </Head>
          {isAuthenticated && user.role === "ADMIN" && (
          <div>
            <h2>SETUP - Home Page</h2>
          </div>
          )}

          {isAuthenticated && user.role === "THERAPIST" && <div>TERAPEUTA</div>}

          {isAuthenticated && user.role === "CLIENT" && <div>CLIENTE</div>}
        </div>
      </LayoutDasboard>
    </Content>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
