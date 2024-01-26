import { Container, Content } from "./styles";
import { Botao } from "../../components/Botao";
import { InputField } from "../../components/InputField";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/auth";
import { useState } from "react";

import imgSenha from "../../assets/olho-1.svg";
import imgSenha2 from "../../assets/olho-2.svg";

export function SignIn() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const { signIn, setLoading, loading } = useAuth();

  const [hasValue, setHasValue] = useState(false);
  const [maskActive, setMaskActive] = useState(true);
  const [hasFocusLogin, setHasFocusLogin] = useState(false);
  const [hasFocusPassword, setHasFocusPassword] = useState(false);

  const handleMask = () => {
    setMaskActive(!maskActive);
  };

  function handleSignIn() {
    if (!login) {
      return toast.warn("Preencha o campo de login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!password) {
      return toast.warn("Preencha o campo da senha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    signIn(login, password);
    setLoading(1);
  }
  return (
    <Container>
      <Content>
        <h1>Faça login</h1>
        <div className="container-input">
          <InputField
            title="Login"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            onFocus={() => setHasFocusLogin(true)}
            onBlur={() => setHasFocusLogin(false)}
          />
          <label
            className={`label ${login || hasFocusLogin ? "inputHasValue" : ""}`}
          >
            Login
          </label>
        </div>
        <div className="container-input">
          <InputField
            type={`${maskActive ? 'password' : 'text'}`}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setHasFocusPassword(true)}
            onBlur={() => setHasFocusPassword(false)}
          />
          <label
            className={`label ${
              password || hasFocusPassword ? "inputHasValue" : ""
            }`}
          >
            Senha
          </label>
          {maskActive == true ? (
            <img src={imgSenha} alt="Imagem Senha" onClick={handleMask} />
          ) : (
            <img src={imgSenha2} alt="Imagem Senha" onClick={handleMask} />
          )}
        </div>

        <a href="/">Esqueceu sua senha?</a>
        <Botao
          className="!py-2 text-sm mb-4 w-full"
          text="Entrar"
          type="button"
          onClick={handleSignIn}
        />
        <p>
          Não tem uma conta? <a href="/">Cadastre-se!</a>
        </p>
      </Content>
    </Container>
  );
}
