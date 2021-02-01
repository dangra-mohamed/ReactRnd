import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ToDos from "./components/ToDos/ToDos";
import ToDo from "./components/ToDos/ToDo";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
          <li>
            <Link to="/todos">To Dos</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/todos"><ToDos /></Route>
        <Route path="/todo/:id"><ToDo /></Route>
      </Switch>
    </div>
  );
}
