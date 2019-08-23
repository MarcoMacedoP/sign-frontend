import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { AppNavbar } from "../AppNavbar";
import { LateralMenu } from "../LateralMenu";
//MaterialUi libray customization

import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../MaterialUiTheme";

export const Layout = ({ children, userLoged }) => {
  const [ menuStatus, setMenuStatus ] = useState(false);

  if (userLoged) {
    return (
      <ThemeProvider theme={theme}>
        <AppNavbar openMenu={() => setMenuStatus(true)} />
        <LateralMenu
          isShowed={menuStatus}
          closeMenu={() => setMenuStatus(false)}
        />
        {children}
      </ThemeProvider>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    );
  }
};
