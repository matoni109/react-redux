import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const couterReducer = (state = initialState, action) => {
  //  // return new state
  // do not mutate the STATE !!!
  // do not mutate the STATE !!!
  //
  // ALWAYS overite by returning a new state object
  //
  if (action.type === "up") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "down") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  // toggle reducer
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  // return old state
  return state;
};

// store need to know which reducer changes itself dont use ()
// give it a pointer to the Reducer
const store = createStore(couterReducer);

// subs function
// takes the current state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subcription dont use ()
store.subscribe(counterSubscriber);

//  dispatch acton is a object
store.dispatch({
  type: "up",
});

store.dispatch({
  type: "down",
});

export default store;
