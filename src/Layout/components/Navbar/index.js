import React from "react";
//hooks
import {useHandleState} from "../../../global/hooks";
//styled-components
import {
  LoginButton,
  SignupButton,
  Header,
  ButtonContainer
} from "./styles";
import {Logo} from "../../../global/styles/foundations/Logo";
import {Icon} from "../../../global/components";
export const Navbar = () => {
  const {state, toggleStateValue} = useHandleState({
    menuIsShowed: false
  });
  const toggleMenu = () => toggleStateValue("menuIsShowed");

  return (
    <Header className="nav-bar">
      <Logo to="/">SIGN</Logo>
      <Icon icon="menu" onClick={toggleMenu} />
      <ButtonContainer isShowed={state.menuIsShowed}>
        <Icon icon="close" onClick={toggleMenu} />
        <LoginButton to="/login">Iniciar sesión</LoginButton>
        <SignupButton to="/signup">Registrarse</SignupButton>
      </ButtonContainer>
      {/* <MobileMenu onClick={handleClick}>menu</MobileMenu> */}
    </Header>
  );
};

export default Navbar;
