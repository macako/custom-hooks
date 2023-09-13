import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const onAddCounter = (value = 1) => setCounter((current) => current + value);
  const onSubstractCounter = (value = 1) =>
    setCounter((current) => current - value);
  const onResetCounter = () => setCounter(initialValue);

  return { counter, onAddCounter, onSubstractCounter, onResetCounter };
};
