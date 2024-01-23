import { Container, Content } from "./style";
import circulo from "../../../assets/circulo.png";
import seta from "../../../assets/seta-esquerda.svg";
import star from "../../../assets/star.svg";
import service from "../../../assets/img2.jpg";
import { Botao2 } from "../../../components/Botao-bg-preto";
import { Botao } from "../../../components/Botao";
import { Link } from "react-router-dom";


export function Servicos() {
  return (
    <Container className="relative h-full">
      <div className="seta z-10 relative">
        <Link to="/">
          <img src={seta} />
        </Link>
      </div>
      <Content className="z-10 relative">
        <div className="select-profissional">
          <h1>Selecione o profissional desejado:</h1>
          <div className="profissionais">
            <div className="profissional">
              <img src={circulo} />
              <p>Nome profissional</p>
            </div>
            <div className="profissional">
              <img src={circulo} />
              <p>Nome profissional</p>
            </div>
          </div>
        </div>
      </Content>

      <Content className="z-10 relative">
        <div className="select-services">
          <h1>Selecione os serviços desejados:</h1>
          <div className="services">
            <div className="service">
              <img src={service} />
              <div className="infos">
                <h1>Corte</h1>
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>

                <div className="footer-card">
                  <div>
                    <p>Duração: 01:00h</p>
                    <p>R$ 30,00</p>
                  </div>
                  <Botao2 text="Selecionar" />
                </div>
              </div>
            </div>

            <div className="service">
              <img src={service} />
              <div className="infos">
                <h1>Corte</h1>
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>

                <div className="footer-card">
                  <div>
                    <p>Duração: 01:00h</p>
                    <p>R$ 30,00</p>
                  </div>
                  <Botao2 text="Selecionar" />
                </div>
              </div>
            </div>

            <div className="service">
              <img src={service} />
              <div className="infos">
                <h1>Corte</h1>
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>

                <div className="footer-card">
                  <div>
                    <p>Duração: 01:00h</p>
                    <p>R$ 30,00</p>
                  </div>
                  <Botao2 text="Selecionar" />
                </div>
              </div>
            </div>

            <div className="service">
              <img src={service} />
              <div className="infos">
                <h1>Corte</h1>
                <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>

                <div className="footer-card">
                  <div>
                    <p>Duração: 01:00h</p>
                    <p>R$ 30,00</p>
                  </div>
                  <Botao2 text="Selecionar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btnConfirmar">
          <Botao text="Confirmar" href="/datas" />
        </div>
      </Content>

      <div className="background z-0"></div>
    </Container>
  );
}
