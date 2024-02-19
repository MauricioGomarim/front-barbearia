import { Container, Content } from "./style";
import circulo from "../../../assets/circulo.png";
import seta from "../../../assets/seta-esquerda.svg";
import star from "../../../assets/star.svg";
import serviceImg from "../../../assets/img2.jpg";
import { Botao2 } from "../../../components/Botao-bg-preto";
import { Botao } from "../../../components/Botao";
import { Link } from "react-router-dom";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";

import imgPerfil from "../../../assets/img-perfil.png";

import { useEffect, useState } from "react";
import { useAuth } from "../../../hook/auth";

export function Servicos() {
  const [users, setUsers] = useState();
  const barbeiros = users?.filter((user) => user.isBarbeiro);
  const [profissionalAtivo, setProfissionalAtivo] = useState(1);
  const [services, setServices] = useState([]);
  const [servicesSelected, setServicesSelected] = useState([]);
  const {setServicesSelectedHook} = useAuth()
  const navigation = useNavigate();
  
  const handleServicesSelected = (service) => {
    // Verifica se o serviço já foi selecionado antes de adicioná-lo
    if (
      !servicesSelected.some(
        (selectedService) => selectedService.id === service.id
      )
    ) {
      setServicesSelected((prevState) => [...prevState, service]);
    }
  };
  const handleProfissionalClick = (id) => {
 
    setProfissionalAtivo(id);
    setServicesSelected([]);
  };

  const confirmService = () => {
    setServicesSelectedHook(servicesSelected)
    navigation("/datas");
  }

  useEffect(() => {
    async function getServices() {
      const response = await api.get(`/services?id=${profissionalAtivo}`);
      setServices(response.data);
    }

    getServices();
  }, [profissionalAtivo]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get(`/users`);
      setUsers(response.data);
    }
    fetchUsers();
  }, []);
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
            {barbeiros?.map((barbeiro) => (
              <div
                className={`profissional ${
                  profissionalAtivo === barbeiro.id ? "active" : ""
                }`}
                key={barbeiro.id}
                onClick={() => handleProfissionalClick(barbeiro.id)}
              >
                <img src={imgPerfil} alt={`Imagem de ${barbeiro.name}`} />
                <p>{barbeiro.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Content>

      <Content className="z-10 relative">
        {services && services.length > 0 ? (
          <div className="select-services">
            <h1>Selecione os serviços desejados:</h1>
            <div className="services">
              {services.map((service) => (
                <div className="service">
                  <img src={serviceImg} />
                  <div className="infos">
                    <h1>{service.title}</h1>
                    <div className="stars">
                      {Array.from({ length: service.stars }, (_, index) => (
                        <img key={index} src={star} alt="Estrela" />
                      ))}
                    </div>

                    <div className="footer-card">
                      <div>
                        <p>Duração: {service.duracao} minutos</p>
                        <p>R$ {service.valor}</p>
                      </div>
                      <Botao2
                        text={
                          servicesSelected.some(
                            (selectedService) =>
                              selectedService.id === service.id
                          )
                            ? "Selecionado"
                            : "Selecionar"
                        }
                        disabled={servicesSelected.some(
                          (selectedService) => selectedService.id === service.id
                        )}
                        onClick={() => handleServicesSelected(service)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="btnConfirmar">
              <Botao text="Confirmar" onClick={confirmService} />
            </div>
          </div>
        ) : (
          <div className="error-services">
            <h1>Nenhum serviço cadastrado!</h1>
          </div>
        )}
      </Content>

      <div className="background z-0"></div>
    </Container>
  );
}
