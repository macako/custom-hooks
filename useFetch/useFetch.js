import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const request = await fetch(url);
    const data = await request.json();

    setState({
      ...state,
      data,
      isLoading: false,
    });
  };

  const onNextQuote = () => {
    getFetch();
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return { ...state, onNextQuote };
};
