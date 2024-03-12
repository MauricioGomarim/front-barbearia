import { Container, Content } from "./style";
import seta from "../../../assets/seta-esquerda.svg";
import { InputField } from "../../../components/InputField";
import imgSenha from "../../../assets/olho-1.svg";
import imgSenha2 from "../../../assets/olho-2.svg";
import { useNavigate } from "react-router-dom";
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

import Zoom from "@mui/material/Zoom";

import { Modal } from "flowbite-react";

export function Datas() {
  const [dias, setDias] = useState([]);
  const { servicesSelectedHook, user, barbeiro } = useAuth();
  const [activeIndex, setActiveIndex] = useState(null);
  const [diaSelecionado, setDiaSelected] = useState();
  const [reservasExistentes, setReservasExistentes] = useState([]);

  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalConfirmReserva, setOpenModalConfirmReserva] = useState(false);

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const { signIn, setLoading, loading } = useAuth();

  const [hasValue, setHasValue] = useState(false);
  const [maskActive, setMaskActive] = useState(true);
  const [hasFocusLogin, setHasFocusLogin] = useState(false);
  const [hasFocusPassword, setHasFocusPassword] = useState(false);

  const [horaSelected, setHoraSelected] = useState();

  
  const navigate = useNavigate();

  function onCloseModalLogin() {
    setOpenModalLogin(false);
    setEmail("");
  }

  function onCloseModalConfirmReserva() {
    setOpenModalConfirmReserva(false);
  }

  const handleMask = () => {
    setMaskActive(!maskActive);
  };

  function handleSignIn() {
    if (!login) {
      return toast.warn("Preencha o campo de login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (!password) {
      return toast.warn("Preencha o campo da senha!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const retorno = signIn(login, password);

    retorno.then((result) => {
      if (result.success) {
        setOpenModal(false);
      }
    });
    setLoading(1);
  }

  const handleSlideClick = (data) => {
    // Atualiza o estado para o índice clicado
    setActiveIndex(data.id);
    setDiaSelected(data);
    serchHorarioReservado(data);
  };

  async function serchHorarioReservado(dataSelecionada) {
    try {
      const response = await api.get(
        `/reserva/search?dia=${dataSelecionada.dia}&mes=${dataSelecionada.nomeMes}&ano=${dataSelecionada.ano}`
      );
      setReservasExistentes(response.data);

      return;
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

  function confirmReserva(horario) {
    if (!user) {
      return setOpenModalLogin(true);
    } else {
      setHoraSelected(horario);
      return setOpenModalConfirmReserva(true);
    }
  }

  async function createReserva(horario) {
    const services = servicesSelectedHook.map((service) => {
      return service.id;
    });

    const valor = servicesSelectedHook.reduce((accumulator, currentValue) => accumulator + Number(currentValue.valor), 0);
    try {
      await api.post(`/reserva`, {
        user_id: user.id,
        id_barbeiro_select: barbeiro,
        id_services: services,
        dia_reserva: diaSelecionado.dia,
        mes_reserva: diaSelecionado.nomeMes,
        hora_reserva: horario,
        ano_reserva: diaSelecionado.ano,
        valor
      });

      navigate('/sucess')
      return serchHorarioReservado(diaSelecionado);
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
      const ano = format(dia, "yyyy", { locale: ptBR });

      trintaDias.push({
        dia: formatoDia,
        nomeMes,
        diaDaSemana,
        ano: ano,
        id: i,
      });
    }

    const dia = hoje;
    const formatoDia = format(dia, "dd", { locale: ptBR });
    const nomeMes = format(dia, "MMMM", { locale: ptBR });
    const diaDaSemana = format(dia, "eee", { locale: ptBR });
    const ano = format(dia, "yyyy", { locale: ptBR });

    const diaInicialValue = {
      dia: formatoDia,
      nomeMes: nomeMes,
      diaDaSemana: diaDaSemana,
      ano: ano,
    };
    setDiaSelected(diaInicialValue);

    setDias(trintaDias);
  }, []);

  useEffect(() => {
    if (dias.length > 0) {
      serchHorarioReservado(diaSelecionado);
    }
  }, [diaSelecionado]);

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
              onSwiper={(swiper) => ""}
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
                Object.entries(horariosDiaSelecionadoSabado).map((horario) => {
                  // Verificar se o horário atual está reservado para o dia e mês selecionados
                  const horarioReservado = reservasExistentes.some(
                    (reserva) =>
                      reserva.hora_reserva === horario[1] &&
                      reserva.dia_reserva === diaSelecionado.dia &&
                      reserva.mes_reserva === diaSelecionado.nomeMes
                  );
                  return (
                    <>
                      {horarioReservado ? (
                        <div
                          className="horario botao-reservado"
                          key={horario[0]}
                        >
                          <p>{horario[1]}</p>
                          <Botao
                            text="Reservado"
                            className="!bg-stone-950 !text-slate-300"
                            disabled
                            onClick={() => confirmReserva(horario[1])}
                          />
                        </div>
                      ) : (
                        <div className="horario" key={horario[0]}>
                          <p>{horario[1]}</p>
                          <Botao
                            text="Confirmar"
                            onClick={() => confirmReserva(horario[1])}
                          />
                        </div>
                      )}
                    </>
                  );
                })
              ) : diaSelecionado.diaDaSemana.toLowerCase() === "domingo" ? (
                <div className="horario">
                  <p>Nenhum horário disponível para domingo!</p>
                </div>
              ) : (
                horariosDiaSelecionadoSemana &&
                Object.entries(horariosDiaSelecionadoSemana).map((horario) => {
                  // Verificar se o horário atual está reservado para o dia e mês selecionados
                  const horarioReservado = reservasExistentes.some(
                    (reserva) =>
                      reserva.hora_reserva === horario[1] &&
                      reserva.dia_reserva === diaSelecionado.dia &&
                      reserva.mes_reserva === diaSelecionado.nomeMes
                  );
                  return (
                    <>
                      {horarioReservado ? (
                        <div
                          className="horario botao-reservado"
                          key={horario[0]}
                        >
                          <p>{horario[1]}</p>
                          <Botao
                            text="Reservado"
                            className="!bg-stone-950 !text-slate-300"
                            disabled
                            onClick={() => confirmReserva(horario[1])}
                          />
                        </div>
                      ) : (
                        <div className="horario" key={horario[0]}>
                          <p>{horario[1]}</p>
                          <Botao
                            text="Confirmar"
                            onClick={() => confirmReserva(horario[1])}
                          />
                        </div>
                      )}
                    </>
                  );
                })
              ))}
          </div>
        </div>

        <Modal
          show={openModalLogin}
          size="md"
          onClose={onCloseModalLogin}
          popup
        >
          <Modal.Body className="container-login ">
            <Modal.Header />

            <h1>Faça login</h1>
            <div className="container-input">
              <InputField
                type="text"
                onChange={(e) => setLogin(e.target.value)}
                onFocus={() => setHasFocusLogin(true)}
                onBlur={() => setHasFocusLogin(false)}
              />
              <label
                className={`label ${
                  login || hasFocusLogin ? "inputHasValue" : ""
                }`}
              >
                Email
              </label>
            </div>
            <div className="container-input">
              <InputField
                type={`${maskActive ? "password" : "text"}`}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setHasFocusPassword(true)}
                onBlur={() => setHasFocusPassword(false)}
              />
              <label
                className={`label ${
                  password || hasFocusPassword ? "inputHasValue" : ""
                }`}
              >
                Senha
              </label>
              {maskActive == true ? (
                <img src={imgSenha} alt="Imagem Senha" onClick={handleMask} />
              ) : (
                <img src={imgSenha2} alt="Imagem Senha" onClick={handleMask} />
              )}
            </div>

            <a href="/">Esqueceu sua senha?</a>
            <Botao
              className="!py-2 text-sm mb-4 w-full"
              text="Entrar"
              type="button"
              onClick={handleSignIn}
            />
            <p>
              Não tem uma conta? <a href="/register">Cadastre-se!</a>
            </p>
          </Modal.Body>
        </Modal>

        <Modal
          show={openModalConfirmReserva}
          size="md"
          onClose={onCloseModalConfirmReserva}
          popup
        >
          <Modal.Body className="container-login ">
            <Modal.Header />

            <h1 className="!text-center">Deseja finalizar sua reserva?</h1>
             <div className="flex justify-between gap-6">
              <div className="w-full"> <Botao
              className="!py-2 text-sm mb-4 w-full"
              text="Recusar"
              type="button"
              onClick={() => setOpenModalConfirmReserva(false)}
            /></div>
            
            <div className="w-full"><Botao
              className="!py-2 text-sm mb-4 w-full"
              text="Aceitar"
              type="button"
              onClick={() => createReserva(horaSelected)}
            /></div>

            
             </div>
            
          </Modal.Body>
        </Modal>
      </Content>
      <div className="background z-0"></div>
    </Container>
  );
}
