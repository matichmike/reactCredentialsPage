import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Header from './components/Header';
import Login from './components/Login';
import Loggedin from './components/Loggedin';
import Loggedout from './components/Loggetout';
import Signedup from './components/Signedup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Registration /> 
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/loggedin">
              <Loggedin />
            </Route>
            <Route path="/loggedout">
              <Loggedout />
            </Route>
            <Route path="/signedup">
              <Signedup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
