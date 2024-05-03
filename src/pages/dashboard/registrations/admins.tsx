import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/admin/therapist/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelRegistrations } from "@/components/layoutDashborad/panelRegistrations";
import { useAdmin } from "@/data/hooks/admin/useAdmin";

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
  } = useAdmin();

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
          CADASTRO DE ADMINISTRADORES
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newUser}>
                Cadastrar Administrdor
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
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              user={userr}
              userMudou={upUser}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
