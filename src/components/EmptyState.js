import React from "react";
import { Link } from "react-router-dom";

import "./styles/EmptyState.scss";
import ilustration from "./images/EmptyState__illustration.svg";
const EmptyState = (props) => (
  <div className="EmptyState">
    <h1 className="headline-three">{props.tittle}</h1>
    <p className="headline-five">{props.description}</p>
    <Link to={props.callToAction} className="button">
      {props.callToActionMessage}
    </Link>
    <img src={ilustration} alt="Empty State Ilustration" />
  </div>
);
export default EmptyState;
