import React, { useState } from "react";

interface Option {
    value: string | number;
    label: string;
  }
  
  interface SelectProps {
    options: Option[];
    //   onChange: (value: string | number) => void;
    defaultValue: string | number; // Adicionando a prop defaultValue  
    label: string;
    valor: any;
    somenteLeitura?: boolean;
    obrigatorio?: boolean;
    naoRenderizarQuando?: boolean;
    valorMudou?: (novoValor: any) => void;
  }

  export function Select(props: SelectProps){

    const [selectedValue, setSelectedValue] = useState<string | number>(
        ""
      ); // Inicializando com o valor padrão = defaultValue

      const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        props.valorMudou?.(value);
        setSelectedValue(value);
      };

    return props.naoRenderizarQuando ? null : (
<div className={`flex flex-col mt-4`}>
      <label>{props.label}:</label>
      <select
        // type={props.tipo ?? "text"}
        value={props.valor}
        disabled={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio}
        className={`
            py-2 px-4 rounded-xl bg-gray-200 focus:bg-white dark:bg-gray-700 dark:focus:bg-gray-900
            focus:border-2 dark:focus:border-2 focus:border-lime-700 dark:focus:border-lime-300   outline-none dark:outline-none`}
      >
      {props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>   
    </div>
    );
  }