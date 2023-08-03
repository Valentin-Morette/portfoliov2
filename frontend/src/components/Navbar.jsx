import "./css/Navbar.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <ul id="navglobal">
        <li>
          <img src={logo} alt="logo" id="logo" />
        </li>
        <li>
          <ul id="navliste" className={menuOpen ? "open" : "closing"}>
            <li>
              <a href="#presentationAncre" onClick={closeMenu}>
                <span className="numberList">01.</span> Presentation
              </a>
            </li>
            <li>
              <a href="#projectAncre" onClick={closeMenu}>
                <span className="numberList">02.</span> Projets
              </a>
            </li>
            <li>
              <a href="#contactsAncre" onClick={closeMenu}>
                <span className="numberList">03.</span> Contactes
              </a>
            </li>
          </ul>
        </li>
        <button type="button" className="burger" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="burger-icon"
            icon={menuOpen ? faTimes : faBars}
          />
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
