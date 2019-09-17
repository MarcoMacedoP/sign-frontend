// Components
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import { Provider } from "react-redux";
// Pages
import { Landing } from "./LandingPage";
import { LoginContainer, SignupContainer } from "./Authentication";
import { AddClient, ClientsList, ClientPage } from "./Clients/components/";
import { Dashboard } from "./Dashboard";
import { ProviderPageContainer, ProviderListContainer } from "./Providers";
import { RemindersList } from "./Reminders";
import ProjectListContainer from "./Projects/components/ProjectListContainer";
import AddProjectPage from "./Projects/components/AddProjectPageContainer";
import { PageNotFound } from "./global/components/PageNotFound";
// Routes
import {
  ADD_CLIENT_ROUTE,
  APP_HOME_ROUTE,
  CLIENTS_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  PROJECTS_ROUTE,
  PROVIDERS_ROUTE,
  REMINDERS_ROUTE,
  SIGNUP_ROUTE,
  PROVIDER_PAGE_ROUTE,
  CLIENT_PAGE_ROUTE,
  ADD_PROJECTS_ROUTE
} from "./global/utils/routes";
// Resources
import { GlobalStyles } from "./global/styles/GlobalStyles";
//redux
import store from "./global/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Switch>
            <Route exact path={LANDING_ROUTE} component={Landing} />
            <Route exact path={LOGIN_ROUTE} component={LoginContainer} />
            <Route exact path={SIGNUP_ROUTE} component={SignupContainer} />
            <Route exact path={APP_HOME_ROUTE} component={Dashboard} />
            <Route
              exact
              path={PROVIDERS_ROUTE}
              component={ProviderListContainer}
            />
            <Route
              exact
              path={PROVIDER_PAGE_ROUTE}
              component={ProviderPageContainer}
            />
            <Route exact path={CLIENTS_ROUTE} component={ClientsList} />
            <Route exact path={ADD_CLIENT_ROUTE} component={AddClient} />
            <Route exact path={CLIENT_PAGE_ROUTE} component={ClientPage} />
            <Route exact path={REMINDERS_ROUTE} component={RemindersList} />
            <Route
              exact
              path={PROJECTS_ROUTE}
              component={ProjectListContainer}
            />
            <Route exact path={ADD_PROJECTS_ROUTE} component={AddProjectPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
