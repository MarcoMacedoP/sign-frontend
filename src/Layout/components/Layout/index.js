import React, { useState } from "react";
//
import { withRouter } from "react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { AppNavbar } from "../AppNavbar";
import { LateralMenu } from "../LateralMenu";
//redux
import { connect } from "react-redux";
import { fetchLogout } from "../../../global/redux/actions/users";
//MaterialUi libray customization
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../../MaterialUiTheme";
//Utils
import { USER_PAGE } from "../../../global/utils/routes";
//styled-components
import { Main } from "./styles";
const Layout = withRouter(({ children, user, fetchLogout, history }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const redirectToUserPage = () => history.push(USER_PAGE);
  if (user.status.isLoged) {
    return (
      <ThemeProvider theme={theme}>
        <AppNavbar
          openMenu={() => setMenuStatus(true)}
          profilePicture={user.profilePic}
          onLogout={fetchLogout}
        />
        <LateralMenu
          redirectToUserPage={redirectToUserPage}
          isShowed={menuStatus}
          user={user}
        />
        <Main>{children}</Main>
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
});
const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { fetchLogout })(Layout);
