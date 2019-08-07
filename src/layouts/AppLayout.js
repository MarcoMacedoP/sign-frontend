import React from "react";
//components
import AppNavbar from "../components/AppNavbar";
import LateralMenu from "../components/LateralMenu";
//Resources
import "./styles/AppLayout.scss";

class AppLayout extends React.Component {
  state = {
    menuDisplayed : false
  };
  handleMenu = (e) => {
    if (this.state.menuDisplayed) {
      this.setState({ menuDisplayed: false });
    } else {
      this.setState({ menuDisplayed: true });
    }
  };
  render() {
    return (
      <div className="AppLayout">
        <AppNavbar handleMenu={this.handleMenu} />

        <LateralMenu
          isShowed={this.state.menuDisplayed}
          handleMenu={this.handleMenu}
        />
        <div className="AppLayout__children">{this.props.children}</div>
      </div>
    );
  }
}

export default AppLayout;
