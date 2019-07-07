import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from  'react-router-dom';
function App() {
  return ( 
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Navbar}/>
    </Switch>
  </BrowserRouter>

  );
}

export default App;
