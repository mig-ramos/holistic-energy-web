import BookTherapy from "../../models/BookTherapy";

export default interface BookTherapyRepository {
    listarTodos(): Promise<BookTherapy[]>
    salvar(bookTherapy: BookTherapy): Promise<BookTherapy>
    excluir(bookTherapy: BookTherapy): Promise<void>

}