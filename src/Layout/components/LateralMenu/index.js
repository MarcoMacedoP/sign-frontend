// Modules
import React from "react";
//hooks
import {useState} from "react";
// Components
import {LateralMenuItem} from "../LateralMenuItem";
import {Icon} from "../../../global/components";
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

export const LateralMenu = ({user = {}}) => {
  const [isShowed, setIsShowed] = useState(false);
  const hideMenu = () => setIsShowed(false);
  const showMenu = () => setIsShowed(true);
  return (
    <Menu isShowed={isShowed}>
      <Icon
        icon={isShowed ? "arrow_back_ios" : "arrow_forward_ios"}
        onClick={isShowed ? hideMenu : showMenu}
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
