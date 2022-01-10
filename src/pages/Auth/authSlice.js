import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
  },
  reducers: {
    login: (state) => {
      // Todo: Async call to api and uppdate state with user or appropriate error.
      state.authToken = 'authenticated';
    },
    register: (state) => {
        // Todo: Async call to api to register new user and update state accordingly.
        state.authToken = 'authenticated';
    },
    logout: (state) => {
      // Todo: Async call to api?
      state.authToken = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions

export default authSlice.reducer