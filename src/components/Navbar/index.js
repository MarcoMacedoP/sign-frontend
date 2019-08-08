//Esta es la barra de navegación de las páginas.
import React from "react";
import {
  LoginButton,
  SignupButton,
  Header,
  ButtonContainer
} from "./styles";
import { Logo } from "../../styles/foundations/Logo";

export const Navbar = () => {
  return (
    <Header className="nav-bar">
      <Logo to="/">SIGN</Logo>
      <ButtonContainer>
        <LoginButton to="/login">Iniciar sesión</LoginButton>
        <SignupButton to="/signup">Registrarse</SignupButton>
      </ButtonContainer>
    </Header>
  );
};

export default Navbar;
