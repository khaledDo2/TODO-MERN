import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar } from "../components";
import { TodosList, TodosInsert, TodosUpdate } from "../pages";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/todos/list" exact component={TodosList} />
        <Route path="/todos/create" exact component={TodosInsert} />
        <Route path="/todos/update/:id" exact component={TodosUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
