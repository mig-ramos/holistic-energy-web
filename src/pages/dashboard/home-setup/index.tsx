import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useSlide } from "@/data/hooks/home/useSlide";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/slide/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelHeader } from "@/components/layoutDashborad/panelHeader";

export default function HomeSetup() {
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
        <PanelHeader role={user.role} />
        <h1 className="flex h-10 rounded-md text-white text-xl justify-center items-center bg-yellow-800">
          Home - Congurações
        </h1>

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
