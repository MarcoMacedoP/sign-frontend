import React from "react";
//components
import {Link} from "react-router-dom";
import {Icon} from "../../../global/components";

import {Logo} from "../../../global/styles/foundations/Logo";
import {Navbar, Picture, Menu, MenuItem} from "./styles";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";

export const AppNavbar = ({openMenu, profilePicture, username}) => {
  const menuRef = React.createRef();
  const {state, toggleState} = useHandleState({
    menuShowed: false
  });
  const toggleMenu = () => {
    toggleState("menuShowed");
  };

  return (
    <Navbar>
      <Icon onClick={openMenu} icon="menu" />
      <Logo to="/app">sign</Logo>
      <Picture onClick={toggleMenu}>
        <img src={profilePicture} alt={username} />
      </Picture>
      <Menu
        ref={menuRef}
        onMouseLeave={toggleMenu}
        isShowed={state.menuShowed}
      >
        <MenuItem isShowed={state.menuShowed} onClick={toggleMenu}>
          <Link to="/404/">{username || "username"}</Link>
          <Icon icon="person" hasAnimatedClick={false} />
        </MenuItem>
        <MenuItem isShowed={state.menuShowed} onClick={toggleMenu}>
          <Link to="/404/">Configuración</Link>
          <Icon icon="settings" hasAnimatedClick={false} />
        </MenuItem>
      </Menu>
    </Navbar>
  );
};
