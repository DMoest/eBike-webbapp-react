import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import Main from "@/pages/Main/Main";
import Rent from "@/pages/Rent/Rent";
import Bike from "@/pages/Bike/Bike";
import Auth from "@/pages/Auth/Auth";
import HomePage from "@/pages/HomePage/HomePage";
import BikeActive from "@/pages/BikeActive/BikeActive";
import Travels from "@/pages/Travels/Travels";
import Profile from "@/pages/Profile/Profile";

// CSS
import "./css/Global.css";

const App = () => {
  const root = useSelector((state) => state.root);

  return (
    <>
      {
        (console.log(root),
        !root.auth.authToken && !root.rent.bike ? (
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/auth" component={Auth} />
              </Switch>
            </BrowserRouter>
          </>
        ) : root.auth.authToken && root.rent.bike ? (
          <>
            <Route exact path="/" component={BikeActive} />
          </>
        ) : (
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/rent" component={Rent} />
                <Route exact path="/bike" component={Bike} />
                <Route exact path="/travels" component={Travels} />
                <Route exact path="/profile" component={Profile} />
              </Switch>
            </BrowserRouter>
          </>
        ))
      }
    </>
  );
};

export default App;
