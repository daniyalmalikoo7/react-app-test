import React from 'react';
import './App.css';
//import Home from './pages/Home';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Charts from './pages/Charts';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact={true} path='/charts' component={Charts} />
          <Redirect exact from="/" to="charts" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
