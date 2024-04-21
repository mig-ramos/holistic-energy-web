import Company from "./Company";
import CompanyRepository from "./CompanyRepository";
import { api } from "../../../../services/apiClient";

export default class CompanyCollection implements CompanyRepository {

    async listarTodos(): Promise<Company[]> {

        const response = await api.get('/home/company', undefined)
        return response.data ?? []
    }

    async salvar(company: Company): Promise<Company> {
        if (company.id) {

            const id = company?.id
            const response = await api.put(`/home/company/up/${id}`, {
                companyName: company.companyName,
                description: company.description,
                companyAddress: company.companyAddress,
                photo: company.photo,
                officeOur: company.officeOur,
                zap: company.zap,
                email: company.email,
                facebook: company.facebook,
                youtube: company.youtube,
                instagram: company.instagram,
                twitter: company.twitter,
            })
            return response.data;
        }
        else {

            const response = await api.post('/home/company', {
                companyName: company.companyName,
                description: company.description,
                companyAddress: company.companyAddress,
                photo: company.photo,
                officeOur: company.officeOur,
                zap: company.zap,
                email: company.email,
                facebook: company.facebook,
                youtube: company.youtube,
                instagram: company.instagram,
                twitter: company.twitter,
            })

            return response.data;
        }

    }

    async excluir(company: Company): Promise<void> {
        const id = company?.id
        const response = await api.delete(`/home/company/del/${id}`, undefined)
        return
    }
}