/* eslint-disable react/prop-types */
import { CampoInput, Container } from "./styles";

export function InputField({ title,...rest }) {

  return (
    <Container>
      <CampoInput className="input" {...rest} />
    </Container>
  );
}
