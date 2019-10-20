// Modules
import React from "react";
//hooks
import {useState} from "react";
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
  ToggleMenuIcon
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
  {name: "Equipos", icon: "people", route: TEAMS_LIST},
  {name: "Recordatorios", icon: "alarm_add", route: REMINDERS_ROUTE}
];

export const LateralMenu = ({user = {}}) => {
  const [isShowed, setIsShowed] = useState(false);
  const hideMenu = () => setIsShowed(false);
  const showMenu = () => setIsShowed(true);
  return (
    <Menu isShowed={isShowed}>
      <ToggleMenuIcon
        icon={isShowed ? "close" : "arrow_forward_ios"}
        onClick={isShowed ? hideMenu : showMenu}
        isShowed={isShowed}
      />
      <Header isShowed={isShowed}>
        <ProfileImage image={user.profilePic} isShowed={isShowed} />
        <Username isShowed={isShowed}>
          {user.name || "Username"}
        </Username>
        <Location isShowed={isShowed}>
          {user.job || "Job title"}
        </Location>
      </Header>
      <Navigation>
        {menuItems.map(item => (
          <LateralMenuItem
            isShowed={isShowed}
            icon={item.icon}
            name={item.name}
            direction={item.route}
          />
        ))}
      </Navigation>
    </Menu>
  );
};
