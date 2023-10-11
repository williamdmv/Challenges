import { useState, useEffect } from 'react';

export function useFetch(url, headers) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, headers]);

  return {
    data,
    isLoading,
    hasError,
  };
}
