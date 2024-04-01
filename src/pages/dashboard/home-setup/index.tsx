import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";

import Content from "@/components/offTheHome/content";

import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function HomeSetup() {
  let linkActive = "text-orange-500";

  const { user } = useContext(AuthContext);

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />
        <h1 className="flex h-10 rounded-md text-white text-xl items-center bg-yellow-800 px-4">
          Home - Congurações
        </h1>
        <div className="p-4">
          <h2 className="text-xl mb-2">Seja bem-vindo(a)</h2>
          <p>Aqui você Cadastra, Altera e Exclui todas as sessões da Home Page (Página inicial do site).</p>
          <p>Para isso, basta clicar no Menu logo acima, na sessão correspondente.</p>
        </div>
      </LayoutDasboard>
    </Content>
  );
}
