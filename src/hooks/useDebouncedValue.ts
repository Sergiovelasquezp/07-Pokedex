import {useEffect, useState} from 'react';

export const useDebouncedValue = (
  inputValue: string = '',
  time: number = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, time);
    return () => {
      clearTimeout(timeOut);
    };
  }, [inputValue, time]);

  return {debouncedValue};
};
