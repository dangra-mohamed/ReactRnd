import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ToDos from "./components/ToDos/ToDos";
import ToDo from "./components/ToDos/ToDo";
import Employees from "./components/Employees/Employees";
import Employee from "./components/Employees/Employee";

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
            <Link to="/employees">Employees</Link>
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
        <Route path="/employees"><Employees /></Route>
        <Route path="/employee/:id"><Employee /></Route>
      </Switch>
    </div>
  );
}
