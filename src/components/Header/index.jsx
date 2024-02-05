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
  const perfilImageRef = useRef(null);

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
                  <a className="button-perfil" href="/dados">
                    Ver perfil
                  </a>
                </div>
              </div>
            )}

            {user ? (
              <ul>
                {user.isBarbeiro != 0 && (
                  <li>
                    <a href="/gerenciar-servicos">Gerenciar serviços</a>
                  </li>
                )}

                {user.isBarbeiro != 0 ? (
                  <li>
                    <a href="/gerenciar-servicos">Gerenciar reservas</a>
                  </li>
                ) : (
                  <li>
                    <a href="/minhas-reservas">Minhas reservas</a>
                  </li>
                )}
              </ul>
            ) : (
              <ul className="!border-none !pb-0">
                <li className="login">
                  <a className="button-perfil" href="/login">
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
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}
