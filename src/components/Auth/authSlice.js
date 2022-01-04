import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authToken: null,
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.authToken = 'authenticated';
    },
    register: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.authToken = 'authenticated';
    },
    logout: (state) => {
      state.authToken = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register, logout } = authSlice.actions

export default authSlice.reducer