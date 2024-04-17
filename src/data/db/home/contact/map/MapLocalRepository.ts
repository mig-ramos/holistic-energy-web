import MapLocal from "./MapLocal";

export default interface MapLocalRepository {
    listarTodos(): Promise<MapLocal[]>
    salvar(mapLocal: MapLocal): Promise<MapLocal>
    excluir(mapLocal: MapLocal): Promise<void>

}