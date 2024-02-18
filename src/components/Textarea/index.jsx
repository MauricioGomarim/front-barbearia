import { Container } from "./styles";

export function Textarea({ title, ...rest}) {
  return (
    <Container>
      <label>
        {title}
        <textarea rows="5" {...rest} />
      </label>
    </Container>
  );
}
