import { createSlice } from "@reduxjs/toolkit";

export const rentSlice = createSlice({
  name: "rent",
  initialState: {
    errorNotFound: null,
    errorOccupied: null,
    bike: null,
  },
  reducers: {
    checkActiveRental: (state) => {
      // Todo: Make api call to retrieve active bike rental if any is active and add that bike to state.
      const activeRental = false;
      const activeBike = { id: "bike" };

      if (activeRental) {
        state.bike = activeBike;
      }
    },
    rentBike: (state) => {
      // Todo: Async call to api and update state with bike or appropriate error.
      state.bike = { id: "bike1" };
    },
    returnBike: (state) => {
      // Todo: Async call to update currently rented bike to unoccupied status.
      state.bike = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { rentBike, returnBike } = rentSlice.actions;

// export const rentBike = createAsyncThunk('posts/fetchPosts', async () => {
//     const response = await client.get('/fakeApi/posts')
//     return response.data
// });

export default rentSlice.reducer;
