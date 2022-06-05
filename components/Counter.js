import React from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import styles from "../styles/Counter.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button color='primary' variant='outlined'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span style={{ margin: "0 1rem" }}>{count}</span>
        <Button 
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
