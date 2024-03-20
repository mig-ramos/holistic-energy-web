import Therapy from "./Therapy";
import TherapyRepository from "./TherapyRepository";
import { api } from "@/services/apiClient";

export default class CollectionTherapy implements TherapyRepository {

    async salvar(therapy: Therapy): Promise<Therapy> {
        if (therapy?.id) {
            const id = therapy?.id
            const response = await api.put(`/therapy/up/${id}`, {
                name: therapy.name,
                description: therapy.description,
                photo: therapy.photo,
            })
            return response.data
        } else {
            const response = await api.post('/therapy', {
                name: therapy.name,
                description: therapy.description,
                photo: therapy.photo,
            })
            return response.data
        }
    }

    async excluir(therapy: Therapy): Promise<void> {
        const id = therapy?.id
        const response = await api.delete(`/therapy/del/${id}`, undefined)
        return
    }

    async listarTodos(): Promise<Therapy[]> {
        const response = await api.get('/therapy', undefined)
        return response.data ?? []
    }
}