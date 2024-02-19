import "./style.css";
import { useAuth } from "../../hook/auth";


export function HamburguerPainel() {

  const {menuActive, setMenuActive} = useAuth(false);

  function handleMenu() {
    setMenuActive(!menuActive);
  }
  return (
    <div  className="menu-burguer-painel">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" checked={menuActive} onClick={() => handleMenu()}/>
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu-painel">
          </ul>
        </div>
      </nav>
    </div>
  );
}
