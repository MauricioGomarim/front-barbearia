import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(0);

  async function signIn(login, password) {
    try {
      const response = await api.post("/sessions", { name: login, password });

      const { user, token } = response.data;

      localStorage.setItem("@sistema-barbearia:user", JSON.stringify(user));
      localStorage.setItem("@sistema-barbearia:token", token);

      setData({ user, token });

      // Adicionando o token do tipo bearer de authorization por padrão de todas requisições
      api.defaults.headers.authorization = `Bearer ${token}`;
      setLoading(0);
      window.location.href = "/";
      
    } catch (error) {
      if (error.response) {
        setLoading(0);
        return toast.warn("Login ou senha incorretos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setLoading(0);
        return toast.error(
          "Não foi possível fazer o login, tente novamente mais tarde!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    }
  }

  function Logout() {
    localStorage.removeItem("@sistema-barbearia:token");
    localStorage.removeItem("@sistema-barbearia:user");
    setData({});
    return;
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
      value={{ signIn, user: data.user, Logout, setLoading, loading }}
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
