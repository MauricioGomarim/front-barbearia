import { Container } from "./styles";
import { IMaskInput } from "react-imask";

export function Input({ title,mask, value, ...rest}) {
  return (
    <Container>
      <label>
        {title}
        <IMaskInput mask={mask} {...rest} value={value || ""} />
      </label>
    </Container>
  );
}
