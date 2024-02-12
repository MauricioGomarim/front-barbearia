import { Container } from "./styles";

export function Textarea({ title}) {
  return (
    <Container>
      <label>
        {title}
        <textarea rows="5" />
      </label>
    </Container>
  );
}
