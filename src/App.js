//Components
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Pages
import { Landing } from "./LandingPage";
import { Login, Signup } from "./Authentication";
import { Layout } from "./Layout";

import { Dashboard } from "./Dashboard";
import { ProviderInfo, ProvidersList } from "./Providers";
import { page404 } from "./404";
//Resources
import { GlobalStyles } from "./global/styles/GlobalStyles";
function App() {
  const [ login, setLogin ] = React.useState(false);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout userLoged={login}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/login"
            component={Login}
            setLogin={setLogin}
          />
          <Route
            exact
            path="/signup"
            component={Signup}
            setLogin={setLogin}
          />
          <Route exact path="/app" component={Dashboard} />
          <Route
            exact
            path="/app/providers/"
            component={ProvidersList}
          />
          <Route
            exact
            path="/app/providers/:providerId"
            component={ProviderInfo}
          />

          <Route component={page404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
