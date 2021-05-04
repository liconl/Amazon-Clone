import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SecondHeader from "./Components/SecondHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <SecondHeader />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
