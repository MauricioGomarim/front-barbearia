import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <Container>
      <Content>
        <img src={logo} />
      </Content>
    </Container>
  );
}
