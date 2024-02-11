import { Container } from "./styles";
import { HamburguerPainel } from "../HamburguerPainel";
import dashboard from "../../assets/icones/painel-de-controle.svg";
import perfil from "../../assets/icones/homem.svg";
import servicos from "../../assets/icones/servico-tecnico.svg";
import solicitacoes from "../../assets/icones/pendencia.svg";
import agendamentos from "../../assets/icones/calendario.svg";
import deslogar from "../../assets/icones/deslogar.svg";


import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

export function Menu() {
  return (
    <Container>
      <HamburguerPainel />
    
        <ul>
          <li>
            <NavLink to="/dashboard-painel">
              <img src={dashboard} />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil-barbeiro">
              <img src={perfil} />
              <p>Meu perfil</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicos-painel">
              <img src={servicos} />
              <p>Serviços</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/solicitacoes-painel">
              <img src={solicitacoes} />
              <p>Solicitações</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/agendamentos-painel">
              <img src={agendamentos} />
              <p>Agendamentos</p>
            </NavLink>
          </li>
        </ul>
     

      <ul className="logout">
          <li>
            <button>
              <img src={deslogar} />
              <p>Deslogar</p>
            </button>
          </li>
          </ul>
    </Container>
  );
}
