// Components
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout";
import {PrivateRoute, PublicRoute} from "./global/components";
import {LastLocationProvider} from "react-router-last-location";
// Pages
import {Landing} from "./LandingPage";

import {Dashboard} from "./Dashboard";
import {
  ProviderPageContainer,
  ProviderListContainer
} from "./Providers";
//hooks
import {useEffect} from "react";
//--------------clients pages----------------------------
import {AddClient, ClientPage} from "./Clients/components/";
import ClientsList from "./Clients/components/ClientsList";
//--------------end clients pages-------------------------

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
import {loginUser} from "./global/redux/actions/users";
import {callApi} from "./global/functions/callApi";
import {Test} from "./Test";

function App({userIsLoged, userHasLogout, loginUser}) {
  /*if user isn't loged calls server to get user info
    from session, if isn't a session then do [xd]
  */
  useEffect(() => {
    if (!userIsLoged) {
      //call api
      callApi("/users/session", {
        method: "post"
      })
        .then(response => {
          console.log(response);
          response.statusCode === 200 &&
            loginUser("success", response.data);
        })
        .catch(error =>
          console.log("Usuario no restaurado de la sessión", error)
        );
    }
  });
  useEffect(() => {
    if (userHasLogout) {
      window.location.reload();
    }
  }, userHasLogout);
  return (
    <BrowserRouter>
      <LastLocationProvider>
        <GlobalStyles />
        <Layout>
          <Switch>
            <PublicRoute
              userIsLoged={userIsLoged}
              exact
              path={LANDING_ROUTE}
              component={Landing}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={APP_HOME_ROUTE}
              component={Dashboard}
            />

            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={PROVIDERS_ROUTE}
              component={ProviderListContainer}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={PROVIDER_PAGE_ROUTE}
              component={ProviderPageContainer}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={CLIENTS_ROUTE}
              component={ClientsList}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={ADD_CLIENT_ROUTE}
              component={AddClient}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={CLIENT_PAGE_ROUTE}
              component={ClientPage}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={REMINDERS_ROUTE}
              component={RemindersList}
            />
            {/*------------user routes -------------------*/}
            <PrivateRoute
              userIsLoged={userIsLoged}
              component={UserPage}
              exact
              path={USER_PAGE}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              component={EditUser}
              exact
              path={EDIT_USER}
            />
            <PublicRoute
              userIsLoged={userIsLoged}
              component={SignupPage}
              exact
              path={SIGNUP_ROUTE}
              routeToBeRedirected={`${EDIT_USER}?firstTime=true`}
            />
            <PublicRoute
              userIsLoged={userIsLoged}
              component={LoginPage}
              exact
              path={LOGIN_ROUTE}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              component={Test}
              exact
              path="/test/"
            />
            {/*------------end user routes -------------------*/}

            {/*------------projects routes -------------------*/}
            <Route
              exactuserHasLogout
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
              userIsLoged={userIsLoged}
              exact
              path={TEAMS_LIST}
              component={TeamsList}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={ADD_TEAM}
              component={AddTeam}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
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

const mapStateToProps = state => ({
  userIsLoged: state.user.status.isLoged,
  userHasLogout: state.user.status.hasLogout
});

export default connect(
  mapStateToProps,
  {loginUser}
)(App);
