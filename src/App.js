//Components
import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Pages
import { Landing } from "./LandingPage";
import { LoginContainer, Signup } from "./Authentication";
import { Layout } from "./Layout";
import { Test } from "./Test";
import { Dashboard } from "./Dashboard";
import {
  ProviderPageContainer,
  ProviderListContainer
} from "./Providers";
import { page404 } from "./404";
//Resources
import { GlobalStyles } from "./global/styles/GlobalStyles";
//functions
function reducer(state, action) {
  console.log("Soy el reducer", action);
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
  const initialState = { userLoged: false };
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout userLoged={state.userLoged}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            component={() => <LoginContainer dispatch={dispatch} />}
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/app" component={Dashboard} />
          <Route
            exact
            path="/app/providers/"
            component={ProviderListContainer}
          />
          <Route
            exact
            path="/app/providers/:providerId"
            component={ProviderPageContainer}
          />
          <Route exact path="/test" component={Test} />
          <Route component={page404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
