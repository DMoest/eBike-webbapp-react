import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

// Pages
import Main from "./components/Main/Main";
import Rent from "./components/Rent/Rent";
import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage/HomePage";
import BikeActive from "./components/BikeActive/BikeActive";
import Travels from "./components/Travels/Travels";
import Profile from "./components/Profile/Profile";

// Global components
// import Nav from "./components/Global/Nav/Nav";

// CSS
import "./App.css";
import "./css/Global.css";

const App = () => {
  const root = useSelector((state) => state.root);

  return (
    <>
      {
        (console.log(root),
        !root.auth.authToken && !root.rent.bike ? (
          <>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </>
        ) : root.auth.authToken && root.rent.bike ? (
          <>
            <Route exact path="/" component={BikeActive} />
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/travels" component={Travels} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </>
        ))
      }
    </>
  );
};

export default App;
