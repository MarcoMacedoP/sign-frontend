//libs
import React from "react";
import { Route } from "react-router-dom";
//components
import ProjectPage from "./components/ProjectPage";
import ProjectListContainer from "./components/ProjectListContainer";
import AddProjectPage from "./components/AddProjectPageContainer";
//routes
import {
  PROJECTS_PAGE_ROUTE,
  PROJECTS_ROUTE,
  ADD_PROJECTS_ROUTE
} from "../global/utils/routes";

export default () => (
  <>
    <Route exact path={PROJECTS_PAGE_ROUTE} component={ProjectPage} />
    <Route exact path={PROJECTS_ROUTE} component={ProjectListContainer} />
    <Route exact path={ADD_PROJECTS_ROUTE} component={AddProjectPage} />
  </>
);
