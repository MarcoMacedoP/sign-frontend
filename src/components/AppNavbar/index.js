import React from "react";
import { Logo } from "../../styles/foundations/Logo";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";
import { Navbar } from "./styles";
export const AppNavbar = ({ handleMenu }) => {
  return (
    <Navbar>
      <MaterialIcon onClick={handleMenu}>menu</MaterialIcon>
      <Logo to="/app">sign</Logo>
      <MaterialIcon>settings</MaterialIcon>
    </Navbar>
  );
};
