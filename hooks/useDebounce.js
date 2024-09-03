import { useEffect, useCallback } from "react";

function useDebounce(callback, delay) {
  const debouncedCallback = useCallback(
    (...args) => {
      const handler = setTimeout(() => {
        callback(...args);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [callback, delay]
  );

  return debouncedCallback;
}

export default useDebounce;
