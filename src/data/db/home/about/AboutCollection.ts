import About from "./About";
import AboutRepository from "./AboutRepository";
import { api } from "../../../../services/apiClient";

export default class AboutCollection implements AboutRepository {

    async listarTodos(): Promise<About[]> {

        const response = await api.get('/home/about', undefined)
        return response.data ?? []
    }
}