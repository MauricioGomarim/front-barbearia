import { Container, Content } from "./styles";
import { Botao } from "../../components/Botao";
import { InputField } from "../../components/InputField";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgSenha from "../../assets/olho-1.svg";
import imgSenha2 from "../../assets/olho-2.svg";
import { api } from "../../services/api";

export function SignUp() {

  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  
  const [maskActivePassword, setMaskPasswordActive] = useState(true);
  const [maskActivePasswordConfirm, setMaskPasswordConfirmActive] =
    useState(true);

  const [hasFocusNome, setHasFocusNome] = useState(false);
  const [hasFocusEmail, setHasFocusEmail] = useState(false);
  const [hasFocusTel, setHasFocusTel] = useState(false);

  const [hasFocusPassword, setHasFocusPassword] = useState(false);
  const [hasFocusPasswordConfirm, setHasFocusPasswordConfirm] = useState(false);

  const handleMaskPassword = () => {
    setMaskPasswordActive(!maskActivePassword);
  };

  const handleMaskPasswordConfirm = () => {
    setMaskPasswordConfirmActive(!maskActivePasswordConfirm);
  };

  async function handleSignUp() {
    setLoading(true);

    if (!nome || !email || !tel || !password || !passwordConfirm) {
      setLoading(false);
      return toast.warn("Preencha todos os campos!", {
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

    if (password != passwordConfirm) {
      setLoading(false);
      return toast.warn("As senhas não coincidem!", {
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

    try {
      await api.post("/users", {
        name: nome,
        email,
        telefone: tel,
        password,
      });
      toast.success("Usuário cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        toast.warn(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      } else {
        toast.error("Erro ao cadastrar o cliente!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Content>
        <h1>Faça seu cadastro</h1>
        <div className="container-input">
          <InputField
            type="text"
            onChange={(e) => setNome(e.target.value)}
            onFocus={() => setHasFocusNome(true)}
            onBlur={() => setHasFocusNome(false)}
          />
          <label
            className={`label ${nome || hasFocusNome ? "inputHasValue" : ""}`}
          >
            Nome
          </label>
        </div>
        <div className="container-input">
          <InputField
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setHasFocusEmail(true)}
            onBlur={() => setHasFocusEmail(false)}
          />
          <label
            className={`label ${email || hasFocusEmail ? "inputHasValue" : ""}`}
          >
            Email
          </label>
        </div>
        <div className="container-input">
          <InputField
            mask="(00) 0 0000-0000"
            type="text"
            onChange={(e) => setTel(e.target.value)}
            onFocus={() => setHasFocusTel(true)}
            onBlur={() => setHasFocusTel(false)}
          />

          <label
            className={`label ${tel || hasFocusTel ? "inputHasValue" : ""}`}
          >
            Telefone
          </label>
        </div>
        <div className="container-input">
          <InputField
            type={`${maskActivePassword ? "password" : "text"}`}
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
          {maskActivePassword == true ? (
            <img
              src={imgSenha}
              alt="Imagem Senha"
              onClick={handleMaskPassword}
            />
          ) : (
            <img
              src={imgSenha2}
              alt="Imagem Senha"
              onClick={handleMaskPassword}
            />
          )}
        </div>
        <div className="container-input">
          <InputField
            type={`${maskActivePasswordConfirm ? "password" : "text"}`}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onFocus={() => setHasFocusPasswordConfirm(true)}
            onBlur={() => setHasFocusPasswordConfirm(false)}
          />
          <label
            className={`label ${
              passwordConfirm || hasFocusPasswordConfirm ? "inputHasValue" : ""
            }`}
          >
            Confirmar senha
          </label>
          {maskActivePasswordConfirm == true ? (
            <img
              src={imgSenha}
              alt="Imagem Senha"
              onClick={handleMaskPasswordConfirm}
            />
          ) : (
            <img
              src={imgSenha2}
              alt="Imagem Senha"
              onClick={handleMaskPasswordConfirm}
            />
          )}
        </div>
        <Botao
          className="!py-2 text-sm mb-4 w-full"
          text="Entrar"
          type="button"
          onClick={handleSignUp}
        />
        <p>
          Já tem uma conta? <a href="/login">Entrar!</a>
        </p>
      </Content>
    </Container>
  );
}
