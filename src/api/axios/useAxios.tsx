import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';

import type { UseAxiosProps, UseAxiosResult } from './useAxios.types';

export const useAxios = <T,>({
  url,
  options = {},
}: UseAxiosProps<T>): UseAxiosResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [loading, setLoading] = useState<string | undefined | null>();

  const fetchData = useCallback(async () => {
    try {
      setLoading('trwa ładowanie danych');
      const response = await axios(url, options);
      const { data: responseData } = response;
      setData(responseData);
      setLoading(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<T>;
        if (axiosError.response) {
          console.error(
            'Error:',
            axiosError.response.status,
            axiosError.response.data,
          );
          setError(axiosError);
        } else {
          console.error('Unknown Error:', err);
          setError(axiosError);
        }
      }
    } finally {
      setTimeout(() => {
        if (data || data == null) setLoading(null);
      }, 1000);
    }
  }, [url, options, data]);

  return { data, error, loading, fetchData };
};
