import User from "./User";
import UserRepository from "./UserRepository";
import { api } from "../../../../services/apiClient";

export default class UserCollection implements UserRepository {

    async listarTodos(): Promise<User[]> {

        const response = await api.get('/user/list', undefined)
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