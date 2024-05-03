import { useEffect, useState } from "react";
import User from "@/data/db/models/User";
import AdminRepository from "@/data/db/admin/admin/AdminRepository";
import AdminCollection from "@/data/db/admin/admin/AdminCollection";
import useTabelaOuForm from "../useTabelaOuForm";

export function useAdmin() {
    const repo: AdminRepository = new AdminCollection();

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [userr, setUser] = useState<User>(User.vazio());
    const [users, setUsers] = useState<User[]>([]);

    useEffect(listAll, []);

    function listAll() {
        repo.listarTodos().then((users) => {
            setUsers(users);
            exibirTabela()
        });
    }

    function selecionarUser(user: User) {
        // console.log(therapy.name);
        setUser(user);
        exibirFormulario()
    }

    async function excluirUser(user: User) {
        // console.log(slide.id);
        await repo.excluir(user);
        // console.log(therapy)
        listAll();
    }


    function newUser() {
        setUser(User.vazio());
        exibirFormulario()
    }

    async function upUser(user: User) {
        await repo.salvar(user)
        listAll()
        exibirTabela()
    }

    return {
        userr,
        users,
        listAll,
        selecionarUser,
        excluirUser,
        newUser,
        upUser,
        tabelaVisivel,
        exibirTabela,
        exibirFormulario,
    }
}