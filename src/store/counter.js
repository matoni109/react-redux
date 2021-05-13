// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// counter SLICE
const initialCounterState = { counter: 0, showCounter: true };

// reducers
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // add methods here
    // toolkit clones the state
    // wow
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
