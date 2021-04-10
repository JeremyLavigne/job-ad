import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./Home";
import Header from "./Header";
import HirePage from "./HirePage";
import NoMatch from "./NoMatch";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hire" component={HirePage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
