import { Container, Content } from "./styles";
import logo from "../../assets/logo.png";
import perfil from "../../assets/Vector.svg";
import { Hamburguer } from "../Hamburguer/index.jsx";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../hook/auth.jsx";
import { Link } from "react-router-dom";

export function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const { Logout, user } = useAuth();
  const dropdownRef = useRef(null);

  function LogoutFunc() {
    Logout();
    handleMenu();
  }
  const handleMenu = () => {
    setMenuAtivo(!menuAtivo); // Inverte o valor do estado
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
          <img src={perfil} onClick={handleMenu} />
          <div
            ref={dropdownRef}
            className={`dropdown ${menuAtivo ? "menu-active" : ""}`}
          >

            {user ? ( <ul>
              <li>
                <a href="/">Meus dados</a>
              </li>
              <li>
                <a href="/minhas-reservas">Minhas reservas</a>
              </li>
              <li>
                <Link type="button" to="/" onClick={LogoutFunc}>
                  Sair
                </Link>
              </li>
            </ul>) : ( <ul>
              <li>
                <a href="/login">Fazer login</a>
              </li>
            </ul>)}
            
           
          </div>
        </div>
      </Content>
    </Container>
  );
}
