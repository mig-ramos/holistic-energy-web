import { FiEdit, FiShuffle } from "react-icons/fi";

interface TabelaProps<T> {
  list: T[];
  config: ConfigTable;
  itemSelecionado?: (item: T) => void;
  itemExcluido?: (item: T) => void;
}

export default function Tabela<T>(props: TabelaProps<T>) {
  const exibirAcoes = props.itemExcluido || props.itemSelecionado;

  function renderizarCabecalho() {
    return (
      <tr>
        {props.config.columns.map((column, i) => {
          return (
            <th key={i} className={`py-1 px-1`}>
              {column.name}
            </th>
          );
        })}
        {exibirAcoes ? <th className={`px-1 text-center`}>Ações</th> : false}
      </tr>
    );
  }

  function renderizarDados() {
    return props.list?.map((item, i) => {
      return (
        <tr
          key={i}
          className={`${
            i % 2 === 0
              ? "bg-gray-200 dark:bg-gray-600"
              : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          {props.config.columns.map((column, i) => {
            return (
              <td key={i} className={`px-1`}>
                {item[column.property as keyof typeof item] as string | boolean}
              </td>
            );
          })}
          {exibirAcoes ? renderizarAcoes(item) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(item: T) {
    return (
      <td className={`px-1`}>
        <div
          className={`flex flex-col lg:flex-row justify-center items-center`}
        >
          {props.itemSelecionado ? (
            <button
              onClick={() => props.itemSelecionado?.(item)}
              className={`
            p-2 m-1 rounded-lg bg-transparent hover:bg-white
            `}
            >
              <FiEdit color="lime" size={28} />
            </button>
          ) : (
            false
          )}
          {props.itemExcluido ? (
            <button
              onClick={() => props.itemExcluido?.(item)}
              className={`
            p-2 m-1 rounded-lg bg-transparent hover:bg-white
            `}
            >
              <FiShuffle color="red" size={28} />
            </button>
          ) : (
            false
          )}
        </div>
      </td>
    );
  }

  return (
    <div className={`bg-green-100 rounded-xl my-1`}>
      <table className={`w-full my-1 mx-auto`}>
        <thead
          className={`bg-green-600 dark:bg-green-800 dark:text-white text-black text-left`}
        >
          {renderizarCabecalho()}
        </thead>
        <tbody>{renderizarDados()}</tbody>
      </table>
    </div>
  );
}
