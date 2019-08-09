import React, { Fragment, useState } from "react";
import Navbar from "../Navbar/";
import Footer from "../Footer";
import { AppNavbar } from "../AppNavbar/";
import { LateralMenu } from "../LateralMenu/";
export const Layout = ({ children, userLoged }) => {
  const [ menuStatus, setMenuStatus ] = useState(true);

  if (userLoged) {
    return (
      <Fragment>
        <AppNavbar openMenu={() => setMenuStatus(true)} />
        <LateralMenu
          isShowed={menuStatus}
          closeMenu={() => setMenuStatus(false)}
        />
        {children}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Navbar />
        {children}
        <Footer />
      </Fragment>
    );
  }
};
