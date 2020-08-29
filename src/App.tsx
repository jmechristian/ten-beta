import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Start from './pages/Start';
import FormContainer from './pages/FormContainer';
import Entries from './pages/Entries';
import Entry from './pages/Entry';
import './App.less';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/start' exact>
          <Start />
        </Route>
        <Route path='/inventory' exact>
          <FormContainer />
        </Route>
        <Route path='/entries' exact>
          <Entries />
        </Route>
        <Route path='/entries/:entryId'>
          <Entry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
