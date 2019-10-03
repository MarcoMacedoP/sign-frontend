import React, {useState} from "react";
//
import {withRouter} from "react-router";
import {Navbar} from "../Navbar";
import {Footer} from "../Footer";
import {AppNavbar} from "../AppNavbar";
import {LateralMenu} from "../LateralMenu";
//redux
import {connect} from "react-redux";
import {logout} from "../../../global/redux/actions/users";
//MaterialUi libray customization
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "../../MaterialUiTheme";
//Utils
import {USER_PAGE} from "../../../global/utils/routes";

const Layout = withRouter(({children, user, logout, history}) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const redirectToUserPage = () => history.push(USER_PAGE);
  if (user.isLoged) {
    return (
      <ThemeProvider theme={theme}>
        <AppNavbar
          openMenu={() => setMenuStatus(true)}
          profilePicture={user.picture}
          onLogout={logout}
        />
        <LateralMenu
          redirectToUserPage={redirectToUserPage}
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
});
const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  {logout}
)(Layout);
