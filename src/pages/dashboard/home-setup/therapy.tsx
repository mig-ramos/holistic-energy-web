import { useContext, useEffect } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useTherapy } from "@/data/hooks/home/useTherapy";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/therapy/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    therapies,
    listAll,
    therapy,
    upTherapy,
    newTherapy,
    excluirTherapy,
    exibirTabela,
    selecionarTherapy,
    tabelaVisivel,
  } = useTherapy();

  const { user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "ID",
      },
      {
        property: "name",
        name: "Terapia",
      },
      {
        property: "description",
        name: "Descrição",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />

        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">
          TERAPIA(s)
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newTherapy}>
                Cadastrar Terapia
              </Button>

              <Tabela
                list={therapies}
                config={config}
                itemSelecionado={selecionarTherapy}
                itemExcluido={excluirTherapy}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              therapy={therapy}
              therapyMudou={upTherapy}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
