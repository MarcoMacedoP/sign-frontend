//Esta es la barra de navegación de las páginas.
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";

class Navbar extends React.Component {
  render() {
    return (
      <header className="nav-bar">
        <Link to="/" className="nav-bar__home">
          SIGN
        </Link>
        <nav className="nav-bar__sections">
          <Link to="/login" className="button">
            Iniciar sesión
          </Link>
          <Link to="/welcome" className="button secondary">
            Registrarse
          </Link>
        </nav>
      </header>
    );
  }
}
export default Navbar;
