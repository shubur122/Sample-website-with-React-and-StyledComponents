import React from 'react';
import './App.css';
import {BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/'  component={ Home }/>
        <Route exact path ='/signin'  component={ SignInPage }/>
      </Switch>
    </Router>
  );
}

export default App;
