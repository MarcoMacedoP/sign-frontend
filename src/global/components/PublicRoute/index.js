import React from "react";
import {PrivateRoute} from "../PrivateRoute";
//routes
import {APP_HOME_ROUTE} from "../../utils/routes";

/** Redirect to app home if user is loged.
 *
 *  @param {*} userIsLoged the boolean that determinates if an user is loged
 * @param {*} args the props that are going to be pased to Route component
 */
export const PublicRoute = ({userIsLoged, ...args}) => (
  <PrivateRoute
    userIsLoged={userIsLoged ? false : true}
    route={APP_HOME_ROUTE}
    {...args}
  />
);
