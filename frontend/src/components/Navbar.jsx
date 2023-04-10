import "./css/Navbar.css";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <ul id="navglobal">
        <li>
          <img src={logo} alt="logo" id="logo" />
        </li>
        <li>
          <ul id="navliste">
            <li>
              <a href="/login">
                <span className="numberList">01.</span> Presentation
              </a>
            </li>
            <li>
              <a href="/signup">
                <span className="numberList">02.</span> Projets
              </a>
            </li>
            <li>
              <a href="/signup">
                <span className="numberList">03.</span> Contact
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
