import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Game from './components/Game'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login">
            <></>
          </Route>
          <Route path="/register">
            <></>
          </Route>
          {/* <Route path="/">
            <Game />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
