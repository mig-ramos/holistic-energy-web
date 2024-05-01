import User from "./User";

export default interface UserRepository {
    listarTodos(): Promise<User[]>
    salvar(user: User): Promise<User>
    excluir(user: User): Promise<void>

}