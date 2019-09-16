// Components
import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./Layout";
// Pages
import { Landing } from "./LandingPage";
import { LoginContainer, SignupContainer } from "./Authentication";
import { AddClient, ClientsList, ClientPage } from "./Clients/components/";
import { Dashboard } from "./Dashboard";
import { ProviderPageContainer, ProviderListContainer } from "./Providers";
import { RemindersList } from "./Reminders";
import { page404 } from "./404";
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
// functions TODO put this in a single file
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, userLoged: true };
    case "logout":
      return { ...state, userLoged: false };
    default:
      throw new Error("Something happenend on global state 😧");
  }
}

function App() {
  const initialState = { userLoged: true };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout userLoged={state.userLoged}>
        <Switch>
          <Route exact path={landingRoute} component={Landing} />
          <Route
            exact
            path={loginRoute}
            component={() => <LoginContainer dispatch={dispatch} />}
          />
          <Route
            exact
            path={signupRoute}
            component={() => <SignupContainer dispatch={dispatch} />}
          />
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
          <Route component={page404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
