import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue } from "../store/counterSlice";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  const onIncrementByValue = () => {
    const value = parseInt(prompt("Enter value to increment by:"));
    if (isNaN(value)) {
      alert("Invalid value");
      return;
    }
    dispatch(incrementByValue(value));
  };

  return (
    <>
      <h1>App</h1>
      <hr />
      <span>counter is: {counter}</span>
      <button className="btn btn-primary" onClick={onIncrement}>
        +1
      </button>
      <button className="btn btn-primary" onClick={onDecrement}>
        -1
      </button>
      <button className="btn btn-primary" onClick={onIncrementByValue}>
        Increment by value
      </button>
    </>
  );
};
