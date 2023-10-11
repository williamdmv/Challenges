import React from 'react';
import {useFetch} from './UseFetch';

const MyComponent = () => {
  const { data, isLoading, hasError } = useFetch(
    'https://api.github.com/users/bard',
    {
      'Authorization': 'Bearer bwgdQLzW5-jjWGUiwiNauQMm4nLVcIl2TztChDPP4MqaHf8B0SOgH80fFJ95XiHuUggXFw',
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return <div>
    <h1>{data.name}</h1>
    <p>{data.login}</p>
    <p>{data.location}</p>
  </div>;
};

export default MyComponent;
