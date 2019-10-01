import React from "react";
//components
import {Icon, ToastMenu} from "../../../global/components";
import {Logo} from "../../../global/styles/foundations/Logo";
import {Redirect} from "react-router-dom";
//styled-components
import {Navbar, Picture} from "./styles";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//utils
import {LANDING_ROUTE, USER_PAGE} from "../../../global/utils/routes";
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
