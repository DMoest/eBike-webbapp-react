import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Pages
import Main from "@/components/Main/Main";
import Rent from "@/pages/Rent/Rent";
import Bike from "@/pages/Bike/Bike";
import Auth from "@/components/Auth/Auth";
import HomePage from "@/pages/HomePage/HomePage";
import BikeActive from "@/pages/BikeActive/BikeActive";
import Travels from "@/pages/Travels/Travels";
import Profile from "@/pages/Profile/Profile";

// CSS
import "./css/Global.css";

const App = (props) => {
  const root = useSelector((state) => state.root);

  const { cookies } = props;

  const token = cookies.get("XSRF-TOKEN");

  return (
    <>
      {
        (
        !token.lenght() > 0 ? (
          <>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </>
        ) : root.rent.bike ? (
          <>
            <Route exact path="/" component={BikeActive} />
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/" render={() => <Main cookies={cookies} />} />
              <Route exact path="/rent" component={Rent} />
              <Route exact path="/bike" component={Bike} />
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
