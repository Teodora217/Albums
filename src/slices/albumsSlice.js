import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
  name: 'albums',
  initialState: [],
  reducers: {
    setAlbums: (state, action) => {
      return action.payload
    }
  }
});

export const { setAlbums } = albumsSlice.actions;

export default albumsSlice.reducer;