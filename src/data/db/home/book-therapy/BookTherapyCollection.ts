import BookTherapy from "../../models/BookTherapy";
import BookTherapyRepository from "./BookTherapyRepository";
import { api } from "../../../../services/apiClient";

export default class BookTherapyCollection implements BookTherapyRepository {

    async listarTodos(): Promise<BookTherapy[]> {

        const response = await api.get('/home/book-therapy', undefined)
        return response.data ?? []
    }

    async salvar(bookTherapy: BookTherapy): Promise<BookTherapy> {
        if (bookTherapy.id) {

            const id = bookTherapy?.id
            const response = await api.put(`/home/book-therapy/up/${id}`, {
                title: bookTherapy.title,
                subTitle: bookTherapy.subTitle,
                buttonTitle: bookTherapy.buttonTitle,
                photo: bookTherapy.photo,
                description: bookTherapy.description,
                mostrar: bookTherapy.mostrar,
            })
            return response.data;
        }
        else {

            const response = await api.post('/home/book-therapy', {
                title: bookTherapy.title,
                subTitle: bookTherapy.subTitle,
                buttonTitle: bookTherapy.buttonTitle,
                photo: bookTherapy.photo,
                description: bookTherapy.description,
                mostrar: bookTherapy.mostrar,
            })

            return response.data;
        }

    }

    async excluir(bookTherapy: BookTherapy): Promise<void> {
        const id = bookTherapy?.id
        const response = await api.delete(`/home/book-therapy/del/${id}`, undefined)
        return
    }
}