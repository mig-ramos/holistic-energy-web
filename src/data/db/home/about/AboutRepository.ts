import About from "./About";

export default interface AboutRepository {
    listarTodos(): Promise<About[]>
    salvar(about: About): Promise<About>
    excluir(about: About): Promise<void>

}