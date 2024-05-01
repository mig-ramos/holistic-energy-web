import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";

import Content from "@/components/offTheHome/content";

import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelRegistrations } from "@/components/layoutDashborad/panelRegistrations";

export default function Registrations() {
  let linkActive = "text-orange-500";

  const { user } = useContext(AuthContext);

  return (
    <Content>
      <LayoutDasboard>
        <PanelRegistrations role={user.role} />
        <h1 className="flex h-10 rounded-md text-white text-xl items-center bg-yellow-800 px-4">
          Cadastros Gerais
        </h1>
        <div className="p-4">
          <h2 className="text-2xl mb-2">Seja bem-vindo(a)</h2>
          <p className="text-xl">
            Nesta sessão você Cadastra, Altera e Exclui todas os Cadastros
            básicos (Administradores, Terapeutas, Clientes e Agendamentos).
          </p>
          <p className="text-xl">
            Para isso, basta clicar no Menu logo acima, na sessão
            correspondente.
          </p>
        </div>
      </LayoutDasboard>
    </Content>
  );
}
