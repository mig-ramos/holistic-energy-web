import { useEffect, useState } from "react";
import BookTherapy from "@/data/db/models/BookTherapy";
import BookTherapyRepository from "@/data/db/home/book-therapy/BookTherapyRepository";
import BookTherapyCollection from "@/data/db/home/book-therapy/BookTherapyCollection";
import useTabelaOuForm from "../useTabelaOuForm";

export function useBookTherapy() {
    const repo: BookTherapyRepository = new BookTherapyCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [bookTherapy, setBookTherapy] = useState<BookTherapy>(BookTherapy.vazio());
    const [bookTherapies, setBookTherapies] = useState<BookTherapy[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((bookTherapies) => {
            setBookTherapies(bookTherapies);
            exibirTabela()
        });
    }

    function selecionarBookTherapy(bookTherapy: BookTherapy) {
        // console.log(therapy.name);
        setBookTherapy(bookTherapy);
        exibirFormulario()
    }

    async function excluirBookTherapy(bookTherapy: BookTherapy) {
        // console.log(slide.id);
        await repo.excluir(bookTherapy);
        // console.log(therapy)
        listAll();
    }


    function newBookTherapy() {
        setBookTherapy(BookTherapy.vazio());
        exibirFormulario()
    }

    async function upBookTherapy(bookTherapy: BookTherapy) {
        await repo.salvar(bookTherapy)
        listAll()
        exibirTabela()
    }

    return {
        bookTherapy,
        bookTherapies,
        listAll,
        selecionarBookTherapy,
        excluirBookTherapy,
        newBookTherapy,
        upBookTherapy,
        tabelaVisivel,
        exibirTabela,
        exibirFormulario,
    }
}