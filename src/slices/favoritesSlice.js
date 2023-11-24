import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return [...state, action.payload];
    },
    removeFavorites: (state, action) => {
      return state.filter((favorite) => favorite.id !== action.payload);
    },
  },
});

export const { setFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
