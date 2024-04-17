import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useMapLocal } from "@/data/hooks/home/useMapLocal"; 

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/contact/map/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    mapLocals,
    listAll,
    mapLocal,
    upMapLocal,
    newMapLocal,
    excluirMapLocal,
    exibirTabela,
    selecionarMapLocal,
    tabelaVisivel,
  } = useMapLocal();

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
        property: "apiKey",
        name: "Google key api",
      },
      {
        property: "lat",
        name: "Latitude",
      },
      {
        property: "lng",
        name: "Longitude",
      },
      {
        property: "info",
        name: "Info Mapa",
      },
      {
        property: "mapId",
        name: "Google mapId",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />

        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">Localização do Terapeuta</h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newMapLocal}>
                Cadastrar Google Map
              </Button>

              <Tabela
                list={mapLocals}
                config={config}
                itemSelecionado={selecionarMapLocal}
                itemExcluido={excluirMapLocal}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              mapLocal={mapLocal}
              mapLocalMudou={upMapLocal}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  )
}
