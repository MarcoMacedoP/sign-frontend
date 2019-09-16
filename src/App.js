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
import { PageNotFound } from "./global/components/PageNotFound";
// Routes
import {
  landingRoute,
  loginRoute,
  signupRoute,
  appHomeRoute,
  providersRoute,
  providerPageRoute,
  clientsRoute,
  addClientRoute,
  clientPageRoute,
  remindersRoute
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
            <Route exact path={landingRoute} component={Landing} />
            <Route exact path={loginRoute} component={LoginContainer} />
            <Route exact path={signupRoute} component={SignupContainer} />
            <Route exact path={appHomeRoute} component={Dashboard} />
            <Route
              exact
              path={providersRoute}
              component={ProviderListContainer}
            />
            <Route
              exact
              path={providerPageRoute}
              component={ProviderPageContainer}
            />
            <Route exact path={clientsRoute} component={ClientsList} />
            <Route exact path={addClientRoute} component={AddClient} />
            <Route exact path={clientPageRoute} component={ClientPage} />
            <Route exact path={remindersRoute} component={RemindersList} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
