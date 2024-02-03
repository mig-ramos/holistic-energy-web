interface TextAreaProps {
  label: string;
  valor: any;
  rows?: number;
  somenteLeitura?: boolean;
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  valorMudou?: (novoValor: any) => void;
}

export function TextArea(props: TextAreaProps) {
  return props.naoRenderizarQuando ? null : (
    <div
      className={`
    flex flex-col mt-4 w-[770] h-auto
    `}
    >
      <label>{props.label}:</label>
      <textarea
        value={props.valor}
        rows={props.rows}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`py-2 px-4 focus:border-2 dark:focus:border-2 rounded-xl bg-gray-200 dark:bg-gray-700 
        dark:focus:bg-gray-900 focus:bg-white outline-none dark:outline-none focus:border-lime-700 dark:focus:border-lime-300`}
      />
    </div>
  );
}
