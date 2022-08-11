import { useState, useEffect } from "react";

export default function useDebounce(initVal = "", delay = 1000) {
  const [debVal, setDebVal] = useState(initVal);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebVal(initVal);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [debVal, initVal, delay]);

  return debVal;
}
