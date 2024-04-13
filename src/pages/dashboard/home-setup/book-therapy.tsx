import { useContext, useEffect } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useBookTherapy } from "@/data/hooks/home/useBookTherapy";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/book-therapy/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    bookTherapies,
    listAll,
    bookTherapy,
    upBookTherapy,
    newBookTherapy,
    excluirBookTherapy,
    exibirTabela,
    selecionarBookTherapy,
    tabelaVisivel,
  } = useBookTherapy();

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
        property: "buttonTitle",
        name: "Título do Botão",
      },
      {
        property: "description",
        name: "Mensagem Cliente",
      },
      {
        property: "mostrar",
        name: "Mostrar na Home",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />

        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">
          MARCAR TERAPIA
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newBookTherapy}>
                Cadastrar Marcar Terapia
              </Button>

              <Tabela
                list={bookTherapies}
                config={config}
                itemSelecionado={selecionarBookTherapy}
                itemExcluido={excluirBookTherapy}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              bookTherapy={bookTherapy}
              bookTherapyMudou={upBookTherapy}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
