import About from "./About";
import AboutRepository from "./AboutRepository";
import { api } from "../../../../services/apiClient";

export default class AboutCollection implements AboutRepository {

    async listarTodos(): Promise<About[]> {

        const response = await api.get('/home/about', undefined)
        return response.data ?? []
    }

    async salvar(about: About): Promise<About> {
        if (about.id) {

            const id = about?.id
            const response = await api.put(`/home/about/up/${id}`, {
                title: about.title,
                subTitle: about.subTitle,
                description: about.description,
                photo: about.photo,
            })
            return response.data;
        }
        else {

            const response = await api.post('/home/about', {
                title: about.title,
                subTitle: about.subTitle,
                description: about.description,
                photo: about.photo,
            })

            return response.data;
        }

    }

    async excluir(about: About): Promise<void> {
        const id = about?.id
        const response = await api.delete(`/home/about/del/${id}`, undefined)
        return
    }
}