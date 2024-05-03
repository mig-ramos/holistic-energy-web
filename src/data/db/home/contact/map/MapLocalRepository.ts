import MapLocal from "../../../models/MapLocal";

export default interface MapLocalRepository {
    listarTodos(): Promise<MapLocal[]>
    salvar(mapLocal: MapLocal): Promise<MapLocal>
    excluir(mapLocal: MapLocal): Promise<void>

}