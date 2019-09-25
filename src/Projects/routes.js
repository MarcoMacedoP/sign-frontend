//libs
import React from "react";
import {Route, Switch} from "react-router-dom";
//components
import ProjectPageContainer from "./components/ProjectPageContainer";
import ProjectListContainer from "./components/ProjectListContainer";
//routes
import {
  PROJECTS_PAGE_ROUTE,
  PROJECTS_ROUTE,
  ADD_PROJECTS_ROUTE
} from "../global/utils/routes";
import AddProjectPageContainer from "./components/AddProjectPageContainer";

export default () => (
  <Switch>
    <Route
      exact
      path={PROJECTS_ROUTE}
      component={ProjectListContainer}
    />
    <Route
      exact
      path={ADD_PROJECTS_ROUTE}
      component={AddProjectPageContainer}
    />
    <Route
      exact
      path={PROJECTS_PAGE_ROUTE}
      component={ProjectPageContainer}
    />
  </Switch>
);
