import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Game from './components/Game';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark" style={{height: '46px'}}>
          <Navbar.Brand href="#home">XO - Caro</Navbar.Brand>
          <Nav className="mr-auto">
            <></>
          </Nav>
          <Nav>
            <Link to="/" style={{color: 'white', textDecoration: 'none', marginRight: '5px'}}>Home</Link>
            <Link to="/login" style={{color: 'white', textDecoration: 'none', marginRight: '5px', marginLeft: '10px'}}>Login</Link>
            <Link to="/register" style={{color: 'white', textDecoration: 'none', marginRight: '5px', marginLeft: '10px'}}>Register</Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact  path="/login">
            <LoginView />
          </Route>
          <Route exact  path="/register">
            <RegisterView />
          </Route>
          <Route exact  path="/">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
