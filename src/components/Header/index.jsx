import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
import perfil from "../../assets/Vector.svg";
import { Hamburguer } from "../Hamburguer/index.jsx";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../hook/auth.jsx";
import { Link } from "react-router-dom";
import { BsScissors, BsGrid3X3GapFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { Modal } from 'flowbite-react';
import { InputField } from "../../components/InputField";
import imgSenha from "../../assets/olho-1.svg";
import imgSenha2 from "../../assets/olho-2.svg";
import { Botao } from "../../components/Botao";

import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';

export function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const { Logout, user } = useAuth();
  const dropdownRef = useRef(null);
  const perfilImageRef = useRef(null);

  const [openModal, setOpenModal] = useState(false);

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const {signIn, setLoading, loading } = useAuth();

  const [hasValue, setHasValue] = useState(false);
  const [maskActive, setMaskActive] = useState(true);
  const [hasFocusLogin, setHasFocusLogin] = useState(false);
  const [hasFocusPassword, setHasFocusPassword] = useState(false);


  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
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

retorno.then(result => {
  if (result.success) {
    setOpenModal(false) // Sucesso
  }
});
    setLoading(1);
  }

  function LogoutFunc() {
    Logout();
    handleMenu();
  }
  const handleMenu = () => {
    if (menuAtivo) {
      setMenuAtivo(false);
    } else {
      setMenuAtivo(true);
    }
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== perfilImageRef.current // Add this condition
    ) {
      setMenuAtivo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Container>
      <Content>
        <Hamburguer />
        <div className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </div>
        <div className="nav-user">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
            </ul>
          </nav>
          <img src={perfil} onClick={handleMenu} ref={perfilImageRef} />
          <div
            ref={dropdownRef}
            className={`dropdown ${menuAtivo ? "menu-active" : ""}`}
          >
            {user && (
              <div className="header-dropdown">
                <div className="coluna-infos">
                  <img src={perfil} onClick={handleMenu} />
                  <div>
                    <h1>{user?.name}</h1>
                    <p>{user?.email}</p>
                  </div>
                </div>
                <div className="coluna-button">
                  {user.isBarbeiro != 0 ? (
                    <a className="button-perfil" href="/dashboard-painel">
                      Painel
                    </a>
                  ) : (
                    <a className="button-perfil" href="/dados">
                      Ver perfil
                    </a>
                  )}
               
                </div>
              </div>
            )}

            {user ? (
              <ul>
                {user.isBarbeiro != 0 && (
                  <li>
                    <a href="/servicos-painel">
                      <BsScissors />
                      <div>
                        <h1>Gerenciar serviços</h1>
                        <p>Adicionar/editar ou remover serviços.</p>
                      </div>
                    </a>
                  </li>
                )}

                {user.isBarbeiro != 0 ? (
                  <li>
                    <a href="/agendamentos-painel">
                      <BsGrid3X3GapFill />
                      <div>
                        <h1>Gerenciar reservas</h1>
                        <p>Acompanhe o status de reservas.</p>
                      </div>
                    </a>
                  </li>
                ) : (
                  <li>
                    <a href='minhas-reservas/'>
                      <BsGrid3X3GapFill />
                      <div>
                        <h1>Minhas reservas</h1>
                        <p>Acompanhe o status de suas reservas.</p>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
            ) : (
              <ul className="!border-none !pb-0">
                <li className="login">
                  <a className="button-perfil" onClick={() => setOpenModal(true)}>
                    Fazer login
                  </a>
                </li>
              </ul>
            )}
            {user && (
              <div className="footer-dropdown">
                <ul>
                  <li>
                    <Link type="button" to="/" onClick={LogoutFunc}>
                      <IoMdLogOut />
                      <div>
                        <h1>Sair</h1>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Content>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Box>
      </Box>
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
           className={`label ${login || hasFocusLogin ? "inputHasValue" : ""}`}
         >
           Email
         </label>
       </div>
       <div className="container-input">
         <InputField
           type={`${maskActive ? 'password' : 'text'}`}
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
    </Container>
  );
}
