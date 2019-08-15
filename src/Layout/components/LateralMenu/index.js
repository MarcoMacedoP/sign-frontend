//Modules
import React from "react";
//Styled Components
import {
  Menu,
  Header,
  ProfileImage,
  Username,
  Location,
  Navigation,
  NavigationItem,
  NavigationItemTitle,
  Navicon,
  CloseIcon
} from "./styles";

//Functions
export const LateralMenuItem = ({ direction, name, closeMenu }) => {
  return (
    <NavigationItem to={direction} onClick={closeMenu}>
      <Navicon>all_inbox</Navicon>
      <NavigationItemTitle onClick={closeMenu}>
        {name}
      </NavigationItemTitle>
      <Navicon>chevron_right</Navicon>
    </NavigationItem>
  );
};

export const LateralMenu = ({
  isShowed,
  username,
  location,
  closeMenu
}) => {
  if (isShowed) {
    return (
      <Menu>
        <CloseIcon onClick={closeMenu}>close</CloseIcon>
        <Header>
          <ProfileImage onClick={() => console.log("hola")} />
          <Username>{username || "Username"}</Username>
          <Location>{location || "Location"}</Location>
        </Header>
        <Navigation>
          <LateralMenuItem
            name="Inicio"
            direction="/app/"
            closeMenu={closeMenu}
          />
          <LateralMenuItem
            name="Proyectos"
            direction="/app/projects"
            closeMenu={closeMenu}
          />
        </Navigation>
      </Menu>
    );
  } else {
    return false;
  }
};
