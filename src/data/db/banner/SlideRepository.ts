import Slide from "./Slide";

export default interface HourRepository {
    listarTodos(): Promise<Slide[]>
    // salvar(hour: Hour): Promise<Hour>
    // excluir(hour: Hour): Promise<void>
    
}