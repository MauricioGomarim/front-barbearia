import { Container, Section } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import imgService from "../../../assets/img2.jpg";

import { Input } from "../../../components/Input";
import { Botao } from "../../../components/Botao";
import { IoSearch } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

import starOrange from "../../../assets/icones/star-orange.svg";
import dots from "../../../assets/icones/pontos.svg";


import { MdModeEdit } from "react-icons/md";

export function ServicosPainel() {
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
          <h1>Serviços</h1>
          <Section>
            <div className="header-servicos">
              <Botao text="Adicionar serviço" className="flex" />
              <div class="w-full sm:w-2/6 flex gap-4">
                <Input placeholder="Buscar" />
                <i className="icon-search">
                  <IoSearch />
                </i>
              </div>
            </div>

            {/* Serção desktop */}
            <div className="header-servicos-tabela">
              <div class="flex px-8 header-tabela">
                <div class="w-40">
                  <h1>Imagem</h1>
                </div>
                <div class="w-52">
                  <h1>Nome</h1>
                </div>
                <div class="w-72">
                  <h1>Descrição</h1>
                </div>
                <div class="w-40">
                  <h1>Estrelas</h1>
                </div>
                <div class="w-40">
                  <h1>Valor</h1>
                </div>
                <div class="w-28">
                  <h1>Editar</h1>
                </div>
                <div class="w-28">
                  <h1>Excluir</h1>
                </div>
              </div>
            </div>

            <div className="servicos">
              <div className="linha-servicos-tabela">
                <div className="flex px-8 header-tabela">
                  <div className="w-40 column-img flex items-center pl-0">
                    <img src={imgService} />
                  </div>
                  <div className="w-52 flex items-center">
                    <h1>Corte</h1>
                  </div>
                  <div class="w-72 flex items-center">
                    <h1 class="whitespace-nowrap overflow-hidden overflow-ellipsis w-52">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Est vero at quae, obcaecati repudiandae ducimus maiores
                      iusto soluta numquam architecto exercitationem vitae
                      placeat voluptates debitis ipsa, suscipit ab sed eius?
                    </h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>4</h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>R$ 35,00</h1>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-orange">
                      <MdModeEdit />
                    </i>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-red">
                      <FaTrashAlt />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            {/* Serção desktop */}
            <div className="conteiner-servicos-mobile">
              <div className="card-servico-mobile">
                <div className="img-servico">
                  <img src={imgService} />
                </div>
                <div className="content-servico">
                  <h1>Corte</h1>
                  <div className="stars">
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                  </div>
                  <p className="whitespace-nowrap overflow-hidden overflow-ellipsis w-42">Cortes para todos os tipos</p>
                  <p>Valor: R$ 35,00</p>
                </div>
                <div className="dots"><img src={dots} /></div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </Container>
  );
}
