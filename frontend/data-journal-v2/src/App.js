import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Join from './components/Join';
import Footer from './components/Footer';
import Error from './components/404';

import './css/App.css';

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/sponsors">
              <Sponsors />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
            <Route default>
              <Error />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
  );
}

export default App;

