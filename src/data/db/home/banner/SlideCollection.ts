import Slide from "./Slide";
import SlideRepository from "./SlideRepository";
import { api } from "../../../../services/apiClient";

export default class SlideCollection implements SlideRepository {

    async listarTodos(): Promise<Slide[]> {

        const response = await api.get('/home/banner', undefined)
        return response.data ?? []
    }
}