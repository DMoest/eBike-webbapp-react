import { combineReducers } from 'redux'
import authReducer from './components/Auth/authSlice';
import rentReducer from './components/Rent/rentSlice';

export default combineReducers({
  authReducer,
  rentReducer
})