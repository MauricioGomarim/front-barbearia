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
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";


export function Solicitacoes() {
  const { menuActive, setMenuActive, user } = useAuth();
  const [reservas, setReserva] = useState();
  const [handle, setHandle] = useState(0);
 
  async function fetchReservas() {

    const response = await api.get(`/reserva/reservas?status=Pendente&id=${user.id}`);
    setReserva(response.data)
}

async function handleAprovar(id) {
  try {
    await api.put(`/reserva/reservas/${id}`, {status: 'Aprovado'});
    setHandle(!handle)
    return toast.success("Reserva confirmada!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } catch (error) {
    if (error.response) {
      return toast.warning(error.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Erro ao confirmar reserva!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
 
}

async function handleReprovar(id) {
  try {
    await api.put(`/reserva/reservas/${id}`, {status: 'Reprovar'});
    setHandle(!handle)
    return toast.success("Reserva reprovada!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  } catch (error) {
    if (error.response) {
      return toast.warning(error.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Erro ao reprovar reserva!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
 
}


  useEffect(() => {
    fetchReservas();
  }, [handle, user])

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

              { reservas && reservas.map((reserva) => (
                <div className="flex px-8 header-tabela">
                  <div className="w-40 column-img flex items-center pl-0">
                    <h1>{reserva.user_name}</h1>
                  </div>
                  <div className="w-52 flex items-center">
                    <h1>{reserva.telefone}</h1>
                  </div>
                  <div class="w-72 flex items-center">
                    <h1>{reserva.id_services}</h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>{reserva.dia_reserva}/{reserva.mes_reserva}/{reserva.ano_reserva}</h1>
                  </div>
                  <div className="w-40 flex items-center">
                    <h1>R$ {reserva.valor}</h1>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-green" onClick={() => handleAprovar(reserva.id)}>
                      <FaCheck />
                    </i>
                  </div>
                  <div className="w-28 flex items-center">
                    <i className="icon-red" onClick={() => handleReprovar(reserva.id)}>
                      <MdBlock />
                    </i>
                  </div>
                </div>
              )) }
                
              </div>
            </div>
            {/* Serção desktop */}
            <div className="conteiner-servicos-mobile">
              {reservas && reservas.map((reserva) => (
                <div className="card-servico-mobile">
                <div className="content-servico">
                  <h1><span>Nome:</span> {reserva.user_id}</h1>
                  <p><span>Telefone:</span> {reserva.telefone}</p>
                  <p><span>Serviços:</span> {reserva.id_services}</p>
                  <div className="flex justify-between"><p><span>Valor:</span> R$ {reserva.valor}</p><p><span>Data:</span> {reserva.dia_reserva}/{reserva.mes_reserva}/{reserva.ano_reserva}</p></div>
                  
                </div>
                <div className="dots">
                  <img src={dots} />
                </div>
              </div>
              ))}
              
            </div>
          </Section>
        </div>
      </div>
    </Container>
  );
}
