import React from "react";
//components
import {Icon} from "../../../global/components";
import {Logo} from "../../../global/styles/foundations/Logo";
//styled-components
import {Navbar, Picture} from "./styles";

export const AppNavbar = ({
  openMenu,
  profilePicture,
  username,
  redirectToUserPage
}) => {
  return (
    <Navbar>
      <Icon onClick={openMenu} icon="menu" />
      <Logo to="/app">sign</Logo>
      <Picture onClick={redirectToUserPage}>
        <img src={profilePicture} alt={username} />
      </Picture>
    </Navbar>
  );
};
