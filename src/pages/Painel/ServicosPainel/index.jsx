"use client";

import { api } from "../../../services/api";
/** react flowbite */
import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
  FileInput,
  Textarea,
  Select,
  FloatingLabel,
  RangeSlider,
} from "flowbite-react";
import { useState, useEffect } from "react";
/** react flowbite */

import Slider from "@mui/material/Slider";
import { toast } from "react-toastify";
import { Container, Section } from "./styles";
import { HeaderPainel } from "../../../components/HeaderPainel";
import { Menu } from "../../../components/Menu";
import { useAuth } from "../../../hook/auth";
import imgService from "../../../assets/img2.jpg";

import { Input } from "../../../components/Input";
import { Botao } from "../../../components/Botao";
import { IoSearch } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

import starOrange from "../../../assets/icones/star-orange.svg";
import dots from "../../../assets/icones/pontos.svg";

import { MdModeEdit } from "react-icons/md";

export function ServicosPainel() {
  const { menuActive, setMenuActive, user } = useAuth();
  const [reloadServices, setReloadServices] = useState(false);

    /* parte do modal de editar serviço */
    const [openModalEditarServico, setOpenModalEditarServico] = useState(false);
    const [nameEditar, setNameEditar] = useState("");
    const [estrelhasEditar, setEstrelhasEditar] = useState(1);
    const [valorEditar, setValorEditar] = useState(0);
    const [duracaoEditar, setDuracaoEditar] = useState(0);
    const [serviceId, setServiceID] = useState(0);

  

  /* parte do modal de adicionar serviço */
  const [openModalAdicionarServico, setOpenModalAdicionarServico] = useState(false);
  const [name, setName] = useState("");
  const [estrelhas, setEstrelhas] = useState(1);
  const [valor, setValor] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const maxValue = 150; // Definindo o valor máximo


  /* parte do modal de adicionar serviço */
  const [search, setSearch] = useState();
  /* parte do modal de editar serviço */
  const [servico, setServico] = useState()
  /* parte do modal de editar serviço */


  const [services, setServices] = useState([]);

  /* parte do modal de adicionar serviço */
  const handleSliderChange = (event) => {
    const value = event.target.value; // Obtendo o valor do evento
    setDuracao(value);
  };

  const handleSliderChangeEditar = (event) => {
    const value = event.target.value; // Obtendo o valor do evento
    setDuracaoEditar(value);
  };

  async function cadastrarServico() {
    if (!name) {
      return toast.warning("Nome do serviço é obrigatório!", {
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
    try {
      await api.post(`/services`, {
        user_id: user.id,
        title: name,
        stars: estrelhas,
        duracao,
        valor,
      });
      setOpenModalAdicionarServico(false);
      setName("");
      setEstrelhas("");
      setValor("");
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

  function onCloseModal() {
    setOpenModalAdicionarServico(false);
    setOpenModalEditarServico(false);

    setName("");
    setEstrelhas("");
    setValor("");
  }
  /* parte do modal de adicionar serviço */


   async function showServico(id){
    const response =  await api.get(`/services/${id}`);
    setNameEditar(response.data.title)
    setEstrelhasEditar(response.data.stars)
    setValorEditar(response.data.valor)
    setDuracaoEditar(response.data.duracao)
    setServiceID(response.data.id)

    setOpenModalEditarServico(true)

  }

  async function editarServico(){
     await api.put(`/services/${serviceId}`, {
      title: nameEditar,
      stars: estrelhasEditar,
      duracao: duracaoEditar,
      valor: valorEditar
    });
    setOpenModalEditarServico(false)

  }

  async function excluirServico(id){
    try {
      await api.delete(`/services/${id}`)
      setReloadServices(prevState => !prevState);
      return toast.success("Serviço excluido com sucesso!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error){
      return toast.error("Erro ao excluir serviço", {
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

  useEffect(() => {
    async function getServices() {
      const response = await api.get(`/services`);
      setServices(response.data);
    }

    getServices();
  }, [openModalAdicionarServico, openModalEditarServico, reloadServices]);

  return (
    <Container
      className="container-g"
      style={{ gridTemplateColumns: menuActive ? "250px auto" : "80px auto" }}
    >
      <HeaderPainel />
      <Menu />
      <div className="content">
        <div className="conteudo">
          <h1>Serviços</h1>
          <Section>
            <div className="header-servicos">
              <Botao
                text="Adicionar serviço"
                className="flex"
                onClick={() => setOpenModalAdicionarServico(true)}
              />
              <div className="w-full sm:w-2/6 flex gap-4">
                <Input placeholder="Buscar" value={search} />
                <i className="icon-search">
                  <IoSearch />
                </i>
              </div>
            </div>

            {/* Serção desktop */}
            <div className="header-servicos-tabela">
              <div className="flex px-8 header-tabela">
                <div className="w-40">
                  <h1>Imagem</h1>
                </div>
                <div className="w-52">
                  <h1>Nome</h1>
                </div>
                <div className="w-40">
                  <h1>Duração</h1>
                </div>
                <div className="w-40">
                  <h1>Estrelas</h1>
                </div>
                <div className="w-40">
                  <h1>Valor</h1>
                </div>
                <div className="w-28">
                  <h1>Editar</h1>
                </div>
                <div className="w-28">
                  <h1>Excluir</h1>
                </div>
              </div>
            </div>
            <div className="servicos">
              {services.map((servico) => (
                <div className="linha-servicos-tabela" key={servico?.id}>
                  <div className="flex px-8 header-tabela">
                    <div className="w-40 column-img flex items-center pl-0">
                      <img src={imgService} />
                    </div>
                    <div className="w-52 flex items-center">
                      <h1>{servico?.title}</h1>
                    </div>
                    <div className="w-40 flex items-center">
                      <h1 className="whitespace-nowrap overflow-hidden overflow-ellipsis w-52">
                        {servico?.duracao} minutos
                      </h1>
                    </div>
                    <div className="w-40 flex items-center">
                      <h1>{servico?.stars}</h1>
                    </div>
                    <div className="w-40 flex items-center">
                      <h1>R$ {servico?.valor}</h1>
                    </div>
                    <div className="w-28 flex items-center">
                      <i className="icon-orange cursor-pointer" onClick={() => showServico(servico?.id)}>
                        <MdModeEdit />
                      </i>
                    </div>
                    <div className="w-28 flex items-center">
                      <i className="icon-red cursor-pointer" onClick={() => excluirServico(servico?.id)}>
                        <FaTrashAlt />
                      </i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Serção desktop */}

            <div className="conteiner-servicos-mobile">
              <div className="card-servico-mobile">
                <div className="img-servico">
                  <img src={imgService} />
                </div>
                <div className="content-servico">
                  <h1>Corte</h1>
                  <div className="stars">
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                    <img src={starOrange} />
                  </div>
                  <p className="whitespace-nowrap overflow-hidden overflow-ellipsis w-42">
                    Cortes para todos os tipos
                  </p>
                  <p>Valor: R$ 35,00</p>
                </div>
                <div className="dots">
                  <img src={dots} />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>

      <Modal show={openModalAdicionarServico} size="7xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Cadastrar serviço
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <FloatingLabel
                    variant="filled"
                    label="Nome do serviço:"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="estrelhas"
                      value="Estrelas"
                      className="font-bold"
                    />
                  </div>
                  <Select
                    id="countries"
                    onChange={(e) => setEstrelhas(e.target.value)}
                    required
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </div>

                <div className="mb-4">
                  <FloatingLabel
                    variant="filled"
                    label="Valor do serviço:"
                    onChange={(e) => setValor(e.target.value)}
                    type="number"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="duracao"
                      value="Duracao"
                      className="font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Slider
                      value={duracao}
                      onChange={handleSliderChange}
                      max={maxValue}
                      className="flex items-center"
                      color="secondary"
                    />
                    <div className="text-black font-bold">
                      {duracao} minutos
                    </div>
                  </div>
                </div>
                <div className="mt-5 w-full">
                  <Button
                    className="bg-amber-600 hover:!bg-amber-700"
                    onClick={cadastrarServico}
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
              <div className="col-image">
                <Label value="Imagem do serviço:" />
                <img className="mt-4 max-w-md rounded-3xl" src={imgService} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>


      <Modal show={openModalEditarServico} size="7xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Editar serviço
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <FloatingLabel
                    variant="filled"
                    label="Nome do serviço:"
                    value={nameEditar}
                    onChange={(e) => setNameEditar(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="estrelhas"
                      value="Estrelas"
                      className="font-bold"
                    />
                  </div>
                  <Select
                    id="countries"
                    onChange={(e) => setEstrelhasEditar(e.target.value)}
                    value={estrelhasEditar}

                    required
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Select>
                </div>

                <div className="mb-4">
                  <FloatingLabel
                    variant="filled"
                    label="Valor do serviço:"
                    onChange={(e) => setValorEditar(e.target.value)}
                    type="number"
                    value={valorEditar}

                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label
                      htmlFor="duracao"
                      value="Duracao"
                      className="font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Slider
                      value={duracaoEditar}
                      onChange={handleSliderChangeEditar}
                      max={maxValue}
                      className="flex items-center"
                      color="secondary"
                    />
                    <div className="text-black font-bold">
                      {duracaoEditar} minutos
                    </div>
                  </div>
                </div>
                <div className="mt-5 w-full">
                  <Button
                    className="bg-amber-600 hover:!bg-amber-700"
                    onClick={editarServico}
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
              <div className="col-image">
                <Label value="Imagem do serviço:" />
                <img className="mt-4 max-w-md rounded-3xl" src={imgService} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
