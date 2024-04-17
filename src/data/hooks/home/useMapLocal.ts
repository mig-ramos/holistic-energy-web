import { useEffect, useState } from "react";
import MapLocal from "@/data/db/home/contact/map/MapLocal";
import MapLocalRepository from "@/data/db/home/contact/map/MapLocalRepository";
import MapLocalCollection from "@/data/db/home/contact/map/MapLocalCollection";
import useTabelaOuForm from "./useTabelaOuForm";

export function useMapLocal() {
    const repo: MapLocalRepository = new MapLocalCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [mapLocal, setapLocal] = useState<MapLocal>(MapLocal.vazio());
    const [mapLocals, setMapLocals] = useState<MapLocal[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((mapLocals) => {
            setMapLocals(mapLocals);
            exibirTabela()
        });
    }

    function selecionarMapLocal(mapLocal: MapLocal) {
        // console.log(therapy.name);
        setapLocal(mapLocal);
        exibirFormulario()
    }

    async function excluirMapLocal(mapLocal: MapLocal) {
        // console.log(slide.id);
        await repo.excluir(mapLocal);
        // console.log(therapy)
        listAll();
    }


    function newMapLocal() {
        setapLocal(MapLocal.vazio());
        exibirFormulario()
    }

    async function upMapLocal(mapLocal: MapLocal) {
        await repo.salvar(mapLocal)
        listAll()
        exibirTabela()
    }

    return {
        mapLocal,
        mapLocals,
        listAll,
        selecionarMapLocal,
        excluirMapLocal,
        newMapLocal,
        upMapLocal,
        tabelaVisivel,
        exibirTabela,
        exibirFormulario,
    }
}