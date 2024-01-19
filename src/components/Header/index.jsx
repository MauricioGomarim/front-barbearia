import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
import perfil from "../../assets/Vector.svg";
import { Hamburguer } from "../Hamburguer/index.jsx";

export function Header() {
  return (
    <Container>
      <Content>
        <Hamburguer/>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav-user">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
          </nav>
          <img src={perfil} />
        </div>
      </Content>
    </Container>
  );
}
