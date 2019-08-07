import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Landing } from "./pages/Landing/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout } from "./components/Layout";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/welcome" component={Register} />
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
