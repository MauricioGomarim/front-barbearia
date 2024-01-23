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

export function Datas() {
  const [dias, setDias] = useState([]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleSlideClick = (index) => {
    // Atualiza o estado para o índice clicado
    setActiveIndex(index);
  };

  useEffect(() => {
    const hoje = new Date();
    const trintaDias = [];

    for (let i = 0; i < 30; i++) {
      const dia = addDays(hoje, i);
      const formatoDia = format(dia, "dd", { locale: ptBR });
      const nomeMes = format(dia, "MMMM", { locale: ptBR });
      const diaDaSemana = format(dia, "eee", { locale: ptBR });
      trintaDias.push({ data: formatoDia, nomeMes, diaDaSemana });
    }

    setDias(trintaDias);
  }, []);

  return (
    <Container className="relative h-full">
      <div className="seta z-10 relative">
        <Link to="/">
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
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {dias.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`data ${
                    activeIndex === index ||
                    (index === 0 && activeIndex === null)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSlideClick(index)}
                >
                  <h2>{item.data}</h2>
                  <p>{item.diaDaSemana}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="horarios">
            <div className="horario">
              <p>08:00 AM</p>
              <Botao text="Confirmar" />
            </div>

            <div className="horario">
              <p>10:00 AM</p>
              <Botao text="Confirmar" />
            </div>
          </div>
        </div>
      </Content>
      <div className="background z-0"></div>
    </Container>
  );
}
