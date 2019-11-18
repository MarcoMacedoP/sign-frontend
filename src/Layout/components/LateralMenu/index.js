// Modules
import React from "react";
//hooks
// Components
import { LateralMenuItem } from "../LateralMenuItem";
// Styled Components
import { Menu, Header, ProfileImage, Navigation } from "./styles";
// Routes
import {
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  PROVIDERS_ROUTE,
  PROJECTS_ROUTE,
  REMINDERS_ROUTE,
  TEAMS_LIST,
  USER_PAGE
} from "../../../global/utils/routes";

const menuItems = [
  { name: "Dashboard", icon: "home", route: APP_HOME_ROUTE },
  { name: "Proyectos", icon: "folder", route: PROJECTS_ROUTE },
  { name: "Clientes", icon: "credit_card", route: CLIENTS_ROUTE },
  {
    name: "Proveedores",
    icon: "shopping_cart",
    route: PROVIDERS_ROUTE
  },
  { name: "Equipos", icon: "people", route: TEAMS_LIST },
  { name: "Recordatorios", icon: "alarm_add", route: REMINDERS_ROUTE }
];

export function LateralMenu({ user = {} }) {
  return (
    <Menu>
      <Header to={USER_PAGE}>
        <ProfileImage image={user.profilePic} />
      </Header>
      <Navigation>
        {menuItems.map((item, index) => (
          <LateralMenuItem
            key={index}
            icon={item.icon}
            name={item.name}
            direction={item.route}
          />
        ))}
      </Navigation>
    </Menu>
  );
}
