import {useState, useEffect} from "react";

export function useError({updateErrorOnChange}) {
  const [error, setError] = useState(null);

  useEffect(() => setError(updateErrorOnChange), [
    updateErrorOnChange
  ]);
  const setErrorToNull = () => setError(null);
  return {error, setErrorToNull};
}
