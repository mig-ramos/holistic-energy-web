interface InputTextProps {
  label: string;
  valor: any;
  somenteLeitura?: boolean;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  tipo?: "text" | "email" | "password" | "number";
  valorMudou?: (novoValor: any) => void;
}

export function InputText(props: InputTextProps) {
  return props.naoRenderizarQuando ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}:</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
            py-2 px-4 rounded-xl bg-gray-200 focus:bg-white dark:bg-gray-700 dark:focus:bg-gray-900
            focus:border-2 dark:focus:border-2 focus:border-lime-700 dark:focus:border-lime-300   outline-none dark:outline-none`}
      />
    </div>
  );
}
