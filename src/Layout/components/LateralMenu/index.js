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
  Navigation
} from "./styles";
// Routes
import {
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  PROVIDERS_ROUTE,
  PROJECTS_ROUTE,
  REMINDERS_ROUTE,
  TEAMS_LIST
} from "../../../global/utils/routes";

const menuItems = [
  {name: "Dashboard", icon: "home", route: APP_HOME_ROUTE},
  {name: "Proyectos", icon: "folder", route: PROJECTS_ROUTE},
  {name: "Clientes", icon: "credit_card", route: CLIENTS_ROUTE},
  {
    name: "Proveedores",
    icon: "shopping_cart",
    route: PROVIDERS_ROUTE
  },
  {name: "Recordatorios", icon: "people", route: REMINDERS_ROUTE},
  {name: "Equipos", icon: "alarm_add", route: TEAMS_LIST}
];

export const LateralMenu = ({isShowed, user = {}, closeMenu}) => {
  return (
    <Menu>
      <Header>
        <ProfileImage image={user.profilePic} />
        <Username>{user.name || "Username"}</Username>
        <Location>{user.job || "Job title"}</Location>
      </Header>
      <Navigation>
        {menuItems.map(item => (
          <LateralMenuItem
            icon={item.icon}
            name={item.name}
            direction={item.route}
          />
        ))}
      </Navigation>
    </Menu>
  );
};
