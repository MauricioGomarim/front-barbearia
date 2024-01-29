/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { IMaskInput } from "react-imask";

export function InputField({ title, mask, ...rest }) {

  return (
    <Container>
      <IMaskInput mask={mask} className="input" {...rest} />
    </Container>
  );
}
