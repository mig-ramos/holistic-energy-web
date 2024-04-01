import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useSlide } from "@/data/hooks/home/useSlide";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/slide/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    slides,
    listAll,
    slide,
    upSlide,
    newSlide,
    excluirSlide,
    exibirTabela,
    selecionarSlide,
    tabelaVisivel,
  } = useSlide();

  const { user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "ID",
      },
      {
        property: "name",
        name: "Foto",
      },
      {
        property: "slogan",
        name: "Slogan",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />
        
        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">SLIDES DO CARROSSEL</h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newSlide}>
                Novo Slide
              </Button>

              <Tabela
                list={slides}
                config={config}
                itemSelecionado={selecionarSlide}
                itemExcluido={excluirSlide}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              slide={slide}
              slideMudou={upSlide}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
