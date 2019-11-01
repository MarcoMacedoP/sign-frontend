// eslint-disable-next-line no-unused-vars
import React from "react";
//components
import {ToastMenu, Icon} from "../../../global/components";

import {Logo} from "../../../global/styles/foundations/Logo";
import {Navbar} from "./styles";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//utils
import {USER_PAGE} from "../../../global/utils/routes";

export const AppNavbar = ({onLogout}) => {
  const {state, toggleStateValue} = useHandleState({
    menuShowed: false
  });
  const toggleMenu = () => {
    toggleStateValue("menuShowed");
  };

  return (
    <Navbar>
      <Logo to="/app">sign</Logo>
      <Icon icon="settings" onClick={toggleMenu} />
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
            icon: "exit_to_app",
            title: "Cerrar sesión",
            onClick: onLogout
          }
        ]}
      />
    </Navbar>
  );
};
