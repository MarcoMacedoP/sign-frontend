import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing/Landing";
import { Login } from "./pages/Login/";
import { Signup } from "./pages/Signup/";
import { Layout } from "./components/Layout";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  const [login, setLogin] = React.useState(true);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout userLoged={login}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} setLogin={setLogin} />
          <Route exact path="/signup" component={Signup} setLogin={setLogin} />
          <Route exact path="/app" component={Dashboard} />
          <Route exact path="/app/projects" component={Projects} />
          <Route
            exact
            path="/app/projects/create"
            component={CreateProject}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
