// Components
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout";
import {PrivateRoute, PublicRoute} from "./global/components";
import {LastLocationProvider} from "react-router-last-location";
// Pages
import {Landing} from "./LandingPage";
import {SignupContainer} from "./Authentication";
import LoginContainer from "./Authentication/components/LoginContainer";
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
import {RemindersList} from "./Reminders";
import {PageNotFound} from "./global/components/PageNotFound";
// Routes
import {
  ADD_CLIENT_ROUTE,
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  PROVIDERS_ROUTE,
  REMINDERS_ROUTE,
  SIGNUP_ROUTE,
  PROVIDER_PAGE_ROUTE,
  CLIENT_PAGE_ROUTE
} from "./global/utils/routes";
import ProjectsRoutes from "./Projects/routes";
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
            <PublicRoute
              userIsLoged={user.isLoged}
              exact
              path={LOGIN_ROUTE}
              component={LoginContainer}
            />
            <PublicRoute
              userIsLoged={user.isLoged}
              exact
              path={SIGNUP_ROUTE}
              component={SignupContainer}
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
            <ProjectsRoutes />
            <PrivateRoute
              userIsLoged={user.isLoged}
              component={Test}
              exact
              path="/test/"
            />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </LastLocationProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  debugger;
  return {user: state.user};
};

export default connect(
  mapStateToProps,
  null
)(App);
