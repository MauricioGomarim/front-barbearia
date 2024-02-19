import { Container } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import imgPerfil from "../../../assets/img-perfil.png";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { Botao } from "../../../components/Botao";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useState, useEffect } from "react";

export function Perfil() {
  const { menuActive, setMenuActive, user, Logout } = useAuth();

  const [name, setName] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [insta, setInsta] = useState();
  const [face, setFace] = useState();
  const [descricao, setDescricao] = useState();
  const [password, setPassword] = useState();
  const [old_password, setOldPassword] = useState();

  async function handleEditar() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(descricao)
    // Verifica se o email é válido
    if (!email || !emailPattern.test(email)) {
      return toast.warning('Insira um email válido!', {
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
    try {
      await api.put(`/users/${user.id}`, {
        name,
        telefone,
        email,
        password,
        old_password,
        insta,
        face,
        descricao,
      });
      return toast.success("Perfil editado com sucesso!", {
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
        return toast.warning(error.response.data.message, {
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
        toast.error("Erro ao editada essa marca!", {
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
    }
  }

  useEffect(() => {
    async function fetchDados() {
      try {
        const response = await api.get(`/users/${user.id}`);

        setName(response.data.name);
        setTelefone(response.data.telefone);
        setEmail(response.data.email);
        setInsta(response.data.insta);
        setFace(response.data.face);
        setDescricao(response.data.descricao);
      } catch {
        
       Logout()
      }
    }
    fetchDados();
  }, []);

  return (
    <Container
      className="container-g"
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content">
        <div className="conteudo">
          <h1>Meu perfil</h1>

          <div className="formulario">
            <div className="foto-perfil">
              <img src={imgPerfil} alt="" />
            </div>

            <form className="!grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <Input
                  title="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  title="Telefone"
                  onChange={(e) => setTelefone(e.target.value)}
                  value={telefone}
                  mask="(00) 0 0000-0000"
                />
              </div>
              <div className="col-span-2">
                <Input
                  title="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  title="Link Instagram"
                  onChange={(e) => setInsta(e.target.value)}
                  value={insta}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  title="Link Facebook"
                  onChange={(e) => setFace(e.target.value)}
                  value={face}
                />
              </div>

              <div className="col-span-2">
                <Textarea
                  title="Descrição"
                  onChange={(e) => setDescricao(e.target.value)}
                  value={descricao}
                  className="border-none"
                />
              </div>
              <div className="botao col-span-2">
                <Botao text="Salvar" onClick={handleEditar} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
