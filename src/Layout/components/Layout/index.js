import React, {useState} from "react";
import {Navbar} from "../Navbar";
import {Footer} from "../Footer";
import {AppNavbar} from "../AppNavbar";
import {LateralMenu} from "../LateralMenu";
//redux
import {connect} from "react-redux";
//MaterialUi libray customization

import {ThemeProvider} from "@material-ui/styles";
import {theme} from "../../MaterialUiTheme";

function Layout({children, user}) {
  const [menuStatus, setMenuStatus] = useState(false);
  console.log(user);

  if (user.isLoged) {
    return (
      <ThemeProvider theme={theme}>
        <AppNavbar
          openMenu={() => setMenuStatus(true)}
          profilePicture={user.picture}
        />
        <LateralMenu
          isShowed={menuStatus}
          closeMenu={() => setMenuStatus(false)}
          user={user}
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
}

const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  null
)(Layout);
