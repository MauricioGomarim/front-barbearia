import "./style.css";

export function Hamburguer() {

  
  return (
    <div className="menu-burguer">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a>
              <li>Show me more</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
}
