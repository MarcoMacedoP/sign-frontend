import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
);
