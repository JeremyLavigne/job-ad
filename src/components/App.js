import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

// Components
import Header from "./Header";
import Loading from "./Loading";

const AsyncHirePage = importedComponent(() => import("./pages/HirePage"), {
  LoadingComponent: Loading,
});

const AsyncHomePage = importedComponent(() => import("./pages/Home"), {
  LoadingComponent: Loading,
});

const AsyncNoMatch = importedComponent(() => import("./NoMatch"), {
  LoadingComponent: Loading,
});

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AsyncHomePage} />
        <Route exact path="/hire" component={AsyncHirePage} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
