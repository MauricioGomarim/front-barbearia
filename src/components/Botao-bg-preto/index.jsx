import { Button } from "./styles";


export function Botao2({text,...rest}){

    return (
        <Button {...rest}>{text}</Button>
    );
}