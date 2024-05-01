import { useContext, useEffect } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useAbout } from "@/data/hooks/home/useAbout";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/about/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    abouts,
    listAll,
    about,
    upAbout,
    newAbout,
    excluirAbout,
    exibirTabela,
    selecionarAbout,
    tabelaVisivel,
  } = useAbout();

  const { user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "ID",
      },
      {
        property: "title",
        name: "Título",
      },
      {
        property: "subTitle",
        name: "Sub-Título",
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
          SOBRE MIM
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newAbout}>
                Cadastrar Sobre Mim
              </Button>

              <Tabela
                list={abouts}
                config={config}
                itemSelecionado={selecionarAbout}
                itemExcluido={excluirAbout}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              about={about}
              aboutMudou={upAbout}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
