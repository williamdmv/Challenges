import React, { useState, useEffect } from 'react';

const CounterHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return { counter, increment };
};

const MultipleCustomHooks = ({ counter }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [counter]);

  return (
    <div>
      <button onClick={CounterHook.increment}>Increment Counter</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <blockquote dangerouslySetInnerHTML={{ __html: data[0].quote }} />
      )}
    </div>
  );
};

export default MultipleCustomHooks;
