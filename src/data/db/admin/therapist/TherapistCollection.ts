import User from "../../models/User";
import TherapistRepository from "./TherapistRepository";
import { api } from "../../../../services/apiClient";

export default class TherapistCollection implements TherapistRepository {

    async listarTodos(): Promise<User[]> {

        const response = await api.get('/therapist/list', undefined)
        return response.data ?? []
    }

    async salvar(user: User): Promise<User> {
        if (user.id) {

            const id = user?.id
            const response = await api.put(`/user/up/${id}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
            })
            return response.data;
        }
        else {

            const response = await api.post('/user/add', {
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role,
            })

            return response.data;
        }

    }

    async excluir(user: User): Promise<void> {
        const id = user?.id
        const response = await api.delete(`/user/del/${id}`, undefined)
        return
    }
}