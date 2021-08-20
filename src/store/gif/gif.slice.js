import { createSlice } from '@reduxjs/toolkit';

// state
const initialState = {
  query: '',
};

// slice
const gifSlice = createSlice({
  name: 'gif',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

// actions
const { setQuery } = gifSlice.actions;

// reducers
const gifReducer = gifSlice.reducer;

export { gifSlice };
export { setQuery };
export default gifReducer;
