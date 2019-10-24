// Components
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout";
import {
  PrivateRoute,
  PublicRoute,
  Loading
} from "./global/components";
//hooks
import {LastLocationProvider} from "react-router-last-location";
import {useEffect, useState} from "react";
//*******************Pages****************
import {Landing} from "./LandingPage";

import {Dashboard} from "./Dashboard";
//-------------providers pages-------------
import ProviderPage from "./Providers/components/ProviderPage";
import AddProvider from "./Providers/components/AddProvider";
import ProvidersList from "./Providers/components/ProviderList";
//--------------clients pages----------------------------
import AddClient from "./Clients/components/AddClient";
import ClientPage from "./Clients/components/ClientPage";
import ClientsList from "./Clients/components/ClientsList";
//--------------end clients pages-------------------------

//--------------teams pages----------------------------
import TeamsList from "./Teams/components/TeamsList";
import AddTeam from "./Teams/components/AddTeam";
import Team from "./Teams/components/Team";
//--------------end teams page--------------------------

//--------------projects pages--------------------------
import ProjectList from "./Projects/components/ProjectList";
import ProjectPage from "./Projects/components/ProjectPageContainer";
import AddProject from "./Projects/components/AddProjectPageContainer";
//--------------end projects pages----------------------

//--------------user pages--------------------------
import EditUser from "./Users/components/EditUser";
import LoginPage from "./Users/components/LoginContainer";
import SignupPage from "./Users/components/SignupContainer";
import UserPage from "./Users/components/UserPage";
//--------------end user pages-----------------------

//--------------reminders pages-----------------------
import RemindersList from "./Reminders/components/RemindersList";
//--------------end reminders pages-----------------------
import {PageNotFound} from "./global/components/PageNotFound";

// Routes
import {
  ADD_CLIENT_ROUTE,
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  LANDING_ROUTE,
  PROVIDERS_ROUTE,
  ADD_PROVIDER_ROUTE,
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
//functions
import {getCookieByName} from "./global/functions/cookies";
function App({userIsLoged, userHasLogout, loginUser}) {
  const [userHasSession, setUserHasSession] = useState(false);

  //check if user has a session searching cookie token
  useEffect(() => {
    const userHasAccessToken = getCookieByName("token");
    if (userHasAccessToken) {
      setUserHasSession(true);
    }
  }, []);

  /*if user isn't loged calls server to get user info
    from session, if isn't a session then do [xd]
  */
  useEffect(() => {
    if (!userIsLoged && userHasSession) {
      callApi("/users/session", {
        method: "post"
      })
        .then(
          response =>
            response.statusCode === 200 &&
            loginUser("success", response.data)
        )
        .catch(error =>
          console.log("Usuario no restaurado de la sessión", error)
        );
    }
  }, [userHasSession, userIsLoged, loginUser]);
  //if user has logout reload the window.
  //This fix issues with storing session cookie
  useEffect(() => {
    if (userHasLogout) {
      window.location.reload();
    }
  }, [userHasLogout]);
  //shows a loading status if user hasSession and isn't logged
  //change the message depending if user has log out
  if (userHasSession && !userIsLoged) {
    return <Loading />;
  }

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
              component={ProvidersList}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={ADD_PROVIDER_ROUTE}
              component={AddProvider}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={PROVIDER_PAGE_ROUTE}
              component={ProviderPage}
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
            {/*------------reminders routes -------------------*/}
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={REMINDERS_ROUTE}
              component={RemindersList}
            />
            {/*------------end reminders routes -------------------*/}

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
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={PROJECTS_ROUTE}
              component={ProjectList}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
              exact
              path={ADD_PROJECTS_ROUTE}
              component={AddProject}
            />
            <PrivateRoute
              userIsLoged={userIsLoged}
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
