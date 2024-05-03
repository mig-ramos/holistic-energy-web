import { useEffect, useState } from "react";
import About from "@/data/db/models/About";
import AboutRepository from "@/data/db/home/about/AboutRepository";
import AboutCollection from "@/data/db/home/about/AboutCollection";
import useTabelaOuForm from "../useTabelaOuForm";

export function useAbout() {
    const repo: AboutRepository = new AboutCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()  

    const [about, setAbout] = useState<About>(About.vazio());
    const [abouts, setAbouts] = useState<About[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((abouts) => {
            setAbouts(abouts);
            exibirTabela()
        });
    }

    function selecionarAbout(about: About) {
        // console.log(therapy.name);
        setAbout(about);
        exibirFormulario()
    }

    async function excluirAbout(about: About) {
        // console.log(slide.id);
        await repo.excluir(about);
        // console.log(therapy)
        listAll();
    }


    function newAbout() {
        setAbout(About.vazio());
        exibirFormulario()
    }

    async function upAbout(about: About) {
        await repo.salvar(about)
        listAll()
        exibirTabela()
    }

    return {
        about,
        abouts,
        listAll,
        selecionarAbout,
        excluirAbout,
        newAbout,
        upAbout,
        tabelaVisivel, 
        exibirTabela,
        exibirFormulario,
    }
}