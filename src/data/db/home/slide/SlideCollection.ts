import Slide from "../../models/Slide";
import SlideRepository from "./SlideRepository";
import { api } from "../../../../services/apiClient";

export default class SlideCollection implements SlideRepository {

    async listarTodos(): Promise<Slide[]> {

        const response = await api.get('/home/slide', undefined)
        return response.data ?? []
    }

    async salvar(slide: Slide): Promise<Slide> {
        if (slide.id) {

            const id = slide?.id
            const response = await api.put(`/home/slide/up/${id}`, {
                name: slide.name,
                slogan: slide.slogan,
            })
            return response.data;
        } 
        else {

            const response = await api.post('/home/slide', {
                name: slide.name,
                slogan: slide.slogan,
            })

            return response.data;
        }
    }

    async excluir(slide: Slide): Promise<void> {
        const id = slide?.id
        const response = await api.delete(`/home/slide/del/${id}`, undefined)
        return
    }
}