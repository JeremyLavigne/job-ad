import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Header from "./Header";
import HirePage from "./pages/HirePage";
import NoMatch from "./NoMatch";
import Home from "./pages/Home";

const App = () => {
  const [cartNumber, setCartNumber] = useState(0);
  const [activePosition, setActivePosition] = useState("Fullstack");
  const [activeWorktime, setActiveWorktime] = useState("Full Time");

  return (
    <Router>
      <Header cartNumber={cartNumber} />
      <Switch>
        <Route exact path="/">
          <Home
            cartNumber={cartNumber}
            setCartNumber={setCartNumber}
            activePosition={activePosition}
            setActivePosition={setActivePosition}
            activeWorktime={activeWorktime}
            setActiveWorktime={setActiveWorktime}
          />
        </Route>

        <Route exact path="/hire">
          <HirePage
            activePosition={activePosition}
            activeWorktime={activeWorktime}
            cartNumber={cartNumber}
          />
        </Route>

        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
