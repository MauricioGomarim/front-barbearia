import { Container, Content } from "./style";
import seta from "../../../assets/seta-esquerda.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Botao } from "../../../components/Botao";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hook/auth";
import { toast } from "react-toastify";
import { api } from "../../../services/api";



export function Datas() {
  const [dias, setDias] = useState([]);

  const { servicesSelectedHook, user, barbeiro } = useAuth();
  const [activeIndex, setActiveIndex] = useState(null);
  const [diaSelecionado, setDiaSelected] = useState();
  const [reservasExistentes, setReservasExistentes] = useState(dias[0]);




  const handleSlideClick = (data) => {
    // Atualiza o estado para o índice clicado
    setActiveIndex(data.id);
    setDiaSelected(data);
    serchHorarioReservado(data)
  };

  async function serchHorarioReservado(dataSelecionada) {

    try {
      const response = await api.get(`/reserva/search?dia=${dataSelecionada.dia}&mes=${dataSelecionada.nomeMes}`);
      setReservasExistentes(response.data)

      return
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
        toast.error("Erro ao criar serviço!", {
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


  async function confirmReserva(horario) {


    const services = servicesSelectedHook.map((service) => {
      return service.id
    })
    const data_hora_reserva = `${diaSelecionado.dia}/${diaSelecionado.nomeMes} - ${horario}`


    try {
      await api.post(`/reserva`, {
        user_id: user.id,
        id_barbeiro_select: barbeiro,
        id_services: services,
        data_hora_reserva,
        
      });
      return toast.success("Serviço adicionado com sucesso!", {
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
        toast.error("Erro ao criar serviço!", {
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
 

  const horariosSemana = {
    segunda: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
      horario6: "13:00",
      horario7: "14:00",
      horario8: "15:00",
      horario9: "18:00",
    },
    terca: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
      horario6: "13:00",
      horario7: "14:00",
      horario8: "15:00",
      horario9: "18:00",
    },
    quarta: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
      horario6: "13:00",
      horario7: "14:00",
      horario8: "15:00",
      horario9: "18:00",
    },
    quinta: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
      horario6: "13:00",
      horario7: "14:00",
      horario8: "15:00",
      horario9: "18:00",
    },
    sexta: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
      horario6: "13:00",
      horario7: "14:00",
      horario8: "15:00",
      horario9: "18:00",
    },
  };
  const horariosFinalDeSemana = {
    sábado: {
      horario1: "08:00",
      horario2: "09:00",
      horario3: "10:00",
      horario4: "11:00",
      horario5: "12:00",
    },
  };

  const diaSemanaCorrigido = diaSelecionado?.diaDaSemana?.replace(/ç/g, "c");
  const horariosDiaSelecionadoSemana = diaSemanaCorrigido
    ? horariosSemana[diaSemanaCorrigido.toLowerCase()]
    : [];
  const horariosDiaSelecionadoSabado =
    horariosFinalDeSemana[diaSelecionado?.diaDaSemana.toLowerCase()];

  useEffect(() => {
    const hoje = new Date();
    const trintaDias = [];

    for (let i = 0; i < 30; i++) {
      const dia = addDays(hoje, i);
      const formatoDia = format(dia, "dd", { locale: ptBR });
      const nomeMes = format(dia, "MMMM", { locale: ptBR });
      const diaDaSemana = format(dia, "eee", { locale: ptBR });
      trintaDias.push({ dia: formatoDia, nomeMes, diaDaSemana, id: i });
    }

    const dia = hoje;
    const formatoDia = format(dia, "dd", { locale: ptBR });
    const nomeMes = format(dia, "MMMM", { locale: ptBR });
    const diaDaSemana = format(dia, "eee", { locale: ptBR });

    const diaInicialValue = {
      dia: formatoDia,
      nomeMes: nomeMes,
      diaDaSemana: diaDaSemana,
    };
    setDiaSelected(diaInicialValue);

    setDias(trintaDias);

  }, []);

  useEffect(() => {
    if (dias.length > 0) {
      serchHorarioReservado(dias[0]);
    }
  }, [dias]);

  return (
    <Container className="relative h-full">
      <div className="seta z-10 relative">
        <Link to="/servicos">
          <img src={seta} />
        </Link>
      </div>
      <Content className="z-10 relative">
        <div className="select-data">
          <h1>Selecione o dia e hórario desejado:</h1>
          <div className="relative">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <Swiper
              className="mySwiper"
              modules={[Navigation]}
              spaceBetween={30}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 10,
                  spaceBetween: 20,
                },
              }}
              onSwiper={(swiper) => ''}
              onSlideChange={() => console.log("slide change")}
            >
              {dias.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className={`data ${
                    activeIndex === index ||
                    (index === 0 && activeIndex === null)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSlideClick(item)}
                >
                  <h2>{item.dia}</h2>
                  <p>{item.diaDaSemana}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="horarios">
            {diaSelecionado &&
              (diaSelecionado.diaDaSemana.toLowerCase() === "sábado" ? (
                horariosDiaSelecionadoSabado &&
                Object.entries(horariosDiaSelecionadoSabado).map((horario) => (
                  <div className="horario" key={horario[0]}>
                    <p>{horario[1]}</p>
                    <Botao text="Confirmar" onClick={() => confirmReserva(horario[1])}/>
                  </div>
                ))
              ) : diaSelecionado.diaDaSemana.toLowerCase() === "domingo" ? (
                <div className="horario">
                  <p>Nenhum horario para domingo!</p>
                </div>
              ) : (
                horariosDiaSelecionadoSemana &&
                Object.entries(horariosDiaSelecionadoSemana).map((horario) => (
                  <div className="horario" key={horario[0]}>
                    <p>{horario[1]}</p>
                    <Botao text="Confirmar" onClick={() => confirmReserva(horario[1])}/>
                  </div>
                ))
              ))}
          </div>
        </div>
      </Content>
      <div className="background z-0"></div>
    </Container>
  );
}
