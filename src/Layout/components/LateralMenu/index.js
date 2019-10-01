// Modules
import React from "react";
// Components
import {LateralMenuItem} from "../LateralMenuItem";
// Styled Components
import {
  Menu,
  Header,
  ProfileImage,
  Username,
  Location,
  Navigation,
  CloseIcon
} from "./styles";
// Routes
import {
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  PROVIDERS_ROUTE
} from "../../../global/utils/routes";
export const LateralMenu = ({isShowed, user = {}, closeMenu}) => {
  if (isShowed) {
    return (
      <Menu>
        <CloseIcon onClick={closeMenu}>close</CloseIcon>
        <Header>
          <ProfileImage image={user.picture} />
          <Username>{user.name || "Username"}</Username>
          <Location>{user.job || "Job title"}</Location>
        </Header>
        <Navigation>
          <LateralMenuItem
            name="Inicio"
            direction={APP_HOME_ROUTE}
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name="Proyectos"
            direction="/404/"
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name="Proveedores"
            direction={PROVIDERS_ROUTE}
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name="Clientes"
            direction={CLIENTS_ROUTE}
            closeMenu={closeMenu}
            PROVIDERS_ROUTE
          />
          <LateralMenuItem
            name="Colaboradores"
            direction="/404/"
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name="Recordatorios"
            direction="/404/"
            closeMenu={closeMenu}
          />
        </Navigation>
      </Menu>
    );
  } else {
    return false;
  }
};
