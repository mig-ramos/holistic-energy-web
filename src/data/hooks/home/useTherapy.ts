import { useEffect, useState } from "react";
import Therapy from "@/data/db/home/therapy/Therapy";
import TherapyRepository from "@/data/db/home/therapy/TherapyRepository"
import TherapyCollection from "@/data/db/home/therapy/TherapyCollection"
import useTabelaOuForm from "../useTabelaOuForm";

export function useTherapy() {
    const repo: TherapyRepository = new TherapyCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [therapy, setTherapy] = useState<Therapy>(Therapy.vazio());
    const [therapies, setTherapies] = useState<Therapy[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((therapies) => {
            setTherapies(therapies);
            exibirTabela()
        });
    }

    function selecionarTherapy(therapy: Therapy) {
        // console.log(therapy.name);
        setTherapy(therapy);
        exibirFormulario()
    }

    async function excluirTherapy(therapy: Therapy) {
        // console.log(slide.id);
        await repo.excluir(therapy);
        // console.log(therapy)
        listAll();
    }


    function newTherapy() {
        setTherapy(Therapy.vazio());
        exibirFormulario()
    }

    async function upTherapy(therapy: Therapy) {
        await repo.salvar(therapy)
        listAll()
        exibirTabela()
    }

    return {
        therapy,
        therapies,
        listAll,
        selecionarTherapy,
        excluirTherapy,
        newTherapy,
        upTherapy,
        tabelaVisivel, 
        exibirTabela,
        exibirFormulario,
    }
}