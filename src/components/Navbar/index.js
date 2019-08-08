//Esta es la barra de navegación de las páginas.
import React from "react";
import {
  LoginButton,
  SignupButton,
  Header,
  Home,
  ButtonContainer
} from "./styles";
export const Navbar = () => {
  return (
    <Header className="nav-bar">
      <Home to="/">SIGN</Home>
      <ButtonContainer>
        <LoginButton to="/login">Iniciar sesión</LoginButton>
        <SignupButton to="/signup">Registrarse</SignupButton>
      </ButtonContainer>
    </Header>
  );
};

export default Navbar;
