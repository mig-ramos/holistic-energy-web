import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/auth/AuthContext";
import { ActiveLink } from "../../activeLink";
import useAppData from "@/data/hooks/useAppData";

interface PanelSetuHomeProps {
  role: string;
}

export function PanelRegistrations({ role }: PanelSetuHomeProps) {
  const { signOut } = useContext(AuthContext);
  let linkActive = "text-orange-500";
  const { tema, alternarTema } = useAppData();

  return (
    <div className="w-full flex items-center h-10 bg-gray-200 dark:bg-gray-600 rounded-lg text-black dark:text-gray-200 font-medium gap-4 px-4 mb-4">
      <ActiveLink href="/dashboard/registrations" activeClassName={linkActive}>
        <span className="">CADASTROS GERAIS</span>
      </ActiveLink>

      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/registrations/users"
          activeClassName={linkActive}
        >
          <span>Clientes</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/registrations/therapists"
          activeClassName={linkActive}
        >
          <span>Terapeutas</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/registrations/admins"
          activeClassName={linkActive}
        >
          <span>Administradores</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/registrations/book-therapy"
          activeClassName={linkActive}
        >
          <span>Marcar Terapia</span>
        </ActiveLink>
      )}

      <div
        className={`ml-auto bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded-xl`}
      >
        <ActiveLink href="/dashboard" activeClassName={linkActive}>
          <span>VOLTAR</span>
        </ActiveLink>
      </div>
    </div>
  );
}
