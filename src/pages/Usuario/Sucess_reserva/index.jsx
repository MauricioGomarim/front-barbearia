import { Container } from "./style"
import img from "../../../assets/sucess.svg"
import { Link } from "react-router-dom"
import { Botao } from "../../../components/Botao";

export function Sucess_reserva(){
    return (
        <Container>
            <img src={img} />
            <h1>Reserva realizada com sucesso!</h1>
            <p>Sua reserva foi solicitada, acompanhe o status clicando <Link to="/solicitacoes-painel">aqui</Link> ou verifique seu whatsapp!</p>
            <Link to="/" className="botao">Voltar para home</Link>
        </Container>
    )
}