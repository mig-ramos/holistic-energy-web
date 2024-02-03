interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}

export default function Input(props: AuthInputProps) {
    return props.naoRenderizarQuando ? null : (
        <div className={`flex flex-col mt-4`}>
            <label htmlFor="">{props.label}</label>
            <input
            type={props.tipo ?? 'text'}
            value={props.valor} 
            onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio}
            className={`
            px-4 py-3 rounded-lg bg-lime-100 mt-2
            border focus:border-lime-600 focus:bg-white
            focus:outline-none
            `}
            />
        </div>
    )
}