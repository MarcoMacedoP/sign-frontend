import React from "react";
import {Route, Redirect} from "react-router-dom";
//routes
import {LANDING_ROUTE} from "../../utils/routes";

/**
 *
 * @param {*} userIsLoged the boolean that determinates if an user is loged
 * @param {*} args the props that are going to be pased to Route component
 * @param {*} route (optional) the route to be redirected, default redirect to Landing route
 * @returns <Redirect to={LANDING_ROUTE} /> if user is not loged
 *             OR <Route {...args} /> if is loged
 */
export const PrivateRoute = ({userIsLoged, route, ...args}) =>
  userIsLoged ? (
    <Route {...args} />
  ) : (
    <Redirect to={route || LANDING_ROUTE} />
  );
