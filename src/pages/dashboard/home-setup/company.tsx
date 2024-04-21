import { useContext } from "react";
import { AuthContext } from "@/data/contexts/auth/AuthContext";
import Content from "@/components/offTheHome/content";
import { useCompany } from "@/data/hooks/home/useCompany";

import Button from "@/components/ui/Button";
import Tabela from "@/components/ui/Tabela";
import Formulario from "@/data/db/home/company/Formulario";
import { LayoutDasboard } from "@/components/layoutDashborad";
import { PanelSetupHome } from "@/components/layoutDashborad/panelSetupHome";

export default function Index() {
  const {
    companies,
    listAll,
    company,
    upCompany,
    newCompany,
    excluirCompany,
    exibirTabela,
    selecionarCompany,
    tabelaVisivel,
  } = useCompany();

  const { user } = useContext(AuthContext);

  const config: ConfigTable = {
    columns: [
      {
        property: "id",
        name: "ID",
      },
      {
        property: "companyName",
        name: "Nome Empresa",
      },
      {
        property: "description",
        name: "Descrição",
      },
      {
        property: "companyAddress",
        name: "Endereço",
      },
      {
        property: "photo",
        name: "Foto",
      },
      {
        property: "officeOur",
        name: "Expediente",
      },
      {
        property: "zap",
        name: "Fone",
      },
      {
        property: "email",
        name: "E-mail",
      },
      {
        property: "facebook",
        name: "Facebook",
      },
      {
        property: "youtube",
        name: "Youtube",
      },
      {
        property: "instagram",
        name: "Instagram",
      },
      {
        property: "twitter",
        name: "Twitter",
      },
    ],
  };

  return (
    <Content>
      <LayoutDasboard>
        <PanelSetupHome role={user.role} />

        <h2 className="border-t-2 border-2 rounded-xl border-green-500 mt-2 px-4 py-1">
          SETUP EMPRESA
        </h2>

        {tabelaVisivel ? (
          <>
            <div className={`px-2`}>
              <Button cor="green" onClick={newCompany}>
                Cadastrar Empresa
              </Button>

              <Tabela
                list={companies}
                config={config}
                itemSelecionado={selecionarCompany}
                itemExcluido={excluirCompany}
              />
            </div>
          </>
        ) : (
          <div className={`px-2 md:w-8/12 lg:w-7/12 xl:w-6/12 max-w-xl`}>
            <Formulario
              company={company}
              companyMudou={upCompany}
              cancelado={exibirTabela}
            />
          </div>
        )}
      </LayoutDasboard>
    </Content>
  );
}
