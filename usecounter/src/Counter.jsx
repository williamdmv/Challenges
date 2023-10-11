import React, { useState } from 'react';
import useCounter from './Usecounter';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;