import { useEffect, useState } from "react";
import Slide from "@/data/db/models/Slide";
import SlideRepository from "@/data/db/home/slide/SlideRepository";
import SlideCollection from "@/data/db/home/slide/SlideCollection";
import useTabelaOuForm from "../useTabelaOuForm";

export function useSlide() {
    const repo: SlideRepository = new SlideCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [slide, setSlide] = useState<Slide>(Slide.vazio());
    const [slides, setSlides] = useState<Slide[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((banner) => {
            setSlides(banner);
            exibirTabela()
        });
    }

    function selecionarSlide(slide: Slide) {
        // console.log(therapy.name);
        setSlide(slide);
        exibirFormulario()
    }

    async function excluirSlide(slide: Slide) {
        // console.log(slide.id);
        await repo.excluir(slide);
        // console.log(therapy)
        listAll();
    }


    function newSlide() {
        setSlide(Slide.vazio());
        exibirFormulario()
    }

    async function upSlide(slide: Slide) {
        await repo.salvar(slide)
        listAll()
        exibirTabela()
    }

    return {
        slides,
        listAll,
        slide,
        newSlide,
        upSlide,
        excluirSlide,
        selecionarSlide,
        tabelaVisivel,
        exibirTabela,
    }
}