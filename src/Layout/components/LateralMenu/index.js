// Modules
import React from "react";
//hooks
import { useState } from "react";
// Components
import { LateralMenuItem } from "../LateralMenuItem";
// Styled Components
import {
  Menu,
  Header,
  ProfileImage,
  Username,
  Location,
  Navigation,
  ToggleMenuIcon
} from "./styles";
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
  const [isShowed, setIsShowed] = useState(false);
  const hideMenu = () => setIsShowed(false);
  const showMenu = () => setIsShowed(true);

  //handle redirect

  return (
    <Menu isShowed={isShowed}>
      <ToggleMenuIcon
        icon={isShowed ? "close" : "arrow_forward_ios"}
        onClick={isShowed ? hideMenu : showMenu}
        isShowed={isShowed}
      />
      <Header to={USER_PAGE} isShowed={isShowed}>
        <ProfileImage image={user.profilePic} isShowed={isShowed} />
        <Username isShowed={isShowed}>{user.name || "Username"}</Username>
        <Location isShowed={isShowed}>{user.job || "Job title"}</Location>
      </Header>
      <Navigation>
        {menuItems.map((item, index) => (
          <LateralMenuItem
            key={index}
            isShowed={isShowed}
            icon={item.icon}
            name={item.name}
            direction={item.route}
          />
        ))}
      </Navigation>
    </Menu>
  );
}
