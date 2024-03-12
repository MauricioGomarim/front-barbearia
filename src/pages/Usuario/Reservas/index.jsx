import { Container, Content, Table } from "./style";
import seta from "../../../assets/seta-esquerda.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hook/auth";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export function Reservas() {
  const { user } = useAuth();
  const [reservas, setReservas] = useState();

  console.log(reservas);

  function formatReal(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  function format12HourTime(timeString) {
    const [hour, minute] = timeString.split(':');
    const twelveHour = parseInt(hour, 10) % 12 || 12;
    const amOrPm = parseInt(hour, 10) >= 12 ? 'PM' : 'AM';
  
    return `${twelveHour}:${minute} ${amOrPm}`;
  }

  useEffect(() => {
    async function searchReservas() {
      const response = await api.get(`reserva/reservas/${user.id}`);
      setReservas(response.data);
    }

    searchReservas();
  }, []);

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
              {reservas &&
                reservas.map((reserva) => (
                  <tr>
                    <td>Corte, Barba, Sombrancelha</td>
                    <td>{reserva.dia_reserva}/{reserva.mes_reserva}/{reserva.ano_reserva}</td>
                    <td>{format12HourTime(reserva.hora_reserva)}</td>
                    <td>{formatReal(reserva.valor)}</td>
                    <td className={`${reserva.status}`}>{reserva.status}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Content>
      <div className="background z-0"></div>
    </Container>
  );
}
