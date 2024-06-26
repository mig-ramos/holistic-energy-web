import Company from "../../models/Company";

export default interface CompanyRepository {
    listarTodos(): Promise<Company[]>
    salvar(company: Company): Promise<Company>
    excluir(company: Company): Promise<void>

}