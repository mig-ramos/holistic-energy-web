import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/auth/AuthContext";
import { ActiveLink } from "../../activeLink";
import useAppData from "@/data/hooks/useAppData";

interface PanelSetuHomeProps {
  role: string;
}

export function PanelSetupHome({ role }: PanelSetuHomeProps) {
  const { signOut } = useContext(AuthContext);
  let linkActive = "text-orange-500";
  const { tema, alternarTema } = useAppData();

  return (
    <div className="w-full flex items-center h-10 bg-gray-200 dark:bg-gray-600 rounded-lg text-black dark:text-gray-200 font-medium gap-4 px-4 mb-4">
      <ActiveLink href="/dashboard/home-setup" activeClassName={linkActive}>
        <span className="">CONFIGURA HOME</span>
      </ActiveLink>

      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/home-setup/slide"
          activeClassName={linkActive}
        >
          <span>Slides</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/home-setup/about"
          activeClassName={linkActive}
        >
          <span>Sobre Mim</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/home-setup/book-therapy"
          activeClassName={linkActive}
        >
          <span>Marcar Terapia</span>
        </ActiveLink>
      )}
      {role === "ADMIN" && (
        <ActiveLink
          href="/dashboard/home-setup/map-local"
          activeClassName={linkActive}
        >
          <span>Google Map</span>
        </ActiveLink>
      )}
      <ActiveLink
        href="/dashboard/home-setup/therapy"
        activeClassName={linkActive}
      >
        <span>Terapias</span>
      </ActiveLink>
      <div className={`ml-auto bg-yellow-200 dark:bg-yellow-700 px-2 py-1 rounded-xl`}>
        <ActiveLink href="/dashboard" activeClassName={linkActive}>
          <span>VOLTAR</span>
        </ActiveLink>
      </div>
    </div>
  );
}
