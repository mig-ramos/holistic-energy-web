import { FormEvent, useState } from "react";
import { InputText } from "@/components/ui/InputText";
import User from "../../models/User";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify";
import { api } from "@/services/apiClient";
import { useUser } from "@/data/hooks/admin/useUser";
import { Select } from "@/components/ui/Select";
import imgLoading from "/public/assets/loading.gif";
import Image from "next/image";

interface FormularioProps {
  user: User;
  userMudou?: (user: User) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const { listAll, exibirTabela } = useUser();

  const [loading, setLoading] = useState(false);

  const id = props.user?.id ?? null;
  const [name, setName] = useState(props.user?.name ?? "");
  const [email, setEmail] = useState(props.user?.email ?? "");
  const [password, setPassword] = useState(props.user?.password ?? "123456");
  const [role, setRole] = useState(props.user?.role ?? "THERAPIST");

  const roles = [
    { value: "THERAPIST", label: "Terapeuta" },
    { value: "CLIENT", label: "Cliente" },
    { value: "ADMIN", label: "Administrador" },
  ];

  function limparCamos() {
    setName("");
    setEmail("");
    setRole("");
    setPassword("");
  }

  function mostrarTabela() {
    exibirTabela();
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (props.user.id) {
      if (name === "" || email === "" || password === "" || role === "") {
        toast.error("Preencha todos os campos!");
        return;
      } else {
        setLoading(true);
        props.userMudou?.(new User(name, email, password, role, id));
        mostrarTabela();
        setLoading(false);
      }
    } else {
      try {
        {
          role ? "ADMIN" : "ADMIN";
        }
        if (name === "" || email === "" || password === "") {
          console.log(name, email, password, role);
          toast.error("Preencha todos os campos!");
          return;
        }
        setLoading(true);
        await api.post("/admin/add", {
          name,
          email,
          password,
          role,
        });

        toast.success("Cadastrado com sucesso!");
        limparCamos();
        mostrarTabela();
        setLoading(false);
      } catch (err) {
        toast.error("Ops erro ao cadastrar!");
        setLoading(false);
      } finally {
        mostrarTabela();
      }
    }
  }

  return (
    <div className="py-4">
      <form className="mt-4" onSubmit={handleRegister}>
        {id ? <InputText label="Id" valor={id} somenteLeitura /> : false}

        <InputText tipo="text" label="Nome" valor={name} valorMudou={setName} />

        <InputText
          tipo="text"
          label="E-mail"
          valor={email}
          valorMudou={setEmail}
        />

        <InputText
          tipo="password"
          label="Senha"
          valor={password}
          valorMudou={setPassword}
        />

        <Select
          defaultValue={role}
          options={roles}
          label="Papel do Usuário"
          valor={role}
          valorMudou={setRole}
          somenteLeitura
        />

        <div>
          {props.user.id ? (
            <Button
              cor="blue"
              onClick={() =>
                props.userMudou?.(new User(name, email, password, role, id))
              }
            >
              <div className="flex items-center justify-center">
                <Image
                  src={imgLoading}
                  alt="Loading"
                  hidden={!loading}
                  width={24}
                  className="mr-2"
                />
                Alterar
              </div>
            </Button>
          ) : (
            <button
              className="   bg-green-600 dark:bg-green-900 text-black py-3 px-8 rounded-xl mt-4 mr-1 w-full dark:text-white hover:bg-green-500 dark:hover:bg-green-800 hover:text-black hover:font-bold"
              type="submit"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={imgLoading}
                  alt="Loading"
                  hidden={!loading}
                  width={24}
                  className="mr-2"
                />
                Salvar
              </div>
            </button>
          )}

          <Button cor="gray" onClick={props.cancelado}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
