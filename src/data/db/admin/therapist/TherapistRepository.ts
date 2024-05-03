import User from "../../models/User"

export default interface TherapistRepository {
    listarTodos(): Promise<User[]>
    salvar(user: User): Promise<User>
    excluir(user: User): Promise<void>

}