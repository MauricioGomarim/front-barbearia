import { Container } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import imgPerfil from "../../../assets/img-perfil.png";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { Botao } from "../../../components/Botao";

export function Perfil() {
  const { menuActive, setMenuActive } = useAuth();

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

            <form class="!grid grid-cols-2 gap-4">
              <div class="col-span-2 sm:col-span-1">
                <Input title="Nome" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Input title="Telefone" />
              </div>
              <div class="col-span-2">
                <Input title="Email" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Input title="Link Instagram" />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <Input title="Link Facebook" />
              </div>

              <div class="col-span-2">
                <Textarea title="Descrição" />
              </div>
              <div className="botao col-span-2">
              <Botao text="Confirmar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
