import { Button } from "./styles";


export function Botao({text,...rest}){

    return (
        <Button {...rest}>{text}</Button>
    );
}