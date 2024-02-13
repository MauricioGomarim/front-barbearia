import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(0);
  const [menuActive, setMenuActive] = useState(false)

  async function signIn(login, password) {

    try {
      const response = await api.post("/sessions", { email: login, password });

      const { user, token } = response.data;

      localStorage.setItem("@sistema-barbearia:user", JSON.stringify(user));
      localStorage.setItem("@sistema-barbearia:token", token);

      setData({ user, token });

      // Adicionando o token do tipo bearer de authorization por padrão de todas requisições
      api.defaults.headers.authorization = `Bearer ${token}`;
      setLoading(0);
      return toast.success("Logado por sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      
      
    } catch (error) {
      if (error.response) {
        setLoading(0);
        return toast.warn("Login ou senha incorretos!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        setLoading(0);
        return toast.error(
          "Não foi possível fazer o login, tente novamente mais tarde!",
          {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    }
  }

  function Logout() {
    localStorage.removeItem("@sistema-barbearia:token");
    localStorage.removeItem("@sistema-barbearia:user");
    setData({});
    return toast.success("Sessão encerrada..", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    const token = localStorage.getItem("@sistema-barbearia:token");
    const user = localStorage.getItem("@sistema-barbearia:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, user: data.user, Logout, setLoading, loading, setMenuActive, menuActive }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
