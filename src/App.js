import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from "./layouts/MainLayout";
import { Landing } from "./pages/Landing/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppLayout from "./layouts/AppLayout";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        {/* Rutas de la pagina estatica */}

        <RouteWithLayout
          exact
          path="/"
          component={Landing}
          layout={MainLayout}
        />
        <RouteWithLayout
          exact
          path="/login"
          component={Login}
          layout={MainLayout}
        />
        <RouteWithLayout
          exact
          path="/welcome"
          component={Register}
          layout={MainLayout}
        />

        {/* Rutas de la webapp */}
        <RouteWithLayout
          exact
          path="/app"
          component={Dashboard}
          layout={AppLayout}
        />
        <RouteWithLayout
          exact
          path="/app/projects"
          component={Projects}
          layout={AppLayout}
        />
        <RouteWithLayout
          exact
          path="/app/projects/create"
          component={CreateProject}
          layout={AppLayout}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
