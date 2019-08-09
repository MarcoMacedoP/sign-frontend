import React from "react";
import { Logo } from "../../styles/foundations/Logo";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";
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
