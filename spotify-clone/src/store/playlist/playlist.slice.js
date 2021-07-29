import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

const { setToken } = playlistSlice.actions;
const playlistReducer = playlistSlice.reducer;

export { playlistSlice };
export { setToken };
export default playlistReducer;