import { Container, Content, Table } from "./style";
import seta from "../../../assets/seta-esquerda.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hook/auth";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Reservas() {

  const { user } = useAuth();
  const [reservas, setReservas] = useState();

  console.log(reservas)

  useEffect(() => {
      async function searchReservas(){
        const response = await api.get(`reserva/reservas/${user.id}`)
        setReservas(response.data)
      }

      searchReservas()
  }, [])

  return (
    <Container className="relative h-full">
      <div className="seta z-10 relative">
        <Link to="/">
          <img src={seta} />
        </Link>
      </div>
      <Content className="z-10 relative">
        <div className="reservas">
          <h1>Minhas reservas:</h1>

          <Table>
            <thead>
              <tr>
                <td className="services-column">Serviços</td>
                <td className="datas-column">Data</td>
                <td className="horas-column">Hora</td>
                <td className="valor-column">Valor</td>
                <td className="status-column">Status de agendamento</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corte, Barba, Sombrancelha</td>
                <td>14/01/2024</td>
                <td>PM 10:30</td>
                <td>R$ 42,00</td>
                <td className="processando">Processando</td>
              </tr>

              <tr>
                <td>Corte, Barba, Sombrancelha</td>
                <td>14/01/2024</td>
                <td>PM 10:30</td>
                <td>R$ 42,00</td>
                <td className="recusado">Recusado</td>
              </tr>

              <tr>
                <td>Corte, Barba, Sombrancelha</td>
                <td>14/01/2024</td>
                <td>PM 10:30</td>
                <td>R$ 42,00</td>
                <td className="aprovado">Aprovado</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Content>
      <div className="background z-0"></div>
    </Container>
  );
}
