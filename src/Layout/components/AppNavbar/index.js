// eslint-disable-next-line no-unused-vars
import React from "react";
//components
import {ToastMenu, Icon} from "../../../global/components";
import Notifications from "../Notifications";
import {Logo} from "../../../global/styles/foundations/Logo";
import {Navbar, NotificationIcon} from "./styles";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";

//utils
import {USER_PAGE} from "../../../global/utils/routes";

export const AppNavbar = ({onLogout}) => {
  const {state, toggleStateValue} = useHandleState({
    menuShowed: false,
    notificationsAreShowed: false
  });
  const toggleMenu = () => toggleStateValue("menuShowed");
  const toggleNotifications = () =>
    toggleStateValue("notificationsAreShowed");

  return (
    <Navbar>
      <Logo to="/app">sign</Logo>
      <NotificationIcon
        isOpen={state.notificationsAreShowed}
        icon="notifications_none"
        onClick={toggleNotifications}
      />
      <Notifications
        isShowed={state.notificationsAreShowed}
        onClose={toggleNotifications}
      />
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
