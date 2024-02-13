import { Container, Section } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import imgService from "../../../assets/img2.jpg";

import { Input } from "../../../components/Input";
import { Botao } from "../../../components/Botao";
import { IoSearch } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";

import starOrange from "../../../assets/icones/star-orange.svg";
import dots from "../../../assets/icones/pontos.svg";

import { MdModeEdit } from "react-icons/md";

export function Solicitacoes() {
  const { menuActive, setMenuActive } = useAuth();

  return (
    <Container
      className="container-g"
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content">
        <div className="conteudo">
          <h1>Solicitacoes</h1>
          <Section>

            {/* Serção desktop */}
            <div className="header-servicos-tabela">
              <div class="flex px-8 header-tabela">
                <div class="w-40">
                  <h1>Nome do cliente</h1>
                </div>
                <div class="w-52">
                  <h1>Telefone</h1>
                </div>
                <div class="w-72">
                  <h1>Serviços</h1>
                </div>
                <div class="w-40">
                  <h1>Data</h1>
                </div>
                <div class="w-40">
                  <h1>Valor</h1>
                </div>
                <div class="w-28">
                  <h1>Aprovar</h1>
                </div>
                <div class="w-28">
                  <h1>Reprovar</h1>
                </div>
              </div>
            </div>

            <div className="servicos">
              <div className="linha-servicos-tabela">
                <div className="flex px-8 header-tabela">
                  <div className="w-40 column-img flex items-center pl-0">
                    <h1>José Mauricio Gomarim da Silva</h1>
                  </div>
                  <div className="w-52 flex items-center">
                    <h1>(17) 99211-8342</h1>
                  </div>
                  <div class="w-72 flex items-center">
                    <h1>Corte, pezinho, barba</h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>16/02/2024</h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>R$ 35,00</h1>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-green">
                      <FaCheck />
                    </i>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-red">
                      <MdBlock />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            {/* Serção desktop */}
            <div className="conteiner-servicos-mobile">
              <div className="card-servico-mobile">
                <div className="content-servico">
                  <h1><span>Nome:</span> José Mauricio Gomarim Da Silva</h1>
                  <p><span>Telefone:</span> (17) 99211-8342</p>
                  <p><span>Serviços:</span> Cortes para todos os tipos</p>
                  <div className="flex justify-between"><p><span>Valor:</span> R$ 35,00</p><p><span>Data:</span> 15/02/2024</p></div>
                  
                </div>
                <div className="dots">
                  <img src={dots} />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Container>
  );
}
