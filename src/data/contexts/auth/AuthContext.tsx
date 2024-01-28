import { createContext, ReactNode, useEffect, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { api } from "../../../services/apiClient";
import { toast } from "react-toastify";

type UserProps = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextData = {
  user: UserProps;
  carregando?: boolean;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, "@holistic.token");
    Router.push("/");
  } catch {
    console.log("Erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [carregando, setCarregando] = useState(true);
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "@holistic.token": token } = parseCookies();
    // console.log(token)
    if (token) {
      api
        .get("/me")
        .then((response) => {
          const { id, name, email, role } = response.data;

          setUser({
            id,
            name,
            email,
            role,
          });
        })

        .catch(() => {
          // Se deu erro deslogar o user.
          signOut();
        });

      setCarregando(false);
      // console.log(user)
    } else {
      setCarregando(false);
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    // console.log("EMAIL", email)
    try {
      const response = await api.post("/session", {
        email,
        password,
      });

      const { id, name, role, token } = response.data;
      setCookie(undefined, "@holistic.token", token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mes
        path: "/", // quais caminhos terao acesso ao cookie
      });

      setUser({
        id,
        name,
        email,
        role,
      });

      // console.log("NOME",name)
      setCarregando(false);
      // passar para as proximas requisiçoes o nosso token
      // api.defaults.headers.common ['Authorization'] = `Bearer ${accessToken}`
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Loagado com sucesso!");

      // Redirecionar o user para a página /index
      Router.push("/dashboard");
    } catch (err) {
      toast.error("Erro ao acessar!");
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    // alert(name);
    const response = await api.post("/users", {
      name,
      email,
      password,
    });

    toast.success("Conta criada com sucesso!");

    try {
      Router.push("/auth");
    } catch (err) {
      toast.error("Erro ao cadastrar!");
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, carregando, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
