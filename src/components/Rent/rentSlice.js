import { createSlice } from '@reduxjs/toolkit'

export const rentSlice = createSlice({
  name: 'rent',
  initialState: {
    bike: null,
  },
  reducers: {
    checkActiveRental: (state) => {
        // Todo: Make api call to retrieve active bike rental if any is active and add that bike to state.
        const activeRental = false;
        const activeBike = {id: "bike"}

        if (activeRental) {
            state.bike = activeBike
        }
    },
    rentBike: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.bike = { id: "bike1" };
    },
    returnBike: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.bike = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { rentBike, returnBike }  = rentSlice.actions

// export const rentBike = createAsyncThunk('posts/fetchPosts', async () => {
//     const response = await client.get('/fakeApi/posts')
//     return response.data
// });

export default rentSlice.reducer