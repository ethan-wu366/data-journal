import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Data from './components/Data';
import Journal from './components/Journal';
import Settings from './components/Settings';

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Landing/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/journal">
            <Journal />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
