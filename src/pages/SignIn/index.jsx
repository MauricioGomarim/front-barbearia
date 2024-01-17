import { Container, Content } from "./styles";
import { Botao } from "../../components/Botao";

export function SignIn() {
  return (
    <Container>
      <Content>
        <h1 className="text-3xl font-medium">Faça login</h1>
        <Botao />
        <Botao />
        <Botao />
        <Botao />
        <Botao />
        <Botao />
        <Botao />

      </Content>
    </Container>
  );
}
