import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Rent from './components/Rent/Rent';
import Auth from './components/Auth/Auth';
import HomePage from './components/HomePage/HomePage/HomePage';
import BikeActive from './components/BikeActive/BikeActive';

import './App.css';

const App = () => {
  const root = useSelector((state) => state.root);


  return (
    <>
      { 
      console.log(root),
      !root.auth.authToken && !root.rent.bike ? (
        <>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </>
      ):
      root.auth.authToken && root.rent.bike ? (
          <>
              <Route exact path="/" component={BikeActive} />
          </>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/rent" component={Rent} />
            </Switch>
          </>
        )}
      </>
    )
}

export default App;
