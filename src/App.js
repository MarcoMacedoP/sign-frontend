//Components
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Pages
import { Landing } from "./LandingPage";
import { Login, Signup } from "./Authentication";
import { Layout } from "./components/Layout";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import { Dashboard } from "./Dashboard";
import { Providers } from "./pages/ProviderList/";
import { ProviderInfo } from "./pages/ProviderInfo/";
import { page404 } from "./pages/page404/";
//Resources
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  const [ login, setLogin ] = React.useState(true);
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
          <Route exact path="/app/projects" component={Projects} />
          <Route
            exact
            path="/app/projects/create"
            component={CreateProject}
          />
          <Route exact path="/app/providers/" component={Providers} />
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
