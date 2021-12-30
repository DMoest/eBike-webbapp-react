import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage/HomePage';
import Login from './components/Login/Login';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Rent from './components/Rent/Rent';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/rent" component={Rent} />

    </Switch>
  );
}

export default App;
