import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../store/counter/counter.slice';

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(20));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement} type="button">Increment</button>
      <button onClick={handleDecrement} type="button">Decrement</button>
      <button onClick={handleIncrementByAmount} type="button">Increment 20</button>
    </div>
  );
}

export default Counter;
