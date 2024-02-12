import { api } from "../../services/api";

import { Container, Content } from "./style";
import { Botao } from "../../components/Botao";
import { InputField } from "../../components/InputField";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/auth";
import { useState, useEffect } from "react";

import seta from "../../assets/seta-esquerda.svg";
import { Link, useNavigate } from "react-router-dom";

import imgSenha from "../../assets/olho-1.svg";
import imgSenha2 from "../../assets/olho-2.svg";
import imgPerfil from "../../assets/img-perfil.png";

export function Dados() {

  const [data, setData] = useState();


  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [password, setPassword] = useState();
  const [passwordOld, setPasswordOld] = useState();
  const navigate = useNavigate();


  const { setLoading, loading, user } = useAuth();

  const [hasFocusEmail, setHasFocusEmail] = useState(false);
  const [hasFocusTel, setHasFocusTel] = useState(false);

  const [maskActivePassword, setMaskPasswordActive] = useState(true);
  const [maskActivePasswordOld, setMaskPasswordOldActive] =
    useState(true);

  const [hasFocusPassword, setHasFocusPassword] = useState(false);
  const [hasFocusPasswordOld, setHasFocusPasswordOld] = useState(false);

  const handleMaskPassword = () => {
    setMaskPasswordActive(!maskActivePassword);
  };

  const handleMaskPasswordOld = () => {
    setMaskPasswordOldActive(!maskActivePasswordOld);
  };



  async function handleEditar() {
    setLoading(true)
    try {
      
      await api.put(`/users/${user.id}`, { email, telefone: tel, password, old_password: passwordOld });

      toast.success("Usuário atualizado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setLoading(false)
      navigate("/dados")
      
    } catch (error) {
      if (error.response) {

        toast.warning(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setLoading(false)
          return
      } else {
        toast.warning("Erro ao editadar usuário!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setLoading(false)
      }
    }
  }


  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${user.id}`);
      setEmail(response.data.email)
      setTel(response.data.telefone)

    }
    fetchUser();
  }, []);

  return (
    <Container>
      <div className="seta z-10 relative">
        <Link to="/">
          <img src={seta} />
        </Link>
      </div>
      <Content>
        <img className="img-perfil" src={imgPerfil} />
        <div className="container-input">
          <InputField
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setHasFocusEmail(true)}
            onBlur={() => setHasFocusEmail(false)}
            value={email}
          />
          <label
            className={`label ${email || hasFocusEmail ? "inputHasValue" : ""}`}
          >
            Email
          </label>
        </div>

        <div className="container-input">
          <InputField
            type="text"
            onChange={(e) => setTel(e.target.value)}
            onFocus={() => setHasFocusTel(true)}
            onBlur={() => setHasFocusTel(false)}
            value={tel}
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
            Senha nova
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
            type={`${maskActivePasswordOld ? "password" : "text"}`}
            onChange={(e) => setPasswordOld(e.target.value)}
            onFocus={() => setHasFocusPasswordOld(true)}
            onBlur={() => setHasFocusPasswordOld(false)}
          />
          <label
            className={`label ${
              passwordOld || hasFocusPasswordOld ? "inputHasValue" : ""
            }`}
          >
            Senha antiga
          </label>
          {maskActivePasswordOld == true ? (
            <img
              src={imgSenha}
              alt="Imagem Senha"
              onClick={handleMaskPasswordOld}
            />
          ) : (
            <img
              src={imgSenha2}
              alt="Imagem Senha"
              onClick={handleMaskPasswordOld}
            />
          )}
        </div>
        <Botao
          className="!py-2 text-sm mb-4 w-full"
          text="Salvar"
          type="button"
          onClick={handleEditar}
        />
      </Content>
    </Container>
  );
}
