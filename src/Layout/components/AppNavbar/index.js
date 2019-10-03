import React from "react";
//components
import {Icon, ToastMenu} from "../../../global/components";

import {Logo} from "../../../global/styles/foundations/Logo";
import {Navbar, Picture} from "./styles";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//utils
import {USER_PAGE} from "../../../global/utils/routes";

export const AppNavbar = ({
  openMenu,
  profilePicture,
  onLogout,
  username
}) => {
  const {state, toggleStateValue} = useHandleState({
    menuShowed: false
  });
  const toggleMenu = () => {
    toggleStateValue("menuShowed");
  };

  return (
    <Navbar>
      <Icon onClick={openMenu} icon="menu" />
      <Logo to="/app">sign</Logo>
      <Picture onClick={toggleMenu}>
        <img src={profilePicture} alt={username} />
      </Picture>
      <ToastMenu
        isShowed={state.menuShowed}
        onClose={toggleMenu}
        menuItems={[
          {
            icon: "person",
            title: "Perfil",
            direction: USER_PAGE
          },
          {
            icon: "settings",
            title: "Cerrar sesión",
            onClick: onLogout
          }
        ]}
      />
    </Navbar>
  );
};
