import {Redirect} from "react-router-dom";
import React from "react";
import {APP_HOME_ROUTE} from "../utils/routes";
// import { userIsLoged } from "./userIsLoged";

export function redirecToApp() {
  return <Redirect to={APP_HOME_ROUTE} />;
}
export function redirecToAppIfUserIsLoged() {
  // if (userIsLoged()) {
  redirecToApp();
  // }
}
