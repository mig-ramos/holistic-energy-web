import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/auth/AuthContext";
import { ActiveLink } from "../../activeLink";
import useAppData from "@/data/hooks/useAppData";
import { ButtonAlternationTheme } from "@/components/buttonAlternationTheme";

export function PanelHeader() {
  const { signOut } = useContext(AuthContext);
  let linkActive = "text-orange-500";
  const { tema, alternarTema } = useAppData();

  return (
    <div className="w-full flex items-center h-10 bg-gray-200 dark:bg-gray-600 rounded-lg text-black dark:text-gray-200 font-medium gap-4 px-4 mb-4">
      <ButtonAlternationTheme tema={tema} alternarTema={alternarTema} />
      <ActiveLink href="/dashboard/profile" activeClassName={linkActive}>
        <span>Perfil</span>
      </ActiveLink>
      <button
        className={`hover:text-black hover:text-bold text-center border-green-800 bg-green-400 text-black border-2 hover:bg-red-400 rounded-full  flex items-center justify-center dark:text-white dark:bg-orange-700 dark:hover:bg-orange-500 dark:hover:border-orange-700 dark:border-orange-700 m-2 py-1 px-4 ml-auto
      `}
        onClick={signOut}
      >
        Fechar Painel
      </button>
    </div>
  );
}
