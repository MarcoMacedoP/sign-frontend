import React from 'react';
import {BrowserRouter, Switch, Route} from  'react-router-dom';

import Layout from './components/Layout';
import MainPage from './pages/static/main-page';
import Nosotros from './pages/static/Nosotros';

function App() {
  return ( 
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/nosotros" component={Nosotros}/>
      </Switch>
    </Layout>
  </BrowserRouter>

  );
}

export default App;
