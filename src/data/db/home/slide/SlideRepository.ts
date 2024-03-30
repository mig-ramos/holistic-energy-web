import Slide from "./Slide";

export default interface HourRepository {
    listarTodos(): Promise<Slide[]>
    salvar(slide: Slide): Promise<Slide>
    excluir(slide: Slide): Promise<void>    
}