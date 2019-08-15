import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
export const Footer = () => {
  return (
    <Container>
      <Link to="/">SIGN</Link>

      <Link to="/login">Inicia sesión</Link>
      <Link to="/signup">Registrate</Link>
    </Container>
  );
};
