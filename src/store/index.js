// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// counter SLICE
const initialCounterState = { counter: 0, showCounter: true };

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

// AUTH SLICE
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // config map of reducers
  //
  // reducer: { counter: counterSlice.reducer },
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// export / setup actions below
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// const couterReducer = (state = initialState, action) => {
//   //  // return new state
//   // do not mutate the STATE !!!
//   // do not mutate the STATE !!!
//   //
//   // ALWAYS overite by returning a new state object
//   //
//   if (action.type === "up") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "down") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   // toggle reducer
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   // return old state
//   return state;
// };

// store need to know which reducer changes itself dont use ()
// give it a pointer to the Reducer
// const store = createStore(couterReducer);

// subs function
// takes the current state
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// // subcription dont use ()
// store.subscribe(counterSubscriber);

// //  dispatch acton is a object
// store.dispatch({
//   type: "up",
// });

// store.dispatch({
//   type: "down",
// });
