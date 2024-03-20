import Therapy from "./Therapy";

export default interface UserRepository {
    salvar(therapy: Therapy): Promise<Therapy>
    excluir(therapy: Therapy): Promise<void>
    listarTodos(): Promise<Therapy[]>
}