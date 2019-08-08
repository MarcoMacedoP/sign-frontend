import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <Link to="/" className="Footer__tittle Footer__link">
          SIGN
        </Link>

        <Link className="Footer__link" to="/login">
          Inicia sesión
        </Link>
        <Link className="Footer__link" to="/signup">
          Registrate
        </Link>
      </footer>
    );
  }
}

export default Footer;
