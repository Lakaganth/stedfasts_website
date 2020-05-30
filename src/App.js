import React from "react";
import "./App.css";

import { Switch, Route, withRouter } from "react-router-dom";

import { HomePage } from "./pages/homePage/HomePage";
import { ServicesPage } from "./pages/servicesPage/ServicesPage";
import { Navbar } from "./components/UI/Navbar";
import { AdvantagePage } from "./pages/advantagePage/AdvantagePage";
import { ContactPage } from "./pages/contactPage/ContactPage";

const App = withRouter(() => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/advantage" component={AdvantagePage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
});

export default App;
