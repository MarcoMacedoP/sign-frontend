//Esta es la barra de navegación de las páginas.
import React, { useState } from "react";
import {
  LoginButton,
  SignupButton,
  Header,
  ButtonContainer,
  MobileMenu
} from "./styles";
import { Logo } from "../../../global/styles/foundations/Logo";

export const Navbar = () => {
  // function handleClick(e) {
  //   const [ menuDisplayed, setMenuDisplayed ] = useState(false);
  // }
  //The User Interface
  return (
    <Header className="nav-bar">
      <Logo to="/">SIGN</Logo>
      <ButtonContainer>
        <LoginButton to="/login">Iniciar sesión</LoginButton>
        <SignupButton to="/signup">Registrarse</SignupButton>
      </ButtonContainer>
      {/* <MobileMenu onClick={handleClick}>menu</MobileMenu> */}
    </Header>
  );
};

export default Navbar;
