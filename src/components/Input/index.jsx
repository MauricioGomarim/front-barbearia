import { Container } from "./styles";

export function Input({ title, ...rest}) {
  return (
    <Container>
      <label>
        {title}
        <input {...rest}/>
      </label>
    </Container>
  );
}
