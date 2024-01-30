import { useContext } from "react";
import { AuthContext } from "../../../data/contexts/auth/AuthContext";
import { ActiveLink } from "../../activeLink";

export function PanelHeader() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="w-full flex items-center h-10 bg-red-500 rounded-lg text-white font-medium gap-4 px-4 mb-4">
      <button className="ml-auto" onClick={signOut}>
        {" "}
        Sair da conta{" "}
      </button>
    </div>
  );
}
