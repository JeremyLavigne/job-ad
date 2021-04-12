import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

// Components
import Header from "./Header";
import Loading from "./Loading";
import Home from "./pages/Home";

const AsyncHirePage = importedComponent(() => import("./pages/HirePage"), {
  LoadingComponent: Loading,
});

const AsyncNoMatch = importedComponent(() => import("./NoMatch"), {
  LoadingComponent: Loading,
});

const App = () => {
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <Router>
      <Header cartNumber={cartNumber} />
      <Switch>
        <Route exact path="/">
          <Home setCartNumber={setCartNumber} cartNumber={cartNumber} />
        </Route>
        <Route exact path="/hire" component={AsyncHirePage} />
        <Route component={AsyncNoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
