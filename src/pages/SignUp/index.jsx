import { Container, Content } from "./styles";
import { Botao } from "../../components/Botao";
import { InputField } from "../../components/InputField";


export function SignUp() {
  return (
    <Container>
      <Content>
        <h1>Faça seu cadastro</h1>
        <InputField title="Login" type="text"  />
        <InputField title="Email" type="email"  />
        <InputField title="Senha" type="password" tipoCampo="senha"/>
        <InputField title="Confirmar senha" type="password" tipoCampo="senha"/>

        <Botao className="!py-2 text-sm mb-4" text="Confirmar" type="text"/>
        <a href="/">Já tem uma conta?</a>
      </Content>
    </Container>
  );
}
