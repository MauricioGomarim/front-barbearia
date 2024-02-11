import { Container } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";


export function Perfil() {
  const { menuActive, setMenuActive } = useAuth();

  return (
    <Container
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content">
       teste
      </div>
    </Container>
  );
}
