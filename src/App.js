import './App.css';
import HomePage from './components/HomePage/HomePage/HomePage';
import {Switch, Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Rent from './components/Rent/Rent';
import Auth from './components/Auth/Auth';
import BikeActive from './components/BikeActive/BikeActive';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/rent" component={Rent} />
      <Route exact path="/bikeActive" component={BikeActive} />
    </Switch>
  );
}

export default App;
