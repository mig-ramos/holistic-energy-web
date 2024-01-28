import { useState, useContext } from "react";
import AuthInput from "@/components/auth/AuthInput";
import Image from "next/image";
import imgLoading from "/public/assets/loading.gif";
import { toast } from "react-toastify";
import useAppData from "@/data/hooks/useAppData";

import { AuthContext } from "@/data/contexts/auth/AuthContext";
import { canSSRGuest } from "@/utils/canRGuest";
import router from "next/router";
import Head from "next/head";

export default function Auth() {
  const { tema } = useAppData();

  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useContext(AuthContext);

  function redirectPage() {
    router.push("/");
  }

  function clearForm() {
    setName("");
    setEmail("");
    // setRole('');
    setPassword("");
    setPasswordConfirm("");
  }

  async function submeter() {
    if (modo === "login") {
      if (email === "" || password === "") {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      setLoading(true);

      let data = {
        email,
        password,
      };

      await signIn(data);
      // clearForm();
      setLoading(false);
    } else {
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        passwordConfirm === ""
      ) {
        toast.warning("PREENCHA OS DADOS...");
        return;
      }
      if (password !== passwordConfirm) {
        toast.warning("As SENHAS são diferentes...");
        return;
      }
      setLoading(true);
      let data = {
        name,
        email,
        password,
      };
      await signUp(data);
      clearForm();
      setModo("login");
      setLoading(false);
    }
  }

  return (
    <div className={tema}>
      <div className={`dark:bg-gray-800 min-h-screen`}>
        <Head>
          <title>Login</title>
        </Head>

        <div
          className={`flex flex-col w-11/12 sm:w-9/12 md:w-8/12 lg:w-5/12 mx-auto`}
        >
          <h1 className={`text-3xl font-bold mt-3 dark:text-gray-300`}>
            {modo === "login"
              ? "Entre com a sua conta"
              : "Cadastre-se na plataforma"}
          </h1>
          <AuthInput
            label="Nome"
            tipo="text"
            valor={name}
            valorMudou={setName}
            obrigatorio
            naoRenderizarQuando={modo === "login"}
          />
          <AuthInput
            label="Email"
            tipo="email"
            valor={email}
            valorMudou={setEmail}
            obrigatorio
          />
          <AuthInput
            label="Senha"
            tipo="password"
            valor={password}
            valorMudou={setPassword}
            obrigatorio
          />
          <AuthInput
            label="Confirmação de Senha"
            tipo="password"
            valor={passwordConfirm}
            valorMudou={setPasswordConfirm}
            obrigatorio
            naoRenderizarQuando={modo === "login"}
          />
          <button
            onClick={submeter}
            disabled={loading}
            className={`
          flex justify-center
      w-full bg-lime-600 hover:bg-lime-500
      dark:bg-lime-700 dark:hover:bg-lime-600
      text-white rounded-lg px-4 py-3 mt-6
      `}
          >
            <Image
              src={imgLoading}
              alt="Loading"
              hidden={!loading}
              width={24}
              className="mr-2"
            />
            {modo === "login" ? "Entrar" : "Cadastrar"}
          </button>

          {modo == "login" ? (
            <p className="my-4 dark:text-gray-300">
              Novo por aqui?
              <a
                onClick={() => setModo("cadastro")}
                className={`
            text-lime-600 hover:text-lime-500 font-semibold cursor-pointer
            `}
              >
                &nbsp; &nbsp; Crie uma Conta Gratuitamente
              </a>
            </p>
          ) : (
            <p className="my-4">
              Já tem cadastro?
              <a
                onClick={() => setModo("login")}
                className={`
          text-lime-600 hover:text-lime-500 font-semibold cursor-pointer
          `}
              >
                &nbsp; &nbsp; Entre com suas credenciais
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
