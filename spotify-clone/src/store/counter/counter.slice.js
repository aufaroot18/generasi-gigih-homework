import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  count: 0,
};

// slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// action
const { increment, decrement, incrementByAmount } = counterSlice.actions;

// reducer
const counterReducer = counterSlice.reducer;

export { counterSlice };
export { increment, decrement, incrementByAmount };
export default counterReducer;
