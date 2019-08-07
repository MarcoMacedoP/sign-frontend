import React from "react";
import { Link } from "react-router-dom";

import "./styles/LateralMenu.scss";

const LateralMenuItem = (props) => (
  <div className="LateralMenu__nav-item">
    <i className="material-icons">all_inbox</i>
    <Link
      to={props.direction}
      className="LateralMenu__nav-tittle"
      onClick={props.onClick}>
      {props.name}
    </Link>
    <i className="material-icons">chevron_right</i>
  </div>
);

function LateralMenu(props) {
  if (props.isShowed) {
    return (
      <aside className="LateralMenu ">
        <header className="LateralMenu__user-info">
          <div className="LateralMenu__profile-img" />
          <div className="LateralMenu__username">{props.username || "Username"}</div>
          <div className="LateralMenu__location subtitle">
            {props.location || "Location"}
          </div>
        </header>
        <nav className="LateralMenu__nav">
          <LateralMenuItem
            name="Inicio"
            direction="/app/"
            onClick={props.handleMenu}
          />
          <LateralMenuItem
            name="Proyectos"
            direction="/app/projects"
            onClick={props.handleMenu}
          />
        </nav>
      </aside>
    );
  } else {
    return false;
  }
}

export default LateralMenu;
