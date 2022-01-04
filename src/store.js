import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './components/Auth/authSlice';
import rentReducer from './components/Rent/rentSlice';

export default configureStore({
  reducer: {
      root: combineReducers({ auth: authReducer, rent: rentReducer})
  }
})