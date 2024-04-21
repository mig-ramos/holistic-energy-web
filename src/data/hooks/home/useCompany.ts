import { useEffect, useState } from "react";
import Company from "@/data/db/home/company/Company";
import CompanyRepository from "@/data/db/home/company/CompanyRepository";
import CompanyCollection from "@/data/db/home/company/CompanyCollection";
import useTabelaOuForm from "../useTabelaOuForm";

export function useCompany() {
    const repo: CompanyRepository = new CompanyCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [company, setCompany] = useState<Company>(Company.vazio());
    const [companies, setCompanies] = useState<Company[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((companies) => {
            setCompanies(companies);
            exibirTabela()
        });
    }

    function selecionarCompany(company: Company) {
        // console.log(therapy.name);
        setCompany(company);
        exibirFormulario()
    }

    async function excluirCompany(company: Company) {
        // console.log(slide.id);
        await repo.excluir(company);
        // console.log(therapy)
        listAll();
    }


    function newCompany() {
        setCompany(Company.vazio());
        exibirFormulario()
    }

    async function upCompany(company: Company) {
        await repo.salvar(company)
        listAll()
        exibirTabela()
    }

    return {
        company,
        companies,
        listAll,
        selecionarCompany,
        excluirCompany,
        newCompany,
        upCompany,
        tabelaVisivel,
        exibirTabela,
        exibirFormulario,
    }
}