import MapLocal from "./MapLocal";
import MapLocalRepository from "./MapLocalRepository";
import { api } from "@/services/apiClient";

export default class MapLocalCollection implements MapLocalRepository {

    async listarTodos(): Promise<MapLocal[]> {

        const response = await api.get('/home/map-local', undefined)
        return response.data ?? []
    }

    async salvar(mapLocal: MapLocal): Promise<MapLocal> {
        if (mapLocal.id) {

            const id = mapLocal?.id
            const response = await api.put(`/home/map-local/up/${id}`, {
                title: mapLocal.title,
                photo: mapLocal.photo,
                apiKey: mapLocal.apiKey,
                lat: mapLocal.lat,
                lng: mapLocal.lng,
                info: mapLocal.info,
                mapId: mapLocal.mapId,
            })
            console.log(response.data)
            return response.data;
        }
        else {

            const response = await api.post('/home/map-local', {
                title: mapLocal.title,
                photo: mapLocal.photo,
                apiKey: mapLocal.apiKey,
                lat: mapLocal.lat,
                lng: mapLocal.lng,
                info: mapLocal.info,
                mapId: mapLocal.mapId,
            })

            return response.data;
        }

    }

    async excluir(mapLocal: MapLocal): Promise<void> {
        const id = mapLocal?.id
        const response = await api.delete(`/home/map-local/del/${id}`, undefined)
        return
    }
}