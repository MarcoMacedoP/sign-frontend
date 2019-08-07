import React from "react";
import { Link } from "react-router-dom";

class AppNavbar extends React.Component {
  render() {
    return (
      <nav className="AppNavbar">
        <i
          className="material-icons md-24 mdi-animated-click"
          onClick={this.props.handleMenu}>
          menu
        </i>
        <Link to="/app" className="headline-five">
          sign
        </Link>
        <i className="material-icons md-24 mdi-animated-click">
          settings
        </i>
      </nav>
    );
  }
}
export default AppNavbar;
