import { Container, Content } from "./style";
import { Botao } from "../../components/Botao";

import barberpool from "../../assets/babershop.png";


import image from "../../assets/image-sec1.png";

export function Home() {
  return (
    <Container>
      <Content>
        <div className="sec1 h-full flex justify-center items-center">
          <div className="w-4/5 z-10 relative mx-auto my-0 flex justify-center items-center flex-wrap">
            <div className="font-bold text-5xl w-4/5  sm:w-2/4 column-text">
              <h1 className="text-center text-3xl sm:text-5xl sm:text-left mb-5">
                FAÇA SEU AGENDAMENTO AGORA MESMO !
              </h1>
              <Botao text="Fazer reserva" className="flex max-w-80 text-3xl mb-5" href="/servicos"/>
            </div>
            <div className="w-4/5  sm:w-2/4">
              <img src={image} />
            </div>
          </div>
          <div className="background z-0"></div>
        </div>

        <div className="sec2 h-full">
          <h1>Horários</h1>
          <div className="tabela-horarios">
            <div className="row-tabela"><h4>Segunda:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Terça:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Quarta:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Quinta:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Sexta:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Sabado:</h4><h4>08:000 - 18:00</h4></div>
            <div className="row-tabela"><h4>Domingo:</h4><h4>08:000 - 18:00</h4></div>
            <img className="img-barbearia-objeto" src={barberpool} />

          </div>
        </div>
      </Content>
    </Container>
  );
}
