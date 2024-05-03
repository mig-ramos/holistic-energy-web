import { useContext, useEffect } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useUser } from "@/data/hooks/admin/useUser";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/admin/user/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelRegistrations } from "@/components/layoutDashborad/panelRegistrations";

export default function Index() {
  const {
    users,
    listAll,
    userr,
    upUser,
    newUser,
    excluirUser,
    exibirTabela,
    selecionarUser,
    tabelaVisivel,
  } = useUser();

  const { user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "ID",
      },
      {
        property: "name",
        name: "Nome",
      },
      {
        property: "email",
        name: "E-mail",
      },
      {
        property: "role",
        name: "Papel",
      },
      {
        property: "active",
        name: "Ativo",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelRegistrations role={user.role} />

        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">
          CADASTRO DE CLIENTES
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newUser}>
                Cadastrar Usuário
              </Button>

              <Tabela
                list={users}
                config={config}
                itemSelecionado={selecionarUser}
                itemExcluido={excluirUser}
              />
            </div>
          </>
        ) : (
          <div className={`flex p-2 md:w-full`}>
            <div className="w-full p-4 md:w-1/2">
              <Formulario
                user={userr}
                userMudou={upUser}
                cancelado={exibirTabela}
              />
            </div>
            <div className="w-full p-4 md:w-1/2">
              <Formulario
                user={userr}
                userMudou={upUser}
                cancelado={exibirTabela}
              />
            </div>
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
