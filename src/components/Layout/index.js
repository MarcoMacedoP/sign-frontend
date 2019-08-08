import React, { Fragment } from "react";
import Navbar from "../Navbar/";
import Footer from "../Footer";
import AppNavbar from "../AppNavbar";

export const Layout = ({ children, userLoged }) => {
  if (userLoged) {
    return (
      <Fragment>
        <AppNavbar />
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
