// Components
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout";
import {PrivateRoute, PublicRoute} from "./global/components";
import {LastLocationProvider} from "react-router-last-location";
// Pages
import {Landing} from "./LandingPage";
import {
  AddClient,
  ClientsList,
  ClientPage
} from "./Clients/components/";
import {Dashboard} from "./Dashboard";
import {
  ProviderPageContainer,
  ProviderListContainer
} from "./Providers";

//--------------teams pages----------------------------
import TeamsList from "./Teams/components/TeamsList";
import AddTeam from "./Teams/components/AddTeam";
import Team from "./Teams/components/Team";
//--------------end teams page--------------------------

//--------------projects pages--------------------------
import ProjectList from "./Projects/components/ProjectListContainer";
import ProjectPage from "./Projects/components/ProjectPageContainer";
import AddProject from "./Projects/components/AddProjectPageContainer";
//--------------end projects pages----------------------

//--------------user pages--------------------------
import EditUser from "./Users/components/EditUser";
import LoginPage from "./Users/components/LoginContainer";
import SignupPage from "./Users/components/SignupContainer";
import UserPage from "./Users/components/UserPage";
//--------------end user pages-----------------------

import {RemindersList} from "./Reminders";
import {PageNotFound} from "./global/components/PageNotFound";
// Routes
import {
  ADD_CLIENT_ROUTE,
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  LANDING_ROUTE,
  PROVIDERS_ROUTE,
  REMINDERS_ROUTE,
  PROVIDER_PAGE_ROUTE,
  CLIENT_PAGE_ROUTE,
  USER_PAGE,
  EDIT_USER,
  SIGNUP_ROUTE,
  LOGIN_ROUTE,
  PROJECTS_PAGE_ROUTE,
  ADD_PROJECTS_ROUTE,
  PROJECTS_ROUTE,
  TEAMS_LIST,
  ADD_TEAM,
  TEAM_PAGE
} from "./global/utils/routes";
// Resources
import {GlobalStyles} from "./global/styles/GlobalStyles";
//redux
import {connect} from "react-redux";

import {Test} from "./Test";

function App({user}) {
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <GlobalStyles />
        <Layout>
          <Switch>
            <PublicRoute
              userIsLoged={user.isLoged}
              exact
              path={LANDING_ROUTE}
              component={Landing}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={APP_HOME_ROUTE}
              component={Dashboard}
            />

            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={PROVIDERS_ROUTE}
              component={ProviderListContainer}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={PROVIDER_PAGE_ROUTE}
              component={ProviderPageContainer}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={CLIENTS_ROUTE}
              component={ClientsList}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={ADD_CLIENT_ROUTE}
              component={AddClient}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={CLIENT_PAGE_ROUTE}
              component={ClientPage}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={REMINDERS_ROUTE}
              component={RemindersList}
            />
            {/*------------user routes -------------------*/}
            <PrivateRoute
              userIsLoged={user.isLoged}
              component={UserPage}
              exact
              path={USER_PAGE}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              component={EditUser}
              exact
              path={EDIT_USER}
            />
            <PublicRoute
              userIsLoged={user.isLoged}
              component={SignupPage}
              exact
              path={SIGNUP_ROUTE}
              routeToBeRedirected={`${EDIT_USER}?firstTime=true`}
            />
            <PublicRoute
              userIsLoged={user.isLoged}
              component={LoginPage}
              exact
              path={LOGIN_ROUTE}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              component={Test}
              exact
              path="/test/"
            />
            {/*------------end user routes -------------------*/}

            {/*------------projects routes -------------------*/}
            <Route
              exact
              path={PROJECTS_ROUTE}
              component={ProjectList}
            />
            <Route
              exact
              path={ADD_PROJECTS_ROUTE}
              component={AddProject}
            />
            <Route
              exact
              path={PROJECTS_PAGE_ROUTE}
              component={ProjectPage}
            />
            {/*------------end projects routes -----------------*/}

            {/*------------teams routes ------------------------*/}
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={TEAMS_LIST}
              component={TeamsList}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={ADD_TEAM}
              component={AddTeam}
            />
            <PrivateRoute
              userIsLoged={user.isLoged}
              exact
              path={TEAM_PAGE}
              component={Team}
            />
            {/*------------end teams routes --------------------*/}

            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {user: state.user};
};

export default connect(
  mapStateToProps,
  null
)(App);
