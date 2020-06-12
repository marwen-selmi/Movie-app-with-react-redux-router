import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../component/Home";
import MovieDescription from "../component/MovieDescription";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/movie-description/:id" component={MovieDescription} exact />
    </Switch>
  </Router>
);

export default AppRouter;
