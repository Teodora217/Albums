import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return [...state, action.payload];
    },
  },
});
console.log(favoritesSlice);
export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
