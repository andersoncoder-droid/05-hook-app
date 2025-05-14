import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button className='btn btn-outline-success' onClick={increment}>
        +1
      </button>
      <button className='btn btn-outline-primary' onClick={reset}>
        Reset
      </button>
      <button className='btn btn-outline-danger' onClick={decrement}>
        -1
      </button>
    </>
  );
};
