import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/static/main-page";
import Nosotros from "./pages/static/Nosotros";
import Objetivos from "./pages/static/Objetivos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WebApp from "./pages/WebApp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rutas de la pagina estatica */}

        <RouteWithLayout exact path="/" component={MainPage} layout={MainLayout} />
        <RouteWithLayout exact path="/nosotros" component={Nosotros} layout={MainLayout} />
        <RouteWithLayout exact path="/objetivos" component={Objetivos} layout={MainLayout} />
        <RouteWithLayout exact path="/login" component={Login} layout={MainLayout} />
        <RouteWithLayout exact path="/welcome" component={Register} layout={MainLayout} />

        {/* Rutas de la webapp */}
        <Route exact path="/app" component={WebApp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
// //   // <Route exact path="/" component={MainPage} />
// <Route exact path="/nosotros" component={Nosotros} />
//         <Route exact path="/objetivos" component={Objetivos} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/welcome" component={Register} />
