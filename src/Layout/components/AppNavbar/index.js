import React from "react";
import { Logo } from "../../../global/styles/foundations/Logo";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";
import { Navbar } from "./styles";
export const AppNavbar = ({ openMenu }) => {
  return (
    <Navbar>
      <MaterialIcon onClick={openMenu}>menu</MaterialIcon>
      <Logo to="/app">sign</Logo>
      <MaterialIcon>settings</MaterialIcon>
    </Navbar>
  );
};
