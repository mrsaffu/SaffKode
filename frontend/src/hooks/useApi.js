import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useApi — wraps any API-module function with the loading/data/error
 * lifecycle every feature page needs. `deps` re-triggers the call (e.g.
 * when a filter or slug changes); `retry()` lets ErrorState re-run it.
 */
export function useApi(apiFn, deps = []) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const run = useCallback(() => {
    setIsLoading(true);
    setError(null);

    apiFn()
      .then((response) => {
        if (!isMounted.current) return;
        setData(response?.data ?? response);
      })
      .catch((err) => {
        if (!isMounted.current) return;
        setError(err);
      })
      .finally(() => {
        if (!isMounted.current) return;
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    run();
  }, [run]);

  return { data, error, isLoading, retry: run };
}

export default useApi;
