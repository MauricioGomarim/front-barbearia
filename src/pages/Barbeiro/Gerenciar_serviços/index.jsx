import { api } from "../../../services/api";

import { Container, Content } from "./style";
import { Botao } from "../../../components/Botao";
import { Botao2 } from "../../../components/Botao-bg-preto";

import { InputField } from "../../../components/InputField";
import { toast } from "react-toastify";
import { useAuth } from "../../../hook/auth";
import { useState, useEffect } from "react";

import seta from "../../../assets/seta-esquerda.svg";
import { Link, useNavigate } from "react-router-dom";

import imgSenha from "../../../assets/olho-1.svg";
import imgSenha2 from "../../../assets/olho-2.svg";
import imgPerfil from "../../../assets/img-perfil.png";

import star from "../../../assets/star.svg";
import service from "../../../assets/img2.jpg";

import Modal from 'react-modal';

export function Gerenciar_servicos() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  const { setLoading, loading, user } = useAuth();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/users/${user.id}`);
    }
    fetchUser();
  }, []);

  return (
    <Container>
      <div className="seta z-10 relative">
        <Link to="/">
          <img src={seta} />
        </Link>
      </div>
      <Content>
        <Botao text="Adicionar serviço" className="!py-2 text-sm mb-4 w-full" />
        
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
                <Botao2 text="Editar" />
                <button onClick={openModal}>Open Modal</button>
              </div>
            </div>
          </div>
      
        </div>
      </Content>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h1>Teste</h1>
        <button onClick={closeModal}>close</button>
      </Modal>
    </Container>
  );
}
