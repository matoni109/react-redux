// import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showDivToggle = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  // logic handler
  const upHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: UNIQUE, payload: 10 }
    // dispatch({
    //   type: "increase",
    //   amount: 5,
    // });
  };

  const downHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showDivToggle && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={upHandler}>Up</button>
            <button onClick={increaseHandler}>Up by 5</button>
            <button onClick={downHandler}>Down</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// CLASS BASED

// class Counter extends Component {
//   upHandler = () => {
//     this.props.up();
//   };

//   downHandler = () => {
//     this.props.down();
//   };

//   toggleCounterHandler = () => {};

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.upHandler.bind(this)}>Up</button>
//           <button onClick={this.downHandler.bind(this)}>Down</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     up: () => dispatch({ type: "up" }),
//     down: () => dispatch({ type: "down" }),
//   };
// };

// export default connect()(Counter);
